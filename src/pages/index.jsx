import { useCallback, useEffect, useState } from 'react'
import { FolderOpen } from 'lucide-react'
import { Sidebar } from '../components/admin/sidebar'
import { Topbar } from '../components/admin/topbar'
import { UserTable } from '../components/admin/user-table'
import { getUsers } from '../services/api/apiUser'

export function AdminWorkspace() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadUsers = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const data = await getUsers()
      setUsers(Array.isArray(data) ? data : [])
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Unable to load users.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(loadUsers, 0)
    return () => clearTimeout(timer)
  }, [loadUsers])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.08),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <Sidebar />

        <main className="min-w-0 flex-1">
          <Topbar
            title="User Directory"
            subtitle="Admin Workspace"
            actionLabel="Add User"
            actionIcon={FolderOpen}
          />

          <div className="space-y-6 px-4 py-5 lg:px-8 lg:py-8">
            

            <div className="grid gap-6">
              <div className="w-full">
                <UserTable users={users} loading={loading} error={error} onRetry={loadUsers} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminWorkspace

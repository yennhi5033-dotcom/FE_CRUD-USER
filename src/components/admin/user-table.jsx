import {
  MoreHorizontal,
  PencilLine,
  SquareCheckBig,
  Trash2,
  UserRound,
  Eye, RefreshCw,
} from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { DeleteConfirmation } from './delete-confirmation'

function rowTone(user) {
  if (user.highlighted) return 'bg-indigo-50/70'
  return 'bg-white'
}

export function UserTable({ users = [], loading = false, error = '', onRetry }) {
  return (
    <section className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-950">Directory Details</h3>
          <p className="mt-1 text-sm text-slate-500">
            High-density table layout for user administration.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            <SquareCheckBig className="h-4 w-4" />
            Bulk select
          </button>
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[760px] w-full border-collapse text-left">
          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              <th className="w-12 px-4 py-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
              </th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Age</th>
              <th className="px-4 py-3">Created At</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
            {loading ? (
              <tr><td colSpan="6" className="px-4 py-12 text-center text-slate-500">Loading users...</td></tr>
            ) : error ? (
              <tr><td colSpan="6" className="px-4 py-10 text-center"><p className="text-rose-600">{error}</p><button type="button" onClick={onRetry} className="mt-3 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-medium text-white"><RefreshCw className="h-4 w-4" />Retry</button></td></tr>
            ) : users.length === 0 ? (
              <tr><td colSpan="6" className="px-4 py-12 text-center text-slate-500">No users found.</td></tr>
            ) : users.map((user) => (
              <tr
                key={user._id || user.id}
                className={['transition-colors hover:bg-indigo-50/40', rowTone(user)].join(' ')}
              >
                <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    defaultChecked={user.highlighted}
                  />
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                        {user.name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-slate-950">{user.name}</p>
                      <p className="text-xs text-slate-500">{user._id || user.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-slate-500">{user.email}</td>
                <td className="px-4 py-4">{user.age}</td>
                <td className="px-4 py-4 text-slate-500">{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '-'}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                    >
                      <PencilLine className="h-4 w-4" />
                    </button>

                    <Dialog>
                      <DialogTrigger
                        render={
                          <button
                            type="button"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-rose-600 hover:bg-rose-50"
                          />
                        }
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete {user.name}</span>
                      </DialogTrigger>

                      <DialogContent
                        showCloseButton={false}
                        className="max-w-[min(92vw,560px)] overflow-hidden border border-rose-100 bg-white/90 p-0 shadow-[0_24px_80px_rgba(15,23,42,0.18)] backdrop-blur-sm"
                      >
                        <DeleteConfirmation
                          name={user.name}
                          email={user.email}
                          initials={user.initials}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">Showing 1-5 of 1,248 users</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-9 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-500"
          >
            <UserRound className="h-4 w-4" />
            Filters
          </button>
          <button
            type="button"
            className="inline-flex h-9 items-center rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-500"
          >
            Previous
          </button>
          <button
            type="button"
            className="inline-flex h-9 items-center rounded-xl bg-indigo-600 px-3 text-sm font-medium text-white"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

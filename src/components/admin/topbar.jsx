import { Bell, Search, Settings } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { UserFormPreview } from './user-form-preview'

export function Topbar({ title, subtitle, actionLabel, actionIcon: ActionIcon }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="flex flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">
            {subtitle}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
        </div>

        <div className="flex flex-1 flex-wrap items-center justify-end gap-3 lg:max-w-3xl">
          <label className="flex min-w-[240px] flex-1 items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-500 shadow-sm">
            <Search className="h-4 w-4 text-slate-400" />
            <span className="truncate">Search users, emails, or IDs...</span>
          </label>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
          >
            <Bell className="h-4.5 w-4.5" />
          </button>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
          >
            <Settings className="h-4.5 w-4.5" />
          </button>

          <Dialog>
            <DialogTrigger
              render={
                <button
                  type="button"
                  className="inline-flex h-11 items-center gap-2 rounded-2xl bg-indigo-600 px-4 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
                />
              }
            >
              {ActionIcon ? <ActionIcon className="h-4 w-4" /> : null}
              {actionLabel}
            </DialogTrigger>

            <DialogContent
              showCloseButton={false}
              className="max-w-[min(92vw,720px)] overflow-hidden border border-slate-200 bg-white p-0 shadow-[0_24px_80px_rgba(15,23,42,0.18)]"
            >
              <UserFormPreview />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  )
}

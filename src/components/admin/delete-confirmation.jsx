import { AlertTriangle, Trash2 } from 'lucide-react'
import { DialogClose, DialogTitle } from '../ui/dialog'

export function DeleteConfirmation({
  name = 'Alex Chen',
  email = 'achen88@domain.net',
  initials = 'AC',
}) {
  return (
    <div className="p-0">
      <div className="h-1 w-full bg-rose-600" />

      <div className="px-6 py-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-600">
                Destructive Action
              </p>
              <DialogTitle className="mt-1 text-xl font-semibold tracking-tight text-slate-950">
                Delete User
              </DialogTitle>
            </div>
          </div>

          <DialogClose
            render={
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
                aria-label="Close dialog"
              />
            }
          >
            ×
          </DialogClose>
        </div>

        <p className="text-sm leading-6 text-slate-600">
          Permanently remove <span className="font-semibold text-slate-950">{name}</span> from the
          directory. This dialog is static and ready to be wired to confirmation logic.
        </p>

        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700">
            {initials}
          </div>
          <div>
            <p className="text-sm font-medium text-slate-950">{name}</p>
            <p className="text-sm text-slate-500">{email}</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          <span className="inline-flex items-center gap-2">
            <Trash2 className="h-4 w-4" />
            This action cannot be undone.
          </span>
        </div>

        <div className="mt-5 flex justify-end gap-3 border-t border-slate-200 pt-4">
          <DialogClose
            render={
              <button
                type="button"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
              />
            }
          >
            Cancel
          </DialogClose>
          <button
            type="button"
            className="rounded-2xl bg-rose-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-rose-700"
          >
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
  )
}

import { AlertTriangle, CircleCheckBig, Plus, X } from 'lucide-react'
import { formFields } from '../../data/mockUsers'
import { DialogClose, DialogTitle } from '../ui/dialog'

export function UserFormPreview() {
  return (
    <div className="p-0">
      <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
            Create User
          </p>
          <DialogTitle className="mt-1 text-xl font-semibold tracking-tight text-slate-950">
            Create New User
          </DialogTitle>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Modal-style form preview, built as pure layout with validation states.
          </p>
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
          <X className="h-4 w-4" />
        </DialogClose>
      </div>

      <div className="px-6 py-5">
        <div className="space-y-4">
          {formFields.map((field) => (
            <div key={field.label} className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                defaultValue={field.state === 'error' ? 'invalid-email-format' : ''}
                className={[
                  'w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:ring-4',
                  field.state === 'error'
                    ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-100'
                    : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100',
                ].join(' ')}
              />
              {field.helperText ? (
                <p className="flex items-center gap-2 text-sm text-rose-600">
                  <AlertTriangle className="h-4 w-4" />
                  {field.helperText}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          <div className="flex items-center gap-2">
            <CircleCheckBig className="h-4.5 w-4.5" />
            <span>User will be created successfully once logic is wired.</span>
          </div>
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
            className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
          >
            <Plus className="h-4 w-4" />
            Save User
          </button>
        </div>
      </div>
    </div>
  )
}

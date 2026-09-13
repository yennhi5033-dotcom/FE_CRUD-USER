export function StatusBadge({ children, tone = 'slate' }) {
  const styles = {
    active: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100',
    invited: 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100',
    pending: 'bg-amber-50 text-amber-700 ring-1 ring-amber-100',
    delete: 'bg-rose-50 text-rose-700 ring-1 ring-rose-100',
    slate: 'bg-slate-100 text-slate-600 ring-1 ring-slate-200',
  }

  return (
    <span
      className={[
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold',
        styles[tone] ?? styles.slate,
      ].join(' ')}
    >
      {children}
    </span>
  )
}

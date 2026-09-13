import { ArrowUpRight, CalendarDays, Mail, Sparkles, Users } from 'lucide-react'

const iconMap = {
  users: Users,
  sparkles: Sparkles,
  mail: Mail,
  calendar: CalendarDays,
}

const accentMap = {
  indigo: {
    badge: 'bg-indigo-50 text-indigo-600',
    edge: 'border-t-indigo-500',
  },
  emerald: {
    badge: 'bg-emerald-50 text-emerald-600',
    edge: 'border-t-emerald-500',
  },
  slate: {
    badge: 'bg-slate-100 text-slate-600',
    edge: 'border-t-slate-400',
  },
  violet: {
    badge: 'bg-violet-50 text-violet-600',
    edge: 'border-t-violet-500',
  },
}

export function SummaryCard({ label, value, note, icon, accent = 'indigo' }) {
  const Icon = iconMap[icon] ?? Users
  const tone = accentMap[accent] ?? accentMap.indigo

  return (
    <article
      className={[
        'rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_4px_12px_rgba(15,23,42,0.03)] transition-transform hover:-translate-y-0.5',
        tone.edge,
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            {value}
          </p>
        </div>
        <div className={['rounded-2xl p-2.5', tone.badge].join(' ')}>
          <Icon className="h-4.5 w-4.5" />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
        <ArrowUpRight className="h-4 w-4 text-emerald-600" />
        {note}
      </div>
    </article>
  )
}

import { BrandMark } from './brand-mark'

const navItems = [
  { label: 'User', active: true, short: 'U' },
  // { label: 'Analytics', short: 'A' },
  // { label: 'Access Control', short: 'C' },
  // { label: 'Deletion Queue', short: 'Q' },
]

export function Sidebar() {
  return (
    <aside className="hidden w-[260px] shrink-0 border-r border-slate-200 bg-white/95 px-4 py-5 backdrop-blur md:sticky md:top-0 md:flex md:h-screen md:flex-col">
      <div className="flex items-center gap-3 px-1">
        <BrandMark />
        <div>
          <h1 className="text-sm font-semibold tracking-tight text-slate-950">
            UserFlow API
          </h1>
          <p className="text-xs text-slate-500">Slate & Indigo Console</p>
        </div>
      </div>

      <div className="mt-8 space-y-1">
        {navItems.map((item) => {
          return (
            <button
              key={item.label}
              type="button"
              className={[
                'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors',
                item.active
                  ? 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
              ].join(' ')}
            >
              <span
                className={[
                  'inline-flex h-4.5 w-4.5 items-center justify-center rounded-full text-[10px] font-semibold',
                  item.active
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-500',
                ].join(' ')}
              >
                {item.short}
              </span>
              <span>{item.label}</span>
            </button>
          )
        })}
      </div>
    </aside>
  )
}

import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo'
import Icon from './Icon'
import { platform, solutions, engage } from '../data/content'

const menus = [
  { label: 'Platform', base: '/platform', items: platform },
  { label: 'AppzetOS', to: '/appzetos' },
  { label: 'Solutions', base: '/solutions', items: solutions },
  { label: 'Partners', to: '/partners' },
  { label: 'Engage', base: '/engage', items: engage },
  {
    label: 'Resources',
    base: '/resources',
    items: [
      { slug: 'events', name: 'Events & Webinars', icon: 'CalendarDays' },
      { slug: 'blog', name: 'Appzet Blog', icon: 'Newspaper' },
    ],
  },
  { label: 'About Us', to: '/about' },
]

function Dropdown({ m }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-600">
        {m.label} <ChevronDown size={14} />
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-80 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
        <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
          {m.items.map((i) => (
            <Link key={i.slug} to={`${m.base}/${i.slug}`} className="flex items-center gap-3 rounded-xl p-3 hover:bg-brand-50">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-100 text-brand-600">
                <Icon name={i.icon} size={18} />
              </span>
              <span className="text-sm font-semibold text-slate-800">{i.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/"><Logo /></Link>
        <nav className="hidden items-center lg:flex">
          {menus.map((m) =>
            m.items ? (
              <Dropdown key={m.label} m={m} />
            ) : (
              <NavLink key={m.label} to={m.to} className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-600">
                {m.label}
              </NavLink>
            ),
          )}
        </nav>
        <div className="hidden lg:block">
          <Link to="/connect" className="btn-primary !py-2">CONNECT</Link>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-slate-100 bg-white lg:hidden">
          <div className="container-x space-y-4 py-4">
            {menus.map((m) => (
              <div key={m.label}>
                {m.to ? (
                  <Link onClick={() => setOpen(false)} to={m.to} className="font-semibold text-brand-900">{m.label}</Link>
                ) : (
                  <>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-500">{m.label}</p>
                    <div className="mt-1 grid gap-1">
                      {m.items.map((i) => (
                        <Link key={i.slug} onClick={() => setOpen(false)} to={`${m.base}/${i.slug}`} className="py-1 text-sm text-slate-700">{i.name}</Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
            <Link to="/connect" onClick={() => setOpen(false)} className="btn-primary w-full">CONNECT</Link>
          </div>
        </div>
      )}
    </header>
  )
}

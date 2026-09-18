import { Link } from 'react-router-dom'
import { Layers, Link2, RefreshCw, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import Icon from '../components/Icon'

const values = [
  [Layers, 'Multi-layer Context', 'Menu, stock, billing, staff and tax knowledge connected across every layer of an outlet.'],
  [Link2, 'Accurate Relationships', 'Every dish links to recipes, ingredients, suppliers, prices and GST, backed by evidence.'],
  [RefreshCw, 'Living Knowledge', 'The business map updates itself with each bill, purchase and stock movement.'],
]

const stages = [
  ['Understand', 'Business Graph', 'Reconciles scattered menus, Excel sheets, supplier bills and POS exports into one connected view with an evidence trail.', 'Brain'],
  ['Visualise', 'Outlet Map', 'See your whole operation across dimensions: menu, kitchen, counter, inventory, staff, tax, customers and channels.', 'Network'],
  ['Assess', 'Impact Preview', 'Before you change a price, tax rate or recipe, see the exact effect on margin, stock, offers and reports.', 'Radar'],
  ['Act', 'Four Machines', 'Purpose-built engines to Open, Change, Run and Scale your outlets.', 'Cog'],
  ['Govern', 'Command Centre', 'Orchestrate every change through phases and approval gates, with AI assisting at each step.', 'ShieldCheck'],
]

const dimensions = ['Menu & Catalog', 'Recipes & Costing', 'Kitchen Flow', 'Billing & Payments', 'Inventory & Batches', 'Suppliers & Purchase', 'Staff & Shifts', 'Customers & Loyalty', 'Tax & Compliance', 'Delivery Channels', 'Hardware & Devices', 'Finance & Ledgers']

const machines = [
  ['Open', 'Launch a new outlet or shop reusing your existing menu, price lists and settings.', 'DoorOpen'],
  ['Change', 'Roll out menu, price or GST changes across outlets with test bills as evidence.', 'GitCompare'],
  ['Run', 'Trace an alert, such as a stock variance or failed settlement, to its cause and fix in minutes.', 'Activity'],
  ['Scale', 'Onboard franchisees and new cities, and migrate from legacy POS with behaviour verified.', 'TrendingUp'],
]

const phases = ['Plan', 'Setup', 'Build', 'Validate', 'Operate']
const personas = ['Owner', 'Outlet Manager', 'Chef', 'Cashier', 'Purchase Head', 'Accountant', 'Franchise Lead']

export default function AppzetOS() {
  return (
    <>
      <PageHero
        eyebrow="AppzetOS"
        title="Outlet Operating System of Connected Knowledge"
        sub="The AI-native operating system for restaurants, billing counters and retail shops. AI acts on your real business, not on a guess."
      >
        <Link to="/connect" className="btn-primary">Book a Briefing</Link>
      </PageHero>

      <section className="container-x py-12 sm:py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map(([I, t, d]) => (
            <div key={t} className="card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-100 text-brand-600"><I size={22} /></span>
              <h3 className="mt-4 font-bold text-brand-900">{t}</h3>
              <p className="mt-2 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-50 py-12 sm:py-16">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Traditional POS &amp; ERP</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-700">Data: structured and queryable</h3>
              <p className="mt-3 text-slate-600">Tables of bills and items. You can look things up, but the system does not understand how they relate.</p>
            </div>
            <div className="rounded-3xl bg-brand-900 p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-300">AppzetOS</p>
              <h3 className="mt-2 text-2xl font-bold">Knowledge: connected and computable</h3>
              <p className="mt-3 text-brand-100">Dishes, ingredients, prices, staff and taxes are linked, so AI can reason and act safely. It works alongside your existing POS, agents and tools.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-14 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="h2">The 5-stage cognitive engine</h2>
          <p className="mt-3 text-slate-600">From scattered data to governed action.</p>
        </div>
        <ol className="mt-12 space-y-4">
          {stages.map(([t, sub, d, ic], i) => (
            <li key={t} className="card flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent text-white"><Icon name={ic} size={26} /></span>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">Stage {i + 1} · {sub}</p>
                <h3 className="text-xl font-bold text-brand-900">{t}</h3>
                <p className="mt-1 text-slate-600">{d}</p>
              </div>
              {i < stages.length - 1 && <ArrowRight className="hidden text-brand-300 sm:block" />}
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-brand-50 py-12 sm:py-16">
        <div className="container-x">
          <h2 className="h2 text-center">One ingestion. Twelve dimensions.</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {dimensions.map((d) => <span key={d} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm">{d}</span>)}
          </div>
        </div>
      </section>

      <section className="container-x py-14 sm:py-20">
        <h2 className="h2 text-center">Four Machines to act</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {machines.map(([t, d, ic]) => (
            <div key={t} className="card">
              <Icon name={ic} className="text-brand-600" size={28} />
              <h3 className="mt-4 text-lg font-bold text-brand-900">{t}</h3>
              <p className="mt-2 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-900 py-12 sm:py-16 text-white">
        <div className="container-x text-center">
          <h2 className="text-3xl font-extrabold">Command Centre lifecycle</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {phases.map((p, i) => (
              <span key={p} className="flex items-center gap-2">
                <span className="rounded-full bg-brand-700 px-5 py-2 font-semibold">{p}</span>
                {i < phases.length - 1 && <span className="rounded bg-accent px-2 py-0.5 text-xs font-bold">GATE</span>}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm text-brand-200">
            {personas.map((p) => <span key={p} className="rounded-full border border-brand-600 px-3 py-1">{p}</span>)}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

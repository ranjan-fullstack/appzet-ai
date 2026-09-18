import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Lock, KeyRound, Trash2, Ban, Server } from 'lucide-react'
import Icon from '../components/Icon'
import CTA from '../components/CTA'
import { platform, disciplines, journey, apps, awards, solutions } from '../data/content'

const outcomes = ['Better Decisions', 'Faster Billing', 'Lower Wastage', 'AI That Understands Your Business', 'Sustainable Growth']

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="container-x grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="eyebrow">AI for Restaurants · Billing · Retail</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-brand-900 sm:text-6xl">
            Engineering <span className="grad-text">Business AI</span> for Restaurants &amp; Retail
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            AppzetAi transforms daily operations through automated agents, faster billing and trusted, outlet-scale outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/connect" className="btn-primary">See it in action <ArrowRight size={16} /></Link>
            <Link to="/solutions/restaurant-management" className="btn-ghost">Explore real results</Link>
          </div>
        </div>
        {/* Orbital diagram */}
        <div className="relative mx-auto grid aspect-square w-full max-w-md place-items-center">
          <div className="absolute inset-0 rounded-full border border-dashed border-brand-200" />
          <div className="absolute inset-10 rounded-full border border-dashed border-brand-300" />
          <div className="grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent text-center text-sm font-bold text-white shadow-2xl shadow-brand-500/40">
            Business<br />Impact
          </div>
          {[['Receipt', 'top-0 left-1/2 -translate-x-1/2', 'Billing'], ['UtensilsCrossed', 'right-0 top-1/2 -translate-y-1/2', 'Kitchen'], ['Store', 'bottom-0 left-1/2 -translate-x-1/2', 'Retail'], ['BarChart3', 'left-0 top-1/2 -translate-y-1/2', 'Insights']].map(([ic, pos, lb]) => (
            <div key={lb} className={`absolute ${pos} flex flex-col items-center gap-1`}>
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-brand-100 bg-white text-brand-600 shadow-lg"><Icon name={ic} size={24} /></span>
              <span className="text-xs font-semibold text-brand-800">{lb}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border-y border-brand-100 bg-white">
        <div className="container-x flex flex-wrap justify-center gap-x-8 gap-y-2 py-5 text-sm font-semibold text-brand-800">
          {outcomes.map((o) => <span key={o} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{o}</span>)}
        </div>
        <div className="container-x flex flex-wrap justify-center gap-3 pb-6 text-xs font-medium text-slate-500">
          {['ISO 27001', 'SOC 2', 'GST Ready', 'FSSAI Aware', 'GDPR / DPDP'].map((c) => <span key={c} className="rounded-full border border-slate-200 px-3 py-1">{c}</span>)}
        </div>
      </div>
    </section>
  )
}

function World() {
  return (
    <section className="container-x py-14 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">The World of AppzetAi</p>
        <h2 className="h2 mt-2">The knowledge your business already has, turned into intelligence it can trust.</h2>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-brand-900 p-8 text-white">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-300">Appzet Platform</p>
          <h3 className="mt-2 text-2xl font-bold">Reimagine how operations run</h3>
          <ul className="mt-5 space-y-3 text-brand-100">
            <li><b className="text-white">Connected Knowledge</b> — a menu, recipe &amp; SKU graph</li>
            <li><b className="text-white">Contextual AI</b> — reasoning grounded in your live data</li>
            <li><b className="text-white">Agent Orchestration</b> — governed multi-agent workflows</li>
            <li><b className="text-white">Governed &amp; Secured</b> — built-in controls and audit</li>
          </ul>
          <Link to="/platform/menu-knowledge-garden" className="btn-light mt-6">Learn More</Link>
        </div>
        <div className="rounded-3xl border border-brand-100 bg-brand-50 p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-500">AppzetOS</p>
          <h3 className="mt-2 text-2xl font-bold text-brand-900">Reimagine how outlets are run</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {['Understand', 'Visualise', 'Assess', 'Act', 'Govern'].map((s) => <span key={s} className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm">{s}</span>)}
          </div>
          <p className="mt-5 text-slate-600">The Outlet Operating System of Connected Knowledge: an AI-native system that understands your menu, stock, billing and staff, previews the impact of every change, and governs how it happens.</p>
          <Link to="/appzetos" className="btn-primary mt-6">Learn More</Link>
        </div>
      </div>
    </section>
  )
}

function Accuracy() {
  return (
    <section className="bg-brand-50 py-14 sm:py-20">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Accuracy is the key</p>
          <h2 className="h2 mt-2">A wrong bill has zero value. So does a wrong forecast.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[['Knowledge', 'Connected menu, stock and pricing — governed, cited, current.'], ['Reasoning', 'The engine that derives answers from your system knowledge.'], ['Context', 'Live signals for this outlet, this customer, this moment.']].map(([t, d]) => (
            <div key={t} className="card text-center"><h3 className="text-xl font-bold text-brand-800">{t}</h3><p className="mt-2 text-slate-600">{d}</p></div>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-white p-6 text-center shadow-sm">
          <p className="text-lg font-bold text-brand-900">Knowledge × Reasoning × Context</p>
          <p className="mt-1 font-mono text-slate-600">0.85 × 0.95 × 0.90 = <b className="text-accent">0.727</b></p>
          <p className="mt-3 text-sm text-slate-500">Each factor can look strong alone — but they multiply. Only a connected, governed, accurate system clears the bar.</p>
        </div>
      </div>
    </section>
  )
}

function Disciplines() {
  return (
    <section className="container-x py-14 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="h2">One Platform. Eight AI Disciplines.</h2>
        <p className="mt-3 text-slate-600">Everything a restaurant or shop needs to run AI in production — not just in a demo.</p>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {disciplines.map(([t, d, ic], i) => (
          <div key={t} className="card">
            <div className="flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-100 text-brand-600"><Icon name={ic} size={22} /></span>
              <span className="text-xs font-bold text-slate-300">0{i + 1}</span>
            </div>
            <h3 className="mt-4 font-bold text-brand-900">{t}</h3>
            <p className="mt-2 text-sm text-slate-600">{d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function How() {
  return (
    <section className="bg-brand-900 py-14 sm:py-20 text-white">
      <div className="container-x">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">How it works</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {journey.map(([t, d], i) => (
            <div key={t} className="rounded-2xl border border-brand-700 bg-brand-800/50 p-6">
              <span className="text-3xl font-extrabold text-accent">{i + 1}</span>
              <h3 className="mt-2 font-bold">{t}</h3>
              <p className="mt-1 text-sm text-brand-200">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Apps() {
  return (
    <section className="container-x py-14 sm:py-20">
      <h2 className="h2 text-center">AI Applications for All</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {apps.map(([n, k, d, ic, to]) => (
          <div key={n} className="card flex flex-col">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent text-white"><Icon name={ic} size={24} /></span>
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-500">{k}</p>
            <h3 className="text-xl font-bold text-brand-900">{n}</h3>
            <p className="mt-2 flex-1 text-slate-600">{d}</p>
            <Link to={to} className="mt-4 inline-flex items-center gap-1 font-semibold text-brand-600">Explore <ArrowRight size={16} /></Link>
          </div>
        ))}
      </div>
    </section>
  )
}

function Suites() {
  return (
    <section className="bg-brand-50 py-14 sm:py-20">
      <div className="container-x">
        <h2 className="h2 text-center">AI Solution Suites</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.slice(0, 8).map((s) => (
            <Link key={s.slug} to={`/solutions/${s.slug}`} className="card flex items-center gap-3 !p-4">
              <Icon name={s.icon} className="text-brand-600" size={22} /><span className="font-semibold text-brand-900">{s.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Security() {
  const items = [[ShieldCheck, 'SOC 2 & ISO 27001 aligned controls'], [KeyRound, 'GDPR & DPDP compliant'], [Server, 'You own your data'], [Trash2, 'Zero data retention on request'], [Ban, 'No model training on your data'], [Lock, 'AES-256 at rest, TLS 1.3 in transit']]
  return (
    <section className="container-x py-14 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="h2">Enterprise-grade AI security &amp; governance</h2>
        <p className="mt-3 text-slate-600">Built from the ground up for the security, compliance and auditability that money-handling businesses need.</p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(([I, t]) => <div key={t} className="card flex items-center gap-3 !p-4"><I className="text-brand-600" size={22} /><span className="text-sm font-medium">{t}</span></div>)}
      </div>
    </section>
  )
}

function Awards() {
  return (
    <section className="bg-brand-50 py-14 sm:py-20">
      <div className="container-x">
        <h2 className="h2 text-center">Our Awards and Recognition</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map(([t, w, d]) => (
            <div key={t} className="card"><p className="text-xs font-bold text-accent">{w}</p><h3 className="mt-2 font-bold text-brand-900">{t}</h3><p className="mt-2 text-sm text-slate-600">{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero /><World /><Accuracy /><Disciplines /><How /><Apps /><Suites />
      <section className="container-x py-10">
        <div className="grid gap-4 md:grid-cols-5">
          {platform.map((p) => (
            <Link key={p.slug} to={`/platform/${p.slug}`} className="card !p-4 text-center">
              <Icon name={p.icon} className="mx-auto text-brand-600" size={26} />
              <p className="mt-2 text-sm font-semibold text-brand-900">{p.name}</p>
            </Link>
          ))}
        </div>
      </section>
      <Security /><Awards /><CTA />
    </>
  )
}

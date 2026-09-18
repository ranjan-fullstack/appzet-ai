import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CalendarDays, MapPin, Handshake, Target, Eye } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import Icon from '../components/Icon'
import { resources, posts, partnerBenefits } from '../data/content'

export function Partners() {
  return (
    <>
      <PageHero eyebrow="Partners" title="Your vision, our platform. Let's build together." sub="A composable ecosystem for POS resellers, ISVs, consultants, hardware vendors and franchise consultants.">
        <Link to="/connect" className="btn-primary">Partner with Us</Link>
      </PageHero>
      <section className="container-x py-12 sm:py-16">
        <h2 className="h2 text-center">Why partner with AppzetAi?</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {partnerBenefits.map(([t, d]) => <div key={t} className="card"><h3 className="font-bold text-brand-900">{t}</h3><p className="mt-2 text-slate-600">{d}</p></div>)}
        </div>
      </section>
      <section className="bg-brand-50 py-12 sm:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="h2">Partner benefits</h2>
            <ul className="mt-6 space-y-3 text-slate-700">
              {['Academy access for your team', 'Listing on the AppzetAi partner directory', 'Dedicated partner success manager', 'Team training and certification'].map((b) => <li key={b} className="flex gap-2"><Handshake className="text-brand-500" size={20} />{b}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="h2">Partnership opportunities</h2>
            <ul className="mt-6 space-y-3 text-slate-700">
              {['Co-creation & go-to-market acceleration', 'Joint engagements leveraging existing customers', 'Platform acceleration through integration'].map((b) => <li key={b} className="rounded-xl bg-white p-4 shadow-sm">{b}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}

export function Resource() {
  const { slug } = useParams()
  const ev = resources[0]
  if (slug === 'events') {
    return (
      <>
        <PageHero eyebrow="Resources" title={ev.name} sub={ev.tagline} />
        <section className="container-x max-w-3xl py-12 sm:py-16">
          <div className="space-y-4">
            {ev.events.map(([d, k, t]) => (
              <div key={t} className="card flex items-center gap-5">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-brand-100 text-center text-sm font-bold text-brand-700"><CalendarDays className="mx-auto" size={18} />{d}</div>
                <div><p className="text-xs font-bold uppercase text-accent">{k}</p><h3 className="font-bold text-brand-900">{t}</h3></div>
              </div>
            ))}
          </div>
        </section>
        <CTA />
      </>
    )
  }
  return (
    <>
      <PageHero eyebrow="Resources" title="Appzet Blog" sub="Guides, playbooks and product news for restaurant and retail operators." />
      <section className="container-x py-12 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(([tag, t, d]) => (
            <article key={t} className="card">
              <div className="h-36 rounded-xl bg-gradient-to-br from-brand-200 to-brand-50" />
              <p className="mt-4 text-xs font-bold uppercase text-accent">{tag}</p>
              <h3 className="mt-1 text-lg font-bold text-brand-900">{t}</h3>
              <p className="mt-2 text-sm text-slate-600">{d}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  )
}

export function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="We build AI that keeps restaurants and shops running." sub="AppzetAi started at a billing counter: too many manual bills, too much wastage, too little time. We built the platform we wished we had." />
      <section className="container-x grid gap-6 py-12 sm:py-16 md:grid-cols-2">
        <div className="card"><Target className="text-brand-600" /><h3 className="mt-3 text-xl font-bold text-brand-900">Our mission</h3><p className="mt-2 text-slate-600">Give every restaurant, café and shop the operating intelligence that only large chains could afford.</p></div>
        <div className="card"><Eye className="text-brand-600" /><h3 className="mt-3 text-xl font-bold text-brand-900">Our vision</h3><p className="mt-2 text-slate-600">A world where owners spend time on guests and craft — and AI handles the rest, transparently.</p></div>
      </section>
      <section className="bg-brand-50 py-14">
        <div className="container-x grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {[['10K+', 'Outlets'], ['50M+', 'Bills processed'], ['120+', 'Cities'], ['99.9%', 'Uptime']].map(([n, l]) => <div key={l}><div className="text-4xl font-extrabold text-brand-700">{n}</div><div className="text-slate-600">{l}</div></div>)}
        </div>
      </section>
      <CTA />
    </>
  )
}

export function Connect() {
  const [sent, setSent] = useState(false)
  const field = 'w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200'
  return (
    <>
      <PageHero eyebrow="Connect" title="Book a personalised demo" sub="Tell us about your business and we will get back within one working day." />
      <section className="container-x max-w-xl pb-20">
        {sent ? (
          <div className="card text-center"><h3 className="text-xl font-bold text-brand-900">Thank you!</h3><p className="mt-2 text-slate-600">Our team will contact you shortly.</p></div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="card space-y-4">
            <input required placeholder="Full name" className={field} />
            <input required type="email" placeholder="Work email" className={field} />
            <input required type="tel" placeholder="Phone (WhatsApp)" className={field} />
            <input placeholder="Business name" className={field} />
            <select className={field} defaultValue="">
              <option value="" disabled>Business type</option>
              <option>Restaurant / Café</option><option>Cloud kitchen / QSR</option><option>Retail shop</option><option>Supermarket / Grocery</option><option>Other</option>
            </select>
            <textarea rows="3" placeholder="Number of outlets and requirements" className={field} />
            <button className="btn-primary w-full">Book a demo</button>
          </form>
        )}
      </section>
    </>
  )
}

export function Legal() {
  const { slug } = useParams()
  const t = { disclaimer: 'Disclaimer', privacy: 'Online Privacy', terms: 'Terms of Service' }[slug] || 'Legal'
  return (
    <>
      <PageHero title={t} />
      <section className="container-x max-w-3xl pb-20 text-slate-600">
        <p>This is placeholder legal copy for AppzetAi. Replace it with text approved by your legal counsel before launch.</p>
      </section>
    </>
  )
}

export function NotFound() {
  return <PageHero title="Page not found" sub="The page you are looking for does not exist."><Link to="/" className="btn-primary">Go home</Link></PageHero>
}

import { Link, useParams, Navigate } from 'react-router-dom'
import { Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import Icon from '../components/Icon'
import { platform, solutions, engage } from '../data/content'

const sets = {
  platform: { list: platform, label: 'Platform' },
  solutions: { list: solutions, label: 'AI Solution Suite' },
  engage: { list: engage, label: 'Engage' },
}

export default function Detail({ section }) {
  const { slug } = useParams()
  const { list, label } = sets[section]
  const item = list.find((i) => i.slug === slug)
  if (!item) return <Navigate to="/" replace />
  const others = list.filter((i) => i.slug !== slug)

  return (
    <>
      <PageHero eyebrow={label} title={item.name} sub={item.tagline}>
        <Link to="/connect" className="btn-primary">Book a demo</Link>
      </PageHero>

      <section className="container-x py-12 sm:py-16">
        <p className="mx-auto max-w-3xl text-center text-lg text-slate-600">{item.intro}</p>
        {item.metrics && (
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4 text-center">
            {item.metrics.map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-brand-50 p-5">
                <div className="text-3xl font-extrabold text-brand-700">{n}</div>
                <div className="text-sm text-slate-600">{l}</div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {item.features.map(([t, d]) => (
            <div key={t} className="card">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-100 text-brand-600"><Check size={18} /></span>
              <h3 className="mt-4 font-bold text-brand-900">{t}</h3>
              <p className="mt-1 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-50 py-14">
        <div className="container-x">
          <h2 className="text-center text-xl font-bold text-brand-900">Explore more</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {others.map((o) => (
              <Link key={o.slug} to={`/${section}/${o.slug}`} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm hover:shadow">
                <Icon name={o.icon} size={16} /> {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}

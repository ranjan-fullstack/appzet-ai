import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="container-x my-12 sm:my-20">
      <div className="rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 p-7 text-center text-white sm:p-16">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to upgrade your business with AI?</h2>
        <p className="mt-2 text-lg text-brand-100">One operating model. Every outlet. Every bill.</p>
        <p className="mx-auto mt-4 max-w-2xl text-brand-100">
          See AppzetAi in action. Book a personalised demo for your restaurant, billing counter or retail shop.
        </p>
        <Link to="/connect" className="btn-light mt-8">Book a demo</Link>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-4 text-sm">
          {[['8', 'AI disciplines'], ['1', 'Governed platform'], ['GST', 'Ready & secure']].map(([a, b]) => (
            <div key={b}>
              <div className="text-3xl font-extrabold">{a}</div>
              <div className="text-brand-200">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

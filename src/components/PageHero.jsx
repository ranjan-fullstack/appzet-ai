export default function PageHero({ eyebrow, title, sub, children }) {
  return (
    <section className="bg-gradient-to-b from-brand-50 to-white">
      <div className="container-x py-16 text-center sm:py-24">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl">{title}</h1>
        {sub && <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">{sub}</p>}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  )
}

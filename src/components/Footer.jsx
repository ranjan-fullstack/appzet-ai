import { Link } from 'react-router-dom'
import Logo from './Logo'
import { platform, solutions, engage } from '../data/content'

const Col = ({ title, base, items }) => (
  <div>
    <h4 className="mb-3 text-sm font-bold text-white">{title}</h4>
    <ul className="space-y-2 text-sm text-brand-200">
      {items.map((i) => (
        <li key={i.slug}><Link className="hover:text-white" to={`${base}/${i.slug}`}>{i.name}</Link></li>
      ))}
    </ul>
  </div>
)

export default function Footer() {
  return (
    <footer className="bg-brand-900 pt-16 text-brand-200">
      <div className="container-x grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <Logo light />
          <p className="mt-4 text-sm">AI for restaurants, billing and retail — one governed platform.</p>
        </div>
        <div>
          <Col title="Platform" base="/platform" items={platform} />
          <Link className="mt-2 block text-sm text-brand-200 hover:text-white" to="/appzetos">AppzetOS</Link>
        </div>
        <Col title="Solutions" base="/solutions" items={solutions} />
        <Col title="Engage" base="/engage" items={engage} />
        <div>
          <h4 className="mb-3 text-sm font-bold text-white">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-white" to="/resources/events">Events &amp; Webinars</Link></li>
            <li><Link className="hover:text-white" to="/resources/blog">Appzet Blog</Link></li>
            <li><Link className="hover:text-white" to="/partners">Partners</Link></li>
            <li><Link className="hover:text-white" to="/about">About Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-12 flex flex-col justify-between gap-3 border-t border-brand-700 py-6 text-xs sm:flex-row">
        <p>© AppzetAi, 2026. All rights reserved.</p>
        <div className="flex gap-5">
          <Link to="/legal/disclaimer">Disclaimer</Link>
          <Link to="/legal/privacy">Online Privacy</Link>
          <Link to="/legal/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

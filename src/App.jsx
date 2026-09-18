import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import Home from './pages/Home'
import Detail from './pages/Detail'
import AppzetOS from './pages/AppzetOS'
import { Partners, Resource, About, Connect, Legal, NotFound } from './pages/Misc'

export default function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform/:slug" element={<Detail section="platform" />} />
          <Route path="/solutions/:slug" element={<Detail section="solutions" />} />
          <Route path="/engage/:slug" element={<Detail section="engage" />} />
          <Route path="/resources/:slug" element={<Resource />} />
          <Route path="/appzetos" element={<AppzetOS />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/legal/:slug" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

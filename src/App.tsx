import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { SmoothScroll } from './animations/SmoothScroll'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { StickyCallBar } from './components/StickyCallBar'
import { Home } from './pages/Home'
import { TextPage } from './pages/TextPage'
import { NotFound } from './pages/NotFound'
import { imprint, privacy } from './content/hu'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adatvedelem" element={<TextPage {...privacy} />} />
        <Route path="/impresszum" element={<TextPage {...imprint} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <StickyCallBar />
    </SmoothScroll>
  )
}

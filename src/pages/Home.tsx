import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../sections/Hero'
import { TrustStrip } from '../sections/TrustStrip'
import { Products } from '../sections/Products'
import { About } from '../sections/About'
import { Process } from '../sections/Process'
import { References } from '../sections/References'
import { Faq } from '../sections/Faq'
import { Contact } from '../sections/Contact'

export function Home() {
  const { hash } = useLocation()

  // Arriving from another route with /#section: scroll once the sections are mounted.
  useEffect(() => {
    if (!hash) return
    const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 50)
    return () => clearTimeout(t)
  }, [hash])

  return (
    <>
      <Hero />
      <TrustStrip />
      <Products />
      <About />
      <Process />
      <References />
      <Faq />
      <Contact />
    </>
  )
}

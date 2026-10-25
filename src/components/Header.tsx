import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnchorLink } from './AnchorLink'
import { company, nav } from '../content/hu'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-graphite/90 py-3 shadow-lg backdrop-blur'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <Link to="/" className="font-display text-xl font-bold tracking-wide text-paper">
          Redőny<span className="text-brass">centrum</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-paper/80 lg:flex">
          {nav.map((n) => (
            <AnchorLink key={n.href} href={n.href} className="transition hover:text-brass">
              {n.label}
            </AnchorLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={company.phoneHref}
            className="hidden text-sm font-medium text-paper sm:block"
          >
            {company.phone}
          </a>
          <AnchorLink
            href="/#kapcsolat"
            className="hidden rounded-sm bg-brass px-4 py-2 text-sm font-medium text-graphite transition hover:bg-paper sm:block"
          >
            Ajánlatkérés
          </AnchorLink>
          <button
            aria-label="Menü"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`h-0.5 w-6 bg-paper transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-paper transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-paper transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-3 flex max-w-6xl flex-col gap-1 px-5 pb-3 text-paper lg:hidden">
          {nav.map((n) => (
            <AnchorLink
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="border-b border-paper/10 py-3"
            >
              {n.label}
            </AnchorLink>
          ))}
        </nav>
      )}
    </header>
  )
}

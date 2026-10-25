import type { MouseEvent, ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLenis } from '../animations/SmoothScroll'

/** Link to "/#section": same-page hash scrolls (via Lenis when active); otherwise navigates home first. */
export function AnchorLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string
  className?: string
  children: ReactNode
  onClick?: () => void
}) {
  const lenis = useLenis()
  const { pathname } = useLocation()
  const hash = href.slice(href.indexOf('#'))

  const handle = (e: MouseEvent) => {
    onClick?.()
    if (pathname !== '/') return // router handles navigation; Home scrolls on mount
    e.preventDefault()
    const target = document.querySelector(hash)
    if (!target) return
    history.replaceState(null, '', href)
    if (lenis) lenis.scrollTo(target as HTMLElement, { offset: -72 })
    else target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Link to={href} className={className} onClick={handle}>
      {children}
    </Link>
  )
}

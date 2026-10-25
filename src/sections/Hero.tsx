import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, prefersReducedMotion } from '../animations/gsap'
import { AnchorLink } from '../components/AnchorLink'
import { hero } from '../content/hu'
import bg from '../assets/louver_blinds.jpg'

/** Pinned hero: the shutter rolls up as the visitor scrolls, revealing the photo. */
export function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=130%',
            pin: true,
            scrub: 0.6,
          },
        })
        tl.to('[data-hero-copy]', { opacity: 0, y: -40, duration: 0.25 }, 0)
          .to('[data-shutter]', { yPercent: -100, duration: 1, ease: 'power1.inOut' }, 0.1)
          .fromTo('[data-hero-bg]', { scale: 1.2 }, { scale: 1, duration: 1.1 }, 0)
          .fromTo('[data-hero-caption]', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.3 }, 0.8)
          .to('[data-hint]', { opacity: 0, duration: 0.1 }, 0)
      })
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('[data-shutter]', { yPercent: -100 })
        gsap.set('[data-hero-caption]', { opacity: 1 })
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} className="relative h-screen overflow-hidden bg-graphite">
      <img
        data-hero-bg
        src={bg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-transparent to-transparent" />
      <div
        data-hero-caption
        className="absolute inset-x-0 bottom-24 mx-auto max-w-6xl px-5 opacity-0 md:bottom-20"
      >
        <h2 className="max-w-2xl font-display text-3xl text-paper md:text-5xl">{hero.revealTitle}</h2>
      </div>

      <div className="absolute inset-0 z-10 overflow-hidden">
        <div data-shutter className="slats relative h-full w-full will-change-transform">
          <div
            data-hero-copy
            className="absolute inset-0 flex items-center px-5"
          >
            <div className="mx-auto w-full max-w-6xl">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brass">Redőnycentrum Kft · Győr</p>
              <h1 className="max-w-3xl text-4xl leading-tight text-paper md:text-6xl">{hero.title}</h1>
              <p className="mt-6 max-w-xl text-lg text-paper/75">{hero.lead}</p>
              <AnchorLink
                href="/#kapcsolat"
                className="mt-9 inline-block rounded-sm bg-brass px-7 py-3.5 font-medium text-graphite transition hover:bg-paper"
              >
                {hero.cta}
              </AnchorLink>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-3 bg-brass-dark shadow-[0_6px_16px_rgba(0,0,0,0.5)]" />
        </div>
      </div>

      <p
        data-hint
        className="absolute inset-x-0 bottom-8 z-20 hidden text-center text-xs uppercase tracking-[0.3em] text-paper/60 md:block"
      >
        Görgessen ↓
      </p>
    </section>
  )
}

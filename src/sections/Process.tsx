import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, prefersReducedMotion } from '../animations/gsap'
import { Section } from '../components/Section'
import { process } from '../content/hu'

export function Process() {
  const root = useRef<HTMLDivElement>(null)

  // The vertical line draws itself as the section scrolls through the viewport.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.fromTo(
        '[data-line]',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top 70%', end: 'bottom 70%', scrub: true },
        },
      )
    },
    { scope: root },
  )

  return (
    <Section id="folyamat" eyebrow="Hogyan dolgozunk" title="Négy lépés a kész megoldásig.">
      <div ref={root} className="relative pl-10">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-graphite/15" />
        <div data-line className="absolute left-3 top-2 bottom-2 w-px origin-top bg-brass" />
        <ol className="space-y-12">
          {process.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-10 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-graphite text-xs text-paper">
                {i + 1}
              </span>
              <h3 className="text-2xl">{s.title}</h3>
              <p className="mt-1 text-slate">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

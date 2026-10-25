import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap'

export function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el || prefersReducedMotion()) return
      const state = { n: 0 }
      el.textContent = '0' + suffix
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () =>
          gsap.to(state, {
            n: value,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = Math.round(state.n).toLocaleString('hu-HU') + suffix
            },
          }),
      })
    },
    { scope: ref },
  )

  return (
    <span ref={ref}>
      {value.toLocaleString('hu-HU')}
      {suffix}
    </span>
  )
}

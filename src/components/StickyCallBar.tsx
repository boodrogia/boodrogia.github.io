import { company } from '../content/hu'
import { AnchorLink } from './AnchorLink'

/** Mobile-only bottom bar: always-reachable call + quote actions. */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-paper/10 bg-graphite text-center text-sm font-medium md:hidden">
      <a href={company.phoneHref} className="py-3.5 text-paper">Hívjon most</a>
      <AnchorLink href="/#kapcsolat" className="bg-brass py-3.5 text-graphite">Ajánlatkérés</AnchorLink>
    </div>
  )
}

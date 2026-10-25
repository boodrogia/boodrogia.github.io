import { useState, type FormEvent } from 'react'
import { Section } from '../components/Section'
import { company, products } from '../content/hu'

const field =
  'w-full rounded-sm border border-paper/20 bg-paper/5 px-4 py-3 text-paper placeholder:text-paper/40 focus:border-brass focus:outline-none'

export function Contact() {
  const [sent, setSent] = useState(false)

  // Static site: the form opens the visitor's mail client. A Lambda/SES backend can replace this later.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const body = `Név: ${d.get('name')}\nTelefon: ${d.get('phone')}\nTermék: ${d.get('product')}\n\n${d.get('message')}`
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent('Ajánlatkérés')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <Section id="kapcsolat" eyebrow="Kapcsolat" title="Kérjen ingyenes felmérést." dark>
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4 text-paper/80">
          <p><a href={company.phoneHref} className="font-display text-3xl text-paper hover:text-brass">{company.phone}</a></p>
          <p><a href={`mailto:${company.email}`} className="hover:text-brass">{company.email}</a></p>
          <p>{company.address}</p>
          <p>{company.hours}</p>
          <p className="text-sm text-paper/50">Szolgáltatási terület: Győr és környéke. {/* TODO map */}</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <input name="name" required placeholder="Név" className={field} />
          <input name="phone" required type="tel" placeholder="Telefonszám" className={field} />
          <select name="product" className={field} defaultValue="">
            <option value="" className="text-graphite">Érdeklődés tárgya</option>
            {products.map((p) => (
              <option key={p.slug} value={p.title} className="text-graphite">{p.title}</option>
            ))}
          </select>
          <textarea name="message" rows={4} placeholder="Üzenet" className={field} />
          <label className="flex items-start gap-3 text-xs text-paper/60">
            <input type="checkbox" required className="mt-0.5" />
            Elfogadom az adatvédelmi tájékoztatót.
          </label>
          <button className="rounded-sm bg-brass px-7 py-3.5 font-medium text-graphite transition hover:bg-paper">
            Ajánlatkérés küldése
          </button>
          {sent && <p className="text-sm text-brass">Megnyitottuk az e-mail programját.</p>}
        </form>
      </div>
    </Section>
  )
}

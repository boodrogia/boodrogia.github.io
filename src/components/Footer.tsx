import { Link } from 'react-router-dom'
import { company } from '../content/hu'

export function Footer() {
  return (
    <footer className="bg-graphite px-5 pb-24 pt-14 text-sm text-paper/70 md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-lg text-paper">{company.name}</p>
          <p className="mt-2">{company.address}</p>
          <p>{company.taxId}</p>
          <p>{company.regId}</p>
        </div>
        <div>
          <p className="text-paper">Elérhetőség</p>
          <p className="mt-2">
            <a href={company.phoneHref} className="hover:text-brass">{company.phone}</a>
          </p>
          <p>
            <a href={`mailto:${company.email}`} className="hover:text-brass">{company.email}</a>
          </p>
          <p>{company.hours}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-paper">Tudnivalók</p>
          <Link to="/adatvedelem" className="hover:text-brass">Adatvédelem</Link>
          <Link to="/impresszum" className="hover:text-brass">Impresszum</Link>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-paper/10 pt-6 text-xs">
        © {new Date().getFullYear()} {company.name} · Győr
      </p>
    </footer>
  )
}

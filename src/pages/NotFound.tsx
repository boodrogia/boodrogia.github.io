import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-36">
      <h1 className="text-4xl">Az oldal nem található</h1>
      <Link to="/" className="mt-6 inline-block text-brass-dark underline">Vissza a főoldalra</Link>
    </main>
  )
}

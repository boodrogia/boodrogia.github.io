export function TextPage({ title, text }: { title: string; text: string }) {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-36">
      <h1 className="text-4xl">{title}</h1>
      <p className="mt-6 text-slate">{text}</p>
    </main>
  )
}

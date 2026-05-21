export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-stone-50 text-stone-950">
      <section className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="w-full max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber-700">
            Day 2 starter project
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Church website and digital admin system
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            This is the first working version of the project. Over the next
            days, we will turn this into a public church website and a private
            system for church family records and donations.
          </p>
        </div>
      </section>
      <footer className="border-t border-stone-200 px-6 py-5 text-sm text-stone-600">
        Built with Next.js, TypeScript, and Tailwind CSS.
      </footer>
    </main>
  );
}

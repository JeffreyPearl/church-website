import Image from "next/image";

const navItems = [
  "Home",
  "About",
  "Services",
  "Events",
  "Sermons",
  "Contact",
  "Give",
];

const serviceTimes = [
  {
    title: "Sunday Tamil Worship",
    time: "9:00 AM",
    note: "Main sanctuary",
  },
  {
    title: "English Service",
    time: "11:00 AM",
    note: "Family worship",
  },
  {
    title: "Friday Prayer",
    time: "7:00 PM",
    note: "Prayer and testimony",
  },
];

const quickLinks = [
  "Online Giving",
  "Weekly Bulletin",
  "Prayer Request",
  "Church Calendar",
];

const events = [
  {
    date: "June 02",
    title: "Tamil Bible Study",
    detail: "A weekly gathering for Scripture, prayer, and fellowship.",
  },
  {
    date: "June 09",
    title: "Youth Fellowship",
    detail: "Worship, discussion, and community for young people.",
  },
  {
    date: "June 16",
    title: "Family Sunday",
    detail: "A special service focused on families and thanksgiving.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#241f1a]">
      <header className="border-b border-[#e5d8c7] bg-[#fffaf3]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a621d]">
              தமிழ் திருச்சபை
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-wide text-[#2b2117]">
              Tamil Grace Church
            </h1>
          </div>
          <nav
            aria-label="Primary navigation"
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold uppercase tracking-wide text-[#4f4032]"
          >
            {navItems.map((item) => (
              <a key={item} href="#" className="transition hover:text-[#9a621d]">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-[#241f1a]">
        <Image
          src="/tamil-church-hero.png"
          alt="Warm church sanctuary interior"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#20160f] via-[#20160f]/80 to-[#20160f]/20" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-20">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f2c779]">
              Welcome to worship
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">
              A Tamil church family growing in faith, worship, and service.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f8ead9]">
              Join us for Tamil worship, prayer, Bible teaching, and fellowship
              rooted in Christ. அனைவரும் வருக.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="bg-[#c9872f] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#a96f25]"
              >
                Service Times
              </a>
              <a
                href="#contact"
                className="border border-white/70 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-[#241f1a]"
              >
                Visit Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-y border-[#e5d8c7] bg-[#fffaf3] px-5 py-12"
      >
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {serviceTimes.map((service) => (
            <article
              key={service.title}
              className="border-l-4 border-[#c9872f] bg-white p-6 shadow-sm"
            >
              <p className="text-3xl font-bold text-[#2b2117]">
                {service.time}
              </p>
              <h3 className="mt-3 text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-sm text-[#6c5a49]">{service.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#2f4a3a] px-5 py-8 text-white">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="border border-white/25 px-5 py-4 text-center text-sm font-bold uppercase tracking-wide transition hover:bg-white hover:text-[#2f4a3a]"
            >
              {link}
            </a>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a621d]">
              Our Parish Life
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Worship in Tamil. Grow as one family. Serve our community.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5f5145]">
              Tamil Grace Church is being shaped as a spiritual home for Tamil
              families, students, children, and elders. This website will help
              our church share announcements, sermons, service timings, and
              later manage family records and donations securely.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <article className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Faith Formation</h3>
              <p className="mt-3 leading-7 text-[#6c5a49]">
                Bible study, Sunday school, youth fellowship, and discipleship
                groups for every stage of life.
              </p>
            </article>
            <article className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Pastoral Care</h3>
              <p className="mt-3 leading-7 text-[#6c5a49]">
                Prayer support, home visits, family guidance, and care for
                members during important seasons.
              </p>
            </article>
            <article className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Tamil Worship</h3>
              <p className="mt-3 leading-7 text-[#6c5a49]">
                Songs, Scripture, and teaching that help the congregation
                worship in heart language.
              </p>
            </article>
            <article className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Digital Records</h3>
              <p className="mt-3 leading-7 text-[#6c5a49]">
                A private admin system will help manage families, members,
                offerings, events, and reports.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf3] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a621d]">
                Upcoming Events
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                This Month at Church
              </h2>
            </div>
            <a
              href="#"
              className="text-sm font-bold uppercase tracking-wide text-[#8f5c20] hover:text-[#5f3d15]"
            >
              View Calendar
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {events.map((event) => (
              <article key={event.title} className="bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-[#9a621d]">
                  {event.date}
                </p>
                <h3 className="mt-4 text-xl font-bold">{event.title}</h3>
                <p className="mt-3 leading-7 text-[#6c5a49]">{event.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a621d]">
              Sermons and Resources
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Teaching that strengthens the church through the week.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5f5145]">
              As we build the site, this section will hold sermon recordings,
              Bible study notes, church bulletins, and ministry resources for
              members who cannot always attend in person.
            </p>
          </div>
          <div className="bg-[#2b2117] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f2c779]">
              Latest Message
            </p>
            <h3 className="mt-4 text-2xl font-bold">
              Walking faithfully as the family of God
            </h3>
            <p className="mt-4 leading-7 text-[#f8ead9]">
              Speaker, date, Bible passage, and video link will be added when
              sermon content is ready.
            </p>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#20160f] px-5 py-14 text-[#f8ead9]">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f2c779]">
              Tamil Grace Church
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              வாருங்கள், ஒன்றாக ஆராதிப்போம்.
            </h2>
            <p className="mt-4 max-w-xl leading-7">
              Address, phone number, email, and pastor details will be added
              once you share the official church information.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white">Quick Links</h3>
            <div className="mt-4 grid gap-2 text-sm">
              {navItems.slice(1).map((item) => (
                <a key={item} href="#" className="hover:text-[#f2c779]">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white">Contact</h3>
            <div className="mt-4 space-y-2 text-sm">
              <p>Phone: To be added</p>
              <p>Email: To be added</p>
              <p>Location: To be added</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">About Me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I’m a full‑stack engineer passionate about building fast, accessible, and beautiful products. I value clean architecture,
            thoughtful UX, and measurable impact. My philosophy: small details compound into exceptional experiences.
          </p>
          <p className="mt-3 text-gray-600">
            Outside of code, I enjoy mentoring, reading about systems design, and exploring new developer tools.
          </p>

          <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-lg border border-gray-200 p-4 bg-white shadow-sm">
              <dt className="text-xs uppercase tracking-wider text-gray-500">Location</dt>
              <dd className="mt-1 text-sm font-medium text-gray-900">Jakarta, Indonesia</dd>
            </div>
            <div className="rounded-lg border border-gray-200 p-4 bg-white shadow-sm">
              <dt className="text-xs uppercase tracking-wider text-gray-500">Email</dt>
              <dd className="mt-1 text-sm font-medium text-blue-600">
                <a href="mailto:raka.dev@example.com">raka.dev@example.com</a>
              </dd>
            </div>
            <div className="rounded-lg border border-gray-200 p-4 bg-white shadow-sm">
              <dt className="text-xs uppercase tracking-wider text-gray-500">Status</dt>
              <dd className="mt-1 text-sm font-medium text-gray-900">Open for New Opportunities</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Experience & Education</h3>
          <ol className="mt-6 relative border-s border-gray-200">
            <li className="mb-8 ms-6">
              <span className="absolute -start-3.5 mt-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs">1</span>
              <h4 className="text-base font-semibold">Senior Full‑Stack Engineer — Tech Solutions</h4>
              <p className="text-sm text-gray-600">2022 — Present</p>
              <p className="mt-2 text-sm text-gray-700">Led a team of 4 to ship a SaaS analytics product used by 10k+ users with 99.9% uptime.</p>
            </li>
            <li className="mb-8 ms-6">
              <span className="absolute -start-3.5 mt-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs">2</span>
              <h4 className="text-base font-semibold">Full‑Stack Developer — Startup XYZ</h4>
              <p className="text-sm text-gray-600">2020 — 2022</p>
              <p className="mt-2 text-sm text-gray-700">Built e‑commerce microservices, improved page speed to 95+, and reduced infra costs by 30%.</p>
            </li>
            <li className="ms-6">
              <span className="absolute -start-3.5 mt-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs">3</span>
              <h4 className="text-base font-semibold">B.Sc. in Computer Science — Tech University</h4>
              <p className="text-sm text-gray-600">2016 — 2020</p>
              <p className="mt-2 text-sm text-gray-700">Graduated with honors, specialized in distributed systems and HCI.</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

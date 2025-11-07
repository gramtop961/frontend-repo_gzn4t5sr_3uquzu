const projects = [
  {
    name: 'SaaS Analytics Dashboard',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop',
    description:
      'A high-performance analytics platform with real-time charts, role-based access, and exportable reports.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    demo: 'https://example.com',
    code: 'https://github.com/yourusername/saas-analytics',
  },
  {
    name: 'E-commerce Microservices',
    image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop',
    description:
      'Modular e-commerce with cart, payments, and order tracking. Designed for scale and observability.',
    stack: ['Next.js', 'FastAPI', 'MongoDB', 'Docker'],
    demo: 'https://example.com',
    code: 'https://github.com/yourusername/ecommerce-microservices',
  },
  {
    name: 'Dev Portfolio Starter',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    description:
      'Open-source portfolio template optimized for performance, SEO, and accessibility.',
    stack: ['Vite', 'React', 'Framer Motion'],
    demo: 'https://example.com',
    code: 'https://github.com/yourusername/portfolio-starter',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Selected Projects</h2>
          <p className="mt-2 text-gray-600">A few highlights showcasing product thinking and engineering craft.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.name} className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} thumbnail`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <li key={t} className="text-xs rounded-full bg-gray-100 text-gray-700 px-2.5 py-1">{t}</li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Live Demo
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

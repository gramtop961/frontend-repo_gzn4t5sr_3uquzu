import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get In Touch</h2>
          <p className="mt-2 text-gray-600">Want to collaborate or have a project in mind? Let's talk.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <form className="md:col-span-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input id="name" name="name" type="text" required className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input id="email" name="email" type="email" required className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={5} required className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600" placeholder="Tell me about your project..." />
            </div>
            <div className="mt-6">
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                <Mail className="h-4 w-4 mr-2" /> Send Message
              </button>
            </div>
          </form>

          <aside className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Prefer email?</h3>
            <p className="mt-2 text-sm text-gray-600">Reach me directly and I’ll reply within 24 hours.</p>
            <a href="mailto:raka.dev@example.com" className="mt-4 inline-flex items-center text-blue-600 font-medium hover:underline">raka.dev@example.com</a>
            <div className="mt-6 h-px bg-gray-100" />
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-900">Find me on</p>
              <div className="mt-3 flex items-center gap-3">
                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 text-gray-700" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 text-gray-700" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

import { Download, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Primary">
        <a href="#home" className="flex items-center gap-2 text-gray-900 font-semibold tracking-tight">
          <span className="inline-block h-3 w-3 rounded-full bg-blue-600" aria-hidden="true" />
          <span className="text-base sm:text-lg">Raka Pratama</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className="text-gray-600 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded">Home</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded">About</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded">Skills</a>
          <a href="#portfolio" className="text-gray-600 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded">Portfolio</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 text-gray-700"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 text-gray-700"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}

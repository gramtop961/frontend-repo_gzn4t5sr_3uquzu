import Spline from '@splinetool/react-spline';

export default function Hero() {
  const handleViewWork = (e) => {
    e.preventDefault();
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="max-w-2xl py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Full-Stack Developer</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Hi, I'm Raka. I build fast, delightful digital products.
          </h1>
          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            I craft scalable web apps with a focus on performance, accessibility, and clean DX. Let's turn ideas into impactful software.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              onClick={handleViewWork}
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={handleContact}
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

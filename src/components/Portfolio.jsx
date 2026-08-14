import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Highlights from './Highlights';
import profileImage from '../assets/images/profile.png';

const navigation = [
  { label: 'Projects', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

const tickerItems = [
  'PHP / Laravel',
  'Node.js / Express',
  'MySQL / SQL',
  'REST APIs',
  'Kotlin / Android',
  'Flutter / Dart',
];

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updatePointer = (event) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', updatePointer, { passive: true });

    const targets = Array.from(
      document.querySelectorAll('main > section, .glass-panel, .glass-panel-soft')
    );

    targets.forEach((target) => target.classList.add('reveal-target'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px' }
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      window.removeEventListener('pointermove', updatePointer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-slate-200">
      <div className="ambient-layer" aria-hidden="true">
        <span className="ambient-orb ambient-orb-one" />
        <span className="ambient-orb ambient-orb-two" />
        <span className="ambient-orb ambient-orb-three" />
      </div>
      <div className="grid-overlay" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />

      <div className="site-content">
        <header className="sticky top-0 z-50 border-b border-white/5 bg-black/72 backdrop-blur-2xl">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
            <a href="#home" className="text-sm font-semibold tracking-wide text-slate-100">
              Valentino Hariyanto
            </a>

            <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link text-sm font-medium text-slate-400 transition hover:text-slate-100"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="rounded-xl border border-white/10 bg-white/[0.035] p-2 text-slate-300 transition hover:bg-white/[0.06] md:hidden"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>

          {menuOpen && (
            <nav className="border-t border-white/5 bg-black/95 px-5 py-4 backdrop-blur-2xl md:hidden" aria-label="Mobile navigation">
              <div className="mx-auto flex max-w-6xl flex-col gap-1">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/[0.035]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </header>

        <main>
          <section id="home" className="relative py-20 sm:py-28 lg:py-32">
            <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
              <div>
                <div className="hero-kicker mb-5 text-xs font-semibold tracking-wide text-sky-300/85">
                  <span className="hero-kicker-dot" />
                  Software Engineer / Full-Stack Developer
                </div>

                <h1 className="hero-title max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                  Building software that solves real problems.
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                  I work mainly with PHP/Laravel, JavaScript/Node.js, SQL, Kotlin/Android, and Flutter. I also use AI coding tools when they help me move faster, especially while working with newer stacks.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.075] px-4 py-2.5 text-sm font-semibold text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.11]"
                  >
                    View projects <ArrowUpRight size={16} />
                  </a>
                  <a
                    href="mailto:hariyantovalentino@gmail.com"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-2.5 text-sm font-semibold text-slate-300 transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.05]"
                  >
                    Contact me <Mail size={16} />
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
                  <span>East Java, Indonesia</span>
                  <a href="https://github.com/valentinohrynt" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-slate-200">
                    <Github size={16} /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/valentinohariyanto" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-slate-200">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </div>
              </div>

              <div className="profile-stage mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
                <div className="glass-panel profile-frame rounded-[2rem] p-3">
                  <img src={profileImage} alt="Valentino Hariyanto" className="aspect-square w-full rounded-[1.45rem] object-cover opacity-95" />
                </div>
                <span className="floating-chip floating-chip-one">Laravel · PHP</span>
                <span className="floating-chip floating-chip-two">Node.js · API</span>
                <span className="floating-chip floating-chip-three">Kotlin · Flutter</span>
              </div>
            </div>
          </section>

          <div className="marquee-shell" aria-hidden="true">
            <div className="marquee-track">
              {[...tickerItems, ...tickerItems].map((item, index) => (
                <span key={`${item}-${index}`} className="marquee-item">{item}</span>
              ))}
            </div>
          </div>

          <section className="border-b border-white/5 py-16 sm:py-20">
            <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-sm font-medium tracking-wide text-sky-300/85">About</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100">About me</h2>
              </div>
              <div className="space-y-5 text-base leading-7 text-slate-400">
                <p>
                  I am a software developer with experience in backend, web, and mobile development. I like working on applications that involve APIs, databases, authentication, business workflows, and third-party integrations.
                </p>
                <p>
                  Some of my newer projects were built with substantial AI coding assistance. I use those projects to explore new tools and ship ideas faster, while keeping a clear distinction between technologies I know well and technologies I have mainly encountered through project work.
                </p>
              </div>
            </div>
          </section>

          <Projects />
          <Experience />
          <Skills />
          <Highlights />

          <section id="contact" className="border-t border-white/5 py-20 sm:py-24">
            <div className="mx-auto max-w-6xl px-5 sm:px-6">
              <div className="glass-panel max-w-4xl rounded-3xl p-7 sm:p-10">
                <p className="text-sm font-medium tracking-wide text-sky-300/85">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Open to software engineering and full-stack opportunities.</h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
                  Email or LinkedIn is the easiest way to reach me. My GitHub contains public coursework, experiments, and selected project code.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="mailto:hariyantovalentino@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/[0.1]">
                    <Mail size={16} /> Email
                  </a>
                  <a href="https://www.linkedin.com/in/valentinohariyanto" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:-translate-y-0.5 hover:bg-white/[0.05]">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a href="https://github.com/valentinohrynt" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:-translate-y-0.5 hover:bg-white/[0.05]">
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/5 py-7 text-sm text-slate-600">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>© {new Date().getFullYear()} Valentino Hariyanto</p>
            <p>East Java, Indonesia</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;

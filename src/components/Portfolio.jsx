import React, { useState } from 'react';
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
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <a href="#home" className="font-semibold tracking-tight text-slate-950">
            Valentino Hariyanto
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-200 bg-white px-5 py-4 md:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:py-32">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Software Engineer · Full-Stack Developer</p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-6xl lg:text-7xl">
                I build practical software products across web, backend, and mobile.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                My strongest foundations are PHP/Laravel, JavaScript/Node.js, SQL, Kotlin/Android, and Flutter. I also use AI-assisted development workflows to prototype, integrate, test, and iterate on products across stacks I am still learning.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
                  View selected work <ArrowUpRight size={16} />
                </a>
                <a href="mailto:hariyantovalentino@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
                  Contact me <Mail size={16} />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
                <span>East Java, Indonesia</span>
                <a href="https://github.com/valentinohrynt" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-slate-950">
                  <Github size={16} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/valentinohariyanto" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-slate-950">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                <img src={profileImage} alt="Valentino Hariyanto" className="aspect-square w-full rounded-2xl object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">About</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Product-minded, technically curious, and transparent about how I build.</h2>
            </div>
            <div className="space-y-5 text-base leading-7 text-slate-600">
              <p>
                I am a software developer with experience across backend, web, and mobile development. I enjoy turning operational or product requirements into working applications, especially when the problem involves data flows, APIs, authentication, business processes, or integrations.
              </p>
              <p>
                For newer projects such as ManusiaIn, Invte, Kudos, and StockHub, I have used AI coding tools heavily to accelerate implementation. I do not treat the technologies generated by those workflows as automatic expertise: I separate my core skills from project exposure and focus on the parts I can own—requirements, product decisions, integration, testing, debugging, and iteration.
              </p>
              <p>
                My current goal is to keep strengthening the fundamentals behind the systems I build while using AI as a development accelerator rather than as a substitute for understanding.
              </p>
            </div>
          </div>
        </section>

        <Projects />
        <Experience />
        <Skills />
        <Highlights />

        <section id="contact" className="border-t border-slate-200 bg-slate-950 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Open to software engineering and full-stack opportunities.</h2>
              <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
                The best way to reach me is by email or LinkedIn. You can also browse my public repositories for coursework, experiments, and selected project code.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:hariyantovalentino@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-100">
                  <Mail size={16} /> hariyantovalentino@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/valentinohariyanto" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-900">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="https://github.com/valentinohrynt" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-900">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-7 text-sm text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Valentino Hariyanto.</p>
          <p>Built as a curated portfolio, not an automated GitHub mirror.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

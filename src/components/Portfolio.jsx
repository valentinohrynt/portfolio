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
  { label: 'Projects', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-slate-200">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <a href="#home" className="text-sm font-semibold tracking-wide text-slate-100">
            Valentino Hariyanto
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-400 transition hover:text-slate-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="rounded-lg border border-white/10 bg-white/[0.035] p-2 text-slate-300 md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/5 bg-black/95 px-5 py-4 backdrop-blur-xl md:hidden" aria-label="Mobile navigation">
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
        <section id="home" className="py-20 sm:py-28 lg:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <p className="mb-5 text-sm font-medium tracking-wide text-sky-300/85">
                Software Engineer / Full-Stack Developer
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.035em] text-slate-100 sm:text-6xl lg:text-7xl">
                Building software that solves real problems.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                I work mainly with PHP/Laravel, JavaScript/Node.js, SQL, Kotlin/Android, and Flutter. I also use AI coding tools when they help me move faster, especially while working with newer stacks.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/[0.1]"
                >
                  View projects <ArrowUpRight size={16} />
                </a>
                <a
                  href="mailto:hariyantovalentino@gmail.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.05]"
                >
                  Contact me <Mail size={16} />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
                <span>East Java, Indonesia</span>
                <a href="https://github.com/valentinohrynt" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-slate-200">
                  <Github size={16} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/valentinohariyanto" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-slate-200">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
              <div className="glass-panel rounded-3xl p-3">
                <img src={profileImage} alt="Valentino Hariyanto" className="aspect-square w-full rounded-2xl object-cover opacity-95" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 py-16 sm:py-20">
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
                <a href="mailto:hariyantovalentino@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-2.5 text-sm font-semibold text-slate-100 hover:bg-white/[0.1]">
                  <Mail size={16} /> Email
                </a>
                <a href="https://www.linkedin.com/in/valentinohariyanto" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-2.5 text-sm font-semibold text-slate-300 hover:bg-white/[0.05]">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="https://github.com/valentinohrynt" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-2.5 text-sm font-semibold text-slate-300 hover:bg-white/[0.05]">
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
  );
};

export default Portfolio;

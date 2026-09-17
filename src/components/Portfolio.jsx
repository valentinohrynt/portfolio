import React, { useEffect, useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ArrowUpRight,
  Terminal,
  Code2,
} from 'lucide-react';
import Capabilities from './Capabilities';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Highlights from './Highlights';
import profileImage from '../assets/images/profile.png';

const copy = {
  id: {
    navigation: [
      { label: 'Tentang', href: '#about' },
      { label: 'Kapabilitas', href: '#capabilities' },
      { label: 'Proyek', href: '#work' },
      { label: 'Pengalaman', href: '#experience' },
      { label: 'Toolchain', href: '#skills' },
      { label: 'Kredensial', href: '#credentials' },
      { label: 'Kontak', href: '#contact' },
    ],
    badge: 'SOFTWARE ENGINEER · FULL-STACK DEVELOPER',
    heroTitle: 'Membangun aplikasi web tangguh, REST API skalabel, dan sistem mobile.',
    heroText:
      'Fokus utama pada ekosistem PHP/Laravel, Node.js, basis data relasional (MySQL & PostgreSQL), serta Android modern (Kotlin & Flutter). Mengutamakan integritas data, efisiensi alur backend, dan kode yang teruji dari tahap desain hingga deployment.',
    viewProjects: 'Jelajahi Proyek',
    contactMe: 'Hubungi Langsung',
    location: 'Jawa Timur, Indonesia',
    aboutLabel: 'LATAR BELAKANG & PENDEKATAN',
    aboutTitle: 'Filosofi Kerja & Prinsip Pengembangan',
    aboutOne:
      'Saya mahasiswa Sistem Informasi di Universitas Jember dengan fokus rekayasa perangkat lunak. Melalui pengalaman PKL sebagai Software Engineer di PT Telkom Indonesia, saya dipercaya merancang basis data relasional, modul backend Laravel 12, REST API, serta antarmuka web dan integrasi microservice untuk dua sistem enterprise operasional.',
    aboutTwo:
      'Saya memandang rekayasa perangkat lunak bukan sekadar merangkai kode, melainkan menyelesaikan masalah bisnis secara pragmatis: struktur data yang konsisten, validasi input yang ketat, arsitektur yang tidak over-engineered, dan kode yang mudah dipelihara oleh tim.',
    techFocus: 'Fokus Rekayasa Utama',
    contactLabel: 'KOLABORASI & INISIATIF',
    contactTitle: 'Membuka Diskusi untuk Peluang Software Engineering',
    contactText:
      'Terbuka untuk posisi Software Engineer, Backend Developer, ataupun Full-Stack Engineer. Kontak langsung melalui email atau LinkedIn untuk mendiskusikan peluang proyek dan tantangan teknis.',
    email: 'Kirim Email',
    footerLocation: 'Jember, Jawa Timur, Indonesia',
    menuLabel: 'Menu Navigasi',
  },
  en: {
    navigation: [
      { label: 'About', href: '#about' },
      { label: 'Capabilities', href: '#capabilities' },
      { label: 'Projects', href: '#work' },
      { label: 'Experience', href: '#experience' },
      { label: 'Toolchain', href: '#skills' },
      { label: 'Credentials', href: '#credentials' },
      { label: 'Contact', href: '#contact' },
    ],
    badge: 'SOFTWARE ENGINEER · FULL-STACK DEVELOPER',
    heroTitle: 'Engineering resilient web applications, scalable APIs, and mobile systems.',
    heroText:
      'Core focus on PHP/Laravel, Node.js, relational databases (MySQL & PostgreSQL), and modern mobile engineering (Kotlin & Flutter). Committed to data integrity, clean architecture, and disciplined delivery from design to deployment.',
    viewProjects: 'Explore Projects',
    contactMe: 'Get in Touch',
    location: 'East Java, Indonesia',
    aboutLabel: 'BACKGROUND & PHILOSOPHY',
    aboutTitle: 'Engineering Principles & Working Approach',
    aboutOne:
      'I am an Information Systems undergraduate at the University of Jember specialized in software engineering. During my internship as a Software Engineer at PT Telkom Indonesia, I designed relational databases, developed Laravel 12 backend services, built web interfaces, and integrated analytics microservices for two operational enterprise platforms.',
    aboutTwo:
      'I view software development as pragmatic engineering: prioritizing clean data structures, rigorous input boundaries, unbloated architecture, and maintainable code over unnecessary complexity.',
    techFocus: 'Key Engineering Focus',
    contactLabel: 'COLLABORATION & OPPORTUNITIES',
    contactTitle: 'Open to Software Engineering & Developer Positions',
    contactText:
      'Actively exploring opportunities in Software Engineering, Backend, and Full-Stack development. Feel free to connect via email or LinkedIn to discuss technical opportunities.',
    email: 'Send Email',
    footerLocation: 'Jember, East Java, Indonesia',
    menuLabel: 'Toggle Menu',
  },
};

const metrics = [
  { label: 'Core Backend', value: 'Laravel / PHP / Node' },
  { label: 'Databases', value: 'MySQL / PostgreSQL' },
  { label: 'Mobile Native', value: 'Kotlin / Flutter' },
  { label: 'Undergraduate GPA', value: '3.92 / 4.00' },
];

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'id';
    return window.localStorage.getItem('portfolio-language') || 'id';
  });

  const text = copy[language];

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem('portfolio-language', nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language === 'id' ? 'id' : 'en';
  }, [language]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 antialiased bg-blueprint-grid">
      {/* Top Engineering Nav */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <a href="#about" className="flex items-center gap-2 text-slate-100 group">
            <div className="h-7 w-7 rounded bg-slate-900 border border-slate-700 flex items-center justify-center font-mono text-xs font-bold text-brand-400 group-hover:border-brand-500 transition">
              VH
            </div>
            <span className="text-sm font-bold tracking-tight text-slate-200">
              Valentino Hariyanto
            </span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex items-center gap-6" aria-label="Primary navigation">
              {text.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-medium text-slate-400 transition hover:text-slate-100"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex rounded-md border border-slate-800 bg-slate-900 p-0.5" aria-label="Language">
              {['id', 'en'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => changeLanguage(item)}
                  className={`rounded px-2 py-0.5 font-mono text-[11px] font-semibold transition ${
                    language === item ? 'bg-brand-500/20 text-brand-400 border border-brand-500/30' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="flex rounded-md border border-slate-800 bg-slate-900 p-0.5">
              {['id', 'en'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => changeLanguage(item)}
                  className={`rounded px-2 py-0.5 font-mono text-[11px] font-semibold transition ${
                    language === item ? 'bg-brand-500/20 text-brand-400' : 'text-slate-400'
                  }`}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:text-slate-200"
              aria-label={text.menuLabel}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <nav className="border-t border-slate-800 bg-slate-950 px-5 py-3 md:hidden">
            <div className="flex flex-col gap-1">
              {text.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-xs font-medium text-slate-300 hover:bg-slate-900"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="about" className="py-16 sm:py-24 border-b border-slate-800/80">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-md border border-slate-800 bg-slate-900/90 font-mono text-xs text-brand-400">
                  <Terminal size={13} />
                  <span>{text.badge}</span>
                </div>

                <h1 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-5xl lg:text-5xl leading-tight">
                  {text.heroTitle}
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-400 max-w-2xl">
                  {text.heroText}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs font-bold text-white transition shadow-sm"
                  >
                    {text.viewProjects} <ArrowUpRight size={15} />
                  </a>
                  <a
                    href="mailto:hariyantovalentino@gmail.com"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-850 px-5 py-2.5 text-xs font-semibold text-slate-200 transition"
                  >
                    <Mail size={15} /> {text.contactMe}
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-5 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    {text.location}
                  </span>
                  <a
                    href="https://github.com/valentinohrynt"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition"
                  >
                    <Github size={15} /> github.com/valentinohrynt
                  </a>
                  <a
                    href="https://www.linkedin.com/in/valentinohariyanto"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition"
                  >
                    <Linkedin size={15} /> in/valentinohariyanto
                  </a>
                </div>
              </div>

              {/* Developer Profile Card */}
              <div className="lg:justify-self-end w-full max-w-sm">
                <div className="eng-card rounded-2xl p-5 border border-slate-800 bg-slate-900/90 shadow-xl">
                  <div className="relative mb-5 overflow-hidden rounded-xl border border-slate-800">
                    <img
                      src={profileImage}
                      alt="Valentino Hariyanto"
                      className="aspect-square w-full object-cover grayscale contrast-125 hover:grayscale-0 transition duration-300"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 flex items-center justify-between font-mono text-[11px]">
                      <span className="text-slate-300 font-semibold">Valentino Hariyanto</span>
                      <span className="text-brand-400">UNEJ '22</span>
                    </div>
                  </div>

                  <div className="space-y-2 font-mono text-xs">
                    <div className="flex items-center justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Focus</span>
                      <span className="text-slate-200">Backend & Mobile</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Industry Exp</span>
                      <span className="text-slate-200">PT Telkom Indonesia</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-slate-400">Honor</span>
                      <span className="text-brand-400">Bangkit Distinction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 pt-8 border-t border-slate-800/80">
              {metrics.map((m) => (
                <div key={m.label} className="p-3.5 rounded-lg border border-slate-800/90 bg-slate-900/50">
                  <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wide">{m.label}</div>
                  <div className="font-mono text-xs sm:text-sm font-semibold text-slate-200 mt-1">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-16 sm:py-20 border-b border-slate-800/80 bg-slate-950/40">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
                  <span className="font-mono text-xs font-semibold tracking-wider text-brand-400 uppercase">{text.aboutLabel}</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">{text.aboutTitle}</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-400">
                <p>{text.aboutOne}</p>
                <p>{text.aboutTwo}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Modular Sections */}
        <div id="capabilities">
          <Capabilities language={language} />
        </div>
        <Projects language={language} />
        <Experience language={language} />
        <Skills language={language} />
        <Highlights language={language} />

        {/* Contact Terminal Section */}
        <section id="contact" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="eng-card rounded-2xl p-7 sm:p-12 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-md border border-slate-800 bg-slate-900 font-mono text-xs text-brand-400">
                <Code2 size={13} />
                <span>{text.contactLabel}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">{text.contactTitle}</h2>
              <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
                {text.contactText}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:hariyantovalentino@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs font-bold text-white transition shadow-sm"
                >
                  <Mail size={15} /> {text.email}
                </a>
                <a
                  href="https://www.linkedin.com/in/valentinohariyanto"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/90 hover:bg-slate-700 px-5 py-2.5 text-xs font-semibold text-slate-200 transition"
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
                <a
                  href="https://github.com/valentinohrynt"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/90 hover:bg-slate-700 px-5 py-2.5 text-xs font-semibold text-slate-200 transition"
                >
                  <Github size={15} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 bg-slate-950 text-xs font-mono text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Valentino Hariyanto — Software Engineer</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            {text.footerLocation}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

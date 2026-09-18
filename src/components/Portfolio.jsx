import React, { useEffect, useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ArrowUpRight,
} from 'lucide-react';
import Capabilities from './Capabilities';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Highlights from './Highlights';
import profileImage from '../assets/images/profile.png';

const copy = {
  id: {
    nav: [
      { label: 'Tentang', href: '#about' },
      { label: 'Fokus', href: '#capabilities' },
      { label: 'Proyek', href: '#work' },
      { label: 'Pengalaman', href: '#experience' },
      { label: 'Teknologi', href: '#skills' },
      { label: 'Sertifikasi', href: '#credentials' },
      { label: 'Kontak', href: '#contact' },
    ],
    role: 'Software Engineer · Backend & Mobile',
    heroGreeting: 'Halo, saya Valentino.',
    heroDesc:
      'Saya mahasiswa Sistem Informasi Universitas Jember yang terbiasa membangun backend web, REST API, dan aplikasi mobile. Sehari-hari saya banyak berkutat dengan Laravel (PHP), Node.js, MySQL/PostgreSQL, serta Android (Kotlin & Flutter).',
    viewProjects: 'Lihat proyek saya',
    contactMe: 'Hubungi via email',
    aboutTitle: 'Sedikit cerita tentang saya',
    aboutP1:
      'Saya suka ngulik bagaimana sistem di balik layar bekerja, mulai dari perancangan struktur tabel database, validasi input pengguna, sampai alur data yang aman antara backend dan aplikasi klien.',
    aboutP2:
      'Waktu magang sebagai Software Engineer di PT Telkom Indonesia, saya dipercaya membangun dua aplikasi internal operasional (TRACER & VANTAGE). Di sana saya banyak memegang rancangan database MySQL, pembuatan REST API Laravel 12, hingga integrasi tampilan web React dan model Python/Flask.',
    aboutP3:
      'Bagi saya, kode yang baik itu yang rapi, mudah dibaca orang lain di tim, dan menyelesaikan masalah tanpa dibuat-buat rumitnya.',
    contactTitle: 'Tertarik ngobrol atau kerja bareng?',
    contactDesc:
      'Saya terbuka untuk diskusi peluang kerja, proyek freelance, atau sekadar bertukar pikiran seputar software engineering. Silakan kontak saya langsung via email atau LinkedIn.',
    emailBtn: 'Kirim Email',
    location: 'Jember, Jawa Timur',
  },
  en: {
    nav: [
      { label: 'About', href: '#about' },
      { label: 'Capabilities', href: '#capabilities' },
      { label: 'Projects', href: '#work' },
      { label: 'Experience', href: '#experience' },
      { label: 'Skills', href: '#skills' },
      { label: 'Credentials', href: '#credentials' },
      { label: 'Contact', href: '#contact' },
    ],
    role: 'Software Engineer · Backend & Mobile',
    heroGreeting: "Hi, I'm Valentino.",
    heroDesc:
      "I'm an Information Systems student at the University of Jember focused on web backends, REST APIs, and mobile applications. My day-to-day work revolves around Laravel (PHP), Node.js, MySQL/PostgreSQL, and mobile development with Kotlin & Flutter.",
    viewProjects: 'Check out my projects',
    contactMe: 'Send an email',
    aboutTitle: 'A little about myself',
    aboutP1:
      'I enjoy figuring out how things work behind the scenes — from designing database tables and handling validation to making sure data moves reliably between APIs and client apps.',
    aboutP2:
      'During my Software Engineer internship at PT Telkom Indonesia, I worked on two internal systems (TRACER & VANTAGE). My main responsibilities were designing MySQL schemas, building Laravel 12 REST APIs, and integrating React web interfaces along with Python/Flask predictive services.',
    aboutP3:
      "I value straightforward, readable code that solves the actual problem without over-complicating things.",
    contactTitle: 'Want to connect or collaborate?',
    contactDesc:
      "I'm always open to discussing job opportunities, freelance work, or just chatting about software engineering. Feel free to reach out via email or LinkedIn.",
    emailBtn: 'Send Email',
    location: 'Jember, East Java, Indonesia',
  },
};

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'id';
    return window.localStorage.getItem('portfolio-language') || 'id';
  });

  const text = copy[language];

  const changeLanguage = (nextLang) => {
    setLanguage(nextLang);
    window.localStorage.setItem('portfolio-language', nextLang);
  };

  useEffect(() => {
    document.documentElement.lang = language === 'id' ? 'id' : 'en';
  }, [language]);

  return (
    <div className="min-h-screen bg-dark-950 text-zinc-100 selection:bg-amber-500/20 selection:text-amber-300">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-dark-800 bg-dark-950/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#about" className="font-bold text-sm tracking-tight text-zinc-100 hover:text-amber-400 transition">
            valentino.
          </a>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm text-zinc-400">
              {text.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-zinc-100 transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center rounded-md border border-dark-800 bg-dark-900 p-0.5 font-mono text-xs">
              {['id', 'en'].map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => changeLanguage(l)}
                  className={`px-2 py-0.5 rounded uppercase font-semibold transition ${
                    language === l ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <div className="flex items-center rounded-md border border-dark-800 bg-dark-900 p-0.5 font-mono text-[11px]">
              {['id', 'en'].map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => changeLanguage(l)}
                  className={`px-1.5 py-0.5 rounded uppercase font-semibold transition ${
                    language === l ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-500'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="p-1.5 rounded-md border border-dark-800 bg-dark-900 text-zinc-400 hover:text-zinc-200"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-dark-800 bg-dark-950 px-6 py-4 md:hidden text-sm space-y-2">
            {text.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-zinc-300 hover:text-zinc-100 py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24 border-b border-dark-800">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 mb-4 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                  {text.role}
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 leading-tight">
                  {text.heroGreeting}
                </h1>

                <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-300 max-w-xl">
                  {text.heroDesc}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#work"
                    className="inline-flex items-center gap-1.5 rounded-md bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold px-4 py-2.5 text-xs transition"
                  >
                    {text.viewProjects} <ArrowUpRight size={15} />
                  </a>
                  <a
                    href="mailto:hariyantovalentino@gmail.com"
                    className="inline-flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-850 hover:bg-zinc-800 text-zinc-200 font-medium px-4 py-2.5 text-xs transition"
                  >
                    <Mail size={15} /> {text.contactMe}
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-zinc-400 font-mono">
                  <span>{text.location}</span>
                  <a
                    href="https://github.com/valentinohrynt"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:text-zinc-200 transition"
                  >
                    <Github size={14} /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/valentinohariyanto"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:text-zinc-200 transition"
                  >
                    <Linkedin size={14} /> LinkedIn
                  </a>
                </div>
              </div>

              {/* Profile Card */}
              <div className="md:justify-self-end w-full max-w-xs">
                <div className="craft-card p-3 overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Valentino Hariyanto"
                    className="aspect-square w-full rounded-md object-cover grayscale contrast-115 hover:grayscale-0 transition duration-300"
                  />
                  <div className="p-3 pt-3 text-xs">
                    <div className="font-semibold text-zinc-200">Valentino Hariyanto</div>
                    <div className="text-zinc-400 text-[11px] font-mono mt-0.5">Sistem Informasi, UNEJ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story / About */}
        <section id="about" className="py-20 border-b border-dark-800">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-mono text-amber-400/90 tracking-wide uppercase mb-1.5">Tentang Saya</p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">{text.aboutTitle}</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-300">
                <p>{text.aboutP1}</p>
                <p>{text.aboutP2}</p>
                <p>{text.aboutP3}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sub-components */}
        <div id="capabilities">
          <Capabilities language={language} />
        </div>
        <Projects language={language} />
        <Experience language={language} />
        <Skills language={language} />
        <Highlights language={language} />

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="craft-card p-8 sm:p-12 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-3">{text.contactTitle}</h2>
              <p className="text-sm text-zinc-400 max-w-lg mx-auto mb-8 leading-relaxed">
                {text.contactDesc}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
                <a
                  href="mailto:hariyantovalentino@gmail.com"
                  className="inline-flex items-center gap-1.5 rounded-md bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold px-4 py-2.5 transition"
                >
                  <Mail size={14} /> {text.emailBtn}
                </a>
                <a
                  href="https://www.linkedin.com/in/valentinohariyanto"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-850 hover:bg-zinc-800 text-zinc-200 px-4 py-2.5 transition"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
                <a
                  href="https://github.com/valentinohrynt"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-850 hover:bg-zinc-800 text-zinc-200 px-4 py-2.5 transition"
                >
                  <Github size={14} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Clean minimal footer */}
      <footer className="border-t border-dark-800 py-8 px-6 text-xs text-zinc-400 font-mono">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Valentino Hariyanto</div>
          <div>{text.location}</div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

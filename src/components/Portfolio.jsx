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
    mastheadRole: 'EDISI PORTOFOLIO REKAYASA SISTEM',
    mastheadDate: 'UNIVERSITAS JEMBER · JAWA TIMUR, INDONESIA',
    navigation: [
      { label: 'Tentang', href: '#about' },
      { label: 'Kapabilitas', href: '#capabilities' },
      { label: 'Proyek', href: '#work' },
      { label: 'Pengalaman', href: '#experience' },
      { label: 'Toolchain', href: '#skills' },
      { label: 'Kredensial', href: '#credentials' },
      { label: 'Kontak', href: '#contact' },
    ],
    headline: 'Rekayasa Perangkat Lunak, Fondasi Backend & Arsitektur Mobile Terstruktur.',
    introLead:
      'Valentino Hariyanto adalah pengembang perangkat lunak dengan spesialisasi pada ekosistem PHP/Laravel, Node.js, basis data relasional MySQL & PostgreSQL, serta pengembangan aplikasi mobile native Android (Kotlin) dan Flutter.',
    introSub:
      'Berpengalaman merancang sistem internal di PT Telkom Indonesia, membangun alur data relasional yang konsisten, menerapkan tata kelola API aman, serta mengantarkan proyek capstone Bangkit Academy ke jajaran Top 50 nasional.',
    viewProjects: 'Lihat Katalog Proyek',
    contactMe: 'Korespondensi Email',
    sectionNumOne: 'SEKSI I',
    aboutLabel: 'TENTANG & PRINSIP KERJA',
    aboutTitle: 'Membangun Perangkat Lunak yang Andal, Terbaca, dan Tahan Lama',
    aboutP1:
      'Sebagai mahasiswa Sistem Informasi di Universitas Jember, fokus saya berakar pada pemahaman menyeluruh terhadap alur data dan proses bisnis. Rekayasa perangkat lunak bukan semata-mata menyusun sintaks, melainkan mendesain solusi yang dapat dipertahankan (maintainable), memiliki batasan validasi ketat, serta performa komputasi yang efisien.',
    aboutP2:
      'Selama menjalani masa PKL sebagai Software Engineer di PT Telkom Indonesia, saya memegang tanggung jawab penuh pada pemodelan skema database MySQL, pengembangan RESTful API dengan Laravel 12, integrasi web interface React, hingga penjembatanan service machine learning untuk sistem TRACER dan VANTAGE.',
    aboutP3:
      'Saya menghargai arsitektur yang sederhana dan terukur daripada abstraksi yang berlebihan. Setiap fitur dibangun dengan fokus pada kejelasan logika bisnis dan keandalan operasional.',
    contactSectionNum: 'SEKSI VII',
    contactLabel: 'KORESPONDENSI & KOLABORASI',
    contactTitle: 'Terbuka untuk Peluang Software Engineering & Kolaborasi Teknis',
    contactDesc:
      'Bagi perekrut, institusi, maupun rekan pengembang yang ingin mendiskusikan peluang kerja, proyek freelance, atau tantangan rekayasa backend/mobile, silakan hubungi langsung melalui kanal di bawah ini.',
    emailText: 'Kirim Email Resmi',
    locationFooter: 'Jember, Jawa Timur, Indonesia',
  },
  en: {
    mastheadRole: 'SYSTEMS ENGINEERING DOSSIER',
    mastheadDate: 'UNIVERSITY OF JEMBER · EAST JAVA, INDONESIA',
    navigation: [
      { label: 'About', href: '#about' },
      { label: 'Capabilities', href: '#capabilities' },
      { label: 'Projects', href: '#work' },
      { label: 'Experience', href: '#experience' },
      { label: 'Toolchain', href: '#skills' },
      { label: 'Credentials', href: '#credentials' },
      { label: 'Contact', href: '#contact' },
    ],
    headline: 'Software Engineering, Resilient Backend Foundations & Structured Mobile Systems.',
    introLead:
      'Valentino Hariyanto is a software engineer specialized in the PHP/Laravel ecosystem, Node.js, relational data storage (MySQL & PostgreSQL), and mobile engineering across Android (Kotlin) and Flutter.',
    introSub:
      'Experienced in engineering internal enterprise systems at PT Telkom Indonesia, modeling consistent relational data flows, enforcing disciplined API security, and leading a Bangkit Academy capstone into the national Top 50.',
    viewProjects: 'Browse System Catalogue',
    contactMe: 'Direct Email Inquiries',
    sectionNumOne: 'SECTION I',
    aboutLabel: 'BACKGROUND & PHILOSOPHY',
    aboutTitle: 'Crafting Resilient, Readable, and Long-Lasting Software',
    aboutP1:
      'Studying Information Systems at the University of Jember, my work centers on rigorous data structures and practical business processes. Software engineering is not merely about writing code; it is about designing maintainable architectures, enforcing strict validation boundaries, and ensuring computational reliability.',
    aboutP2:
      'During my internship at PT Telkom Indonesia, I took full ownership of relational database modeling, Laravel 12 REST API engineering, React web interface integration, and analytics microservice bridging for the TRACER and VANTAGE enterprise systems.',
    aboutP3:
      'I value pragmatic simplicity and correctness over unnecessary abstractions. Every system is engineered to solve concrete operational problems with clarity and integrity.',
    contactSectionNum: 'SECTION VII',
    contactLabel: 'CORRESPONDENCE & CONTACT',
    contactTitle: 'Open to Software Engineering Roles & Technical Collaboration',
    contactDesc:
      'For engineering leaders, organizations, or collaborators wishing to discuss full-time roles, freelance projects, or backend/mobile technical challenges, please reach out directly.',
    emailText: 'Send Direct Email',
    locationFooter: 'Jember, East Java, Indonesia',
  },
};

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
    <div className="min-h-screen bg-paper-100 text-ink-pure">
      {/* Top Paper Header / Masthead */}
      <header className="editorial-border-b bg-paper-100 sticky top-0 z-40">
        {/* Top Info Bar */}
        <div className="editorial-border-b py-2 px-5 sm:px-8 text-[11px] font-mono text-ink-100 flex items-center justify-between">
          <div className="hidden sm:block uppercase tracking-wider">
            {text.mastheadRole}
          </div>
          <div className="uppercase tracking-wider">
            {text.mastheadDate}
          </div>
          <div className="flex items-center gap-2">
            <span>LANG:</span>
            {['id', 'en'].map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => changeLanguage(l)}
                className={`font-mono text-[11px] px-1.5 py-0.5 uppercase transition ${
                  language === l
                    ? 'bg-ink-pure text-paper-100 font-bold'
                    : 'text-ink-100 hover:text-ink-pure'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Main Title Banner & Nav */}
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-4 sm:py-6 flex items-baseline justify-between gap-6">
          <div>
            <a href="#about" className="block">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-ink-pure">
                Valentino Hariyanto
              </span>
              <span className="block font-mono text-xs text-ink-100 uppercase tracking-widest mt-1">
                Software Engineer · Full-Stack & Mobile Developer
              </span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-6 font-mono text-xs text-ink-200">
            {text.navigation.map((nav) => (
              <a
                key={nav.href}
                href={nav.href}
                className="hover:text-ink-pure hover:underline"
              >
                {nav.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-ink-pure"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="editorial-border-t bg-paper-200 px-5 py-4 lg:hidden font-mono text-xs space-y-2">
            {text.navigation.map((nav) => (
              <a
                key={nav.href}
                href={nav.href}
                onClick={() => setMenuOpen(false)}
                className="block py-1 text-ink-pure"
              >
                {nav.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* Newspaper Editorial Hero Lead */}
        <section className="editorial-border-b">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Main Headline */}
              <div className="lg:col-span-8 space-y-6">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink-pure font-normal leading-[1.1] tracking-tight">
                  {text.headline}
                </h1>

                <p className="font-serif text-lg sm:text-xl text-ink-200 italic leading-relaxed pt-2">
                  {text.introLead}
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-ink-100 max-w-2xl">
                  {text.introSub}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
                  <a
                    href="#work"
                    className="inline-flex items-center gap-1.5 bg-ink-pure text-paper-100 px-5 py-2.5 font-bold hover:bg-ink-400 transition"
                  >
                    {text.viewProjects} <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="mailto:hariyantovalentino@gmail.com"
                    className="inline-flex items-center gap-1.5 bg-paper-100 editorial-border px-5 py-2.5 font-bold text-ink-pure hover:bg-paper-200 transition"
                  >
                    <Mail size={14} /> {text.contactMe}
                  </a>
                </div>
              </div>

              {/* Sidebar Profile Card / Engraving feel */}
              <div className="lg:col-span-4 bg-paper-200 editorial-border p-6 space-y-5">
                <div className="aspect-square w-full overflow-hidden editorial-border bg-paper-300">
                  <img
                    src={profileImage}
                    alt="Valentino Hariyanto"
                    className="w-full h-full object-cover grayscale contrast-125 filter"
                  />
                </div>

                <div className="font-mono text-xs space-y-2 text-ink-200">
                  <div className="flex items-center justify-between pb-1 editorial-border-b">
                    <span className="text-ink-100">Status</span>
                    <span className="font-bold text-ink-pure">Active Engineer</span>
                  </div>
                  <div className="flex items-center justify-between pb-1 editorial-border-b">
                    <span className="text-ink-100">Institution</span>
                    <span className="text-ink-pure">Univ. of Jember</span>
                  </div>
                  <div className="flex items-center justify-between pb-1 editorial-border-b">
                    <span className="text-ink-100">Industry</span>
                    <span className="text-ink-pure">PT Telkom Indonesia</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-100">Location</span>
                    <span className="text-ink-pure">East Java, ID</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-center gap-5 font-mono text-xs editorial-border-t">
                  <a
                    href="https://github.com/valentinohrynt"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-ink-200 hover:text-ink-pure"
                  >
                    <Github size={14} /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/valentinohariyanto"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-ink-200 hover:text-ink-pure"
                  >
                    <Linkedin size={14} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative / Section I: Philosophy */}
        <section id="about" className="editorial-border-b">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <div className="font-mono text-xs text-ink-100 uppercase tracking-wider mb-2">
                  {text.sectionNumOne} · {text.aboutLabel}
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-ink-pure font-normal leading-tight">
                  {text.aboutTitle}
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-4 text-sm sm:text-base leading-relaxed text-ink-200 font-sans">
                <p>{text.aboutP1}</p>
                <p>{text.aboutP2}</p>
                <p>{text.aboutP3}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section II: Capabilities */}
        <div id="capabilities">
          <Capabilities language={language} />
        </div>

        {/* Section III: Projects */}
        <Projects language={language} />

        {/* Section IV: Experience */}
        <Experience language={language} />

        {/* Section V: Toolchain */}
        <Skills language={language} />

        {/* Section VI: Credentials */}
        <Highlights language={language} />

        {/* Section VII: Contact & Closing Notice */}
        <section id="contact" className="py-20 sm:py-28 bg-[#F4F0E6]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center space-y-6">
            <div className="font-mono text-xs text-ink-100 uppercase tracking-widest">
              {text.contactSectionNum} · {text.contactLabel}
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-ink-pure font-normal leading-tight">
              {text.contactTitle}
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-ink-200 max-w-2xl mx-auto font-sans">
              {text.contactDesc}
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
              <a
                href="mailto:hariyantovalentino@gmail.com"
                className="inline-flex items-center gap-2 bg-ink-pure text-paper-100 px-6 py-3 font-bold hover:bg-ink-400 transition"
              >
                <Mail size={15} /> {text.emailText}
              </a>
              <a
                href="https://www.linkedin.com/in/valentinohariyanto"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-paper-100 editorial-border text-ink-pure px-6 py-3 font-bold hover:bg-paper-200 transition"
              >
                <Linkedin size={15} /> LinkedIn Profile
              </a>
              <a
                href="https://github.com/valentinohrynt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-paper-100 editorial-border text-ink-pure px-6 py-3 font-bold hover:bg-paper-200 transition"
              >
                <Github size={15} /> GitHub Profile
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Colophon */}
      <footer className="editorial-border-t py-8 px-5 sm:px-8 text-xs font-mono text-ink-100 bg-paper-100">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} Valentino Hariyanto — Software Engineer
          </div>
          <div>
            COLOPHON: EDITORIAL DOSSIER STYLE · {text.locationFooter}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

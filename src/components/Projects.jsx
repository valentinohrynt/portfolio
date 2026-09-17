import React, { useState } from 'react';
import { ExternalLink, Github, Lock, X, Terminal, FolderGit2, CheckCircle2 } from 'lucide-react';

const baseProjects = [
  {
    title: 'ManusiaIn',
    live: 'https://manusiain.web.id',
    stack: ['Next.js', 'TypeScript', 'Hono', 'PostgreSQL', 'Prisma', 'Cloudflare Workers', 'Midtrans'],
    type: 'Commercial / Web App',
    id: {
      category: 'Platform Pengolahan Teks & SaaS',
      summary: 'Aplikasi web pemrosesan teks Bahasa Indonesia dengan integrasi multi-provider, sistem wallet/kredit dinamis, dan payment gateway Midtrans otomatis.',
      involvement: 'Merancang arsitektur sistem, memetakan alur transaksi kredit & callback payment gateway, integrasi Hono RPC, serta optimasi query database.',
      highlights: [
        'Mengintegrasikan sistem gateway pembayaran otomatis (Midtrans Snap & Webhook verification).',
        'Menangani sinkronisasi status saldo kredit transaksi berbasis PostgreSQL & Prisma ORM.',
        'Membangun API layer menggunakan Hono yang dideploy ke edge runtime Cloudflare Workers.',
      ],
    },
    en: {
      category: 'Text Processing Platform & SaaS',
      summary: 'Indonesian text-processing web application with multi-provider integration, dynamic user credit balances, and automated Midtrans payment checkout.',
      involvement: 'Architected system flow, mapped credit purchase & webhook callback lifecycles, integrated Hono RPC endpoints, and optimized database queries.',
      highlights: [
        'Integrated automated payment gateway verification via Midtrans webhooks.',
        'Designed atomic database transaction flows for credit top-ups using PostgreSQL & Prisma.',
        'Deployed low-latency API routes with Hono on Cloudflare Workers edge runtime.',
      ],
    },
  },
  {
    title: 'Invte',
    live: 'https://invte.web.id',
    stack: ['Next.js', 'TypeScript', 'Hono', 'Drizzle ORM', 'PostgreSQL', 'Cloudflare R2', 'Flutter'],
    type: 'Full-Stack & Mobile Ecosystem',
    id: {
      category: 'SaaS Manajemen Undangan & Event',
      summary: 'Platform manajemen tamu dan undangan digital interaktif dengan sistem RSVP real-time serta aplikasi scanner mobile berbasis Flutter.',
      involvement: 'Mengembangkan logika backend, media storage Cloudflare R2, relasi database Drizzle ORM, dan aplikasi companion Android untuk scan QR check-in.',
      highlights: [
        'Implementasi skema database relasional tamu, invitation slug, dan log kehadiran menggunakan Drizzle ORM.',
        'Membangun modul scanner QR code cepat di aplikasi mobile Flutter untuk validasi tamu on-site.',
        'Sistem presigned URL upload media aman terintegrasi dengan Cloudflare R2 object storage.',
      ],
    },
    en: {
      category: 'Event Management & Invitation Platform',
      summary: 'Interactive digital invitation and attendee management platform featuring real-time RSVP tracking and a Flutter companion check-in scanner.',
      involvement: 'Built backend logic, Cloudflare R2 media pipelines, Drizzle ORM schemas, and the companion Android QR verification application.',
      highlights: [
        'Designed relational attendee models, custom slug routing, and attendance logs via Drizzle ORM.',
        'Engineered responsive Flutter camera QR scanner for instant check-in verification.',
        'Configured authenticated media storage flows utilizing Cloudflare R2 object storage.',
      ],
    },
  },
  {
    title: 'Kudos',
    live: 'https://kudos.my.id',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Auth.js', 'Resend', 'Vitest'],
    type: 'Interactive Web Service',
    id: {
      category: 'Digital Greeting & Celebration Page',
      summary: 'Layanan kreasi halaman ucapan personal dan kartu interaktif dengan QR code sharing, proteksi akses, serta notifikasi email transaksional.',
      involvement: 'Menerapkan alur autentikasi Auth.js, templating dinamis berbasis data JSON di database, serta automated unit/integration tests dengan Vitest.',
      highlights: [
        'Menerapkan proteksi route dan sesi terverifikasi menggunakan Auth.js (NextAuth).',
        'Mengintegrasikan transactional email delivery untuk notifikasi penerima melalui Resend API.',
        'Memastikan stabilitas komponen utama melalui serangkaian pengujian unit dan integrasi.',
      ],
    },
    en: {
      category: 'Digital Greeting & Celebration Platform',
      summary: 'Personalized interactive celebration and greeting page builder with QR code distribution, password-protected links, and transactional emails.',
      involvement: 'Implemented Auth.js session handling, JSON-backed dynamic template rendering, and automated integration test coverage via Vitest.',
      highlights: [
        'Enforced session protection and authenticated routes with Auth.js.',
        'Integrated automated transactional email notifications via Resend API.',
        'Maintained core flow reliability with automated unit and integration tests.',
      ],
    },
  },
  {
    title: 'StockHub',
    stack: ['Laravel 12', 'PHP', 'Tailwind CSS', 'MySQL', 'Python', 'Flask', 'LSTM'],
    github: 'https://github.com/valentinohrynt/stockhub-scm',
    type: 'Supply Chain & SCM System',
    id: {
      category: 'Sistem Rantai Pasok & Inventaris',
      summary: 'Sistem manajemen rantai pasok dan inventaris bisnis F&B dengan modul kalkulasi stok bertingkat, restock threshold, dan microservice forecasting terpisah.',
      involvement: 'Mengembangkan arsitektur backend Laravel 12 (MVC), manajemen database relasional bahan baku, order fulfillment, dan pipeline data ke model prediksi.',
      highlights: [
        'Membangun logika pelacakan stok otomatis berdasarkan mutasi pesanan dan konversi resep bahan.',
        'Menyediakan REST API terstruktur untuk bridging data transaksi ke service prediksi berbasis Flask.',
        'Menerapkan otorisasi peran pengguna bertingkat untuk staf gudang, kasir, dan manajer.',
      ],
    },
    en: {
      category: 'Supply Chain & Inventory System',
      summary: 'End-to-end F&B supply-chain system featuring tiered ingredient tracking, reorder alert thresholds, and an auxiliary predictive forecasting microservice.',
      involvement: 'Engineered Laravel 12 backend architecture, multi-table database transactions, order fulfillment logic, and API data feeds for forecasting.',
      highlights: [
        'Engineered real-time stock deduction workflows driven by recipe unit conversions.',
        'Delivered clean REST endpoints bridging transactional history to a Flask-based forecasting engine.',
        'Structured role-based permission policies for warehouse staff, cashiers, and management.',
      ],
    },
  },
  {
    title: 'AgroSewa',
    stack: ['Laravel 11', 'PHP', 'MySQL', 'Blade', 'RBAC Security'],
    github: 'https://github.com/valentinohrynt/AgroSewa-PPL-A07',
    type: 'Enterprise Rental Management',
    id: {
      category: 'Platform Tata Kelola Sewa Alat Pertanian',
      summary: 'Sistem komprehensif tata kelola sewa alat pertanian dengan 4 level otorisasi: Petani, Kelompok Tani, Dinas Pemerintah, dan Superadmin.',
      involvement: 'Merancang skema relasi database kompleks, alur sewa dengan validasi status bertahap, persetujuan dinas pertanian, dan rekap audit transaksi.',
      highlights: [
        'Membuat alur penyewaan multi-step: booking, verifikasi dokumen legal, serah terima, dan pengembalian.',
        'Menerapkan Role-Based Access Control (RBAC) ketat untuk membatasi privilese tiap tingkatan pengguna.',
        'Optimasi query MySQL untuk laporan utilisasi dan histori alokasi alat per wilayah.',
      ],
    },
    en: {
      category: 'Agricultural Equipment Leasing System',
      summary: 'Enterprise machinery rental platform supporting 4 distinct user tiers: Farmers, Farming Cooperatives, Government Officers, and Superadmins.',
      involvement: 'Designed relational schemas, multi-stage approval state machines, compliance verification workflows, and operational audit reports.',
      highlights: [
        'Structured a reliable multi-step booking lifecycle: request, verification, dispatch, and return.',
        'Enforced strict Role-Based Access Control (RBAC) across administrative boundaries.',
        'Optimized MySQL aggregation queries for regional machinery distribution analytics.',
      ],
    },
  },
  {
    title: 'MentalQ',
    stack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Retrofit', 'Room DB', 'Firebase', 'Hilt'],
    github: 'https://github.com/valentinohrynt/MentalQ-MD',
    type: 'Native Android Application',
    id: {
      category: 'Aplikasi Android Mobile & Capstone Bangkit',
      summary: 'Aplikasi mobile native pencatatan jurnal emosional dengan sinkronisasi cloud Firebase, local storage Room untuk offline mode, dan arsitektur MVVM.',
      involvement: 'Mengembangkan arsitektur aplikasi Android client dengan Jetpack Compose, modularitas data layer, interaksi REST API via Retrofit, dan local caching Room.',
      highlights: [
        'Lolos seleksi Top 50 Product Track Capstone Project dari 644 tim peserta nasional di Bangkit Academy.',
        'Menerapkan arsitektur Clean Code MVVM didukung dependency injection menggunakan Hilt.',
        'Integrasi caching offline-first dengan Room DB serta sinkronisasi otomatis ke remote server.',
      ],
    },
    en: {
      category: 'Native Android Application (Bangkit Capstone)',
      summary: 'Native Android emotional journaling app featuring Firebase authentication, offline Room caching, and MVVM architecture.',
      involvement: 'Engineered Android UI with Jetpack Compose, implemented data layer abstraction, integrated REST endpoints via Retrofit, and managed Room persistence.',
      highlights: [
        'Awarded Top 50 Product Track Capstone Project out of 644 national teams in Bangkit Academy.',
        'Architected clean MVVM codebase with Hilt-powered dependency injection.',
        'Built offline-first data caching with Room Database and transparent remote synchronization.',
      ],
    },
  },
];

const otherProjects = [
  { name: 'Jember FnB Loker', desc: 'Custom PHP micro-router & MySQL job board platform' },
  { name: 'DESTINA', desc: 'Tourism portal with itinerary planner' },
  { name: 'Restaurant Review', desc: 'Progressive Web App with indexedDB offline support' },
  { name: 'Anime Movie DB', desc: 'REST API client with caching & search filters' },
  { name: 'SutoriApp', desc: 'Story sharing Android app with CameraX & Location' },
  { name: 'Dicoding Event', desc: 'Event scheduler with Android background WorkManager' },
];

const copy = {
  id: {
    label: 'PROYEK & IMPLEMENTASI',
    title: 'Karya Rekayasa Perangkat Lunak',
    intro: 'Kumpulan sistem, aplikasi web, dan mobile yang dirancang dengan fokus pada skalabilitas, integritas data, dan arsitektur kode yang teruji.',
    details: 'Spesifikasi',
    liveSite: 'Kunjungi Sistem',
    repository: 'Source Code',
    privateRepository: 'Repo Privat',
    moreTitle: 'Repositori & Proyek Terpilih Lainnya',
    moreText: 'Eksperimen arsitektur, implementasi framework, dan codebase modul yang tersedia publik di GitHub.',
    browse: 'Lihat Semua di GitHub',
    involvement: 'Tanggung Jawab & Arsitektur',
    keyPoints: 'Implementasi Kunci',
    technology: 'Spesifikasi Teknologi',
    openRepository: 'Buka Kode Sumber',
    openLiveSite: 'Akses Sistem Live',
    close: 'Tutup Detail',
  },
  en: {
    label: 'PROJECTS & IMPLEMENTATION',
    title: 'Featured Software Engineering Work',
    intro: 'A curated selection of web systems, APIs, and mobile applications engineered with a focus on code maintainability and data reliability.',
    details: 'Specs',
    liveSite: 'Live System',
    repository: 'Source Code',
    privateRepository: 'Private Repo',
    moreTitle: 'Additional Projects & Code Repositories',
    moreText: 'Explorations, architecture patterns, and coursework codebases available on GitHub.',
    browse: 'Explore GitHub Profile',
    involvement: 'Engineering Responsibilities',
    keyPoints: 'Key Implementations',
    technology: 'Technology Stack',
    openRepository: 'Open Source Code',
    openLiveSite: 'Open Live System',
    close: 'Close Specs',
  },
};

const Projects = ({ language = 'id' }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const text = copy[language];
  const projects = baseProjects.map((project) => ({ ...project, ...project[language] }));

  return (
    <section id="work" className="py-16 sm:py-24 border-b border-slate-800/80">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
            <span className="font-mono text-xs font-semibold tracking-wider text-brand-400 uppercase">{text.label}</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl lg:text-4xl">{text.title}</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-400">{text.intro}</p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="eng-card rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[11px] text-brand-400 font-medium bg-brand-950/60 border border-brand-800/50 px-2 py-0.5 rounded">
                    {project.type}
                  </span>
                  {project.live ? (
                    <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      LIVE
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-500 font-mono">CODEBASE</span>
                  )}
                </div>

                <h3 className="text-xl font-bold tracking-tight text-slate-100 mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-3">
                  {project.category}
                </p>
                <p className="text-sm leading-relaxed text-slate-400 line-clamp-3 mb-5">
                  {project.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((item) => (
                    <span key={item} className="code-pill text-[11px] text-slate-300 px-2 py-0.5 rounded">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-750 border border-slate-700/80 px-3 py-2 text-xs font-semibold text-slate-200 transition"
                  >
                    <Terminal size={14} className="text-brand-400" /> {text.details}
                  </button>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-3 py-2 text-xs font-semibold text-emerald-400 transition"
                      title={text.liveSite}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1 rounded-lg bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 px-3 py-2 text-xs font-semibold text-slate-300 transition"
                      title={text.repository}
                    >
                      <Github size={14} />
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center justify-center gap-1 rounded-lg bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-slate-600 cursor-not-allowed"
                      title={text.privateRepository}
                    >
                      <Lock size={14} />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Projects Section */}
        <div className="mt-12 rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-100">{text.moreTitle}</h3>
              <p className="text-sm text-slate-400 mt-0.5">{text.moreText}</p>
            </div>
            <a
              href="https://github.com/valentinohrynt"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-slate-600 hover:bg-slate-700 transition"
            >
              <Github size={15} /> {text.browse}
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((item) => (
              <div
                key={item.name}
                className="flex items-start gap-3 rounded-lg border border-slate-800/90 bg-slate-950/60 p-3.5 hover:border-slate-700 transition"
              >
                <FolderGit2 size={16} className="text-slate-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">{item.name}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="modal-enter w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="font-mono text-xs text-brand-400 font-medium">
                    {selectedProject.type}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-100 mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {selectedProject.category}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="py-5 space-y-6">
                <div>
                  <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-400 uppercase mb-2">
                    Ringkasan Sistem
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {selectedProject.summary}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-400 uppercase mb-2">
                    {text.involvement}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-300 bg-slate-950/70 border border-slate-800/80 rounded-lg p-3.5">
                    {selectedProject.involvement}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-400 uppercase mb-2">
                    {text.keyPoints}
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((point, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-400 uppercase mb-2">
                    {text.technology}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((item) => (
                      <span
                        key={item}
                        className="code-pill text-xs text-slate-300 px-2.5 py-1 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition"
                  >
                    <Github size={15} /> {text.openRepository}
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-semibold text-white transition"
                  >
                    <ExternalLink size={15} /> {text.openLiveSite}
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg border border-slate-800 bg-slate-850 px-4 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 transition"
                >
                  {text.close}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

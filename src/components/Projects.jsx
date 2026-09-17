import React, { useState } from 'react';
import { ArrowUpRight, Github, Lock, X } from 'lucide-react';

const baseProjects = [
  {
    code: 'PROJ-01',
    title: 'ManusiaIn',
    year: '2025',
    live: 'https://manusiain.web.id',
    stack: ['Next.js', 'TypeScript', 'Hono', 'PostgreSQL', 'Prisma', 'Cloudflare Workers', 'Midtrans'],
    type: 'SaaS Platform',
    id: {
      category: 'Sistem Pemrosesan Teks & Akun Berlangganan',
      summary: 'Platform web pengolahan teks Bahasa Indonesia dengan verifikasi akun, saldo token kredit, dan gateway pembayaran otomatis melalui Midtrans Snap & Webhook.',
      involvement: 'Merancang arsitektur sistem, memetakan siklus transaksi saldo pengguna, integrasi webhook gateway pembayaran, serta routing Hono pada runtime Cloudflare Workers.',
      highlights: [
        'Sinkronisasi status transaksi instan berbasis webhook Midtrans dan database PostgreSQL.',
        'Penerapan Prisma ORM untuk pemodelan data akun, mutasi kredit, dan audit log.',
        'Optimalisasi latency response time menggunakan arsitektur edge computing.',
      ],
    },
    en: {
      category: 'Text Processing & Subscription System',
      summary: 'Web platform for Indonesian text workflows featuring user balance accounting, token deduction engines, and automated payments via Midtrans.',
      involvement: 'Architected system flow, atomic balance mutation rules, webhook verification pipelines, and Hono routing on Cloudflare Workers edge runtime.',
      highlights: [
        'Instant payment reconciliation via Midtrans webhook signatures and PostgreSQL data layer.',
        'Prisma ORM schema modeling for user credentials, credit audits, and usage logs.',
        'Latency-minimized responses through edge compute deployment.',
      ],
    },
  },
  {
    code: 'PROJ-02',
    title: 'Invte',
    year: '2025',
    live: 'https://invte.web.id',
    stack: ['Next.js', 'TypeScript', 'Hono', 'Drizzle ORM', 'PostgreSQL', 'Cloudflare R2', 'Flutter'],
    type: 'Web & Mobile Ecosystem',
    id: {
      category: 'Platform Manajemen Undangan & Scanner Check-in',
      summary: 'Layanan manajemen tamu undangan digital dengan tracking RSVP real-time serta aplikasi mobile pendamping Flutter untuk proses verifikasi QR check-in cepat di lokasi acara.',
      involvement: 'Merancang schema Drizzle ORM, pipeline upload media aman ke Cloudflare R2, serta mengembangkan aplikasi Flutter scanner Android dari perancangan hingga pengujian.',
      highlights: [
        'Database relasional terstruktur untuk mengelola puluhan ribu data tamu dan log kedatangan.',
        'Aplikasi scanner Flutter responsif dengan kamera scanner QR real-time.',
        'Integrasi presigned URL untuk transfer aset media tanpa membebani server inti.',
      ],
    },
    en: {
      category: 'Event Attendance & Check-in Platform',
      summary: 'Digital guest-list management service featuring live RSVP status tracking and an accompanying Flutter Android scanner app for fast on-premise check-in.',
      involvement: 'Designed Drizzle ORM schemas, Cloudflare R2 media upload channels, and engineered the companion Flutter Android scanner application.',
      highlights: [
        'Relational data models handling high-concurrency guest registries and attendance logs.',
        'Lightweight Flutter QR scanner app tuned for instant camera capture feedback.',
        'Secure asset pipeline via authenticated presigned URLs on Cloudflare R2.',
      ],
    },
  },
  {
    code: 'PROJ-03',
    title: 'Kudos',
    year: '2025',
    live: 'https://kudos.my.id',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Auth.js', 'Resend', 'Vitest'],
    type: 'Interactive Web Service',
    id: {
      category: 'Digital Greeting & Celebration Page Builder',
      summary: 'Aplikasi pembangun halaman ucapan dan gift interaktif dengan generator QR code, proteksi link terverifikasi, dan dispatch email transaksional otomatis.',
      involvement: 'Menerapkan manajemen sesi Auth.js, rendering template halaman dinamis berbasis data JSON, pengiriman email Resend, dan penulisan test suite Vitest.',
      highlights: [
        'Keamanan autentikasi dan session lifecycle terkelola rapi menggunakan Auth.js.',
        'Integrasi API pengiriman email transaksional dengan monitoring delivery rate.',
        'Uji kualitas kode melalui unit testing dan integration testing Vitest.',
      ],
    },
    en: {
      category: 'Interactive Celebration Page Builder',
      summary: 'Personalized interactive greeting page builder featuring custom QR code exports, password-protected links, and automated transactional emails.',
      involvement: 'Implemented Auth.js session handling, dynamic JSON template engines, Resend transactional email integration, and Vitest test suites.',
      highlights: [
        'Robust route guards and verified sessions powered by Auth.js.',
        'Reliable transactional email dispatch pipeline using Resend.',
        'Code regression prevention via Vitest unit and integration suites.',
      ],
    },
  },
  {
    code: 'PROJ-04',
    title: 'StockHub',
    year: '2025',
    stack: ['Laravel 12', 'PHP', 'Tailwind CSS', 'MySQL', 'Python', 'Flask', 'LSTM'],
    github: 'https://github.com/valentinohrynt/stockhub-scm',
    type: 'SCM & Inventory System',
    id: {
      category: 'Sistem Rantai Pasok & Prediksi Bahan Baku',
      summary: 'Aplikasi manajemen logistik dan rantai pasok untuk operasional bisnis F&B, dilengkapi reorder threshold otomatis dan bridging data ke service forecasting Python terpisah.',
      involvement: 'Mengembangkan logika aplikasi backend Laravel 12 (MVC), transaksi basis data multi-tabel, otorisasi peran pengguna (RBAC), serta REST API ke service LSTM.',
      highlights: [
        'Tracking otomatis bahan baku dari resep pesanan menggunakan mutasi stok relasional.',
        'Penyusunan API terstruktur untuk bridging data transaksi ke model estimasi Python.',
        'Pemberlakuan hak akses bertingkat bagi staf inventaris, kasir, dan pengelola.',
      ],
    },
    en: {
      category: 'Supply Chain & Material Forecasting',
      summary: 'Logistics and supply chain management system for F&B operations, with automated reorder triggers and data pipeline feeding a Python forecasting service.',
      involvement: 'Engineered Laravel 12 MVC backend logic, multi-table transactional database operations, role authorization, and REST feeds for predictive services.',
      highlights: [
        'Real-time material deduction tracking calculated directly from item recipe specs.',
        'Clean API contracts delivering historical transaction feeds to Python LSTM models.',
        'Tiered access boundaries separating warehouse operators, cashiers, and management.',
      ],
    },
  },
  {
    code: 'PROJ-05',
    title: 'AgroSewa',
    year: '2024',
    stack: ['Laravel 11', 'PHP', 'MySQL', 'Blade', 'RBAC Security'],
    github: 'https://github.com/valentinohrynt/AgroSewa-PPL-A07',
    type: 'Enterprise Web Application',
    id: {
      category: 'Sistem Persewaan Alat Pertanian Multi-Role',
      summary: 'Platform tata kelola alokasi dan persewaan alat mesin pertanian dengan empat tingkatan pengguna: Petani, Kelompok Tani, Dinas Pertanian, dan Superadmin.',
      involvement: 'Merancang skema relasional database, state machine alur sewa bertahap (pengajuan, verifikasi, serah-terima, pengembalian), serta verifikasi berkas administrasi.',
      highlights: [
        'Implementasi siklus sewa yang mencegah duplikasi jadwal penggunaan unit mesin.',
        'Role-Based Access Control (RBAC) ketat untuk menjaga integritas persetujuan dinas.',
        'Optimasi query MySQL untuk laporan audit rekapitulasi bantuan dan persewaan.',
      ],
    },
    en: {
      category: 'Multi-Role Agricultural Leasing Platform',
      summary: 'Public sector machinery allocation and leasing system built for four distinct actor categories: Farmers, Farmer Groups, Government Officers, and Superadmins.',
      involvement: 'Designed normalized MySQL schemas, state-driven leasing lifecycles (application, document review, dispatch, return), and audit compliance logs.',
      highlights: [
        'Scheduling state machines preventing equipment reservation conflicts.',
        'Strict Role-Based Access Control enforcing regulatory approval stages.',
        'Optimized MySQL aggregations for regional allocation audit reporting.',
      ],
    },
  },
  {
    code: 'PROJ-06',
    title: 'MentalQ',
    year: '2024',
    stack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Retrofit', 'Room DB', 'Firebase', 'Hilt'],
    github: 'https://github.com/valentinohrynt/MentalQ-MD',
    type: 'Native Android App',
    id: {
      category: 'Aplikasi Android Capstone Bangkit (Top 50 Nasional)',
      summary: 'Aplikasi native Android untuk pencatatan jurnal emosi dan refleksi harian, mengintegrasikan autentikasi Firebase, local storage Room untuk offline mode, dan arsitektur MVVM bersih.',
      involvement: 'Memimpin implementasi aplikasi Android native dengan Jetpack Compose, dependency injection via Hilt, abstraction layer Retrofit, dan persistence Room Database.',
      highlights: [
        'Terpilih sebagai Top 50 Product Track Capstone Project dari total 644 tim nasional.',
        'Penerapan arsitektur Clean Code MVVM yang mudah diuji dan dikembangkan.',
        'Sinkronisasi data offline-first yang menjaga catatan pengguna tetap aman tanpa koneksi internet.',
      ],
    },
    en: {
      category: 'Native Android App (Top 50 Bangkit Capstone)',
      summary: 'Native Android application for reflective journaling, featuring Firebase authentication, Room offline-first storage, and clean MVVM architecture.',
      involvement: 'Led native Android implementation using Jetpack Compose, Hilt dependency injection, Retrofit networking layers, and Room Database persistence.',
      highlights: [
        'Selected among the Top 50 Product Track projects nationwide from 644 teams.',
        'Clean MVVM architecture ensuring maintainability and robust state handling.',
        'Offline-first synchronization protecting journal entries regardless of network reach.',
      ],
    },
  },
];

const archivalWorks = [
  { name: 'Jember FnB Loker', desc: 'Custom micro-router PHP & MySQL regional culinary job board', year: '2024' },
  { name: 'DESTINA', desc: 'Tourism exploration web portal with route scheduling', year: '2024' },
  { name: 'Restaurant Review PWA', desc: 'Progressive Web App with IndexedDB offline capability', year: '2024' },
  { name: 'Anime Movie Catalog', desc: 'Lightweight REST client with search filtering & caching', year: '2024' },
  { name: 'SutoriApp', desc: 'Android camera story sharing application with location metadata', year: '2024' },
  { name: 'Dicoding Event Manager', desc: 'Android scheduling app using background WorkManager services', year: '2024' },
];

const copy = {
  id: {
    sectionNum: 'SEKSI III',
    label: 'KATALOG SISTEM & KARYA REKAYASA',
    title: 'Daftar Proyek Terpilih',
    intro: 'Dokumentasi komprehensif sistem perangkat lunak yang telah dirancang, dibangun, dan diimplementasikan.',
    specBtn: 'Bedah Arsitektur',
    liveLink: 'Buka Live Web',
    codeLink: 'Source Code',
    privCode: 'Private Repo',
    archiveTitle: 'Arsip Repositori & Codebase Pendukung',
    archiveIntro: 'Implementasi modul, eksperimen teknologi, dan proyek pembelajaran yang tercatat pada repositori publik.',
    viewGithub: 'Kunjungi GitHub Utama',
    modalTitle: 'Dokumentasi Teknis Proyek',
    modalSummary: 'Ringkasan Sistem',
    modalInvolvement: 'Peran & Tanggung Jawab Rekayasa',
    modalHighlights: 'Poin Kunci Implementasi',
    modalTech: 'Toolchain & Library',
    close: 'Tutup',
  },
  en: {
    sectionNum: 'SECTION III',
    label: 'SYSTEM CATALOGUE & WORKS',
    title: 'Selected Engineering Projects',
    intro: 'A structured registry of software systems designed, developed, and deployed across production and academic environments.',
    specBtn: 'Inspect Specs',
    liveLink: 'Open Live System',
    codeLink: 'Source Code',
    privCode: 'Private Repo',
    archiveTitle: 'Archival Repositories & Working Codebases',
    archiveIntro: 'Proof-of-concepts, coursework projects, and exploratory repositories available on GitHub.',
    viewGithub: 'View Complete GitHub',
    modalTitle: 'Project Technical Dossier',
    modalSummary: 'System Overview',
    modalInvolvement: 'Engineering Responsibilities',
    modalHighlights: 'Implementation Highlights',
    modalTech: 'Toolchain & Libraries',
    close: 'Close',
  },
};

const Projects = ({ language = 'id' }) => {
  const [activeProject, setActiveProject] = useState(null);
  const text = copy[language];
  const list = baseProjects.map((p) => ({ ...p, ...p[language] }));

  return (
    <section id="work" className="editorial-border-b">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-4 editorial-border-b">
          <div>
            <div className="font-mono text-xs text-ink-100 uppercase tracking-wider mb-1">
              {text.sectionNum} · {text.label}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink-pure font-normal">
              {text.title}
            </h2>
          </div>
          <p className="max-w-md text-sm text-ink-100">
            {text.intro}
          </p>
        </div>

        {/* Editorial Table-Grid of Projects */}
        <div className="divide-y divide-[#DDD5C3] editorial-border bg-paper-100">
          {list.map((proj) => (
            <article
              key={proj.title}
              className="p-6 sm:p-8 hover:bg-[#F9F7F1] transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Meta Column */}
                <div className="lg:col-span-3 space-y-1">
                  <div className="flex items-center gap-2 font-mono text-xs text-accent-rust font-bold">
                    <span>{proj.code}</span>
                    <span>·</span>
                    <span>{proj.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink-pure font-normal">
                    {proj.title}
                  </h3>
                  <div className="font-mono text-xs text-ink-100 uppercase tracking-wider pt-1">
                    {proj.type}
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="font-sans text-xs font-semibold text-accent-forest">
                    {proj.category}
                  </div>
                  <p className="text-sm leading-relaxed text-ink-200">
                    {proj.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.stack.map((s) => (
                      <span
                        key={s}
                        className="bg-paper-200 editorial-border px-2 py-0.5 font-mono text-[11px] text-ink-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Column */}
                <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 pt-2 lg:pt-0">
                  <button
                    type="button"
                    onClick={() => setActiveProject(proj)}
                    className="inline-flex items-center gap-1 font-mono text-xs font-bold text-ink-pure bg-paper-200 hover:bg-paper-300 editorial-border px-3 py-1.5 transition"
                  >
                    {text.specBtn}
                  </button>

                  <div className="flex items-center gap-2 pt-2">
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-accent-forest hover:underline"
                      >
                        {text.liveLink} <ArrowUpRight size={13} />
                      </a>
                    )}
                    {proj.github ? (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-ink-200 hover:text-ink-pure"
                      >
                        <Github size={13} /> {text.codeLink}
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-ink-50 cursor-not-allowed">
                        <Lock size={12} /> {text.privCode}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Archival Projects Index */}
        <div className="mt-14 pt-8 editorial-border-t">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6">
            <div>
              <h3 className="font-serif text-xl text-ink-pure font-normal">
                {text.archiveTitle}
              </h3>
              <p className="text-xs text-ink-100 mt-1">
                {text.archiveIntro}
              </p>
            </div>
            <a
              href="https://github.com/valentinohrynt"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs font-bold text-ink-pure hover:text-accent-rust transition"
            >
              <Github size={14} /> {text.viewGithub} <ArrowUpRight size={12} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#DDD5C3] editorial-border">
            {archivalWorks.map((item) => (
              <div key={item.name} className="bg-paper-100 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-ink-100 mb-1">
                    <span>INDEX</span>
                    <span>{item.year}</span>
                  </div>
                  <h4 className="font-sans text-sm font-bold text-ink-pure">
                    {item.name}
                  </h4>
                  <p className="text-xs text-ink-200 mt-1 leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Dossier */}
        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-[2px]"
            onClick={() => setActiveProject(null)}
          >
            <div
              className="w-full max-w-2xl bg-paper-100 editorial-border p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between pb-4 editorial-border-b">
                <div>
                  <div className="font-mono text-xs text-accent-rust font-bold">
                    {activeProject.code} · {activeProject.type}
                  </div>
                  <h3 className="font-serif text-3xl text-ink-pure font-normal mt-1">
                    {activeProject.title}
                  </h3>
                  <div className="text-xs text-ink-100 mt-0.5">
                    {activeProject.category}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="p-1 text-ink-100 hover:text-ink-pure"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="py-6 space-y-6">
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-ink-100 mb-2">
                    {text.modalSummary}
                  </div>
                  <p className="text-sm leading-relaxed text-ink-200">
                    {activeProject.summary}
                  </p>
                </div>

                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-ink-100 mb-2">
                    {text.modalInvolvement}
                  </div>
                  <p className="text-sm leading-relaxed text-ink-pure bg-paper-200 p-4 editorial-border">
                    {activeProject.involvement}
                  </p>
                </div>

                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-ink-100 mb-2">
                    {text.modalHighlights}
                  </div>
                  <ul className="space-y-2">
                    {activeProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-ink-200">
                        <span className="font-mono text-accent-rust text-xs mt-0.5">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-ink-100 mb-2">
                    {text.modalTech}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.stack.map((t) => (
                      <span key={t} className="font-mono text-xs bg-paper-200 px-2.5 py-1 editorial-border text-ink-pure">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 editorial-border-t">
                <div className="flex items-center gap-3">
                  {activeProject.live && (
                    <a
                      href={activeProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs font-bold text-accent-forest hover:underline inline-flex items-center gap-1"
                    >
                      {text.liveLink} <ArrowUpRight size={13} />
                    </a>
                  )}
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-ink-200 hover:text-ink-pure inline-flex items-center gap-1"
                    >
                      <Github size={13} /> {text.codeLink}
                    </a>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="font-mono text-xs text-ink-100 hover:text-ink-pure"
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

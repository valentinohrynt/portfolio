import React, { useState } from 'react';
import { ExternalLink, Github, Lock, X } from 'lucide-react';

const baseProjects = [
  {
    title: 'ManusiaIn',
    live: 'https://manusiain.web.id',
    stack: ['Next.js', 'TypeScript', 'Hono', 'PostgreSQL', 'Prisma', 'Cloudflare Workers', 'Midtrans'],
    type: 'Web App & SaaS',
    id: {
      category: 'Aplikasi Web & Pengolahan Teks',
      summary: 'Aplikasi web untuk olah teks Bahasa Indonesia dengan sistem kuota/kredit user dan integrasi pembayaran otomatis pakai Midtrans.',
      involvement: 'Saya merancang alur transaksi kredit user, menghubungkan webhook pembayaran Midtrans, dan membangun backend Hono di Cloudflare Workers.',
      highlights: [
        'Integrasi webhook Midtrans buat otomatisasi update saldo kredit saat pembayaran berhasil.',
        'Penyusunan skema database PostgreSQL pakai Prisma ORM untuk akun dan riwayat transaksi.',
        'Deploy endpoint API dengan latensi rendah di Cloudflare Workers.',
      ],
    },
    en: {
      category: 'Web App & Text Processing',
      summary: 'Indonesian text tool with user accounts, credit usage balances, and automated checkout via Midtrans.',
      involvement: 'Designed user credit transaction flows, hooked up Midtrans payment webhooks, and built Hono API endpoints on Cloudflare Workers.',
      highlights: [
        'Midtrans webhook integration for automatic balance updates upon verified payment.',
        'PostgreSQL schema design with Prisma ORM for user accounts and transaction history.',
        'Low-latency API deployment on Cloudflare Workers.',
      ],
    },
  },
  {
    title: 'Invte',
    live: 'https://invte.web.id',
    stack: ['Next.js', 'TypeScript', 'Hono', 'Drizzle ORM', 'PostgreSQL', 'Cloudflare R2', 'Flutter'],
    type: 'Web & Mobile App',
    id: {
      category: 'Platform Undangan & Manajemen Tamu',
      summary: 'Layanan undangan digital dengan RSVP real-time, plus aplikasi mobile Flutter buat scan QR code check-in tamu di lokasi acara.',
      involvement: 'Saya ngurus skema database relasional tamu pakai Drizzle ORM, upload aset ke Cloudflare R2, dan bikin aplikasi mobile scanner-nya pakai Flutter.',
      highlights: [
        'Aplikasi Android scanner Flutter yang responsif buat validasi QR tamu secara instan.',
        'Struktur data tamu dan log check-in yang rapi di PostgreSQL.',
        'Upload media undangan aman lewat presigned URL Cloudflare R2.',
      ],
    },
    en: {
      category: 'Invitations & Guest Management',
      summary: 'Digital event invitations with live RSVP status and a companion Flutter mobile app for fast QR check-ins.',
      involvement: 'Handled relational guest schemas with Drizzle ORM, Cloudflare R2 media storage, and built the companion Flutter Android scanner app.',
      highlights: [
        'Fast Flutter Android scanner app for real-time QR attendance validation.',
        'Structured guest database and check-in logs in PostgreSQL.',
        'Direct media upload pipeline via presigned URLs on Cloudflare R2.',
      ],
    },
  },
  {
    title: 'Kudos',
    live: 'https://kudos.my.id',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Auth.js', 'Resend', 'Vitest'],
    type: 'Web Service',
    id: {
      category: 'Halaman Ucapan & Digital Gift',
      summary: 'Web untuk bikin halaman ucapan interaktif yang bisa dikustomisasi, dibagikan lewat link dan QR code, serta ada fitur kirim email otomatis.',
      involvement: 'Menerapkan sistem login dan proteksi route dengan Auth.js, templating dinamis, integrasi email Resend, dan nulis unit test dengan Vitest.',
      highlights: [
        'Pengelolaan sesi pengguna yang aman dan rapi pakai Auth.js.',
        'Kirim email konfirmasi dan notifikasi otomatis lewat Resend API.',
        'Pengecekan stabilitas kode dengan pengujian otomatis Vitest.',
      ],
    },
    en: {
      category: 'Interactive Greetings & Gift Pages',
      summary: 'Customizable greeting and celebration pages shared via QR codes, with password protection and transactional emails.',
      involvement: 'Implemented login sessions with Auth.js, dynamic page rendering, email delivery with Resend, and wrote unit tests with Vitest.',
      highlights: [
        'Secure user sessions and route protection powered by Auth.js.',
        'Automated notification emails via Resend API.',
        'Automated regression checks using Vitest.',
      ],
    },
  },
  {
    title: 'StockHub',
    stack: ['Laravel 12', 'PHP', 'Tailwind CSS', 'MySQL', 'Python', 'Flask', 'LSTM'],
    github: 'https://github.com/valentinohrynt/stockhub-scm',
    type: 'Manajemen Inventaris',
    id: {
      category: 'Sistem Stok & Supply Chain F&B',
      summary: 'Aplikasi manajemen stok bahan baku untuk operasional café dan roastery, ada batas minimum restock, dan terhubung ke service prediksi kebutuhan bahan berbasis Python.',
      involvement: 'Saya mengembangkan backend Laravel 12, mengatur transaksi database stok bahan baku, hak akses staf/manajer, dan API ke service model prediksi.',
      highlights: [
        'Kalkulasi otomatis pengurangan stok bahan berdasarkan resep menu yang dipesan.',
        'REST API terstruktur untuk kirim data historis transaksi ke service forecasting Python.',
        'Pembagian hak akses role pengguna (kasir, gudang, dan pemilik usaha).',
      ],
    },
    en: {
      category: 'F&B Inventory & Supply Chain',
      summary: 'Stock and supply-chain app for cafés and roasteries with auto reorder alerts and a separate Python service for ingredient demand forecasting.',
      involvement: 'Built Laravel 12 backend logic, database transactions for stock deductions, user access roles, and API links to the Python prediction service.',
      highlights: [
        'Automatic ingredient deductions based on ordered menu recipes.',
        'Clean REST API providing transactional logs to the Python forecasting service.',
        'Role-based permissions for cashiers, stock clerks, and owners.',
      ],
    },
  },
  {
    title: 'AgroSewa',
    stack: ['Laravel 11', 'PHP', 'MySQL', 'Blade', 'RBAC'],
    github: 'https://github.com/valentinohrynt/AgroSewa-PPL-A07',
    type: 'Aplikasi Web',
    id: {
      category: 'Sistem Sewa Alat Pertanian Multi-User',
      summary: 'Aplikasi web buat sewa alat mesin pertanian dengan 4 jenis akun: Petani, Kelompok Tani, Dinas Pertanian, dan Superadmin.',
      involvement: 'Merancang database relasional MySQL, alur peminjaman bertahap (pengajuan, verifikasi syarat, serah-terima, dan pengembalian), serta validasi form.',
      highlights: [
        'Pengecekan jadwal dan unit alat sewa biar tidak bentrok antar peminjam.',
        'Hak akses ketat sesuai peran pengguna agar alur verifikasi dinas tetap valid.',
        'Laporan rekap riwayat persewaan alat pertanian per wilayah.',
      ],
    },
    en: {
      category: 'Agricultural Equipment Rental Web App',
      summary: 'Machinery rental platform for 4 user types: individual farmers, farmer groups, agriculture agency officers, and admins.',
      involvement: 'Designed MySQL database schemas, step-by-step rental status lifecycles (request, verification, handoff, return), and input validation.',
      highlights: [
        'Booking schedule validation to prevent machinery double-booking.',
        'Strict role-based access to safeguard verification workflows.',
        'Summary reports for regional machinery rental history.',
      ],
    },
  },
  {
    title: 'MentalQ',
    stack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Retrofit', 'Room DB', 'Firebase', 'Hilt'],
    github: 'https://github.com/valentinohrynt/MentalQ-MD',
    type: 'Aplikasi Android',
    id: {
      category: 'Aplikasi Mobile Capstone Bangkit',
      summary: 'Aplikasi Android native untuk jurnal emosi dan refleksi harian. Pakai Firebase Auth, Room DB biar tetap bisa dipakai offline, dan arsitektur MVVM.',
      involvement: 'Saya mengembangkan aplikasi Android native-nya pakai Jetpack Compose, integrasi API Retrofit, penyimpanan lokal Room, dan dependency injection Hilt.',
      highlights: [
        'Terpilih jadi Top 50 Product Track Capstone Project dari total 644 tim nasional di Bangkit Academy.',
        'Arsitektur MVVM yang rapi dan mudah dirawat.',
        'Mode offline lancar berkat caching Room DB yang otomatis sinkron ke server.',
      ],
    },
    en: {
      category: 'Android App (Bangkit Capstone)',
      summary: 'Native Android emotional journaling app featuring Firebase login, Room offline caching, and clean MVVM architecture.',
      involvement: 'Developed the native Android app using Jetpack Compose, Retrofit API connections, Room persistence, and Hilt dependency injection.',
      highlights: [
        'Selected in the Top 50 Product Track projects nationwide out of 644 Bangkit teams.',
        'Clean MVVM architecture ensuring maintainability.',
        'Offline-first reliability with local Room caching.',
      ],
    },
  },
];

const otherWorks = [
  { name: 'Jember FnB Loker', desc: 'Website lowongan kerja kuliner lokal pakai PHP tanpa framework & MySQL' },
  { name: 'DESTINA', desc: 'Web portal info wisata dan rencana perjalanan' },
  { name: 'Restaurant Review PWA', desc: 'Aplikasi web katalog restoran dengan dukungan offline via IndexedDB' },
  { name: 'Anime Movie Catalog', desc: 'Katalog film anime dengan pencarian dan filter API' },
  { name: 'SutoriApp', desc: 'Aplikasi Android buat upload cerita foto pakai CameraX dan lokasi' },
  { name: 'Dicoding Event Manager', desc: 'Aplikasi Android pengingat jadwal event pakai WorkManager di background' },
];

const copy = {
  id: {
    label: 'Proyek Pilihan',
    title: 'Beberapa aplikasi yang pernah saya buat',
    intro: 'Mulai dari aplikasi web SaaS, backend sistem internal, sampai aplikasi mobile Android native.',
    inspect: 'Lihat Rincian',
    live: 'Buka Web',
    code: 'Source Code',
    priv: 'Repo Privat',
    archiveTitle: 'Proyek dan eksperimen lainnya',
    archiveIntro: 'Eksperimen kecil, tugas kuliah, dan latihan framework yang bisa dilihat di GitHub.',
    githubBtn: 'Lihat Profil GitHub',
    modalTitle: 'Detail Proyek',
    modalSummary: 'Tentang Aplikasi',
    modalInvolvement: 'Apa yang Saya Kerjakan',
    modalHighlights: 'Poin Penting',
    modalStack: 'Teknologi',
    close: 'Tutup',
  },
  en: {
    label: 'Selected Projects',
    title: 'Applications I have built',
    intro: 'Spanning SaaS web apps, internal backend systems, and native Android mobile apps.',
    inspect: 'View Details',
    live: 'Live Site',
    code: 'Source Code',
    priv: 'Private Repo',
    archiveTitle: 'Other projects and experiments',
    archiveIntro: 'Coursework, mini experiments, and earlier codebases available on GitHub.',
    githubBtn: 'View GitHub Profile',
    modalTitle: 'Project Details',
    modalSummary: 'About the App',
    modalInvolvement: 'What I Worked On',
    modalHighlights: 'Key Highlights',
    modalStack: 'Technologies',
    close: 'Close',
  },
};

const Projects = ({ language = 'id' }) => {
  const [selected, setSelected] = useState(null);
  const text = copy[language];
  const list = baseProjects.map((p) => ({ ...p, ...p[language] }));

  return (
    <section id="work" className="py-20 border-b border-dark-800">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <p className="text-xs font-mono text-amber-400/90 tracking-wide uppercase mb-1.5">{text.label}</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">{text.title}</h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-xl">{text.intro}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {list.map((proj) => (
            <div key={proj.title} className="craft-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-medium text-amber-400/90">{proj.type}</span>
                  {proj.live && (
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Live
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-zinc-100 mb-1">{proj.title}</h3>
                <p className="text-xs text-zinc-400 mb-3">{proj.category}</p>
                <p className="text-sm leading-relaxed text-zinc-400 line-clamp-3 mb-5">{proj.summary}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5 font-mono text-xs">
                  {proj.stack.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-zinc-850 border border-zinc-800 text-zinc-300">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-zinc-800/80">
                  <button
                    type="button"
                    onClick={() => setSelected(proj)}
                    className="flex-1 py-1.5 px-3 rounded-md bg-zinc-850 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-medium text-zinc-200 transition text-center"
                  >
                    {text.inspect}
                  </button>
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="py-1.5 px-3 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-medium text-emerald-400 transition flex items-center gap-1"
                      title={text.live}
                    >
                      <ExternalLink size={13} />
                    </a>
                  )}
                  {proj.github ? (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="py-1.5 px-3 rounded-md bg-zinc-850 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-medium text-zinc-300 transition flex items-center gap-1"
                      title={text.code}
                    >
                      <Github size={13} />
                    </a>
                  ) : (
                    <span className="py-1.5 px-3 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-600 cursor-not-allowed flex items-center gap-1">
                      <Lock size={12} />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other works strip */}
        <div className="mt-12 p-6 rounded-xl border border-dark-800 bg-dark-900/50">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-base font-bold text-zinc-100">{text.archiveTitle}</h3>
              <p className="text-xs text-zinc-400 mt-0.5">{text.archiveIntro}</p>
            </div>
            <a
              href="https://github.com/valentinohrynt"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-zinc-100 transition py-1.5 px-3 rounded-md border border-zinc-700 bg-zinc-850"
            >
              <Github size={14} /> {text.githubBtn}
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherWorks.map((item) => (
              <div key={item.name} className="p-3 rounded-lg border border-dark-800 bg-dark-950/60">
                <h4 className="text-xs font-semibold text-zinc-200">{item.name}</h4>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <div
              className="w-full max-w-xl rounded-xl border border-zinc-700 bg-dark-900 p-6 shadow-2xl relative max-h-[88vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between pb-4 border-b border-zinc-800">
                <div>
                  <span className="text-xs text-amber-400 font-medium">{selected.type}</span>
                  <h3 className="text-xl font-bold text-zinc-100 mt-0.5">{selected.title}</h3>
                  <p className="text-xs text-zinc-400">{selected.category}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="p-1 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="py-5 space-y-5 text-sm">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">{text.modalSummary}</h4>
                  <p className="leading-relaxed text-zinc-300">{selected.summary}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">{text.modalInvolvement}</h4>
                  <p className="leading-relaxed text-zinc-300 p-3 rounded-md bg-dark-950/80 border border-zinc-800">{selected.involvement}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">{text.modalHighlights}</h4>
                  <ul className="space-y-1.5">
                    {selected.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-zinc-300 text-xs sm:text-sm">
                        <span className="text-amber-400 mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">{text.modalStack}</h4>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {selected.stack.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-2">
                  {selected.live && (
                    <a
                      href={selected.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-xs font-medium text-white transition inline-flex items-center gap-1"
                    >
                      {text.live} <ExternalLink size={13} />
                    </a>
                  )}
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-xs font-medium text-zinc-200 transition inline-flex items-center gap-1"
                    >
                      <Github size={13} /> {text.code}
                    </a>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="text-xs text-zinc-400 hover:text-zinc-200 px-3 py-1.5"
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

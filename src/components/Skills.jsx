import React from 'react';

const content = {
  id: {
    sectionNum: 'SEKSI V',
    label: 'ARSITEKTUR & TAKSONOMI TEKNOLOGI',
    title: 'Spesifikasi Toolchain & Lingkungan Kerja',
    intro: 'Daftar teknologi dan perangkat pengembangan yang dikuasai secara praktis melalui pengerjaan proyek produksi, akademik, dan eksperimen rekayasa.',
    categories: [
      {
        title: 'Backend Systems & Server Runtimes',
        desc: 'Fondasi logika bisnis, pengelolaan transaksi, pemodelan relasional, dan otorisasi aman.',
        items: ['PHP 8.x', 'Laravel 11 & 12', 'Node.js', 'Express.js', 'Hono', 'RESTful API Design', 'Middleware Architecture'],
      },
      {
        title: 'Relational & Distributed Databases',
        desc: 'Desain skema ternormalisasi, integritas data referensial, query optimization, dan storage.',
        items: ['MySQL', 'PostgreSQL', 'Prisma ORM', 'Drizzle ORM', 'Relational Schema Design', 'Cloudflare R2 Storage'],
      },
      {
        title: 'Mobile Application Toolchain',
        desc: 'Pengembangan aplikasi mobile native berbasis Android serta framework multi-platform.',
        items: ['Kotlin', 'Android Jetpack', 'Jetpack Compose', 'MVVM Pattern', 'Room Database', 'Hilt DI', 'Flutter & Dart'],
      },
      {
        title: 'Web Interface & Frontend Layers',
        desc: 'Struktur tampilan responsif, interaksi komponen, dan koneksi state ke backend API.',
        items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'HTML5 / Modern CSS'],
      },
      {
        title: 'Development Workflow & Operations',
        desc: 'Disiplin version control, pemeliharaan kode, pengujian otomatis, dan platform hosting.',
        items: ['Git / GitHub', 'Linux CLI Shell', 'Postman / Curl Testing', 'Vitest', 'Cloudflare Workers', 'Netlify Edge'],
      },
      {
        title: 'Data Bridging & Integrations',
        desc: 'Penyambungan layanan pihak ketiga, webhook transaksional, dan bridging model analitik.',
        items: ['Python', 'Flask Microservices', 'Pandas Basics', 'Midtrans Payment Gateway', 'Third-Party Webhooks', 'Resend Email API'],
      },
    ],
  },
  en: {
    sectionNum: 'SECTION V',
    label: 'ARCHITECTURE & TECH TAXONOMY',
    title: 'Toolchain Specifications & Engineering Stack',
    intro: 'Catalog of languages, runtimes, and engineering frameworks utilized across production systems and academic software delivery.',
    categories: [
      {
        title: 'Backend Systems & Server Runtimes',
        desc: 'Business logic foundation, transactional workflows, relational modeling, and secure access boundaries.',
        items: ['PHP 8.x', 'Laravel 11 & 12', 'Node.js', 'Express.js', 'Hono', 'RESTful API Design', 'Middleware Architecture'],
      },
      {
        title: 'Relational & Distributed Databases',
        desc: 'Normalized schema modeling, referential integrity rules, query tuning, and object stores.',
        items: ['MySQL', 'PostgreSQL', 'Prisma ORM', 'Drizzle ORM', 'Relational Schema Design', 'Cloudflare R2 Storage'],
      },
      {
        title: 'Mobile Application Toolchain',
        desc: 'Native Android client architecture alongside multi-platform mobile application development.',
        items: ['Kotlin', 'Android Jetpack', 'Jetpack Compose', 'MVVM Pattern', 'Room Database', 'Hilt DI', 'Flutter & Dart'],
      },
      {
        title: 'Web Interface & Frontend Layers',
        desc: 'Clean UI component layouts, state synchronization, and accessible responsive structures.',
        items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'HTML5 / Modern CSS'],
      },
      {
        title: 'Development Workflow & Operations',
        desc: 'Disciplined version control, automated unit checks, terminal tools, and edge deployments.',
        items: ['Git / GitHub', 'Linux CLI Shell', 'Postman / Curl Testing', 'Vitest', 'Cloudflare Workers', 'Netlify Edge'],
      },
      {
        title: 'Data Bridging & Integrations',
        desc: 'Third-party integrations, transactional webhook lifecycles, and analytical service connectors.',
        items: ['Python', 'Flask Microservices', 'Pandas Basics', 'Midtrans Payment Gateway', 'Third-Party Webhooks', 'Resend Email API'],
      },
    ],
  },
};

const Skills = ({ language = 'id' }) => {
  const text = content[language];

  return (
    <section id="skills" className="editorial-border-b">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#DDD5C3] editorial-border">
          {text.categories.map((cat, idx) => (
            <div key={cat.title} className="bg-paper-100 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[11px] text-accent-rust font-bold mb-2">
                  CAT_{String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="font-serif text-xl text-ink-pure font-normal mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-ink-100 leading-relaxed mb-6">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-4 editorial-border-t">
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs bg-paper-200 px-2.5 py-1 editorial-border text-ink-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

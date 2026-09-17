import React from 'react';

const content = {
  id: {
    sectionNum: 'SEKSI II',
    label: 'DISIPLIN & PRAKTIK REKAYASA',
    title: 'Kapabilitas Teknis Sepanjang Siklus Perangkat Lunak',
    items: [
      {
        num: '01',
        title: 'Backend Systems & API Architecture',
        desc: 'Membangun arsitektur backend berbasis PHP (Laravel) dan Node.js dengan rancangan database relasional yang ternormalisasi (MySQL & PostgreSQL), endpoint RESTful yang efisien, dan tata kelola transaksi yang konsisten.',
        tags: ['Laravel 11/12', 'PHP 8.x', 'Node.js', 'REST API', 'MySQL', 'PostgreSQL'],
      },
      {
        num: '02',
        title: 'Mobile Application Engineering',
        desc: 'Rekayasa aplikasi mobile native menggunakan Kotlin dan Jetpack Compose dengan arsitektur MVVM, dependency injection (Hilt), Room database untuk offline caching, serta aplikasi cross-platform dengan Flutter.',
        tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Room DB', 'Flutter', 'Dart'],
      },
      {
        num: '03',
        title: 'Web Interfaces & Data Integration',
        desc: 'Menerapkan antarmuka web yang rapi dan terukur dengan React, Tailwind CSS, dan Next.js, menghubungkan frontend secara seamless ke data layer, webhook pihak ketiga, serta payment checkout flow.',
        tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Midtrans Gateway'],
      },
      {
        num: '04',
        title: 'Refining, Testing & Lifecycle Operations',
        desc: 'Pendekatan rekayasa yang disiplin: penelusuran akar masalah (root cause debugging), version control terstruktur melalui Git/GitHub, pengujian unit, serta implementasi deployment pada edge environment.',
        tags: ['Git / GitHub', 'Vitest', 'Linux CLI', 'Cloudflare Workers', 'Netlify'],
      },
    ],
  },
  en: {
    sectionNum: 'SECTION II',
    label: 'ENGINEERING DISCIPLINES',
    title: 'Technical Capabilities Across the Software Lifecycle',
    items: [
      {
        num: '01',
        title: 'Backend Systems & API Architecture',
        desc: 'Developing robust backend services in PHP (Laravel) and Node.js with normalized relational schemas (MySQL & PostgreSQL), clean RESTful contracts, and atomic transaction handling.',
        tags: ['Laravel 11/12', 'PHP 8.x', 'Node.js', 'REST API', 'MySQL', 'PostgreSQL'],
      },
      {
        num: '02',
        title: 'Mobile Application Engineering',
        desc: 'Engineering native Android applications with Kotlin and modern Jetpack Compose following MVVM architecture, Room offline persistence, and cross-platform apps via Flutter.',
        tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Room DB', 'Flutter', 'Dart'],
      },
      {
        num: '03',
        title: 'Web Interfaces & Data Integration',
        desc: 'Crafting responsive, accessible web interfaces using React, Tailwind CSS, and Next.js, securely connecting frontend state to database schemas and third-party payment gateways.',
        tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Midtrans Gateway'],
      },
      {
        num: '04',
        title: 'Refining, Testing & Lifecycle Operations',
        desc: 'Disciplined engineering practices: root-cause error diagnosis, organized Git branching workflows, automated testing, and zero-fuss edge runtime deployments.',
        tags: ['Git / GitHub', 'Vitest', 'Linux CLI', 'Cloudflare Workers', 'Netlify'],
      },
    ],
  },
};

const Capabilities = ({ language = 'id' }) => {
  const text = content[language];

  return (
    <section className="editorial-border-b bg-[#F9F7F1]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 pb-4 editorial-border-b">
          <div>
            <div className="font-mono text-xs text-ink-100 uppercase tracking-wider mb-1">
              {text.sectionNum} · {text.label}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink-pure font-normal">
              {text.title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#DDD5C3] editorial-border">
          {text.items.map((item) => (
            <div key={item.num} className="bg-paper-100 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-accent-rust font-bold mb-4">
                  [{item.num}]
                </div>
                <h3 className="font-serif text-2xl text-ink-pure font-normal mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-200">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 editorial-border-t">
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[11px] text-ink-100">
                  {item.tags.map((t) => (
                    <span key={t}>#{t}</span>
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

export default Capabilities;

import React from 'react';
import { Layers, Database, Smartphone, GitBranch } from 'lucide-react';

const content = {
  id: {
    label: 'KAPABILITAS SISTEM',
    title: 'Rekayasa Perangkat Lunak & Siklus Pengembangan',
    items: [
      {
        icon: Layers,
        number: '01',
        title: 'Aplikasi Web & Frontend',
        text: 'Membangun aplikasi web berbasis data dengan arsitektur bersih, rendering efisien, dan interface yang responsif menggunakan standar web modern.',
        tech: 'Laravel Blade · React · Tailwind CSS · REST Client',
      },
      {
        icon: Database,
        number: '02',
        title: 'Backend, API & Basis Data',
        text: 'Merancang skema relasional, mengoptimalkan query, menerapkan mekanisme autentikasi/otorisasi yang aman, serta integrasi gateway pihak ketiga.',
        tech: 'PHP / Laravel · Node.js · MySQL / PostgreSQL · JWT / OAuth',
      },
      {
        icon: Smartphone,
        number: '03',
        title: 'Pengembangan Aplikasi Mobile',
        text: 'Pengembangan Android native dengan arsitektur MVVM modern berbasis Jetpack Compose, serta cross-platform app dengan Flutter & Dart.',
        tech: 'Kotlin · Jetpack Compose · Room · Flutter · Dart',
      },
      {
        icon: GitBranch,
        number: '04',
        title: 'Arsitektur, Debugging & Deployment',
        text: 'Menangani implementasi end-to-end: struktur folder rapi, version control, investigasi error secara sistematis, hingga hosting live.',
        tech: 'Git/GitHub · Docker basics · Linux CLI · Cloudflare · Netlify',
      },
    ],
  },
  en: {
    label: 'SYSTEM CAPABILITIES',
    title: 'Software Engineering & Lifecycle Delivery',
    items: [
      {
        icon: Layers,
        number: '01',
        title: 'Web & Frontend Applications',
        text: 'Building data-driven web apps with clean separation of concerns, fast rendering, and resilient UX across devices.',
        tech: 'Laravel Blade · React · Tailwind CSS · REST Client',
      },
      {
        icon: Database,
        number: '02',
        title: 'Backend, APIs & Databases',
        text: 'Designing relational schemas, optimizing SQL queries, implementing secure authentication/authorization, and payment gateway integration.',
        tech: 'PHP / Laravel · Node.js · MySQL / PostgreSQL · JWT / OAuth',
      },
      {
        icon: Smartphone,
        number: '03',
        title: 'Mobile Application Engineering',
        text: 'Developing native Android apps using modern MVVM & Jetpack Compose, alongside multi-platform delivery with Flutter & Dart.',
        tech: 'Kotlin · Jetpack Compose · Room · Flutter · Dart',
      },
      {
        icon: GitBranch,
        number: '04',
        title: 'Architecture, Debugging & Deployment',
        text: 'Handling full-cycle delivery: structured codebases, disciplined Git workflows, root-cause troubleshooting, and deployment.',
        tech: 'Git/GitHub · Docker basics · Linux CLI · Cloudflare · Netlify',
      },
    ],
  },
};

const Capabilities = ({ language = 'id' }) => {
  const text = content[language];

  return (
    <section className="py-16 sm:py-20 border-b border-slate-800/80 bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
            <span className="font-mono text-xs font-semibold tracking-wider text-brand-400 uppercase">{text.label}</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">{text.title}</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {text.items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="eng-card rounded-xl p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-brand-400">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-xs font-medium text-slate-500 bg-slate-850 px-2 py-1 rounded border border-slate-800">
                      PHASE_{item.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-800/70">
                  <span className="font-mono text-[11px] text-slate-400 tracking-tight">
                    {item.tech}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;

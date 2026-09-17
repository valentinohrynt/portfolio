import React from 'react';
import { Server, Smartphone, Globe, Layers } from 'lucide-react';

const content = {
  id: {
    label: 'Keahlian & Fokus',
    title: 'Hal-hal yang biasa saya kerjakan',
    items: [
      {
        icon: Server,
        title: 'Backend & REST API',
        desc: 'Bikin service dan REST API pakai Laravel atau Node.js. Biasanya ngurus database relasional (MySQL/PostgreSQL), sistem login, hak akses user, sampai integrasi payment gateway.',
        tools: ['PHP / Laravel', 'Node.js', 'Express', 'MySQL', 'PostgreSQL'],
      },
      {
        icon: Smartphone,
        title: 'Aplikasi Android & Flutter',
        desc: 'Bikin aplikasi Android native pakai Kotlin dan Jetpack Compose dengan arsitektur MVVM. Buat kebutuhan cross-platform, saya biasa pakai Flutter dan Dart.',
        tools: ['Kotlin', 'Jetpack Compose', 'Room DB', 'Flutter', 'Dart'],
      },
      {
        icon: Globe,
        title: 'Frontend Web',
        desc: 'Bikin tampilan web responsif yang nyaman dipakai dengan React, Next.js, atau template Blade Laravel, dipadu Tailwind CSS buat styling.',
        tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      },
      {
        icon: Layers,
        title: 'Debugging & Deployment',
        desc: 'Ngecek dan benerin bug secara teliti, ngatur version control pakai Git, sampai deploy aplikasi web ke platform cloud atau hosting.',
        tools: ['Git / GitHub', 'Linux CLI', 'Cloudflare Workers', 'Netlify'],
      },
    ],
  },
  en: {
    label: 'Capabilities',
    title: 'What I regularly work on',
    items: [
      {
        icon: Server,
        title: 'Backend & REST APIs',
        desc: 'Building services and REST APIs with Laravel or Node.js. Dealing with relational databases (MySQL/PostgreSQL), user auth, role access, and payment gateways.',
        tools: ['PHP / Laravel', 'Node.js', 'Express', 'MySQL', 'PostgreSQL'],
      },
      {
        icon: Smartphone,
        title: 'Android & Flutter Apps',
        desc: 'Developing native Android apps using Kotlin and Jetpack Compose with MVVM architecture. For cross-platform needs, I use Flutter and Dart.',
        tools: ['Kotlin', 'Jetpack Compose', 'Room DB', 'Flutter', 'Dart'],
      },
      {
        icon: Globe,
        title: 'Web Frontend',
        desc: 'Crafting responsive, clean web interfaces using React, Next.js, or Laravel Blade, styled with Tailwind CSS.',
        tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      },
      {
        icon: Layers,
        title: 'Debugging & Deployment',
        desc: 'Tracking down bugs systematically, keeping Git commits organized, and deploying web applications to cloud or hosting platforms.',
        tools: ['Git / GitHub', 'Linux CLI', 'Cloudflare Workers', 'Netlify'],
      },
    ],
  },
};

const Capabilities = ({ language = 'id' }) => {
  const text = content[language];

  return (
    <section className="py-20 border-b border-dark-800">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <p className="text-xs font-mono text-amber-400/90 tracking-wide uppercase mb-1.5">{text.label}</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">{text.title}</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {text.items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="craft-card p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-md bg-zinc-800/80 text-amber-400 border border-zinc-700/60">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-base font-semibold text-zinc-100">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-800/80 flex flex-wrap gap-1.5 font-mono text-xs text-zinc-400">
                  {item.tools.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-zinc-800/50 border border-zinc-800 text-zinc-300">
                      {t}
                    </span>
                  ))}
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

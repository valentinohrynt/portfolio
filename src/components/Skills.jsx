import React from 'react';
import { Terminal, Cpu, Database, Smartphone, Wrench, Layers } from 'lucide-react';

const content = {
  id: {
    label: 'ARSITEKTUR & TOOLCHAIN',
    title: 'Keahlian Teknis & Domain Rekayasa',
    intro: 'Klasifikasi teknologi dan toolchain berdasarkan pengalaman implementasi praktis dalam rekayasa perangkat lunak.',
    groups: [
      {
        icon: Terminal,
        title: 'Backend & Server Runtime',
        category: 'Core Engineering',
        skills: ['PHP 8.x', 'Laravel 11/12', 'Node.js', 'Express.js', 'Hono', 'RESTful API Design', 'Middleware Architecture'],
      },
      {
        icon: Database,
        title: 'Database & Data Storage',
        category: 'Data Layer',
        skills: ['MySQL', 'PostgreSQL', 'Prisma ORM', 'Drizzle ORM', 'Relational Schema Design', 'Query Optimization', 'Cloudflare R2'],
      },
      {
        icon: Smartphone,
        title: 'Mobile Application',
        category: 'Client Engineering',
        skills: ['Kotlin', 'Android Jetpack', 'Jetpack Compose', 'MVVM Architecture', 'Room Database', 'Flutter', 'Dart'],
      },
      {
        icon: Layers,
        title: 'Web Frontend & UI',
        category: 'Client Engineering',
        skills: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'HTML5 / Modern CSS'],
      },
      {
        icon: Wrench,
        title: 'Tooling, Testing & DevOps',
        category: 'Workflow & Delivery',
        skills: ['Git / GitHub', 'Linux CLI', 'API Testing (Postman/Curl)', 'Vitest', 'Cloudflare Workers', 'Netlify Edge', 'CI/CD Basics'],
      },
      {
        icon: Cpu,
        title: 'Data & Supporting Services',
        category: 'Auxiliary Stack',
        skills: ['Python', 'Flask', 'Pandas', 'Basic ML Model Bridging', 'Third-Party Webhooks', 'Payment Gateway Integration'],
      },
    ],
  },
  en: {
    label: 'ARCHITECTURE & TOOLCHAIN',
    title: 'Technical Stack & Engineering Domains',
    intro: 'Classification of engineering toolchains structured around hands-on production and application lifecycle experience.',
    groups: [
      {
        icon: Terminal,
        title: 'Backend & Server Runtime',
        category: 'Core Engineering',
        skills: ['PHP 8.x', 'Laravel 11/12', 'Node.js', 'Express.js', 'Hono', 'RESTful API Design', 'Middleware Architecture'],
      },
      {
        icon: Database,
        title: 'Database & Data Storage',
        category: 'Data Layer',
        skills: ['MySQL', 'PostgreSQL', 'Prisma ORM', 'Drizzle ORM', 'Relational Schema Design', 'Query Optimization', 'Cloudflare R2'],
      },
      {
        icon: Smartphone,
        title: 'Mobile Application',
        category: 'Client Engineering',
        skills: ['Kotlin', 'Android Jetpack', 'Jetpack Compose', 'MVVM Architecture', 'Room Database', 'Flutter', 'Dart'],
      },
      {
        icon: Layers,
        title: 'Web Frontend & UI',
        category: 'Client Engineering',
        skills: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'HTML5 / Modern CSS'],
      },
      {
        icon: Wrench,
        title: 'Tooling, Testing & DevOps',
        category: 'Workflow & Delivery',
        skills: ['Git / GitHub', 'Linux CLI', 'API Testing (Postman/Curl)', 'Vitest', 'Cloudflare Workers', 'Netlify Edge', 'CI/CD Basics'],
      },
      {
        icon: Cpu,
        title: 'Data & Supporting Services',
        category: 'Auxiliary Stack',
        skills: ['Python', 'Flask', 'Pandas', 'Basic ML Model Bridging', 'Third-Party Webhooks', 'Payment Gateway Integration'],
      },
    ],
  },
};

const Skills = ({ language = 'id' }) => {
  const text = content[language];

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-slate-800/80">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
            <span className="font-mono text-xs font-semibold tracking-wider text-brand-400 uppercase">{text.label}</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl lg:text-4xl">{text.title}</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-400">{text.intro}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {text.groups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="eng-card rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="h-9 w-9 rounded-lg bg-slate-800 border border-slate-700/80 flex items-center justify-center text-brand-400">
                      <Icon size={18} />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 bg-slate-850 px-2 py-0.5 rounded border border-slate-800">
                      {group.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 mb-4">{group.title}</h3>

                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="code-pill text-xs text-slate-300 px-2.5 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

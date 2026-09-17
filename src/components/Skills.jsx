import React from 'react';

const content = {
  id: {
    label: 'Tech Stack',
    title: 'Teknologi yang biasa saya pakai',
    intro: 'Bahasa pemrograman, framework, dan tools yang pernah saya pakai langsung dalam proyek nyata atau tugas kuliah.',
    groups: [
      {
        title: 'Backend & Server',
        skills: ['PHP 8', 'Laravel', 'Node.js', 'Express', 'Hono', 'REST API'],
      },
      {
        title: 'Database & Storage',
        skills: ['MySQL', 'PostgreSQL', 'Prisma ORM', 'Drizzle ORM', 'Cloudflare R2'],
      },
      {
        title: 'Mobile Development',
        skills: ['Kotlin', 'Android Jetpack', 'Jetpack Compose', 'Room DB', 'Flutter', 'Dart'],
      },
      {
        title: 'Frontend Web',
        skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
      },
      {
        title: 'Tools & Workflow',
        skills: ['Git', 'GitHub', 'Linux Terminal', 'Postman', 'Vitest', 'Cloudflare Workers'],
      },
      {
        title: 'Lainnya & Integrasi',
        skills: ['Python', 'Flask', 'Midtrans Gateway', 'Webhooks', 'Resend API'],
      },
    ],
  },
  en: {
    label: 'Tech Stack',
    title: 'Technologies I frequently use',
    intro: 'Programming languages, frameworks, and developer tools I have worked with on real projects and coursework.',
    groups: [
      {
        title: 'Backend & Server',
        skills: ['PHP 8', 'Laravel', 'Node.js', 'Express', 'Hono', 'REST API'],
      },
      {
        title: 'Database & Storage',
        skills: ['MySQL', 'PostgreSQL', 'Prisma ORM', 'Drizzle ORM', 'Cloudflare R2'],
      },
      {
        title: 'Mobile Development',
        skills: ['Kotlin', 'Android Jetpack', 'Jetpack Compose', 'Room DB', 'Flutter', 'Dart'],
      },
      {
        title: 'Frontend Web',
        skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
      },
      {
        title: 'Tools & Workflow',
        skills: ['Git', 'GitHub', 'Linux Terminal', 'Postman', 'Vitest', 'Cloudflare Workers'],
      },
      {
        title: 'Other & Integrations',
        skills: ['Python', 'Flask', 'Midtrans Gateway', 'Webhooks', 'Resend API'],
      },
    ],
  },
};

const Skills = ({ language = 'id' }) => {
  const text = content[language];

  return (
    <section id="skills" className="py-20 border-b border-dark-800">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <p className="text-xs font-mono text-amber-400/90 tracking-wide uppercase mb-1.5">{text.label}</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">{text.title}</h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-xl">{text.intro}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {text.groups.map((group) => (
            <div key={group.title} className="craft-card p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-zinc-200 mb-3">{group.title}</h3>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {group.skills.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-zinc-850 border border-zinc-800 text-zinc-300">
                      {s}
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

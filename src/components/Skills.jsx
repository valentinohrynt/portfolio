import React from 'react';

const content = {
  id: {
    label: 'Keahlian',
    title: 'Teknologi yang paling sering saya gunakan',
    intro: 'Saya pisahkan teknologi yang memang biasa saya gunakan dari stack yang lebih banyak saya temui lewat proyek terbaru dengan bantuan AI.',
    groups: [
      {
        title: 'Backend & Web',
        skills: ['PHP', 'Laravel', 'JavaScript', 'Node.js', 'Express.js', 'REST API', 'HTML', 'CSS', 'Bootstrap'],
      },
      {
        title: 'Database & Integrasi',
        skills: ['MySQL', 'SQL', 'Perancangan Database Relasional', 'Autentikasi', 'Integrasi API Pihak Ketiga', 'Integrasi Payment Flow'],
      },
      {
        title: 'Mobile',
        skills: ['Kotlin', 'Android', 'Jetpack Compose', 'Flutter', 'Dart', 'Firebase'],
      },
      {
        title: 'Tools & Workflow',
        skills: ['Git', 'GitHub', 'Figma', 'Wireframing', 'API Testing', 'Debugging', 'Deployment', 'Maintenance Aplikasi'],
      },
    ],
    additionalTitle: 'Pengetahuan tambahan',
    additionalText: 'Pernah digunakan dalam coursework, eksperimen, atau sebagai pendukung proyek.',
    additional: ['Python', 'Flask', 'Pandas', 'Analisis Data Dasar', 'Integrasi Layanan Machine Learning'],
    exposureTitle: 'Project exposure',
    exposureText: 'Teknologi berikut digunakan pada proyek yang cukup banyak dibantu AI coding tools, jadi tidak saya masukkan sebagai keahlian utama.',
  },
  en: {
    label: 'Skills',
    title: 'Technologies and day-to-day work',
    intro: 'I separate tools I can work with directly from technologies I have mostly encountered through newer, AI-assisted projects.',
    groups: [
      {
        title: 'Backend & Web',
        skills: ['PHP', 'Laravel', 'JavaScript', 'Node.js', 'Express.js', 'REST API', 'HTML', 'CSS', 'Bootstrap'],
      },
      {
        title: 'Database & Integration',
        skills: ['MySQL', 'SQL', 'Relational Database Design', 'Authentication', 'Third-party API Integration', 'Payment Flow Integration'],
      },
      {
        title: 'Mobile',
        skills: ['Kotlin', 'Android', 'Jetpack Compose', 'Flutter', 'Dart', 'Firebase'],
      },
      {
        title: 'Tools & Workflow',
        skills: ['Git', 'GitHub', 'Figma', 'Wireframing', 'API Testing', 'Debugging', 'Deployment', 'Application Maintenance'],
      },
    ],
    additionalTitle: 'Additional working knowledge',
    additionalText: 'Used in coursework, experiments, or supporting project work.',
    additional: ['Python', 'Flask', 'Pandas', 'Basic Data Analysis', 'Machine-learning service integration'],
    exposureTitle: 'Project exposure',
    exposureText: 'These appear in projects where I relied heavily on AI coding assistance, so I do not list them as core expertise.',
  },
};

const projectExposure = ['React', 'Next.js', 'TypeScript', 'Vite', 'Hono', 'Prisma', 'Drizzle', 'PostgreSQL', 'Cloudflare Workers', 'Cloudflare R2', 'Auth.js'];

const SkillTags = ({ items, muted = false }) => (
  <div className="mt-5 flex flex-wrap gap-2">
    {items.map((skill) => (
      <span key={skill} className={`rounded-lg border border-white/5 bg-white/[0.035] px-3 py-1.5 text-sm font-medium transition hover:border-white/10 hover:text-slate-200 ${muted ? 'text-slate-500' : 'text-slate-300'}`}>
        {skill}
      </span>
    ))}
  </div>
);

const Skills = ({ language = 'id' }) => {
  const text = content[language];

  return (
    <section id="skills" className="border-b border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-medium tracking-wide text-sky-300/90">{text.label}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">{text.title}</h2>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">{text.intro}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {text.groups.map(({ title, skills }) => (
            <div key={title} className="glass-panel-soft rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-200">{title}</h3>
              <SkillTags items={skills} />
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <div className="glass-panel-soft rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-slate-200">{text.additionalTitle}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">{text.additionalText}</p>
            <SkillTags items={text.additional} muted />
          </div>

          <div className="glass-panel-soft rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-slate-200">{text.exposureTitle}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">{text.exposureText}</p>
            <SkillTags items={projectExposure} muted />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

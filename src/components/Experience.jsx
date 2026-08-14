import React from 'react';

const experience = [
  {
    role: 'Software Engineer Intern',
    organization: 'PT Telkom Indonesia',
    period: 'Sep 2025 — Oct 2025',
    location: 'Jember, East Java',
    bullets: [
      'Designed relational MySQL databases for internal systems including Tracer and Vantage.',
      'Developed backend functionality with PHP and Laravel 12 for operational and customer-related workflows.',
      'Worked on web interfaces and integration as part of the end-to-end application development process.',
      'Tracer supported operational asset management, while Vantage covered customer relationship data, ODP mapping, and IndiBiz potential-customer records.',
    ],
    stack: ['PHP', 'Laravel 12', 'MySQL', 'Web Application Development', 'React/Vite (project stack)'],
  },
];

const programs = [
  {
    name: 'Bangkit Academy 2024 — Mobile Development',
    organization: 'led by Google, Tokopedia, Gojek & Traveloka',
    period: 'Sep 2024 — Jan 2025',
    description: 'Focused on native Android development with Kotlin. Graduated with Distinction and worked on MentalQ, a Product Track capstone selected in the Top 50 from 644 teams.',
    tags: ['Kotlin', 'Android', 'Jetpack', 'Team Collaboration'],
  },
  {
    name: 'Indosat Ooredoo Hutchison Digital Camp — Multi-Platform App Developer',
    organization: 'IDCamp',
    period: 'Sep 2024 — Jun 2025',
    description: 'Completed a multi-platform application development learning path focused on Flutter and Dart.',
    tags: ['Flutter', 'Dart', 'Multi-Platform Development'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="border-b border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-medium tracking-wide text-sky-300/90">Experience</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Work and training</h2>
        </div>

        {experience.map((item) => (
          <article key={item.role} className="glass-panel rounded-2xl p-6 sm:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-100">{item.role}</h3>
                <p className="mt-1 font-medium text-slate-300">{item.organization}</p>
                <p className="mt-1 text-sm text-slate-500">{item.location}</p>
              </div>
              <p className="text-sm font-medium text-slate-500 sm:text-right">{item.period}</p>
            </div>

            <ul className="mt-6 space-y-2.5 pl-5 text-sm leading-6 text-slate-400">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="list-disc pl-1 marker:text-slate-600">{bullet}</li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <span key={tech} className="rounded-lg border border-white/5 bg-white/[0.035] px-2.5 py-1 text-xs font-medium text-slate-500">{tech}</span>
              ))}
            </div>
          </article>
        ))}

        <div className="mt-10">
          <h3 className="mb-5 text-lg font-semibold text-slate-200">Development programs</h3>
          <div className="grid gap-5 lg:grid-cols-2">
            {programs.map((program) => (
              <article key={program.name} className="glass-panel-soft rounded-2xl p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                  <div>
                    <h4 className="font-semibold leading-6 text-slate-200">{program.name}</h4>
                    <p className="mt-1 text-sm text-slate-500">{program.organization}</p>
                  </div>
                  <p className="shrink-0 text-sm font-medium text-slate-600">{program.period}</p>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-400">{program.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {program.tags.map((tag) => (
                    <span key={tag} className="rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-500">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

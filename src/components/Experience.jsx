import React from 'react';
import { BriefcaseBusiness, GraduationCap } from 'lucide-react';

const experience = [
  {
    role: 'Software Engineer Intern',
    organization: 'PT Telkom Indonesia',
    period: 'Sep 2025 — Oct 2025',
    location: 'Jember, East Java',
    bullets: [
      'Designed relational MySQL databases for internal operational systems, including Tracer and Vantage.',
      'Developed backend functionality with PHP and Laravel 12 for asset/operational workflows and customer-related data processes.',
      'Implemented and integrated web interfaces as part of the end-to-end delivery of internal applications.',
      'Worked on Tracer for operational asset management/diagnostics and Vantage for customer relationship, ODP mapping, and IndiBiz potential-customer data.',
    ],
    stack: ['PHP', 'Laravel 12', 'MySQL', 'REST-style Web Development', 'React/Vite (project stack)'],
  },
];

const programs = [
  {
    name: 'Bangkit Academy 2024 — Mobile Development',
    organization: 'led by Google, GoTo, and Traveloka',
    period: 'Sep 2024 — Jan 2025',
    description:
      'Focused on native Android development with Kotlin. Graduated with Distinction and contributed to MentalQ, a Product Track capstone selected in the Top 50 from 644 teams.',
    tags: ['Kotlin', 'Android', 'Jetpack', 'Team Collaboration'],
  },
  {
    name: 'Indosat Ooredoo Hutchison Digital Camp — Multi-Platform App Developer',
    organization: 'IDCamp',
    period: 'Sep 2024 — Jun 2025',
    description:
      'Completed a multi-platform application development learning path focused on Flutter and Dart, progressing through structured mobile-development coursework.',
    tags: ['Flutter', 'Dart', 'Multi-Platform Development'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="border-t border-slate-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Experience</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Work experience and structured development programs.</h2>
        </div>

        <div className="space-y-5">
          {experience.map((item) => (
            <article key={item.role} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-3">
                  <span className="mt-0.5 h-fit rounded-lg bg-blue-50 p-2 text-blue-700"><BriefcaseBusiness size={18} /></span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{item.role}</h3>
                    <p className="mt-1 font-medium text-slate-700">{item.organization}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.location}</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-500 sm:text-right">{item.period}</p>
              </div>

              <ul className="mt-6 space-y-2.5 pl-5 text-sm leading-6 text-slate-600">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="list-disc pl-1">{bullet}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span key={tech} className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <div className="mb-5 flex items-center gap-3">
            <span className="rounded-lg bg-emerald-50 p-2 text-emerald-700"><GraduationCap size={18} /></span>
            <h3 className="text-xl font-semibold text-slate-950">Selected development programs</h3>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {programs.map((program) => (
              <article key={program.name} className="rounded-2xl border border-slate-200 p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                  <div>
                    <h4 className="font-semibold leading-6 text-slate-950">{program.name}</h4>
                    <p className="mt-1 text-sm text-slate-500">{program.organization}</p>
                  </div>
                  <p className="shrink-0 text-sm font-medium text-slate-500">{program.period}</p>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{program.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {program.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{tag}</span>
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

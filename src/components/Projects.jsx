import React, { useState } from 'react';
import { ArrowUpRight, Github, LockKeyhole, X } from 'lucide-react';

const projects = [
  {
    title: 'ManusiaIn',
    category: 'AI product / SaaS',
    summary: 'Web app for rewriting Indonesian text with user accounts, credit usage, top-up payments, and multiple AI providers.',
    stack: ['Next.js', 'TypeScript', 'Hono', 'PostgreSQL', 'Prisma', 'Cloudflare Workers', 'Midtrans', 'Gemini / Groq'],
    aiAssisted: true,
    involvement: 'I defined the product flow and requirements, used AI coding tools heavily during implementation, then tested integrations, debugged issues, and iterated on the product behavior.',
    highlights: [
      'Connected multiple AI providers for text-processing workflows.',
      'Worked through account, credit, top-up, and Midtrans payment flows.',
      'Tested and debugged behavior across the frontend, API, database, and payment integration.',
    ],
  },
  {
    title: 'Invte',
    category: 'Event SaaS / web + mobile',
    summary: 'Digital invitation and guest-management platform with RSVP flows and a Flutter companion app for QR check-in.',
    stack: ['Next.js', 'TypeScript', 'Hono', 'Drizzle', 'PostgreSQL', 'Cloudflare', 'R2', 'Flutter'],
    aiAssisted: true,
    involvement: 'I worked on the product flow, feature requirements, integration checks, and the Flutter QR-scanner companion app, while using AI coding assistance for much of the web/API implementation.',
    highlights: [
      'Worked on invitation, guest, RSVP, media, and check-in flows.',
      'Connected the web app with API, database, storage, email, and QR-related features.',
      'Built the Flutter companion scanner for guest check-in.',
    ],
  },
  {
    title: 'Kudos',
    category: 'Digital gift / SaaS',
    summary: 'Customizable digital gift and greeting pages with authentication, templates, QR generation, media handling, and protected gift links.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle', 'Auth.js', 'Cloudflare', 'Resend', 'Vitest / Playwright'],
    aiAssisted: true,
    involvement: 'I turned the product idea into user flows and requirements, then used AI-assisted development to implement, test, and refine the application.',
    highlights: [
      'Worked on reusable gift-page templates and QR-based sharing flows.',
      'Integrated authentication, media handling, email, and protected gift links.',
      'Included unit/integration and end-to-end testing tooling in the project.',
    ],
  },
  {
    title: 'StockHub',
    category: 'Inventory / supply chain',
    summary: 'Inventory and supply-chain management system for café and roastery operations, with a separate forecasting experiment.',
    stack: ['Laravel 12', 'PHP', 'Tailwind CSS', 'Python', 'Flask', 'LSTM'],
    aiAssisted: true,
    github: 'https://github.com/valentinohrynt/stockhub-scm',
    involvement: 'I mapped the inventory and supply-chain workflows and used AI coding assistance to move faster across both the Laravel application and the forecasting experiment.',
    highlights: [
      'Built inventory and supply-chain workflows in Laravel 12.',
      'Explored forecasting in a separate Python/Flask and LSTM codebase.',
      'Translated operational requirements into application flows and data handling.',
    ],
  },
  {
    title: 'AgroSewa',
    category: 'Web application / team project',
    summary: 'Multi-role agricultural equipment-rental system for farmers, farmer groups, government users, and administrators.',
    stack: ['Laravel 11', 'PHP', 'MySQL', 'MVC', 'Role-based Access'],
    aiAssisted: false,
    github: 'https://github.com/valentinohrynt/AgroSewa-PPL-A07',
    involvement: 'I contributed to the Laravel application and its role-specific workflows for equipment rental, user management, rental history, and assistance requests.',
    highlights: [
      'Implemented business workflows for several user roles.',
      'Worked with Laravel MVC, authentication/authorization, relational data, and forms.',
      'Collaborated in a shared team codebase.',
    ],
  },
  {
    title: 'MentalQ',
    category: 'Android / Bangkit capstone',
    summary: 'Android mental-health journaling application that analyzes daily notes and supports reflection and chat features.',
    stack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Retrofit', 'Room', 'Firebase', 'Hilt', 'Gemini API'],
    aiAssisted: false,
    github: 'https://github.com/valentinohrynt/MentalQ-MD',
    involvement: 'I worked as part of the Mobile Development team on the native Android app and collaborated with Machine Learning and Cloud Computing teammates.',
    highlights: [
      'Built Android features with Kotlin and Jetpack Compose.',
      'Worked with Retrofit, Room, Firebase, and dependency injection.',
      'The capstone was selected in the Top 50 Product Track projects from 644 Bangkit teams.',
    ],
  },
];

const otherProjects = [
  'Jember FnB Loker',
  'DESTINA',
  'Restaurant Review',
  'Anime Movie',
  'SutoriApp',
  'Dicoding Event',
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="border-b border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-medium tracking-wide text-sky-300/85">Projects</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Selected projects</h2>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            A few projects that show the kind of problems and products I have worked on.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="glass-panel-soft flex h-full flex-col rounded-2xl p-6 transition duration-200 hover:border-white/10 hover:bg-white/[0.035]">
              <div className="mb-4">
                <p className="text-sm font-medium text-sky-300/75">{project.category}</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-slate-100">{project.title}</h3>
              </div>

              <p className="text-sm leading-6 text-slate-400">{project.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 6).map((item) => (
                  <span key={item} className="rounded-lg border border-white/5 bg-white/[0.025] px-2.5 py-1 text-xs font-medium text-slate-400">{item}</span>
                ))}
                {project.stack.length > 6 && (
                  <span className="rounded-lg border border-white/5 bg-white/[0.025] px-2.5 py-1 text-xs font-medium text-slate-500">+{project.stack.length - 6}</span>
                )}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300 transition hover:text-sky-200"
                >
                  Details <ArrowUpRight size={15} />
                </button>
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-slate-300">
                    <Github size={15} /> Repository
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                    <LockKeyhole size={14} /> Private repository
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="glass-panel-soft mt-8 rounded-2xl p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-semibold text-slate-200">More projects</h3>
              <p className="mt-1 text-sm text-slate-500">Coursework, experiments, and earlier web/mobile work.</p>
            </div>
            <a href="https://github.com/valentinohrynt?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200">
              Browse GitHub <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherProjects.map((project) => (
              <span key={project} className="rounded-full border border-white/5 bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-slate-500">{project}</span>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={`${selectedProject.title} project details`}>
          <div className="glass-panel max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-black/95 p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-sky-300/75">{selectedProject.category}</p>
                <h3 className="mt-1 text-3xl font-semibold tracking-tight text-slate-100">{selectedProject.title}</h3>
              </div>
              <button type="button" onClick={() => setSelectedProject(null)} className="rounded-lg border border-white/5 bg-white/[0.025] p-2 text-slate-500 hover:text-slate-200" aria-label="Close project details">
                <X size={20} />
              </button>
            </div>

            {selectedProject.aiAssisted && (
              <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <p className="text-sm leading-6 text-slate-400">
                  <span className="font-semibold text-slate-300">Development note:</span> this project was built with substantial AI coding assistance. The technologies below describe the project stack, not necessarily my level of expertise in each framework.
                </p>
              </div>
            )}

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">My involvement</h4>
              <p className="mt-2 leading-7 text-slate-300">{selectedProject.involvement}</p>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">Key points</h4>
              <ul className="mt-3 space-y-3 pl-5 text-sm leading-6 text-slate-400">
                {selectedProject.highlights.map((item) => (
                  <li key={item} className="list-disc pl-1 marker:text-slate-600">{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">Technology used</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedProject.stack.map((item) => (
                  <span key={item} className="rounded-lg border border-white/5 bg-white/[0.025] px-2.5 py-1.5 text-xs font-medium text-slate-400">{item}</span>
                ))}
              </div>
            </div>

            {selectedProject.github && (
              <a href={selectedProject.github} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-2.5 text-sm font-semibold text-slate-100 hover:bg-white/[0.1]">
                <Github size={16} /> Open repository
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

import React, { useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  LockKeyhole,
  Sparkles,
  X,
} from 'lucide-react';

const projects = [
  {
    title: 'ManusiaIn',
    category: 'AI Product · SaaS',
    summary:
      'Indonesian AI text-humanization platform with authentication, credit usage, top-up payments, and multiple AI providers.',
    stack: ['Next.js', 'TypeScript', 'Hono', 'PostgreSQL', 'Prisma', 'Cloudflare Workers', 'Midtrans', 'Gemini / Groq'],
    aiAssisted: true,
    privateRepo: true,
    involvement:
      'I defined the product requirements and user flows, used AI coding tools to accelerate implementation across a stack I was still exploring, then validated integrations, tested behavior, debugged failures, and iterated on the product.',
    highlights: [
      'Integrated multiple AI providers for text-processing workflows.',
      'Implemented and validated account, credit, top-up, and payment flows.',
      'Tested API behavior and resolved integration issues across frontend, backend, database, and payment services.',
    ],
  },
  {
    title: 'Invte',
    category: 'Event SaaS · Web + Mobile',
    summary:
      'Multi-tenant digital invitation and guest-management platform with RSVP flows and a Flutter companion app for QR check-in.',
    stack: ['Next.js', 'TypeScript', 'Hono', 'Drizzle', 'PostgreSQL', 'Cloudflare', 'R2', 'Flutter'],
    aiAssisted: true,
    privateRepo: true,
    involvement:
      'I shaped the product flow and feature requirements, used AI-assisted implementation for the web/API stack, and validated invitation, guest, RSVP, media, and check-in workflows. I also worked on the Flutter QR-scanner companion app.',
    highlights: [
      'Designed around multi-tenant invitation and guest-management workflows.',
      'Connected web, API, database, storage, email, and QR check-in flows.',
      'Built a Flutter companion scanner used for event guest check-in.',
    ],
  },
  {
    title: 'Kudos',
    category: 'Digital Gift · SaaS',
    summary:
      'Customizable digital gift and greeting-page product with authentication, templates, QR generation, media handling, and security-oriented flows.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle', 'Auth.js', 'Cloudflare', 'Resend', 'Vitest / Playwright'],
    aiAssisted: true,
    privateRepo: true,
    involvement:
      'I translated the product idea into requirements and user flows, then used AI-assisted development to implement and validate the application. My work focused on product behavior, integration checks, debugging, and iteration rather than claiming deep expertise in every framework used.',
    highlights: [
      'Structured a reusable gift-page and template workflow.',
      'Worked with authentication, QR generation, media, email, and protected gift-link flows.',
      'Included automated testing tooling for unit/integration and end-to-end scenarios.',
    ],
  },
  {
    title: 'StockHub',
    category: 'Inventory · Supply Chain',
    summary:
      'Inventory and supply-chain management system for café/roastery operations, with a Laravel application and separate forecasting experiments.',
    stack: ['Laravel 12', 'PHP', 'Tailwind CSS', 'Python', 'Flask', 'LSTM'],
    aiAssisted: true,
    privateRepo: false,
    github: 'https://github.com/valentinohrynt/stockhub-scm',
    involvement:
      'I defined the inventory and supply-chain workflows and used AI-assisted development to move quickly across the application and forecasting components, while checking the resulting behavior, data flow, and integration points.',
    highlights: [
      'Built inventory and supply-chain workflows in a Laravel 12 application.',
      'Explored forecasting through a separate Python/Flask and LSTM codebase.',
      'Focused on translating operational requirements into usable application flows.',
    ],
  },
  {
    title: 'AgroSewa',
    category: 'Web Application · Team Project',
    summary:
      'Multi-role agricultural equipment-rental system supporting farmers, farmer groups, government users, and administrators.',
    stack: ['Laravel 11', 'PHP', 'MySQL', 'MVC', 'Role-based Access'],
    aiAssisted: false,
    privateRepo: false,
    github: 'https://github.com/valentinohrynt/AgroSewa-PPL-A07',
    involvement:
      'I contributed to a collaborative Laravel application with role-specific workflows covering equipment rental, user management, rental history, and assistance-request processes.',
    highlights: [
      'Implemented business workflows for several user roles.',
      'Worked with Laravel MVC, authentication/authorization, relational data, and form-driven processes.',
      'Collaborated within a team project and a shared application codebase.',
    ],
  },
  {
    title: 'MentalQ',
    category: 'Android · Bangkit Capstone',
    summary:
      'Android mental-health journaling application that analyzes daily notes and supports personalized reflection and chat experiences.',
    stack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Retrofit', 'Room', 'Firebase', 'Hilt', 'Gemini API'],
    aiAssisted: false,
    privateRepo: false,
    github: 'https://github.com/valentinohrynt/MentalQ-MD',
    involvement:
      'As part of the Mobile Development team, I worked on the native Android application and collaborated with Machine Learning and Cloud Computing teammates to connect product features and services.',
    highlights: [
      'Built Android features using Kotlin and Jetpack Compose.',
      'Integrated API/data layers with Retrofit, Room, Firebase, and dependency injection.',
      'Selected as a Top 50 Product Track capstone project from 644 Bangkit teams.',
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
    <section id="work" className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Selected work</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Projects with context, not a repository dump.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            I curate the projects that best represent how I work. For AI-assisted projects, I explicitly separate product ownership and implementation exposure from technologies I claim as core skills.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-blue-700">{project.category}</p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">{project.title}</h3>
                </div>
                {project.aiAssisted && (
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700 ring-1 ring-inset ring-violet-200">
                    <Sparkles size={13} /> AI-assisted
                  </span>
                )}
              </div>

              <p className="text-sm leading-6 text-slate-600">{project.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 6).map((item) => (
                  <span key={item} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">{item}</span>
                ))}
                {project.stack.length > 6 && (
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">+{project.stack.length - 6}</span>
                )}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900"
                >
                  View case study <ArrowUpRight size={15} />
                </button>
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900">
                    <Github size={15} /> Repository
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                    <LockKeyhole size={14} /> Private repository
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-semibold text-slate-950">More projects</h3>
              <p className="mt-1 text-sm text-slate-500">Smaller coursework, experiments, and earlier full-stack/mobile work remain available on GitHub.</p>
            </div>
            <a href="https://github.com/valentinohrynt?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900">
              Browse GitHub <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherProjects.map((project) => (
              <span key={project} className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600">{project}</span>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${selectedProject.title} case study`}>
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-blue-700">{selectedProject.category}</p>
                <h3 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">{selectedProject.title}</h3>
              </div>
              <button type="button" onClick={() => setSelectedProject(null)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900" aria-label="Close case study">
                <X size={20} />
              </button>
            </div>

            {selectedProject.aiAssisted && (
              <div className="mt-6 rounded-xl border border-violet-200 bg-violet-50 p-4">
                <div className="flex items-center gap-2 font-semibold text-violet-800"><Sparkles size={16} /> Development approach</div>
                <p className="mt-2 text-sm leading-6 text-violet-900/80">
                  This project used an AI-assisted development workflow. The stack below describes the technologies used by the product; it does not imply deep expertise in every framework.
                </p>
              </div>
            )}

            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">My involvement</h4>
              <p className="mt-2 leading-7 text-slate-700">{selectedProject.involvement}</p>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Key points</h4>
              <ul className="mt-3 space-y-3">
                {selectedProject.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-blue-700" size={17} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Technology used</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedProject.stack.map((item) => (
                  <span key={item} className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700">{item}</span>
                ))}
              </div>
            </div>

            {selectedProject.github && (
              <a href={selectedProject.github} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">
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

import React from 'react';
import { Braces, Database, GitBranch, Layers, Smartphone, Sparkles } from 'lucide-react';

const groups = [
  {
    title: 'Backend & Web',
    icon: Braces,
    skills: ['PHP', 'Laravel', 'JavaScript', 'Node.js', 'Express.js', 'REST API', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MySQL', 'SQL', 'Relational Database Design'],
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: ['Kotlin', 'Android', 'Flutter', 'Dart'],
  },
  {
    title: 'Tools & Workflow',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'Visual Studio Code', 'Android Studio', 'API Testing', 'Debugging'],
  },
];

const additional = ['Python', 'Flask', 'Pandas', 'Basic Data Analysis'];
const aiExposure = ['React', 'Next.js', 'TypeScript', 'Hono', 'Prisma', 'Drizzle', 'PostgreSQL', 'Cloudflare Workers', 'Cloudflare R2', 'Auth.js'];

const Skills = () => {
  return (
    <section id="skills" className="border-t border-slate-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Skills</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">A clearer picture of what I know versus what I have used.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Core skills are technologies I can discuss and work with directly. Project exposure lists technologies used in AI-assisted builds and is intentionally not presented as deep expertise.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {groups.map(({ title, icon: Icon, skills }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-blue-50 p-2 text-blue-700"><Icon size={18} /></span>
                <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-emerald-50 p-2 text-emerald-700"><Layers size={18} /></span>
              <div>
                <h3 className="text-lg font-semibold text-slate-950">Additional working knowledge</h3>
                <p className="mt-0.5 text-sm text-slate-500">Used in coursework, experiments, or supporting project work.</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {additional.map((skill) => (
                <span key={skill} className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200">{skill}</span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-white p-2 text-violet-700 ring-1 ring-inset ring-violet-200"><Sparkles size={18} /></span>
              <div>
                <h3 className="text-lg font-semibold text-slate-950">AI-assisted project exposure</h3>
                <p className="mt-0.5 text-sm text-slate-600">Technologies used in products I built with substantial AI coding assistance.</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {aiExposure.map((skill) => (
                <span key={skill} className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-violet-800 ring-1 ring-inset ring-violet-200">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';

const groups = [
  {
    title: 'Backend & Web',
    skills: ['PHP', 'Laravel', 'JavaScript', 'Node.js', 'Express.js', 'REST API', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'SQL', 'Relational Database Design'],
  },
  {
    title: 'Mobile',
    skills: ['Kotlin', 'Android', 'Flutter', 'Dart'],
  },
  {
    title: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'Visual Studio Code', 'Android Studio', 'API Testing', 'Debugging'],
  },
];

const additional = ['Python', 'Flask', 'Pandas', 'Basic Data Analysis'];
const projectExposure = ['React', 'Next.js', 'TypeScript', 'Hono', 'Prisma', 'Drizzle', 'PostgreSQL', 'Cloudflare Workers', 'Cloudflare R2', 'Auth.js'];

const SkillTags = ({ items, muted = false }) => (
  <div className="mt-5 flex flex-wrap gap-2">
    {items.map((skill) => (
      <span
        key={skill}
        className={`rounded-lg border border-white/5 bg-white/[0.035] px-3 py-1.5 text-sm font-medium ${muted ? 'text-slate-500' : 'text-slate-300'}`}
      >
        {skill}
      </span>
    ))}
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="border-b border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-medium tracking-wide text-sky-300/90">Skills</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Technologies I use most often</h2>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            Core skills are listed separately from tools I have mainly encountered while working on newer projects.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {groups.map(({ title, skills }) => (
            <div key={title} className="glass-panel-soft rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-200">{title}</h3>
              <SkillTags items={skills} />
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <div className="glass-panel-soft rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-slate-200">Additional working knowledge</h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">Used in coursework, experiments, or supporting project work.</p>
            <SkillTags items={additional} muted />
          </div>

          <div className="glass-panel-soft rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-slate-200">Project exposure</h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Used in projects where I relied heavily on AI coding assistance; listed here as exposure rather than core skills.
            </p>
            <SkillTags items={projectExposure} muted />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

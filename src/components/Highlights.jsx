import React from 'react';

const certifications = [
  {
    title: 'Dev Certified for Android',
    issuer: 'dev.cert by dev.id',
    note: 'Issued May 2025',
  },
  {
    title: 'Multi-Platform App Developer Expert Learning Path',
    issuer: 'Indosat Ooredoo Hutchison Digital Camp (IDCamp)',
    note: 'Flutter and Dart',
  },
  {
    title: 'Android Development Learning Path',
    issuer: 'Dicoding Indonesia',
    note: 'Kotlin, Android, and ML for Android',
  },
  {
    title: 'Full-Stack JavaScript & Backend Development',
    issuer: 'CODEPOLITAN',
    note: '12 course certifications covering Node.js, Express.js, REST APIs, JavaScript, HTML/CSS, and Bootstrap',
  },
  {
    title: 'Data, AI & Programming Foundations',
    issuer: 'Dicoding Indonesia & freeCodeCamp',
    note: 'SQL, data visualization, AI fundamentals, Git/GitHub, Python scientific computing, and responsive web design',
  },
];

const achievements = [
  {
    title: 'Distinction Graduate — Mobile Development',
    organization: 'Bangkit Academy 2024 Batch 2',
  },
  {
    title: 'Top 50 Product Track Capstone Project',
    organization: 'MentalQ · Selected from 644 Bangkit teams',
  },
  {
    title: '1st Winner — Poster Design',
    organization: 'Digital Campaign Competition · 2023',
  },
];

const Highlights = () => {
  return (
    <section id="credentials" className="border-b border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-medium tracking-wide text-sky-300/90">Education & credentials</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Education, certifications, and achievements</h2>
        </div>

        <div className="mb-6 grid gap-5 md:grid-cols-2">
          <div className="glass-panel-soft rounded-2xl p-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600">Education</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-200">Information Systems</h3>
            <p className="mt-1 text-sm text-slate-400">University of Jember · 2022–2026</p>
            <p className="mt-4 text-2xl font-semibold text-slate-100">3.94 <span className="text-sm font-normal text-slate-500">/ 4.00 GPA</span></p>
          </div>

          <div className="glass-panel-soft rounded-2xl p-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600">Languages</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-200">Indonesian & English</h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">Indonesian: native · English: working proficiency</p>
            <p className="mt-4 text-2xl font-semibold text-slate-100">553 <span className="text-sm font-normal text-slate-500">TOEFL score</span></p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="glass-panel rounded-2xl p-6 sm:p-7">
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-slate-200">Selected certifications</h3>
              <p className="mt-1 text-sm text-slate-500">34 certifications completed in total.</p>
            </div>

            <div className="divide-y divide-white/5">
              {certifications.map((cert) => (
                <div key={cert.title} className="py-4 first:pt-0 last:pb-0">
                  <h4 className="font-semibold text-slate-200">{cert.title}</h4>
                  <p className="mt-1 text-sm font-medium text-sky-300/80">{cert.issuer}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{cert.note}</p>
                </div>
              ))}
            </div>

            <a href="https://www.linkedin.com/in/valentinohariyanto" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:gap-2.5 hover:text-sky-200">
              View full list on LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="glass-panel-soft rounded-2xl p-6 sm:p-7">
            <h3 className="mb-5 text-lg font-semibold text-slate-200">Achievements</h3>
            <div className="space-y-5">
              {achievements.map((item) => (
                <div key={item.title}>
                  <h4 className="font-semibold leading-6 text-slate-200">{item.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{item.organization}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;

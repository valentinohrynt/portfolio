import React from 'react';
import { Award, BadgeCheck, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Dev Certified for Android',
    issuer: 'dev.cert by dev.id',
    note: 'Professional Android certification · Issued May 2025',
  },
  {
    title: 'Multi-Platform App Developer Expert Learning Path',
    issuer: 'Indosat Ooredoo Hutchison Digital Camp (IDCamp)',
    note: 'Flutter & Dart multi-platform development path',
  },
  {
    title: 'Android Development Learning Path',
    issuer: 'Dicoding Indonesia',
    note: 'Kotlin, Android fundamentals/intermediate, and ML for Android',
  },
  {
    title: 'Full-Stack JavaScript & Backend Development',
    issuer: 'CODEPOLITAN',
    note: '12 course certifications covering Node.js, Express.js, REST API, JavaScript, HTML/CSS, and Bootstrap',
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
    <section id="credentials" className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Credentials</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Selected certifications and achievements.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            I keep the portfolio focused on representative credentials instead of listing every course individually. My LinkedIn contains the complete certification history.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-lg bg-blue-50 p-2 text-blue-700"><BadgeCheck size={18} /></span>
              <div>
                <h3 className="text-lg font-semibold text-slate-950">Selected certifications</h3>
                <p className="mt-0.5 text-sm text-slate-500">34 certifications completed in total.</p>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {certifications.map((cert) => (
                <div key={cert.title} className="py-4 first:pt-0 last:pb-0">
                  <h4 className="font-semibold text-slate-900">{cert.title}</h4>
                  <p className="mt-1 text-sm font-medium text-blue-700">{cert.issuer}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{cert.note}</p>
                </div>
              ))}
            </div>

            <a href="https://www.linkedin.com/in/valentinohariyanto" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900">
              View full credentials on LinkedIn <ExternalLink size={14} />
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-lg bg-amber-50 p-2 text-amber-700"><Award size={18} /></span>
              <h3 className="text-lg font-semibold text-slate-950">Achievements</h3>
            </div>

            <div className="space-y-5">
              {achievements.map((item) => (
                <div key={item.title}>
                  <h4 className="font-semibold leading-6 text-slate-900">{item.title}</h4>
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

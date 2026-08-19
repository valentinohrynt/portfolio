import React from 'react';

const content = {
  id: {
    label: 'Pendidikan & sertifikasi',
    title: 'Pendidikan, sertifikasi, dan pencapaian',
    educationLabel: 'Pendidikan',
    degree: 'Sistem Informasi',
    university: 'Universitas Jember · 2022–2026',
    gpaLabel: '/ 4,00 IPK',
    languageLabel: 'Bahasa',
    languages: 'Indonesia & Inggris',
    languageDescription: 'Indonesia: native · Inggris: working proficiency',
    toeflLabel: 'nilai TOEFL',
    certTitle: 'Sertifikasi pilihan',
    certTotal: 'Total 34 sertifikasi tercantum di LinkedIn.',
    viewAll: 'Lihat daftar lengkap di LinkedIn',
    achievementTitle: 'Pencapaian',
    certifications: [
      {
        title: 'Dev Certified for Android',
        issuer: 'dev.cert by dev.id',
        note: 'Terbit Mei 2025',
      },
      {
        title: 'Multi-Platform App Developer Expert Learning Path',
        issuer: 'Indosat Ooredoo Hutchison Digital Camp (IDCamp)',
        note: 'Flutter dan Dart',
      },
      {
        title: 'Android Development Learning Path',
        issuer: 'Dicoding Indonesia',
        note: 'Kotlin, Android, dan penerapan ML untuk Android',
      },
      {
        title: 'Full-Stack JavaScript & Backend Development',
        issuer: 'CODEPOLITAN',
        note: '12 sertifikat course yang mencakup Node.js, Express.js, REST API, JavaScript, HTML/CSS, dan Bootstrap',
      },
      {
        title: 'Data, AI & Programming Foundations',
        issuer: 'Dicoding Indonesia & freeCodeCamp',
        note: 'SQL, visualisasi data, dasar AI, Git/GitHub, scientific computing dengan Python, dan responsive web design',
      },
    ],
    achievements: [
      {
        title: 'Distinction Graduate — Mobile Development',
        organization: 'Bangkit Academy 2024 Batch 2',
      },
      {
        title: 'Top 50 Product Track Capstone Project',
        organization: 'MentalQ · terpilih dari 644 tim Bangkit',
      },
      {
        title: 'Juara 1 Poster Design',
        organization: 'Digital Campaign Competition · 2023',
      },
    ],
  },
  en: {
    label: 'Education & credentials',
    title: 'Education, certifications, and achievements',
    educationLabel: 'Education',
    degree: 'Information Systems',
    university: 'University of Jember · 2022–2026',
    gpaLabel: '/ 4.00 GPA',
    languageLabel: 'Languages',
    languages: 'Indonesian & English',
    languageDescription: 'Indonesian: native · English: working proficiency',
    toeflLabel: 'TOEFL score',
    certTitle: 'Selected certifications',
    certTotal: '34 certifications completed in total.',
    viewAll: 'View full list on LinkedIn',
    achievementTitle: 'Achievements',
    certifications: [
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
    ],
    achievements: [
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
    ],
  },
};

const Highlights = ({ language = 'id' }) => {
  const text = content[language];

  return (
    <section id="credentials" className="border-b border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-medium tracking-wide text-sky-300/90">{text.label}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">{text.title}</h2>
        </div>

        <div className="mb-6 grid gap-5 md:grid-cols-2">
          <div className="glass-panel-soft rounded-2xl p-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600">{text.educationLabel}</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-200">{text.degree}</h3>
            <p className="mt-1 text-sm text-slate-400">{text.university}</p>
            <p className="mt-4 text-2xl font-semibold text-slate-100">{language === 'id' ? '3,94' : '3.94'} <span className="text-sm font-normal text-slate-500">{text.gpaLabel}</span></p>
          </div>

          <div className="glass-panel-soft rounded-2xl p-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600">{text.languageLabel}</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-200">{text.languages}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">{text.languageDescription}</p>
            <p className="mt-4 text-2xl font-semibold text-slate-100">553 <span className="text-sm font-normal text-slate-500">{text.toeflLabel}</span></p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="glass-panel rounded-2xl p-6 sm:p-7">
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-slate-200">{text.certTitle}</h3>
              <p className="mt-1 text-sm text-slate-500">{text.certTotal}</p>
            </div>

            <div className="divide-y divide-white/5">
              {text.certifications.map((cert) => (
                <div key={cert.title} className="py-4 first:pt-0 last:pb-0">
                  <h4 className="font-semibold text-slate-200">{cert.title}</h4>
                  <p className="mt-1 text-sm font-medium text-sky-300/80">{cert.issuer}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{cert.note}</p>
                </div>
              ))}
            </div>

            <a href="https://www.linkedin.com/in/valentinohariyanto" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:gap-2.5 hover:text-sky-200">
              {text.viewAll} <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="glass-panel-soft rounded-2xl p-6 sm:p-7">
            <h3 className="mb-5 text-lg font-semibold text-slate-200">{text.achievementTitle}</h3>
            <div className="space-y-5">
              {text.achievements.map((item) => (
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

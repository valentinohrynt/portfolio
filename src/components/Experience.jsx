import React from 'react';

const content = {
  id: {
    label: 'Pengalaman',
    title: 'Kerja, pelatihan, dan organisasi',
    experience: {
      role: 'Software Engineer Intern (PKL)',
      organization: 'PT Telkom Indonesia',
      period: 'Sep 2025 — Okt 2025',
      location: 'Jember, Jawa Timur',
      bullets: [
        'Merancang database MySQL untuk TRACER, sistem internal yang digunakan untuk pengelolaan aset dan peralatan operasional Telkom area Jember.',
        'Mengembangkan backend dan REST API TRACER dengan PHP dan Laravel 12, termasuk pengelolaan data, autentikasi, hak akses, dan integrasi layanan aplikasi.',
        'Mengerjakan antarmuka web TRACER menggunakan React, Vite, dan Tailwind CSS sebagai stack proyek, lalu menghubungkannya dengan backend melalui API.',
        'Merancang database dan backend Laravel untuk VANTAGE yang menangani data customer relationship, pemetaan ODP, dan pendataan potential customer IndiBiz.',
        'Mengintegrasikan layanan machine learning berbasis Python/Flask untuk churn prediction, usage forecasting, customer segmentation, dan customer lifetime value analysis.',
      ],
      stack: ['PHP', 'Laravel 12', 'MySQL', 'REST API', 'Integrasi Python / Flask', 'React / Vite sebagai stack proyek'],
    },
    programsTitle: 'Program pengembangan',
    programs: [
      {
        name: 'Bangkit Academy 2024 — Mobile Development',
        organization: 'led by Google, Tokopedia, Gojek & Traveloka',
        period: 'Sep 2024 — Jan 2025',
        description: 'Mengikuti jalur Android Development dengan Kotlin dan lulus dengan predikat Distinction. Saya juga mengerjakan MentalQ sebagai capstone Product Track yang masuk Top 50 dari 644 tim.',
        tags: ['Kotlin', 'Android', 'Jetpack', 'Kolaborasi Tim'],
      },
      {
        name: 'Indosat Ooredoo Hutchison Digital Camp — Multi-Platform App Developer',
        organization: 'IDCamp',
        period: 'Sep 2024 — Jun 2025',
        description: 'Menyelesaikan jalur pengembangan aplikasi multi-platform dengan fokus Flutter dan Dart sampai kelas tingkat Intermediate dan Expert.',
        tags: ['Flutter', 'Dart', 'Multi-Platform Development'],
      },
    ],
    organization: {
      role: 'Staf HUMAS',
      organization: 'Serigala Sistem Informasi — HIMASIF, Universitas Jember',
      period: 'Okt 2022 — Agu 2023',
      bullets: [
        'Menghubungi dosen dan akademisi untuk menjadi pemateri pelatihan atau seminar terkait kompetisi IT, lalu mengoordinasikan jadwal dan ketersediaannya dengan tim.',
        'Menyusun wireframe awal untuk konten Instagram, berkoordinasi dengan tim desain, mengatur jadwal publikasi, dan menyampaikan informasi kegiatan kepada peserta.',
      ],
    },
  },
  en: {
    label: 'Experience',
    title: 'Work, training, and organization',
    experience: {
      role: 'Software Engineer Intern',
      organization: 'PT Telkom Indonesia',
      period: 'Sep 2025 — Oct 2025',
      location: 'Jember, East Java',
      bullets: [
        'Designed MySQL databases for TRACER, an internal system for managing operational assets and equipment in the Jember area.',
        'Built TRACER backend and REST API features with PHP and Laravel 12, including data management, authentication, access control, and application-service integration.',
        'Worked on the TRACER web interface using React, Vite, and Tailwind CSS as the project stack, and connected it to the backend APIs.',
        'Designed the database and Laravel backend for VANTAGE, covering customer relationship data, ODP mapping, and potential IndiBiz customer records.',
        'Integrated a Python/Flask machine-learning service for churn prediction, usage forecasting, customer segmentation, and customer lifetime value analysis.',
      ],
      stack: ['PHP', 'Laravel 12', 'MySQL', 'REST API', 'Python / Flask integration', 'React / Vite project stack'],
    },
    programsTitle: 'Development programs',
    programs: [
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
        description: 'Completed a multi-platform application development learning path focused on Flutter and Dart through intermediate and expert-level coursework.',
        tags: ['Flutter', 'Dart', 'Multi-Platform Development'],
      },
    ],
    organization: {
      role: 'Public Relations Staff',
      organization: 'Serigala Sistem Informasi — HIMASIF, University of Jember',
      period: 'Oct 2022 — Aug 2023',
      bullets: [
        'Contacted lecturers and other academic speakers for IT competition training and seminar activities, then coordinated schedules and availability with the team.',
        'Prepared rough content wireframes for Instagram posts, coordinated with the design team, scheduled publication, and shared event information with participants.',
      ],
    },
  },
};

const Experience = ({ language = 'id' }) => {
  const text = content[language];
  const item = text.experience;
  const organization = text.organization;

  return (
    <section id="experience" className="border-b border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-medium tracking-wide text-sky-300/90">{text.label}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">{text.title}</h2>
        </div>

        <article className="glass-panel rounded-2xl p-6 sm:p-7">
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

        <div className="mt-10">
          <h3 className="mb-5 text-lg font-semibold text-slate-200">{text.programsTitle}</h3>
          <div className="grid gap-5 lg:grid-cols-2">
            {text.programs.map((program) => (
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

        <article className="glass-panel-soft mt-5 rounded-2xl p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-200">{organization.role}</h3>
              <p className="mt-1 text-sm text-slate-500">{organization.organization}</p>
            </div>
            <p className="text-sm font-medium text-slate-600">{organization.period}</p>
          </div>
          <ul className="mt-4 space-y-2 pl-5 text-sm leading-6 text-slate-500">
            {organization.bullets.map((bullet) => (
              <li key={bullet} className="list-disc pl-1 marker:text-slate-700">{bullet}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;

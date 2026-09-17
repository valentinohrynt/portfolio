import React from 'react';
import { Briefcase, Award, Users, Calendar, MapPin } from 'lucide-react';

const content = {
  id: {
    label: 'REKAM JEJAK PROFESIONAL',
    title: 'Pengalaman Rekayasa, Pelatihan & Organisasi',
    experience: {
      role: 'Software Engineer Intern (PKL)',
      organization: 'PT Telkom Indonesia',
      period: 'Sep 2025 — Okt 2025',
      location: 'Jember, Jawa Timur',
      bullets: [
        'Merancang arsitektur database MySQL untuk TRACER, sistem enterprise internal untuk tata kelola aset fisik dan inventaris operasional area Telkom Jember.',
        'Mengembangkan modul backend & RESTful API TRACER berbasis PHP/Laravel 12, mencakup autentikasi sesi, multi-level role access control, dan data auditing.',
        'Membangun interface web TRACER yang responsif menggunakan React, Vite, dan Tailwind CSS, serta mengintegrasikan state management dengan endpoint API.',
        'Merancang database relasional dan backend Laravel untuk VANTAGE yang memproses data prospek pelanggan IndiBiz dan pemetaan geospasial ODP.',
        'Mengintegrasikan service micro-analytics Python/Flask untuk pemodelan data churn prediction, usage forecasting, dan customer segmentation.',
      ],
      stack: ['PHP', 'Laravel 12', 'MySQL', 'REST API', 'React', 'Vite', 'Python/Flask Microservice'],
    },
    programsTitle: 'Program Akselerasi Kompetensi',
    programs: [
      {
        name: 'Bangkit Academy 2024 — Mobile Development Cohort',
        organization: 'Google, Tokopedia, Gojek & Traveloka',
        period: 'Sep 2024 — Jan 2025',
        description: 'Menyelesaikan kurikulum intensif Android Native development dengan Kotlin dan lulus dengan predikat Distinction. Memimpin pengembangan aplikasi MentalQ (Capstone Project) yang tembus Top 50 dari 644 tim nasional.',
        tags: ['Kotlin', 'Android Jetpack', 'Clean Architecture', 'Hilt DI'],
      },
      {
        name: 'Indosat Ooredoo Hutchison Digital Camp (IDCamp)',
        organization: 'Indosat Ooredoo Hutchison & Dicoding',
        period: 'Sep 2024 — Jun 2025',
        description: 'Menyelesaikan jalur spesialisasi Multi-Platform App Developer dari tingkat pemula hingga Expert Class, menguasai arsitektur Flutter, state management, dan optimasi performa cross-platform.',
        tags: ['Flutter', 'Dart', 'BLoC Pattern', 'Clean Architecture'],
      },
    ],
    organization: {
      role: 'Staf Hubungan Masyarakat (HUMAS)',
      organization: 'Himpunan Mahasiswa Sistem Informasi (HIMASIF), Universitas Jember',
      period: 'Okt 2022 — Agu 2023',
      bullets: [
        'Membangun komunikasi dan menjembatani koordinasi dengan akademisi & praktisi industri sebagai pemateri seminar dan workshop IT tingkat regional.',
        'Merancang wireframe alur penyampaian informasi dan publikasi kegiatan organisasi secara terstruktur dan terukur.',
      ],
    },
  },
  en: {
    label: 'TRACK RECORD',
    title: 'Engineering Experience, Fellowships & Leadership',
    experience: {
      role: 'Software Engineer Intern',
      organization: 'PT Telkom Indonesia',
      period: 'Sep 2025 — Oct 2025',
      location: 'Jember, East Java',
      bullets: [
        'Architected MySQL database schemas for TRACER, an enterprise system for operational asset tracking and equipment management across Telkom Jember.',
        'Engineered Laravel 12 backend services and REST APIs implementing session authentication, RBAC authorization, and transactional consistency.',
        'Developed client web interfaces with React, Vite, and Tailwind CSS, wiring frontend state directly to backend service endpoints.',
        'Designed relational models and backend logic for VANTAGE, handling B2B IndiBiz leads and ODP network infrastructure data.',
        'Integrated auxiliary Python/Flask services for customer churn scoring, consumption forecasting, and segmentation analytics.',
      ],
      stack: ['PHP', 'Laravel 12', 'MySQL', 'REST API', 'React', 'Vite', 'Python/Flask Microservice'],
    },
    programsTitle: 'Intensive Development Fellowships',
    programs: [
      {
        name: 'Bangkit Academy 2024 — Mobile Development Cohort',
        organization: 'Google, Tokopedia, Gojek & Traveloka',
        period: 'Sep 2024 — Jan 2025',
        description: 'Completed rigorous Android Native specialization with Kotlin, graduating with Distinction. Engineered MentalQ, awarded Top 50 Product Track Capstone out of 644 national teams.',
        tags: ['Kotlin', 'Android Jetpack', 'Clean Architecture', 'Hilt DI'],
      },
      {
        name: 'Indosat Ooredoo Hutchison Digital Camp (IDCamp)',
        organization: 'Indosat Ooredoo Hutchison & Dicoding',
        period: 'Sep 2024 — Jun 2025',
        description: 'Graduated from beginner to Expert level in the Multi-Platform App Developer track, mastering Flutter architecture, clean state management, and cross-platform UI engineering.',
        tags: ['Flutter', 'Dart', 'BLoC Pattern', 'Clean Architecture'],
      },
    ],
    organization: {
      role: 'Public Relations Staff',
      organization: 'Information Systems Student Association (HIMASIF), University of Jember',
      period: 'Oct 2022 — Aug 2023',
      bullets: [
        'Liaised with academic faculty and external speakers for technical workshops and competitive programming seminars.',
        'Coordinated event publication pipelines and communicated operational guidelines to hundreds of participants.',
      ],
    },
  },
};

const Experience = ({ language = 'id' }) => {
  const text = content[language];
  const item = text.experience;
  const organization = text.organization;

  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-slate-800/80 bg-slate-950/30">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
            <span className="font-mono text-xs font-semibold tracking-wider text-brand-400 uppercase">{text.label}</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl lg:text-4xl">{text.title}</h2>
        </div>

        {/* Telkom Internship Card */}
        <div className="eng-card rounded-xl p-6 sm:p-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-brand-400 font-mono text-xs mb-1">
                <Briefcase size={14} />
                <span>INTERNSHIP / INDUSTRIAL ATTACHMENT</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 sm:text-2xl">{item.role}</h3>
              <p className="text-base font-medium text-slate-300 mt-0.5">{item.organization}</p>
            </div>
            <div className="flex flex-col md:items-end text-xs font-mono text-slate-400 gap-1.5">
              <span className="inline-flex items-center gap-1 bg-slate-850 px-2.5 py-1 rounded border border-slate-800">
                <Calendar size={13} className="text-slate-500" /> {item.period}
              </span>
              <span className="inline-flex items-center gap-1 text-slate-500">
                <MapPin size={13} /> {item.location}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <ul className="space-y-3">
              {item.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                  <span className="font-mono text-brand-400 text-xs mt-1">#</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2">TECH_STACK:</span>
              {item.stack.map((t) => (
                <span key={t} className="code-pill text-[11px] text-slate-300 px-2.5 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Development Programs Grid */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-slate-100 mb-5 flex items-center gap-2">
            <Award size={18} className="text-brand-400" />
            {text.programsTitle}
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            {text.programs.map((prog) => (
              <div key={prog.name} className="eng-card rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-500 mb-2">
                    <span>{prog.organization}</span>
                    <span>{prog.period}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-100 mb-2">{prog.name}</h4>
                  <p className="text-sm leading-relaxed text-slate-400">{prog.description}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {prog.tags.map((tag) => (
                    <span key={tag} className="code-pill text-[11px] text-slate-300 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organization / Leadership */}
        <div className="eng-card rounded-xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 text-slate-400 font-mono text-xs mb-1">
                <Users size={14} className="text-brand-400" />
                <span>ORGANIZATIONAL LEADERSHIP</span>
              </div>
              <h4 className="text-base font-bold text-slate-100">{organization.role} · {organization.organization}</h4>
            </div>
            <span className="font-mono text-xs text-slate-500">{organization.period}</span>
          </div>
          <ul className="space-y-2">
            {organization.bullets.map((b, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                <span className="text-brand-400 mt-0.5">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;

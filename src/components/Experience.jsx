import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const content = {
  id: {
    label: 'Pengalaman & Riwayat',
    title: 'Pengalaman magang, program intensif & organisasi',
    internship: {
      role: 'Software Engineer Intern',
      company: 'PT Telkom Indonesia',
      location: 'Jember, Jawa Timur',
      period: 'Sep 2025 — Okt 2025',
      points: [
        'Merancang dan bikin database MySQL untuk TRACER, sistem internal Telkom Jember buat kelola dan catat inventaris peralatan operasional.',
        'Bikin backend dan REST API TRACER pakai PHP dan Laravel 12, termasuk sistem login, hak akses pengguna, dan riwayat mutasi barang.',
        'Bikin tampilan web TRACER yang responsif pakai React, Vite, dan Tailwind CSS, lalu menyambungkannya ke API backend.',
        'Merancang database dan backend Laravel untuk VANTAGE yang dipakai mencatat data prospek pelanggan IndiBiz dan pemetaan lokasi ODP.',
        'Menghubungkan layanan machine learning berbasis Python / Flask buat analisis perkiraan penggunaan kuota dan churn pelanggan.',
      ],
      tools: ['PHP', 'Laravel 12', 'MySQL', 'React', 'Vite', 'Tailwind CSS', 'Python / Flask'],
    },
    programsTitle: 'Program pelatihan yang pernah diikuti',
    programs: [
      {
        name: 'Bangkit Academy 2024 — Mobile Development',
        organizer: 'Google, Tokopedia, Gojek & Traveloka',
        period: 'Sep 2024 — Jan 2025',
        desc: 'Fokus belajar Android native pakai Kotlin dan Clean Architecture. Lulus dengan predikat Distinction, dan aplikasi capstone tim saya (MentalQ) tembus Top 50 dari 644 tim se-Indonesia.',
        tags: ['Kotlin', 'Android Jetpack', 'Clean Architecture', 'Hilt DI'],
      },
      {
        name: 'Indosat Ooredoo Hutchison Digital Camp (IDCamp)',
        organizer: 'Indosat Ooredoo Hutchison & Dicoding',
        period: 'Sep 2024 — Jun 2025',
        desc: 'Menyelesaikan alur belajar Multi-Platform App Developer dari awal sampai kelas Expert. Di sini saya banyak mendalami Flutter dan Dart untuk bikin aplikasi cross-platform.',
        tags: ['Flutter', 'Dart', 'State Management', 'Clean Code'],
      },
    ],
    orgTitle: 'Pengalaman di kampus',
    orgRole: 'Staf Humas',
    orgName: 'HIMASIF — Universitas Jember',
    orgPeriod: 'Okt 2022 — Agu 2023',
    orgPoints: [
      'Menghubungi dan mengoordinasikan pemateri dari kalangan dosen dan praktisi industri buat acara seminar serta workshop IT kampus.',
      'Menyusun materi publikasi kegiatan di media sosial dan mengelola alur informasi bagi peserta kegiatan.',
    ],
  },
  en: {
    label: 'Experience & Background',
    title: 'Internship, acceleration programs & student leadership',
    internship: {
      role: 'Software Engineer Intern',
      company: 'PT Telkom Indonesia',
      location: 'Jember, East Java',
      period: 'Sep 2025 — Oct 2025',
      points: [
        'Designed normalized MySQL schemas for TRACER, an internal system for Telkom Jember equipment tracking and asset management.',
        'Developed Laravel 12 backend services and REST APIs, handling user roles, audit trails, and input validation.',
        'Built responsive web interfaces with React, Vite, and Tailwind CSS, wiring frontend views directly to backend endpoints.',
        'Designed database schemas and backend logic for VANTAGE, handling B2B IndiBiz leads and ODP network infrastructure data.',
        'Connected auxiliary Python / Flask microservices for predictive churn analytics and customer usage forecasting.',
      ],
      tools: ['PHP', 'Laravel 12', 'MySQL', 'React', 'Vite', 'Tailwind CSS', 'Python / Flask'],
    },
    programsTitle: 'Intensive learning paths',
    programs: [
      {
        name: 'Bangkit Academy 2024 — Mobile Development',
        organizer: 'Google, Tokopedia, Gojek & Traveloka',
        period: 'Sep 2024 — Jan 2025',
        desc: 'Native Android track with Kotlin and Clean Architecture. Graduated with Distinction, and our capstone app (MentalQ) made it into the national Top 50 out of 644 teams.',
        tags: ['Kotlin', 'Android Jetpack', 'Clean Architecture', 'Hilt DI'],
      },
      {
        name: 'Indosat Ooredoo Hutchison Digital Camp (IDCamp)',
        organizer: 'Indosat Ooredoo Hutchison & Dicoding',
        period: 'Sep 2024 — Jun 2025',
        desc: 'Completed the Multi-Platform App Developer track through the Expert level, building mobile apps with Flutter and Dart.',
        tags: ['Flutter', 'Dart', 'State Management', 'Clean Code'],
      },
    ],
    orgTitle: 'Campus activity',
    orgRole: 'Public Relations Staff',
    orgName: 'HIMASIF — University of Jember',
    orgPeriod: 'Oct 2022 — Aug 2023',
    orgPoints: [
      'Liaised with external technical speakers and academic lecturers for student workshops and IT seminars.',
      'Prepared visual announcements and handled attendee communications across student events.',
    ],
  },
};

const Experience = ({ language = 'id' }) => {
  const text = content[language];
  const intern = text.internship;

  return (
    <section id="experience" className="py-20 border-b border-dark-800">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <p className="text-xs font-mono text-amber-400/90 tracking-wide uppercase mb-1.5">{text.label}</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">{text.title}</h2>
        </div>

        {/* Telkom Internship */}
        <div className="craft-card p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-5 border-b border-zinc-800">
            <div>
              <span className="text-xs font-mono text-amber-400/90 uppercase tracking-wide">Magang Industri</span>
              <h3 className="text-xl font-bold text-zinc-100 mt-0.5">{intern.role}</h3>
              <p className="text-sm text-zinc-300 font-medium mt-0.5">{intern.company}</p>
            </div>
            <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-400 gap-1 mt-1 sm:mt-0">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} className="text-zinc-500" /> {intern.period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-zinc-500" /> {intern.location}
              </span>
            </div>
          </div>

          <div className="py-5 space-y-2.5">
            {intern.points.map((pt, i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm text-zinc-300 leading-relaxed">
                <span className="text-amber-400 mt-0.5 text-xs font-mono">→</span>
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-1.5 font-mono text-xs">
            <span className="text-zinc-400 mr-1 text-xs">Stack:</span>
            {intern.tools.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded bg-zinc-850 border border-zinc-800 text-zinc-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div className="mb-8">
          <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-4">{text.programsTitle}</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {text.programs.map((p) => (
              <div key={p.name} className="craft-card p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                    <span>{p.organizer}</span>
                    <span>{p.period}</span>
                  </div>
                  <h4 className="text-base font-bold text-zinc-100 mb-2">{p.name}</h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">{p.desc}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-zinc-800 flex flex-wrap gap-1.5 font-mono text-xs text-zinc-400">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-zinc-850 border border-zinc-800 text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organization */}
        <div className="craft-card p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4 pb-3 border-b border-zinc-800">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wide">{text.orgTitle}</span>
              <h4 className="text-base font-bold text-zinc-100 mt-0.5">{text.orgRole} · {text.orgName}</h4>
            </div>
            <span className="text-xs font-mono text-zinc-400">{text.orgPeriod}</span>
          </div>
          <div className="space-y-2">
            {text.orgPoints.map((pt, i) => (
              <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                <span className="text-zinc-500 mt-0.5">•</span>
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

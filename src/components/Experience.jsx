import React from 'react';

const content = {
  id: {
    sectionNum: 'SEKSI IV',
    label: 'REKAM JEJAK & PENGALAMAN KERJA',
    title: 'Pengalaman Industri, Pelatihan Terpilih & Organisasi',
    internshipLabel: 'PENGALAMAN INDUSTRI RESMI',
    internshipRole: 'Software Engineer Intern (PKL)',
    company: 'PT Telkom Indonesia',
    location: 'Jember, Jawa Timur',
    period: 'September 2025 — Oktober 2025',
    bullets: [
      'Merancang arsitektur basis data relasional MySQL untuk TRACER, sistem enterprise internal pengelolaan aset dan pemeliharaan alat operasional Telkom area Jember.',
      'Mengembangkan backend dan RESTful API TRACER dengan PHP / Laravel 12, meliputi otorisasi peran berjenjang, manajemen log inventaris, dan validasi data terintegrasi.',
      'Membangun antarmuka web interaktif TRACER menggunakan React, Vite, dan Tailwind CSS, menyelaraskan state UI secara real-time dengan response API backend.',
      'Merancang basis data dan modul backend Laravel untuk VANTAGE yang memproses data prospek pelanggan IndiBiz serta pemetaan ODP secara komprehensif.',
      'Mengintegrasikan model microservice machine learning berbasis Python / Flask untuk analisis churn prediction, usage forecasting, dan segmentasi pelanggan.',
    ],
    stackLabel: 'Toolchain Utama:',
    fellowshipsTitle: 'Program Pengembangan & Akselerasi',
    fellowships: [
      {
        title: 'Bangkit Academy 2024 Batch 2 — Mobile Development',
        organizer: 'Google, Tokopedia, Gojek & Traveloka',
        period: 'September 2024 — Januari 2025',
        desc: 'Kurikulum intensif Android native dengan Kotlin, architecture pattern, dan machine learning implementation. Lulus dengan predikat Distinction dan capstone MentalQ terpilih sebagai Top 50 Product Track dari 644 tim nasional.',
        tags: ['Kotlin', 'Android Jetpack', 'Clean Architecture', 'Hilt DI'],
      },
      {
        title: 'Indosat Ooredoo Hutchison Digital Camp (IDCamp)',
        organizer: 'Indosat Ooredoo Hutchison & Dicoding',
        period: 'September 2024 — Juni 2025',
        desc: 'Jalur spesialisasi Multi-Platform App Developer dari tingkat dasar hingga kelas Expert, menguasai rekayasa aplikasi mobile modern berbasis Flutter dan Dart.',
        tags: ['Flutter', 'Dart', 'State Management', 'Clean Code'],
      },
    ],
    orgTitle: 'Kepemimpinan & Organisasi Mahasiswa',
    orgRole: 'Staf Hubungan Masyarakat (HUMAS)',
    orgName: 'HIMASIF (Himpunan Mahasiswa Sistem Informasi) — Universitas Jember',
    orgPeriod: 'Oktober 2022 — Agustus 2023',
    orgBullets: [
      'Menghubungi serta mengoordinasikan akademisi dan praktisi teknologi untuk menjadi narasumber pelatihan dan seminar IT regional.',
      'Menyusun wireframe materi publikasi dan tata kelola alur informasi kegiatan untuk ratusan peserta.',
    ],
  },
  en: {
    sectionNum: 'SECTION IV',
    label: 'EXPERIENCE & TRACK RECORD',
    title: 'Industry Engineering, Specialized Fellowships & Leadership',
    internshipLabel: 'FORMAL INDUSTRY ATTACHMENT',
    internshipRole: 'Software Engineer Intern',
    company: 'PT Telkom Indonesia',
    location: 'Jember, East Java',
    period: 'September 2025 — October 2025',
    bullets: [
      'Designed normalized MySQL relational schemas for TRACER, an internal enterprise platform for Telkom Jember operational asset and inventory tracking.',
      'Engineered Laravel 12 backend services and REST APIs, enforcing role-based access control, transaction audits, and secure request validation.',
      'Developed responsive client web interfaces using React, Vite, and Tailwind CSS, wiring state layers directly to backend API contracts.',
      'Modeled relational schemas and backend logic for VANTAGE, processing B2B IndiBiz leads and geographic ODP infrastructure mappings.',
      'Integrated auxiliary Python / Flask microservices for predictive churn analytics, capacity forecasting, and customer value segmentation.',
    ],
    stackLabel: 'Core Toolchain:',
    fellowshipsTitle: 'Selective Acceleration Programs',
    fellowships: [
      {
        title: 'Bangkit Academy 2024 Batch 2 — Mobile Development',
        organizer: 'Google, Tokopedia, Gojek & Traveloka',
        period: 'September 2024 — January 2025',
        desc: 'Rigorous Android native curriculum covering Kotlin, architecture patterns, and ML integration. Graduated with Distinction; capstone MentalQ was named Top 50 Product Track among 644 national teams.',
        tags: ['Kotlin', 'Android Jetpack', 'Clean Architecture', 'Hilt DI'],
      },
      {
        title: 'Indosat Ooredoo Hutchison Digital Camp (IDCamp)',
        organizer: 'Indosat Ooredoo Hutchison & Dicoding',
        period: 'September 2024 — June 2025',
        desc: 'Multi-Platform App Developer track through the Expert Level, mastering scalable cross-platform architecture with Flutter and Dart.',
        tags: ['Flutter', 'Dart', 'State Management', 'Clean Code'],
      },
    ],
    orgTitle: 'Student Leadership & Community',
    orgRole: 'Public Relations Staff',
    orgName: 'HIMASIF (Information Systems Student Association) — University of Jember',
    orgPeriod: 'October 2022 — August 2023',
    orgBullets: [
      'Engaged external technical speakers and academic lecturers for student developer workshops and competitive programming sessions.',
      'Coordinated visual communication layouts and published operational briefings to hundreds of participants.',
    ],
  },
};

const Experience = ({ language = 'id' }) => {
  const text = content[language];

  return (
    <section id="experience" className="editorial-border-b bg-[#F9F7F1]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
        <div className="mb-14 pb-4 editorial-border-b">
          <div className="font-mono text-xs text-ink-100 uppercase tracking-wider mb-1">
            {text.sectionNum} · {text.label}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-pure font-normal">
            {text.title}
          </h2>
        </div>

        {/* Telkom Industrial Experience Block */}
        <div className="bg-paper-100 editorial-border p-8 sm:p-10 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 editorial-border-b">
            <div>
              <div className="font-mono text-xs text-accent-rust font-bold tracking-wider mb-1">
                {text.internshipLabel}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink-pure font-normal">
                {text.internshipRole}
              </h3>
              <div className="text-sm font-medium text-ink-300 mt-1">
                {text.company} · <span className="text-ink-100">{text.location}</span>
              </div>
            </div>
            <div className="font-mono text-xs text-ink-100">
              {text.period}
            </div>
          </div>

          <div className="py-6 space-y-3">
            {text.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-3 text-sm leading-relaxed text-ink-200">
                <span className="font-mono text-xs text-accent-forest font-bold mt-0.5">§</span>
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div className="pt-5 editorial-border-t flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-ink-100 mr-2">{text.stackLabel}</span>
            {['PHP 8.x', 'Laravel 12', 'MySQL', 'React', 'Vite', 'Tailwind CSS', 'Python/Flask Microservice'].map((t) => (
              <span key={t} className="font-mono text-xs bg-paper-200 px-2.5 py-0.5 editorial-border text-ink-pure">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Fellowships Two-Column */}
        <div className="mb-12">
          <div className="font-mono text-xs text-ink-100 uppercase tracking-wider mb-4">
            {text.fellowshipsTitle}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#DDD5C3] editorial-border">
            {text.fellowships.map((f) => (
              <div key={f.title} className="bg-paper-100 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-ink-100 mb-2">
                    <span>{f.organizer}</span>
                    <span>{f.period}</span>
                  </div>
                  <h4 className="font-serif text-xl text-ink-pure font-normal mb-2">
                    {f.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-ink-200">
                    {f.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 editorial-border-t flex flex-wrap gap-1.5">
                  {f.tags.map((t) => (
                    <span key={t} className="font-mono text-[11px] text-ink-100">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Leadership */}
        <div className="bg-paper-100 editorial-border p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4 pb-3 editorial-border-b">
            <div>
              <div className="font-mono text-xs text-ink-100 uppercase tracking-wider mb-1">
                {text.orgTitle}
              </div>
              <h4 className="font-serif text-lg text-ink-pure font-normal">
                {text.orgRole} · <span className="text-ink-200 text-base">{text.orgName}</span>
              </h4>
            </div>
            <div className="font-mono text-xs text-ink-100">
              {text.orgPeriod}
            </div>
          </div>
          <div className="space-y-2">
            {text.orgBullets.map((b, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-200">
                <span className="font-mono text-accent-rust">—</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

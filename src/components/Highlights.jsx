import React from 'react';
import { ExternalLink } from 'lucide-react';

const content = {
  id: {
    label: 'Pendidikan & Sertifikat',
    title: 'Kuliah, sertifikasi, dan pencapaian',
    eduTitle: 'Pendidikan Formal',
    degree: 'S1 Sistem Informasi',
    univ: 'Universitas Jember',
    period: '2022 — 2026',
    gpa: '3,94',
    gpaLabel: 'IPK saat ini (skala 4,00)',
    langTitle: 'Bahasa',
    langId: 'Bahasa Indonesia',
    langEn: 'Bahasa Inggris',
    certTitle: 'Beberapa Sertifikat',
    certCount: 'Ada 34 sertifikat yang tercatat di akun LinkedIn saya.',
    verifyLinkedIn: 'Lihat semua di LinkedIn',
    honorsTitle: 'Pencapaian',
    certifications: [
      {
        title: 'Dev Certified for Android',
        issuer: 'dev.cert by dev.id',
        date: 'Mei 2025',
        note: 'Sertifikasi kompetensi developer Android',
      },
      {
        title: 'Multi-Platform App Developer Expert',
        issuer: 'IDCamp (Indosat Ooredoo Hutchison & Dicoding)',
        date: '2025',
        note: 'Jalur spesialisasi Flutter dan Dart',
      },
      {
        title: 'Android Development Learning Path',
        issuer: 'Dicoding Indonesia',
        date: '2024',
        note: 'Kotlin, Jetpack, dan Clean Architecture',
      },
      {
        title: 'Full-Stack JavaScript & Backend Development',
        issuer: 'CODEPOLITAN',
        date: '2024',
        note: 'Seri kursus Node.js, Express, dan REST API',
      },
      {
        title: 'Data, AI & Programming Foundations',
        issuer: 'Dicoding & freeCodeCamp',
        date: '2023 — 2024',
        note: 'Dasar SQL, Python, dan pemrograman web',
      },
    ],
    honors: [
      {
        title: 'Lulusan Terbaik (Distinction) — Mobile Development',
        org: 'Bangkit Academy 2024 Batch 2 (Google, GoTo, Traveloka)',
        desc: 'Lulus dengan predikat nilai tertinggi di kelas mobile development.',
      },
      {
        title: 'Top 50 Product Track Capstone Project',
        org: 'Bangkit Academy 2024 Batch 2',
        desc: 'Aplikasi MentalQ buatan tim kami terpilih masuk Top 50 dari total 644 tim.',
      },
      {
        title: 'Juara 1 Lomba Desain Poster',
        org: 'Digital Campaign Competition · 2023',
        desc: 'Juara pertama kompetisi komunikasi visual tingkat mahasiswa.',
      },
    ],
  },
  en: {
    label: 'Education & Credentials',
    title: 'Studies, certifications, and achievements',
    eduTitle: 'Formal Education',
    degree: 'B.Sc. in Information Systems',
    univ: 'University of Jember',
    period: '2022 — 2026',
    gpa: '3.94',
    gpaLabel: 'Current GPA (out of 4.00)',
    langTitle: 'Languages',
    langId: 'Indonesian (Native)',
    langEn: 'English',
    certTitle: 'Selected Certifications',
    certCount: '34 completed certifications recorded on LinkedIn.',
    verifyLinkedIn: 'View full list on LinkedIn',
    honorsTitle: 'Achievements',
    certifications: [
      {
        title: 'Dev Certified for Android',
        issuer: 'dev.cert by dev.id',
        date: 'May 2025',
        note: 'Android developer competence certification',
      },
      {
        title: 'Multi-Platform App Developer Expert',
        issuer: 'IDCamp (Indosat Ooredoo Hutchison & Dicoding)',
        date: '2025',
        note: 'Flutter & Dart specialization path',
      },
      {
        title: 'Android Development Learning Path',
        issuer: 'Dicoding Indonesia',
        date: '2024',
        note: 'Kotlin, Jetpack, and Clean Architecture',
      },
      {
        title: 'Full-Stack JavaScript & Backend Development',
        issuer: 'CODEPOLITAN',
        date: '2024',
        note: 'Course track on Node.js, Express, and REST APIs',
      },
      {
        title: 'Data, AI & Programming Foundations',
        issuer: 'Dicoding & freeCodeCamp',
        date: '2023 — 2024',
        note: 'Foundations of SQL, Python, and responsive web',
      },
    ],
    honors: [
      {
        title: 'Distinction Graduate — Mobile Development',
        org: 'Bangkit Academy 2024 Batch 2 (Google, GoTo, Traveloka)',
        desc: 'Graduated with highest academic standing in the Android cohort.',
      },
      {
        title: 'Top 50 Product Track Capstone Project',
        org: 'Bangkit Academy 2024 Batch 2',
        desc: 'MentalQ was selected into the Top 50 projects out of 644 national teams.',
      },
      {
        title: '1st Place Winner — Poster Design',
        org: 'Digital Campaign Competition · 2023',
        desc: 'First place recognition in digital visual communication.',
      },
    ],
  },
};

const Highlights = ({ language = 'id' }) => {
  const text = content[language];

  return (
    <section id="credentials" className="py-20 border-b border-dark-800">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <p className="text-xs font-mono text-amber-400/90 tracking-wide uppercase mb-1.5">{text.label}</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">{text.title}</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-12 items-start">
          {/* Left Column: Certifications */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
              <div>
                <h3 className="text-base font-bold text-zinc-100">{text.certTitle}</h3>
                <p className="text-xs text-zinc-400 mt-0.5">{text.certCount}</p>
              </div>
              <a
                href="https://www.linkedin.com/in/valentinohariyanto"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-amber-400 hover:text-amber-300 transition flex items-center gap-1"
              >
                LinkedIn <ExternalLink size={12} />
              </a>
            </div>

            <div className="space-y-2.5">
              {text.certifications.map((c) => (
                <div key={c.title} className="craft-card p-4 flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-200">{c.title}</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">{c.issuer}</p>
                    <p className="text-xs text-zinc-400 mt-1">{c.note}</p>
                  </div>
                  <span className="font-mono text-xs text-zinc-400 shrink-0">{c.date}</span>
                </div>
              ))}
            </div>

            {/* Honors */}
            <div className="pt-6">
              <h3 className="text-base font-bold text-zinc-100 mb-3 pb-2 border-b border-zinc-800">{text.honorsTitle}</h3>
              <div className="space-y-2.5">
                {text.honors.map((h) => (
                  <div key={h.title} className="craft-card p-4">
                    <h4 className="text-sm font-semibold text-zinc-200">{h.title}</h4>
                    <div className="text-xs font-mono text-amber-400/90 mt-0.5">{h.org}</div>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Languages */}
          <div className="md:col-span-5 space-y-4">
            <div className="craft-card p-6">
              <span className="text-xs font-mono text-amber-400/90 uppercase tracking-wide">{text.eduTitle}</span>
              <h4 className="text-lg font-bold text-zinc-100 mt-1">{text.degree}</h4>
              <p className="text-sm text-zinc-300 mt-0.5">{text.univ}</p>
              <p className="font-mono text-xs text-zinc-400 mt-1">{text.period}</p>

              <div className="mt-5 pt-4 border-t border-zinc-800">
                <div className="text-2xl font-bold font-mono text-zinc-100">{text.gpa}</div>
                <div className="text-xs text-zinc-400 mt-0.5">{text.gpaLabel}</div>
              </div>
            </div>

            <div className="craft-card p-6">
              <span className="text-xs font-mono text-amber-400/90 uppercase tracking-wide">{text.langTitle}</span>
              <div className="space-y-3 mt-3 text-sm text-zinc-300 divide-y divide-zinc-800/80">
                <div className="pt-1">
                  <div className="font-medium text-zinc-200">Bahasa Indonesia</div>
                  <div className="text-xs text-zinc-400">Penutur asli</div>
                </div>
                <div className="pt-2.5">
                  <div className="font-medium text-zinc-200">Bahasa Inggris</div>
                  <div className="text-xs text-zinc-400">Kemampuan kerja pasif/aktif · TOEFL 530</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;

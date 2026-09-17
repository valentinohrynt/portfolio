import React from 'react';
import { GraduationCap, Award, ExternalLink, Globe, CheckCircle2, BookmarkCheck } from 'lucide-react';

const content = {
  id: {
    label: 'KREDENSIAL & SERTIFIKASI',
    title: 'Pendidikan Formal, Sertifikasi & Prestasi',
    educationLabel: 'Pendidikan Akademik',
    degree: 'S1 Sistem Informasi',
    university: 'Universitas Jember',
    period: '2022 — 2026',
    gpa: '3.92',
    gpaLabel: 'IPK (Skala 4.00)',
    languageLabel: 'Kemahiran Bahasa',
    langID: 'Bahasa Indonesia (Penutur Asli)',
    langEN: 'Bahasa Inggris (Working Proficiency)',
    toefl: '530',
    toeflLabel: 'Skor TOEFL',
    certTitle: 'Sertifikasi Kompetensi Terverifikasi',
    certTotal: 'Total 34 sertifikasi profesional tercatat.',
    viewAll: 'Verifikasi di LinkedIn',
    achievementTitle: 'Pencapaian & Kompetisi',
    certifications: [
      {
        title: 'Dev Certified for Android',
        issuer: 'dev.cert by dev.id',
        date: 'Mei 2025',
        type: 'Android Developer',
      },
      {
        title: 'Multi-Platform App Developer Expert Learning Path',
        issuer: 'Indosat Ooredoo Hutchison Digital Camp (IDCamp)',
        date: '2025',
        type: 'Flutter & Dart',
      },
      {
        title: 'Android Development Learning Path',
        issuer: 'Dicoding Indonesia',
        date: '2024',
        type: 'Kotlin, Jetpack, Clean Code',
      },
      {
        title: 'Full-Stack JavaScript & Backend Development',
        issuer: 'CODEPOLITAN',
        date: '2024',
        type: '12 Sertifikat Kursus Backend & API',
      },
      {
        title: 'Data, AI & Programming Foundations',
        issuer: 'Dicoding Indonesia & freeCodeCamp',
        date: '2023 - 2024',
        type: 'SQL, Python Computing & Web Design',
      },
    ],
    achievements: [
      {
        title: 'Distinction Graduate — Mobile Development',
        organization: 'Bangkit Academy 2024 Batch 2 (Google, Tokopedia, Gojek, Traveloka)',
        desc: 'Lulus dengan predikat tertinggi atas pencapaian akademik dan proyek.',
      },
      {
        title: 'Top 50 Product Track Capstone Project',
        organization: 'Bangkit Academy 2024 Batch 2',
        desc: 'Proyek MentalQ terpilih dalam 50 besar dari total 644 tim lintas perguruan tinggi.',
      },
      {
        title: 'Juara 1 Lomba Desain Poster',
        organization: 'Digital Campaign Competition · 2023',
        desc: 'Penghargaan perancangan media komunikasi visual dan pesan kampanye.',
      },
    ],
  },
  en: {
    label: 'CREDENTIALS & CERTIFICATIONS',
    title: 'Academic Education, Certifications & Honors',
    educationLabel: 'Formal Education',
    degree: 'B.Sc. in Information Systems',
    university: 'University of Jember',
    period: '2022 — 2026',
    gpa: '3.92',
    gpaLabel: 'GPA (4.00 Scale)',
    languageLabel: 'Language Proficiency',
    langID: 'Indonesian (Native Speaker)',
    langEN: 'English (Professional Working Proficiency)',
    toefl: '530',
    toeflLabel: 'TOEFL Score',
    certTitle: 'Verified Professional Certifications',
    certTotal: '34 professional certifications recorded.',
    viewAll: 'Verify on LinkedIn',
    achievementTitle: 'Honors & Recognitions',
    certifications: [
      {
        title: 'Dev Certified for Android',
        issuer: 'dev.cert by dev.id',
        date: 'May 2025',
        type: 'Android Developer',
      },
      {
        title: 'Multi-Platform App Developer Expert Learning Path',
        issuer: 'Indosat Ooredoo Hutchison Digital Camp (IDCamp)',
        date: '2025',
        type: 'Flutter & Dart',
      },
      {
        title: 'Android Development Learning Path',
        issuer: 'Dicoding Indonesia',
        date: '2024',
        type: 'Kotlin, Jetpack, Clean Code',
      },
      {
        title: 'Full-Stack JavaScript & Backend Development',
        issuer: 'CODEPOLITAN',
        date: '2024',
        type: '12 Course Certificates in Backend & APIs',
      },
      {
        title: 'Data, AI & Programming Foundations',
        issuer: 'Dicoding Indonesia & freeCodeCamp',
        date: '2023 - 2024',
        type: 'SQL, Python Computing & Web Design',
      },
    ],
    achievements: [
      {
        title: 'Distinction Graduate — Mobile Development',
        organization: 'Bangkit Academy 2024 Batch 2 (Google, Tokopedia, Gojek, Traveloka)',
        desc: 'Graduated with highest distinction for academic standing and project execution.',
      },
      {
        title: 'Top 50 Product Track Capstone Project',
        organization: 'Bangkit Academy 2024 Batch 2',
        desc: 'MentalQ was selected into the Top 50 projects out of 644 national teams.',
      },
      {
        title: '1st Place — Poster Design Competition',
        organization: 'Digital Campaign Competition · 2023',
        desc: 'Awarded first place in digital communication and visual storytelling.',
      },
    ],
  },
};

const Highlights = ({ language = 'id' }) => {
  const text = content[language];

  return (
    <section id="credentials" className="py-16 sm:py-24 border-b border-slate-800/80 bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
            <span className="font-mono text-xs font-semibold tracking-wider text-brand-400 uppercase">{text.label}</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl lg:text-4xl">{text.title}</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column: Certifications */}
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <BookmarkCheck size={18} className="text-brand-400" />
                  {text.certTitle}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">{text.certTotal}</p>
              </div>
              <a
                href="https://www.linkedin.com/in/valentinohariyanto"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-brand-400 hover:text-brand-300 transition"
              >
                {text.viewAll} <ExternalLink size={12} />
              </a>
            </div>

            <div className="space-y-3">
              {text.certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="eng-card rounded-xl p-4 flex items-start justify-between gap-4"
                >
                  <div>
                    <span className="font-mono text-[10px] text-brand-400 uppercase tracking-wider">
                      {cert.type}
                    </span>
                    <h4 className="text-sm font-bold text-slate-200 mt-0.5">{cert.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="font-mono text-xs text-slate-500 shrink-0 bg-slate-850 px-2 py-1 rounded border border-slate-800">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="mt-8 pt-8 border-t border-slate-800">
              <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                <Award size={18} className="text-amber-400" />
                {text.achievementTitle}
              </h3>

              <div className="space-y-3">
                {text.achievements.map((ach) => (
                  <div key={ach.title} className="eng-card rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-brand-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-200">{ach.title}</h4>
                        <p className="text-xs font-medium text-slate-400 mt-0.5">{ach.organization}</p>
                        <p className="text-xs text-slate-400 mt-1">{ach.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic & Foundations */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="eng-card rounded-xl p-6">
              <div className="flex items-center gap-2 font-mono text-xs text-brand-400 mb-3">
                <GraduationCap size={16} />
                <span className="uppercase">{text.educationLabel}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-100">{text.degree}</h4>
              <p className="text-sm font-medium text-slate-300 mt-0.5">{text.university}</p>
              <p className="font-mono text-xs text-slate-500 mt-1">{text.period}</p>

              <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                <div className="bg-slate-850/80 border border-slate-800 rounded-lg p-3">
                  <div className="text-2xl font-mono font-bold text-brand-400">{text.gpa}</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">{text.gpaLabel}</div>
                </div>
                <div className="bg-slate-850/80 border border-slate-800 rounded-lg p-3">
                  <div className="text-2xl font-mono font-bold text-brand-400">{text.toefl}</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">{text.toeflLabel}</div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="eng-card rounded-xl p-6">
              <div className="flex items-center gap-2 font-mono text-xs text-brand-400 mb-3">
                <Globe size={16} />
                <span className="uppercase">{text.languageLabel}</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-sm py-1 border-b border-slate-800/80">
                  <span className="text-slate-300 font-medium">Bahasa Indonesia</span>
                  <span className="font-mono text-xs text-slate-400">Native</span>
                </div>
                <div className="flex items-center justify-between text-sm py-1 border-b border-slate-800/80">
                  <span className="text-slate-300 font-medium">English</span>
                  <span className="font-mono text-xs text-slate-400">Professional (TOEFL 530)</span>
                </div>
              </div>
            </div>

            {/* Engineering Ethics / Focus Note */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 font-mono text-xs leading-relaxed text-slate-400">
              <div className="text-slate-300 font-semibold mb-1 flex items-center gap-1.5">
                <span className="text-brand-400">{'//'}</span> ENGINEERING FOCUS
              </div>
              Komitmen utama terletak pada keandalan sistem backend, konsistensi data relasional, integritas API, serta penulisan kode yang mudah dipelihara dan diuji.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;

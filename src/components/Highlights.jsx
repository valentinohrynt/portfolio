import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const content = {
  id: {
    sectionNum: 'SEKSI VI',
    label: 'KREDENSIAL AKADEMIK & PROFESIONAL',
    title: 'Pendidikan Formal, Sertifikasi & Penghargaan',
    eduTitle: 'Pendidikan Tinggi',
    degree: 'Sarjana Sistem Informasi (S.Kom)',
    inst: 'Fakultas Ilmu Komputer, Universitas Jember',
    period: '2022 — 2026 (Sedang Menempuh)',
    gpaValue: '3,92',
    gpaScale: 'dari skala 4,00 (IPK Kumulatif)',
    langTitle: 'Kemahiran Bahasa',
    langId: 'Bahasa Indonesia — Penutur Asli (Native)',
    langEn: 'Bahasa Inggris — Kemahiran Kerja Profesional (Skor TOEFL: 530)',
    certTitle: 'Sertifikasi Kompetensi Industri Terverifikasi',
    certCount: '34 Sertifikat Kompetensi Tercatat di LinkedIn',
    verifyLinkedIn: 'Verifikasi Kredensial di LinkedIn',
    honorsTitle: 'Pencapaian & Kompetisi Rekayasa',
    certifications: [
      {
        title: 'Dev Certified for Android',
        issuer: 'dev.cert by dev.id',
        date: 'Mei 2025',
        domain: 'Mobile Android Engineering',
      },
      {
        title: 'Multi-Platform App Developer Expert Learning Path',
        issuer: 'Indosat Ooredoo Hutchison Digital Camp (IDCamp)',
        date: '2025',
        domain: 'Flutter & Dart Expert',
      },
      {
        title: 'Android Development Learning Path',
        issuer: 'Dicoding Indonesia',
        date: '2024',
        domain: 'Kotlin, Clean Architecture, Jetpack',
      },
      {
        title: 'Full-Stack JavaScript & Backend Development',
        issuer: 'CODEPOLITAN',
        date: '2024',
        domain: '12 Seri Kursus Backend, Node.js & API',
      },
      {
        title: 'Data, AI & Programming Foundations',
        issuer: 'Dicoding Indonesia & freeCodeCamp',
        date: '2023 — 2024',
        domain: 'SQL, Python Scientific & Web Design',
      },
    ],
    honors: [
      {
        title: 'Distinction Graduate — Mobile Development Track',
        org: 'Bangkit Academy 2024 Batch 2 (Google, GoTo, Traveloka)',
        desc: 'Lulus dengan predikat kelulusan tertinggi atas nilai akademik dan penyelesaian proyek.',
      },
      {
        title: 'Top 50 Product Track Capstone Project',
        org: 'Bangkit Academy 2024 Batch 2',
        desc: 'Proyek MentalQ berhasil terpilih masuk dalam 50 besar karya terbaik dari 644 tim nasional.',
      },
      {
        title: 'Juara 1 Lomba Desain Poster Nasional',
        org: 'Digital Campaign Competition · 2023',
        desc: 'Penghargaan kejuaraan perancangan komunikasi visual dan arsitektur informasi terstruktur.',
      },
    ],
  },
  en: {
    sectionNum: 'SECTION VI',
    label: 'ACADEMIC & PROFESSIONAL CREDENTIALS',
    title: 'Formal Education, Certifications & Honors',
    eduTitle: 'Higher Education',
    degree: 'Bachelor of Science in Information Systems',
    inst: 'Faculty of Computer Science, University of Jember',
    period: '2022 — 2026 (Undergraduate Candidate)',
    gpaValue: '3.92',
    gpaScale: 'on a 4.00 scale (Cumulative GPA)',
    langTitle: 'Language Proficiency',
    langId: 'Indonesian — Native Speaker',
    langEn: 'English — Professional Working Proficiency (TOEFL Score: 530)',
    certTitle: 'Verified Industry Certifications',
    certCount: '34 Professional Certifications Verified on LinkedIn',
    verifyLinkedIn: 'Verify Credentials on LinkedIn',
    honorsTitle: 'Engineering Honors & Competition Awards',
    certifications: [
      {
        title: 'Dev Certified for Android',
        issuer: 'dev.cert by dev.id',
        date: 'May 2025',
        domain: 'Mobile Android Engineering',
      },
      {
        title: 'Multi-Platform App Developer Expert Learning Path',
        issuer: 'Indosat Ooredoo Hutchison Digital Camp (IDCamp)',
        date: '2025',
        domain: 'Flutter & Dart Expert',
      },
      {
        title: 'Android Development Learning Path',
        issuer: 'Dicoding Indonesia',
        date: '2024',
        domain: 'Kotlin, Clean Architecture, Jetpack',
      },
      {
        title: 'Full-Stack JavaScript & Backend Development',
        issuer: 'CODEPOLITAN',
        date: '2024',
        domain: '12 Course Certificates in Backend, Node.js & APIs',
      },
      {
        title: 'Data, AI & Programming Foundations',
        issuer: 'Dicoding Indonesia & freeCodeCamp',
        date: '2023 — 2024',
        domain: 'SQL, Python Scientific & Web Design',
      },
    ],
    honors: [
      {
        title: 'Distinction Graduate — Mobile Development Track',
        org: 'Bangkit Academy 2024 Batch 2 (Google, GoTo, Traveloka)',
        desc: 'Graduated with highest distinction for academic standing and capstone execution.',
      },
      {
        title: 'Top 50 Product Track Capstone Project',
        org: 'Bangkit Academy 2024 Batch 2',
        desc: 'MentalQ was selected into the Top 50 projects out of 644 national teams.',
      },
      {
        title: '1st Place Winner — National Poster Design',
        org: 'Digital Campaign Competition · 2023',
        desc: 'First place recognition for structured visual communication and message design.',
      },
    ],
  },
};

const Highlights = ({ language = 'id' }) => {
  const text = content[language];

  return (
    <section id="credentials" className="editorial-border-b bg-[#F9F7F1]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
        <div className="mb-14 pb-4 editorial-border-b">
          <div className="font-mono text-xs text-ink-100 uppercase tracking-wider mb-1">
            {text.sectionNum} · {text.label}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-pure font-normal">
            {text.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Certifications Index */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-baseline justify-between pb-3 editorial-border-b">
              <div>
                <h3 className="font-serif text-2xl text-ink-pure font-normal">
                  {text.certTitle}
                </h3>
                <p className="text-xs text-ink-100 mt-0.5">{text.certCount}</p>
              </div>
              <a
                href="https://www.linkedin.com/in/valentinohariyanto"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs font-bold text-accent-rust hover:underline inline-flex items-center gap-1"
              >
                LinkedIn <ArrowUpRight size={12} />
              </a>
            </div>

            <div className="divide-y divide-[#DDD5C3] editorial-border bg-paper-100">
              {text.certifications.map((c) => (
                <div key={c.title} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <div className="font-mono text-[10px] text-accent-rust uppercase font-bold tracking-wider">
                      {c.domain}
                    </div>
                    <h4 className="font-sans text-sm font-bold text-ink-pure mt-0.5">
                      {c.title}
                    </h4>
                    <p className="text-xs text-ink-100 mt-0.5">{c.issuer}</p>
                  </div>
                  <div className="font-mono text-xs text-ink-100 shrink-0">
                    {c.date}
                  </div>
                </div>
              ))}
            </div>

            {/* Honors Block */}
            <div className="pt-6">
              <h3 className="font-serif text-2xl text-ink-pure font-normal mb-4 pb-3 editorial-border-b">
                {text.honorsTitle}
              </h3>

              <div className="space-y-3">
                {text.honors.map((h) => (
                  <div key={h.title} className="bg-paper-100 editorial-border p-5">
                    <div className="font-serif text-lg text-ink-pure font-normal">
                      {h.title}
                    </div>
                    <div className="font-mono text-xs text-accent-forest font-semibold mt-0.5">
                      {h.org}
                    </div>
                    <p className="text-xs text-ink-200 mt-2 leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic & Languages */}
          <div className="lg:col-span-5 space-y-8">
            {/* Degree Card */}
            <div className="bg-paper-100 editorial-border p-6 sm:p-8">
              <div className="font-mono text-xs uppercase tracking-wider text-ink-100 mb-2">
                {text.eduTitle}
              </div>
              <h4 className="font-serif text-2xl text-ink-pure font-normal">
                {text.degree}
              </h4>
              <p className="text-sm font-medium text-ink-200 mt-1">
                {text.inst}
              </p>
              <p className="font-mono text-xs text-ink-100 mt-1">
                {text.period}
              </p>

              <div className="mt-6 pt-5 editorial-border-t">
                <div className="font-serif text-4xl text-ink-pure">
                  {text.gpaValue}
                </div>
                <div className="font-mono text-xs text-ink-100 mt-1">
                  {text.gpaScale}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-paper-100 editorial-border p-6 sm:p-8">
              <div className="font-mono text-xs uppercase tracking-wider text-ink-100 mb-3">
                {text.langTitle}
              </div>
              <div className="space-y-3 text-sm text-ink-200 divide-y divide-[#DDD5C3]">
                <div className="pt-2">
                  <div className="font-sans font-bold text-ink-pure">Bahasa Indonesia</div>
                  <div className="text-xs text-ink-100">Penutur Asli (Native Speaker)</div>
                </div>
                <div className="pt-3">
                  <div className="font-sans font-bold text-ink-pure">English</div>
                  <div className="text-xs text-ink-100">Professional Working Proficiency · TOEFL 530</div>
                </div>
              </div>
            </div>

            {/* Statement of Conduct */}
            <div className="bg-[#EFEAE0] editorial-border p-5 text-xs font-mono text-ink-200 leading-relaxed">
              <span className="font-bold text-ink-pure">NOTE ON ENGINEERING:</span> Seluruh pencatatan pengalaman dan portofolio berbasis implementasi nyata dari rancangan database relasional, logika backend teruji, hingga deploy produksi yang dapat diverifikasi.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;

import React from 'react';

const content = {
  id: {
    label: 'Yang saya kerjakan',
    title: 'Dari alur aplikasi sampai siap digunakan',
    items: [
      {
        number: '01',
        title: 'Aplikasi web',
        text: 'Membangun aplikasi web berbasis data dengan PHP/Laravel, database relasional, autentikasi, dan alur bisnis yang sesuai kebutuhan pengguna.',
      },
      {
        number: '02',
        title: 'Backend & REST API',
        text: 'Membuat API yang terhubung ke database, menangani autentikasi dan hak akses, serta mengintegrasikan layanan eksternal seperti payment gateway.',
      },
      {
        number: '03',
        title: 'Aplikasi mobile',
        text: 'Pengembangan Android native dengan Kotlin serta aplikasi multi-platform menggunakan Flutter dan Dart.',
      },
      {
        number: '04',
        title: 'Dari rancangan sampai deployment',
        text: 'Mengerjakan alur aplikasi dan wireframe awal, implementasi antarmuka, debugging, deployment, sampai maintenance setelah aplikasi berjalan.',
      },
    ],
  },
  en: {
    label: 'What I work on',
    title: 'From application flow to working software',
    items: [
      {
        number: '01',
        title: 'Web applications',
        text: 'Building data-driven web applications with PHP/Laravel, relational databases, authentication, and business workflows.',
      },
      {
        number: '02',
        title: 'Backend & REST APIs',
        text: 'Designing database-backed APIs, handling authentication and access control, and integrating external services such as payment gateways.',
      },
      {
        number: '03',
        title: 'Mobile applications',
        text: 'Native Android development with Kotlin and multi-platform application development with Flutter and Dart.',
      },
      {
        number: '04',
        title: 'Interface to deployment',
        text: 'Working from rough wireframes and application flows through interface implementation, debugging, deployment, and ongoing maintenance.',
      },
    ],
  },
};

const Capabilities = ({ language = 'id' }) => {
  const text = content[language];

  return (
    <section className="border-b border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-medium tracking-wide text-sky-300/85">{text.label}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">{text.title}</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {text.items.map((item) => (
            <article key={item.number} className="glass-panel-soft group rounded-2xl p-6 transition duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <span className="mt-0.5 font-mono text-xs text-slate-600">{item.number}</span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-200 transition group-hover:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;

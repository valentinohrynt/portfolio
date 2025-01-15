import React from 'react';

const Skills = ({ darkMode }) => {
  const devicons = {
    Kotlin: '<i class="devicon-kotlin-plain colored"></i> Kotlin',
    Android: '<i class="devicon-android-plain colored"></i> Android',
    Flutter: '<i class="devicon-flutter-plain colored"></i> Flutter',
    JUnit: '<i class="devicon-junit-plain colored"></i> JUnit',
    HTML5: '<i class="devicon-html5-plain colored"></i> HTML5',
    JavaScript: '<i class="devicon-javascript-plain colored"></i> JavaScript',
    CSS3: '<i class="devicon-css3-plain colored"></i> CSS3',
    Bootstrap: '<i class="devicon-bootstrap-plain colored"></i> Bootstrap',
    PHP: '<i class="devicon-php-plain colored"></i> PHP',
    Laravel: '<i class="devicon-laravel-plain colored"></i> Laravel',
    NodeJS: '<i class="devicon-nodejs-plain colored"></i> NodeJS',
    ExpressJS: '<i class="devicon-express-original colored"></i> ExpressJS',
    Sequelize: '<i class="devicon-sequelize-plain colored"></i> Sequelize',
    Supabase: '<i class="devicon-supabase-plain colored"></i> Supabase',
    Vercel: '<i class="devicon-vercel-plain colored"></i> Vercel',
    MySQL: '<i class="devicon-mysql-plain colored"></i> MySQL',
    Flask: '<i class="devicon-flask-plain colored"></i> Flask',
    Apache: '<i class="devicon-apache-plain colored"></i> Apache',
    NginX: '<i class="devicon-nginx-plain colored"></i> NginX',
    Python: '<i class="devicon-python-plain colored"></i> Python',
    Pandas: '<i class="devicon-pandas-plain colored"></i> Pandas',
    ScikitLearn: '<i class="devicon-scikitlearn-plain colored"></i> Scikit-learn',
    Matplotlib: '<i class="devicon-matplotlib-plain colored"></i> Matplotlib',
    Selenium: '<i class="devicon-selenium-plain colored"></i> Selenium',
    VisualStudioCode: '<i class="devicon-vscode-plain colored"></i> Visual Studio Code',
    VisualStudio: '<i class="devicon-visualstudio-plain colored"></i> Visual Studio',
    AndroidStudio: '<i class="devicon-androidstudio-plain colored"></i> Android Studio',
    Git: '<i class="devicon-git-plain colored"></i> Git',
    GitHub: '<i class="devicon-github-plain colored"></i> GitHub',
    PowerShell: '<i class="devicon-powershell-plain colored"></i> PowerShell',
    Figma: '<i class="devicon-figma-plain colored"></i> Figma',
    Docker: '<i class="devicon-docker-plain colored"></i> Docker',
    MongoDB: '<i class="devicon-mongodb-plain colored"></i> MongoDB',
    Redis: '<i class="devicon-redis-plain colored"></i> Redis',
    PostgreSQL: '<i class="devicon-postgresql-plain colored"></i> PostgreSQL',
    GraphQL: '<i class="devicon-graphql-plain colored"></i> GraphQL',
    AWS: '<i class="devicon-amazonwebservices-plain colored"></i> AWS',
    GCP: '<i class="devicon-googlecloud-plain colored"></i> GCP',
    Azure: '<i class="devicon-microsoftazure-plain colored"></i> Azure',
    Terraform: '<i class="devicon-terraform-plain colored"></i> Terraform',
    Kubernetes: '<i class="devicon-kubernetes-plain colored"></i> Kubernetes',
    DockerSwarm: '<i class="devicon-docker-swarm-plain colored"></i> Docker Swarm',
    Jenkins: '<i class="devicon-jenkins-plain colored"></i> Jenkins',
  };

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-12 font-mono text-3xl font-bold text-center animate__animated animate__fadeIn animate__delay-1s">
          <span className="text-cyan-500">&lt;</span>
          Skills
          <span className="text-cyan-500">/&gt;</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Cloud Computing  */}
          <div
            className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg p-6 border border-cyan-500/30 animate__animated animate__fadeIn animate__delay-1s`}
          >
            <h3 className="mb-4 font-mono text-xl font-semibold text-cyan-500">Cloud Computing </h3>
            <div className="flex flex-wrap gap-2">
              {['GCP', 'Docker'].map((skill) => (
                <span
                  key={skill}
                  className={`bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-2`}
                >
                  <span dangerouslySetInnerHTML={createMarkup(devicons[skill] || '')} />
                </span>
              ))}
            </div>
          </div>

          {/* Mobile Development  */}
          <div
            className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg p-6 border border-cyan-500/30 animate__animated animate__fadeIn animate__delay-2s`}
          >
            <h3 className="mb-4 font-mono text-xl font-semibold text-cyan-500">Mobile Development </h3>
            <div className="flex flex-wrap gap-2">
              {['Kotlin', 'Android', 'Flutter', 'JUnit'].map((skill) => (
                <span
                  key={skill}
                  className={`bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-2`}
                >
                  <span dangerouslySetInnerHTML={createMarkup(devicons[skill] || '')} />
                </span>
              ))}
            </div>
          </div>

          {/* Backend & Website Development  */}
          <div
            className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg p-6 border border-cyan-500/30 animate__animated animate__fadeIn animate__delay-3s`}
          >
            <h3 className="mb-4 font-mono text-xl font-semibold text-cyan-500">Backend & Website Development </h3>
            <div className="flex flex-wrap gap-2">
              {['HTML5', 'JavaScript', 'CSS3', 'Bootstrap', 'PHP', 'Laravel', 'NodeJS', 'ExpressJS', 'Sequelize', 'Supabase', 'Vercel', 'MySQL', 'Flask', 'Apache', 'NginX'].map((skill) => (
                <span
                  key={skill}
                  className={`bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-2`}
                >
                  <span dangerouslySetInnerHTML={createMarkup(devicons[skill] || '')} />
                </span>
              ))}
            </div>
          </div>

          {/* Machine Learning  */}
          <div
            className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg p-6 border border-cyan-500/30 animate__animated animate__fadeIn animate__delay-4s`}
          >
            <h3 className="mb-4 font-mono text-xl font-semibold text-cyan-500">Machine Learning </h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Pandas', 'ScikitLearn', 'Matplotlib', 'Selenium'].map((skill) => (
                <span
                  key={skill}
                  className={`bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-2`}
                >
                  <span dangerouslySetInnerHTML={createMarkup(devicons[skill] || '')} />
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div
            className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg p-6 border border-cyan-500/30 animate__animated animate__fadeIn animate__delay-5s`}
          >
            <h3 className="mb-4 font-mono text-xl font-semibold text-cyan-500">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['VisualStudioCode', 'Git', 'AndroidStudio', 'VisualStudio', 'GitHub', 'PowerShell', 'Figma'].map((skill) => (
                <span
                  key={skill}
                  className={`bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-2`}
                >
                  <span dangerouslySetInnerHTML={createMarkup(devicons[skill] || '')} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React, { useState, useEffect } from 'react';
import { ExternalLink, Search } from 'lucide-react';

const Token = process.env.REACT_APP_GITHUB_TOKEN;

const Projects = ({ username = 'valentinohrynt', darkMode }) => {
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [profile, setProfile] = useState(null);
  const [repoLanguages, setRepoLanguages] = useState({});

  const devicons = {
    Assembly: '<i class="devicon-labview-plain colored"></i> Assembly',
    'C#': '<i class="devicon-csharp-plain colored"></i> C#',
    'C++': '<i class="devicon-cplusplus-plain colored"></i> C++',
    C: '<i class="devicon-c-plain colored"></i> C',
    CSS: '<i class="devicon-css3-plain colored"></i> CSS',
    Dart: '<i class="devicon-dart-plain colored"></i> Dart',
    Go: '<i class="devicon-go-plain colored"></i> Go',
    HTML: '<i class="devicon-html5-plain colored"></i> HTML',
    Java: '<i class="devicon-java-plain colored" style="color: #ffca2c"></i> Java',
    JavaScript: '<i class="devicon-javascript-plain colored"></i> JavaScript',
    Kotlin: '<i class="devicon-kotlin-plain colored" style="color: #796bdc"></i> Kotlin',
    PHP: '<i class="devicon-php-plain colored"></i> PHP',
    Python: '<i class="devicon-python-plain colored" style="color: #3472a6"></i> Python',
    Ruby: '<i class="devicon-ruby-plain colored"></i> Ruby',
    Rust: '<i class="devicon-rust-plain colored" style="color: #DEA584"></i> Rust',
    Sass: '<i class="devicon-sass-original colored"></i> Sass',
    Swift: '<i class="devicon-swift-plain colored"></i> Swift',
    TypeScript: '<i class="devicon-typescript-plain colored"></i> TypeScript',
    Vue: '<i class="devicon-vuejs-plain colored"></i> Vue',
    null: '<i class="devicon-markdown-original"></i> Markdown'
  };

  const createMarkup = (html) => {
    return { __html: html };
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`, {
          headers: {
            Authorization: `token ${Token}`,
          },
        });
        const data = await res.json();
        setProfile(data); 
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, [username]);
  
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`, {
            headers: {
              Authorization: `token ${Token}`
            }
          }
        );
        const data = await res.json();
        setRepos(data);
        setFilteredRepos(data); 
        
        const languagesPromises = data.map(repo =>
          fetch(repo.languages_url, {
            headers: {
              Authorization: `token ${Token}`
            }
          })
            .then(res => res.json())
            .catch(() => ({}))
        );

        const languagesResults = await Promise.all(languagesPromises);
        const languagesMap = {};
        data.forEach((repo, index) => {
          languagesMap[repo.id] = languagesResults[index];
        });
        setRepoLanguages(languagesMap);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };
    fetchRepos();
  }, [username]);

  useEffect(() => {
    if (Array.isArray(repos)) {
      const filtered = repos.filter(repo =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredRepos(filtered);
    }
  }, [searchTerm, repos]);

  const getLanguagePercentages = (languages) => {
    const total = Object.values(languages).reduce((sum, count) => sum + count, 0);
    
    if (total === 0) return [];
  
    return Object.entries(languages).map(([lang, count]) => ({
      name: lang,
      percentage: ((count / total) * 100).toFixed(1)
    }));
  };
  
  

  if (!profile) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl px-4 mx-auto">
        <div className="mb-12">
          <h2 className="mb-6 font-mono text-3xl font-bold text-center">
            <span className="text-cyan-500">&lt;</span>
            Projects
            <span className="text-cyan-500">/&gt;</span>
          </h2>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={20} />
            <input
              type="text"
              placeholder="Search projects"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border border-cyan-500/30 focus:border-cyan-500 outline-none transition-colors ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            />
          </div>
        </div>

        {/* Repository Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(filteredRepos) && filteredRepos.length > 0 ? (
            filteredRepos.map((repo) => (
              <div
                key={repo.id}
                className={`${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } rounded-lg p-6 border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 group transform hover:-translate-y-2`}
              >
                <h3 className="flex items-center justify-between mb-3 font-mono text-xl font-semibold">
                  {repo.name}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:text-cyan-400"
                  >
                    <ExternalLink size={20} />
                  </a>
                </h3>
                <p className="mb-4 opacity-80 line-clamp-2">{repo.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {repoLanguages[repo.id] && 
                    getLanguagePercentages(repoLanguages[repo.id]).map(({ name, percentage }) => (
                      <span
                        key={name}
                        className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-500"
                      >
                        <span dangerouslySetInnerHTML={createMarkup(devicons[name] || devicons['null'])} />
                        {percentage}%
                      </span>
                    ))
                  }
                </div>
                <div className="flex flex-wrap gap-2">
                  {repo.topics?.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-500"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No repositories found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

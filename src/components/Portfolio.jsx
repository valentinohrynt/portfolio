import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Menu, X, Sun, Moon } from 'lucide-react';
import Projects from './Projects';
import Skills from './Skills';
import profileImage from '../assets/images/profile.png';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ease-in-out ${darkMode ? 'bg-gray-900 text-cyan-400' : 'bg-gray-50 text-gray-900'}`}
    >
      {/* Navigation */}
      <nav
        className={`${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } border-b border-cyan-500/30 backdrop-blur-sm sticky top-0 z-50 transition-all duration-500`}
      >
        <div className="max-w-6xl px-4 py-3 mx-auto">
          <div className="flex items-center justify-between">
            <div className="font-mono text-xl font-bold">
              <span className="text-cyan-500 animate-pulse">&lt;</span>
              Valentino Hariyanto
              <span className="text-cyan-500 animate-pulse">/&gt;</span>
            </div>

            {/* Desktop Navigation */}
            <div className="items-center hidden space-x-8 md:flex">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 transition-transform transform rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 hover:scale-110"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              {['Home', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="transition-colors duration-300 hover:text-cyan-500"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="py-4 md:hidden">
              <div className="flex flex-col space-y-3">
                {['Home', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="transition-colors duration-300 hover:text-cyan-500"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`relative pt-20 pb-32 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-cyan-500 to-indigo-500'}`}>
        <div className="flex flex-col items-center max-w-6xl px-4 mx-auto md:flex-row">
          <div className="text-center md:text-left md:w-1/2 animate__animated animate__fadeIn">
            <div className="inline-block">
              <h1 className="relative mb-6 font-mono text-5xl font-bold text-white">
                <span className="text-cyan-300">&lt;</span>
                Hi, I'm Valentino Hariyanto
                <span className="text-cyan-300">/&gt;</span>
                <div className="absolute -inset-1 bg-cyan-500/30 blur-lg -z-10"></div>
              </h1>
            </div>
            <p className="max-w-2xl mx-auto mb-8 text-xl text-white opacity-90">
              A passionate developer skilled in building innovative solutions across Android, web development, and emerging technologies.
            </p>
            <div className="z-10 flex justify-center mb-8 space-x-4 md:justify-start">
              {[{ Icon: Github, link: "https://github.com/valentinohrynt" }, 
                { Icon: Linkedin, link: "https://linkedin.com/in/valentinohariyanto" }, 
                { Icon: Mail, link: "mailto:hariyantovalentino@gmail.com" }].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-20 p-3 transition-transform transform rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 hover:scale-110"
                >
                  <Icon size={24} className="text-white"/>
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8 md:mt-0 md:w-1/2 md:justify-end animate__animated animate__fadeIn animate__delay-1s">
            <img
              src={profileImage}
              alt="Valentino Hariyanto"
              className="object-cover w-48 h-48 overflow-hidden transition-all transform border-4 rounded-full shadow-lg md:w-64 md:h-64 border-cyan-500 hover:scale-110"
            />
          </div>
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-500 via-indigo-600 to-blue-500 opacity-20" style={{ backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
      </section>


      {/* Projects Section */}
      <Projects username="valentinohrynt" darkMode={darkMode} />

      {/* Skills Section */}
      <Skills darkMode={darkMode} />

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} border-t border-cyan-500/30`}>
        <div className="max-w-6xl px-4 py-8 mx-auto">
          <div className="text-center opacity-80">
            <p>© {new Date().getFullYear()} Valentino Hariyanto. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Smooth Scroll */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;

/ components/Projects.js
import React from 'react';
import { Code, ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects = () => (
  <section id="projects" className="py-20 px-6 bg-gradient-to-br from-slate-800/50 to-purple-900/50">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          My Projects
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Here are some of the projects I've been working on. Each one represents a step in my journey as a developer.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Portfolio Website Project */}
        <div className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-400/20 hover:-translate-y-3 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div className="p-3 bg-purple-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Code size={28} className="text-purple-400" />
            </div>
            <div className="flex space-x-2">
              <ExternalLink size={20} className="text-white/40 group-hover:text-purple-400 transition-colors duration-300 cursor-pointer hover:scale-110" />
              <Github size={20} className="text-white/40 group-hover:text-purple-400 transition-colors duration-300 cursor-pointer hover:scale-110" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
            Portfolio Website
          </h3>
          <p className="text-white/70 mb-6 leading-relaxed">
            A modern, responsive personal portfolio built with React. Features smooth animations, 
            gradient designs, and showcases my development skills with contemporary web design principles.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">React</span>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">CSS3</span>
            <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium">JavaScript</span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">Responsive</span>
          </div>
          
          <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
            <Sparkles size={16} className="mr-2" />
            Live Project
          </div>
        </div>

        {/* Web Application Project */}
        <div className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-400/20 hover:-translate-y-3 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Code size={28} className="text-cyan-400" />
            </div>
            <div className="flex space-x-2">
              <ExternalLink size={20} className="text-white/40 group-hover:text-cyan-400 transition-colors duration-300 cursor-pointer hover:scale-110" />
              <Github size={20} className="text-white/40 group-hover:text-cyan-400 transition-colors duration-300 cursor-pointer hover:scale-110" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
            Interactive Web App
          </h3>
          <p className="text-white/70 mb-6 leading-relaxed">
            A dynamic web application demonstrating full-stack development capabilities 
            with modern UI/UX design patterns, API integration, and real-time functionality.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">React</span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">Node.js</span>
            <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium">API</span>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">Database</span>
          </div>
          
          <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
            <Sparkles size={16} className="mr-2" />
            In Development
          </div>
        </div>

        {/* Future Project */}
        <div className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-pink-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-pink-400/20 hover:-translate-y-3 overflow-hidden md:col-span-2 lg:col-span-1">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div className="p-3 bg-pink-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Sparkles size={28} className="text-pink-400" />
            </div>
            <div className="flex space-x-2">
              <ExternalLink size={20} className="text-white/40 group-hover:text-pink-400 transition-colors duration-300 cursor-pointer hover:scale-110" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-pink-400 group-hover:text-pink-300 transition-colors duration-300">
            Next Big Thing
          </h3>
          <p className="text-white/70 mb-6 leading-relaxed">
            Exciting new projects are in the pipeline! Stay tuned for innovative solutions 
            and creative web experiences that will showcase cutting-edge technologies.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium">Next.js</span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">TypeScript</span>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">AI/ML</span>
          </div>
          
          <div className="flex items-center text-pink-400 text-sm font-medium group-hover:text-pink-300 transition-colors duration-300">
            <Sparkles size={16} className="mr-2" />
            Coming Soon
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <p className="text-white/60 mb-6">Want to see more of my work?</p>
        <a 
          href="#contact" 
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
        >
          <Github size={20} className="mr-2" />
          View My GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
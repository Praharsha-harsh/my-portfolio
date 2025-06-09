// components/About.js
import React from 'react';
import { User, Code, GraduationCap, Heart } from 'lucide-react';

const About = () => (
  <section id="about" className="pt-24 pb-20 px-6 min-h-screen flex items-center">
    <div className="max-w-6xl mx-auto w-full">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="relative mb-12">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-1 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <User size={60} className="text-cyan-400" />
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-ping"></div>
        </div>
        
        <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-8"></div>
        
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          I am a React developer passionate about building innovative web applications that make a difference.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-400/10 hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-cyan-500/20 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
              <Code size={32} className="text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-cyan-400">Developer</h3>
          </div>
          <p className="text-white/70 leading-relaxed">
            Passionate about creating clean, efficient code and building user-friendly web applications with modern technologies.
          </p>
        </div>

        <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-400/10 hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-purple-500/20 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap size={32} className="text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-purple-400">Student</h3>
          </div>
          <p className="text-white/70 leading-relaxed">
            Currently in my 6th semester, constantly learning and growing in the field of computer science and web development.
          </p>
        </div>

        <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-pink-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-pink-400/10 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-pink-500/20 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
              <Heart size={32} className="text-pink-400" />
            </div>
            <h3 className="text-2xl font-bold text-pink-400">Enthusiast</h3>
          </div>
          <p className="text-white/70 leading-relaxed">
            Dedicated to learning new technologies and contributing to the developer community through innovative projects.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold mb-8 text-white">Technologies I Work With</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {['React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Git', 'Tailwind CSS', 'MongoDB'].map((skill, index) => (
            <span 
              key={skill} 
              className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white rounded-full border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
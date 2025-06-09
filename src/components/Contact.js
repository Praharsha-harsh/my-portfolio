// components/Contact.js
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="py-20 px-6 bg-gradient-to-br from-purple-900/50 to-slate-900">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Email Card */}
        <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-400/10 hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <div className="p-4 bg-cyan-500/20 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
              <Mail size={28} className="text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Email Me</h3>
              <p className="text-white/60">Let's discuss your project</p>
            </div>
          </div>
          <div className="space-y-4">
            <a 
              href="mailto:prasharshahvp@gmail.com"
              className="block p-4 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group/email"
            >
              <div className="flex items-center justify-between">
                <span className="text-white/80 group-hover/email:text-cyan-400 transition-colors duration-300">
                  prasharshahvp@gmail.com
                </span>
                <Send size={16} className="text-white/40 group-hover/email:text-cyan-400 transition-colors duration-300" />
              </div>
            </a>
          </div>
        </div>

        {/* Phone Card */}
        <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-400/10 hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <div className="p-4 bg-purple-500/20 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
              <Phone size={28} className="text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Call Me</h3>
              <p className="text-white/60">Available for quick chats</p>
            </div>
          </div>
          <div className="space-y-4">
            <a 
              href="tel:8317494212"
              className="block p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-400/30 transition-all duration-300 group/phone"
            >
              <div className="flex items-center justify-between">
                <span className="text-white/80 group-hover/phone:text-purple-400 transition-colors duration-300">
                  +91 8317494212
                </span>
                <MessageCircle size={16} className="text-white/40 group-hover/phone:text-purple-400 transition-colors duration-300" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Location Info */}
      <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-pink-500/20 rounded-lg mr-4">
            <MapPin size={24} className="text-pink-400" />
          </div>
          <h3 className="text-xl font-bold text-pink-400">Based in India</h3>
        </div>
        <p className="text-white/70 mb-6">
          Currently pursuing my studies while building amazing web experiences. 
          Open to remote opportunities and local collaborations.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white/80 rounded-full border border-white/20">
            6th Semester Student
          </span>
          <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white/80 rounded-full border border-white/20">
            React Developer
          </span>
          <span className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 text-white/80 rounded-full border border-white/20">
            Open to Work
          </span>
        </div>
      </div>

      {/* Response Promise */}
      <div className="text-center mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-white/10">
        <h4 className="text-lg font-semibold text-white mb-2">Quick Response Guaranteed</h4>
        <p className="text-white/60">
          I typically respond to emails within 24 hours. Looking forward to hearing from you!
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
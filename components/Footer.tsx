import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Github, Twitter, Linkedin, ArrowRight, Shield, Activity, Radio } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-background-dark border-t border-primary/20 overflow-hidden pt-24 pb-12 snap-start">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded bg-primary/10 border border-primary/30">
                <Zap className="w-5 h-5 text-primary fill-current" />
              </span>
              <span className="font-display font-bold text-2xl tracking-wider text-white">AXIOM</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-light">
              Autonomous security infrastructure for the decentralized web. Detecting anomalies before they manifest in reality.
            </p>
            <div className="flex items-center gap-4">
               {[Github, Twitter, Linkedin].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 hover:shadow-neon transition-all group">
                   <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                 </a>
               ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-mono text-sm font-bold text-primary mb-6 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              Platform
            </h4>
            <ul className="space-y-4">
              {['Neural Engine', 'Threat Map', 'Integrations', 'API Documentation', 'System Status'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-mono text-sm font-bold text-primary mb-6 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              Company
            </h4>
            <ul className="space-y-4">
              {['About Axiom', 'Manifesto', 'Careers', 'Brand Assets', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Status */}
          <div className="flex flex-col gap-6">
             <div className="p-6 rounded-lg bg-surface-dark border border-white/5">
                <h4 className="font-bold text-white mb-2">Encrypted Updates</h4>
                <p className="text-xs text-slate-500 mb-4">Receive security briefings directly to your neural link.</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter frequency..."
                    className="bg-black/50 border border-white/10 rounded px-3 py-2 text-xs text-white w-full focus:outline-none focus:border-primary/50"
                  />
                  <button className="bg-primary/10 border border-primary/30 text-primary p-2 rounded hover:bg-primary hover:text-black transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
             </div>

             <div className="flex items-center justify-between p-4 rounded border border-primary/20 bg-primary/5">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-50"></div>
                  </div>
                  <span className="text-xs font-mono text-primary font-bold">ALL SYSTEMS OPTIMAL</span>
                </div>
                <Activity className="w-4 h-4 text-primary opacity-50" />
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="text-xs text-slate-600 font-mono">
             © 2124 AXIOM SYSTEMS INC. // SECURED BY QUANTUM ENCRYPTION
           </div>
           <div className="flex items-center gap-6">
             <a href="#" className="text-xs text-slate-500 hover:text-primary transition-colors">PRIVACY_PROTOCOL</a>
             <a href="#" className="text-xs text-slate-500 hover:text-primary transition-colors">TERMS_OF_ENGAGEMENT</a>
             <a href="#" className="text-xs text-slate-500 hover:text-primary transition-colors">SITEMAP</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

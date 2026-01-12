import React from 'react';
import { useNavigate } from 'react-router-dom';

const FinalActivation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-white font-display min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-background-dark">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(rgba(37,244,106,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,244,106,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark pointer-events-none z-0"></div>
      <div className="fixed inset-0 pointer-events-none z-50 opacity-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.2))] bg-[size:100%_4px]"></div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col h-screen max-h-screen w-full mx-auto max-w-[1200px] p-4 md:p-8">

        {/* Header / Progress Section */}
        <header className="flex flex-col gap-4 w-full max-w-3xl mx-auto pt-4 md:pt-8 animate-pulse">
          <div className="flex justify-between items-end px-1">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm animate-spin">sync</span>
              <p className="text-primary text-xs tracking-[0.2em] font-bold">SYSTEM_READINESS</p>
            </div>
            <p className="text-primary text-xl font-bold tracking-widest" style={{ textShadow: '0 0 10px rgba(37, 244, 106, 0.7)' }}>100%</p>
          </div>
          <div className="h-1.5 w-full bg-[#1a331a] rounded-full overflow-hidden border border-[#1a331a]">
            <div className="h-full bg-primary w-full shadow-[0_0_15px_rgba(37,244,106,0.8)]"></div>
          </div>
        </header>

        {/* Main Content: Activation Core */}
        <main className="flex-1 flex flex-col items-center justify-center gap-8 py-6">
          {/* Digital Eye Visual */}
          <div className="relative group cursor-default">
            {/* Outer Rings */}
            <div className="absolute inset-0 rounded-full border border-primary/20 scale-125"></div>
            <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 scale-150 rotate-45"></div>

            {/* Main Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/50 bg-black shadow-[0_0_10px_theme('colors.primary'),0_0_40px_theme('colors.primary')]">
              <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="material-symbols-outlined text-primary text-6xl opacity-50">visibility</span>
              </div>
              <img
                className="w-full h-full object-cover opacity-80 mix-blend-screen hover:scale-110 transition-transform duration-700 ease-in-out"
                alt="Abstract digital eye iris visualization"
                src="/assets/onboarding-eye.png"
              />
            </div>

            {/* Decorative data points */}
            <div className="absolute -right-12 top-1/2 flex flex-col gap-1 text-[10px] text-primary/60 font-mono hidden md:flex">
              <span>COORD_X: 492.21</span>
              <span>COORD_Y: 102.99</span>
              <span>IRIS_LOCK: TRUE</span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center space-y-2 max-w-2xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none uppercase" style={{ textShadow: '0 0 10px rgba(37, 244, 106, 0.7)' }}>
              Axiom-AI Is Now <span className="text-primary">Online</span>
            </h1>
            <p className="text-primary/60 text-sm tracking-[0.3em] uppercase">Initialization Sequence Complete</p>
          </div>

          {/* Terminal / Status Log */}
          <div className="w-full max-w-2xl bg-black/40 border border-primary/20 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-primary/10 pb-2 mb-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                <div className="w-2 h-2 rounded-full bg-primary/10"></div>
              </div>
              <span className="text-[10px] text-primary/50 font-mono uppercase">System_Log_v2.4.1</span>
            </div>
            {/* Static Marquee Simulation */}
            <div className="font-mono text-sm space-y-1.5 overflow-hidden">
              <div className="flex items-center gap-3 text-primary/40">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                <span>[00:01:42] COGNITIVE ENGINE LOADED...</span>
              </div>
              <div className="flex items-center gap-3 text-primary/60">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                <span>[00:01:45] DATA LAKES MAPPED...</span>
              </div>
              <div className="flex items-center gap-3 text-primary/80">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                <span>[00:01:48] ANOMALY PATTERNS SYNCED...</span>
              </div>
              <div className="flex items-center gap-3 text-primary font-bold">
                <span className="material-symbols-outlined text-[14px] animate-pulse">terminal</span>
                <span style={{ textShadow: '0 0 10px rgba(37, 244, 106, 0.7)' }}>[00:01:52] NEURAL PATHWAYS ESTABLISHED...</span>
              </div>
            </div>
          </div>
        </main>

        {/* Footer / Action */}
        <footer className="pb-8 pt-4 flex justify-center w-full">
          <button
            onClick={() => navigate('/app')}
            className="group relative flex w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary h-16 px-8 text-background-dark shadow-[0_0_10px_theme('colors.primary'),0_0_20px_theme('colors.primary')] hover:shadow-[0_0_10px_theme('colors.primary'),0_0_40px_theme('colors.primary')] transition-all duration-300"
          >
            {/* Button Inner Glow/Shine effect */}
            <div className="absolute inset-0 bg-white/20 translate-y-full skew-y-12 group-hover:translate-y-[-20%] transition-transform duration-500 ease-out"></div>
            <div className="relative flex items-center gap-3">
              <span className="text-lg font-bold tracking-widest uppercase">Enter Command Center</span>
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default FinalActivation;

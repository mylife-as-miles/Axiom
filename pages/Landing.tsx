import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { ArrowRight, Code, CheckCircle, Cpu, Activity, Zap } from 'lucide-react';

// --- Utility Components ---

/**
 * ScrambleText
 * Animates text from random characters to the final string.
 * Used for the "Fast Cut" decoding effect.
 */
const ScrambleText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const [display, setDisplay] = useState("");
  const [started, setStarted] = useState(false);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2; // Speed of decoding
    }, 30);

    return () => clearInterval(interval);
  }, [started, text]);

  return <span className={`font-mono ${className}`}>{display}</span>;
};

/**
 * SystemBadge
 * The "System Operational" indicator with pulsing animations.
 */
const SystemBadge = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3, type: "spring" }}
      className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 w-fit backdrop-blur-sm select-none"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </span>
      <span className="text-xs font-mono text-primary tracking-[0.2em] uppercase font-semibold">
        System Operational
      </span>
    </motion.div>
  );
};

/**
 * TechButton
 * Buttons with "glitch" or rapid-state-change hover effects.
 */
const TechButton = ({
  children,
  primary = false,
  onClick
}: {
  children: React.ReactNode,
  primary?: boolean,
  onClick?: () => void
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        group relative flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-bold text-base transition-all overflow-hidden
        ${primary
          ? "bg-primary text-background-dark shadow-[0_0_20px_rgba(37,244,106,0.25)] hover:bg-[#1ee05e] hover:shadow-[0_0_30px_rgba(37,244,106,0.5)]"
          : "text-white border border-white/10 hover:bg-white/5 hover:border-primary/50"}
      `}
    >
      {/* Glitch Overlay Effect on Hover */}
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-100 ease-tighter" />
      <span className="relative z-10 flex items-center gap-2 tracking-wide">
        {children}
      </span>
    </motion.button>
  );
};

// --- Main Landing Page Component ---

const Landing = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]); // Parallax for prism
  const y2 = useTransform(scrollY, [0, 500], [0, -100]); // Parallax for text

  return (
    <div className="min-h-screen bg-background-dark text-white font-display overflow-x-hidden relative selection:bg-primary selection:text-background-dark">

      {/* --- Background Architecture --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Animated Grid Floor */}
        <div
          className="absolute top-[50%] left-[-50%] right-[-50%] h-[200vh] opacity-20 origin-top"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(37, 244, 106, 0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(37, 244, 106, 0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: 'perspective(500px) rotateX(60deg) translateY(-100px)',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)'
          }}
        >
          {/* Moving grid simulation */}
          <motion.div
            className="absolute inset-0"
            animate={{ backgroundPositionY: [0, 60] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            style={{
               backgroundImage: 'inherit',
               backgroundSize: 'inherit'
            }}
          />
        </div>

        {/* Deep Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-background-dark/50 to-background-dark z-0" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050a07_100%)] z-10" />
      </div>

      {/* --- Navigation --- */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="w-full max-w-5xl glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.5)] bg-[#112117]/60 backdrop-blur-md border border-[#33e67a]/20"
        >
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="material-symbols-outlined text-primary text-3xl group-hover:drop-shadow-[0_0_8px_rgba(37,244,106,0.8)] transition-all">
              <Zap className="w-6 h-6 text-primary fill-current" />
            </span>
            <span className="font-bold text-xl tracking-wider text-white">AXIOM</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {['Features', 'Pricing', 'API', 'About'].map((item, i) => (
              <a key={item} className="text-sm font-medium text-white/70 hover:text-primary hover:drop-shadow-[0_0_5px_rgba(37,244,106,0.5)] transition-all" href="#">
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-sm font-bold text-white hover:text-primary px-3 py-2 transition-colors">Login</button>
            <button className="bg-primary text-background-dark text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#1ee05e] transition-all shadow-[0_0_15px_rgba(37,244,106,0.3)] hover:shadow-[0_0_25px_rgba(37,244,106,0.6)]">
               Start Trial
            </button>
          </div>
        </motion.div>
      </header>

      {/* --- Main Hero Content --- */}
      <main className="flex-grow flex flex-col justify-center items-center relative z-10 pt-32 pb-12 px-6 lg:px-12 w-full max-w-7xl mx-auto min-h-[90vh]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left relative">
            <SystemBadge delay={0.2} />

            {/* Massive Headline */}
            <motion.div style={{ y: y2 }}>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight text-white mix-blend-screen mb-4">
                <span className="block">AUTONOMOUS</span>
                <span className="text-primary tracking-widest drop-shadow-[0_0_25px_rgba(37,244,106,0.4)]">
                   <ScrambleText text="INTELLIGENCE." delay={0.5} />
                </span>
              </h1>

              <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent my-6"></div>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-lg md:text-2xl text-white/80 max-w-xl font-light leading-relaxed"
              >
                Anomaly detection at the speed of thought. <br/>
                <span className="text-white/40">Processed in real-time. Actioned instantly.</span>
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <TechButton primary>
                  INITIALIZE SYSTEM
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </TechButton>
                <TechButton>
                  DOCUMENTATION
                  <Code className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" />
                </TechButton>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: 3D Asset Prism */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center min-h-[400px]">
             {/* Ambient Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/20 blur-[90px] rounded-full z-0"></div>

             {/* Prism Object Container */}
             <motion.div
               style={{ y: y1 }}
               initial={{ scale: 0, opacity: 0, rotateY: 90 }}
               animate={{ scale: 1, opacity: 1, rotateY: 0 }}
               transition={{ delay: 0.8, duration: 0.8, type: "spring", bounce: 0.4 }}
               className="relative w-full aspect-square max-w-[400px] z-10 perspective-[1000px]"
             >
                <div className="relative w-full h-full flex items-center justify-center transform transition-transform duration-1000 hover:scale-105">
                  <img
                    src="/assets/axiom-prism.png"
                    alt="Abstract 3D crystalline prism"
                    className="w-full h-full object-contain drop-shadow-[0_0_35px_rgba(37,244,106,0.5)] opacity-90 contrast-125 brightness-110 mix-blend-lighten"
                  />

                  {/* Floating Card 1 */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute top-10 -right-4 glass-panel p-3 rounded-lg flex items-center gap-3 animate-pulse bg-[#112117]/80 border border-[#33e67a]/30 backdrop-blur-md"
                  >
                    <CheckCircle className="text-primary w-4 h-4" />
                    <div className="text-[10px] font-mono text-white/90 uppercase tracking-widest">
                      <div className="text-white/40 text-[8px]">Threat Level</div>
                      Zero
                    </div>
                  </motion.div>

                  {/* Floating Card 2 */}
                  <motion.div
                     initial={{ x: -50, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ delay: 1.7, duration: 0.5 }}
                     className="absolute bottom-10 -left-4 glass-panel p-3 rounded-lg flex items-center gap-3 bg-[#112117]/80 border border-[#33e67a]/30 backdrop-blur-md"
                  >
                    <div className="h-8 w-8 rounded bg-primary/20 flex items-center justify-center border border-primary/40">
                      <Cpu className="text-primary w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[8px] font-mono text-white/40 uppercase">Processing</div>
                      <div className="text-xs font-mono text-primary">14.2 TB/s</div>
                    </div>
                  </motion.div>
                </div>
             </motion.div>
          </div>
        </div>
      </main>

      {/* --- Marquee Section --- */}
      <div className="w-full border-t border-primary/20 bg-black/40 backdrop-blur-sm py-8 overflow-hidden relative z-20 mt-auto">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background-dark to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background-dark to-transparent z-10"></div>

        <div className="flex overflow-hidden">
          <motion.div
            className="flex items-center gap-16 min-w-full"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 whitespace-nowrap">
                <span className="text-5xl font-display font-bold uppercase italic tracking-widest text-transparent stroke-text opacity-40">Real-Time Analysis</span>
                <span className="text-primary text-xl">✦</span>
                <span className="text-5xl font-display font-bold uppercase italic tracking-widest text-transparent stroke-text opacity-80 drop-shadow-[0_0_8px_rgba(37,244,106,0.5)]">Predictive Action</span>
                <span className="text-primary text-xl">✦</span>
                <span className="text-5xl font-display font-bold uppercase italic tracking-widest text-transparent stroke-text opacity-40">Zero-Latency</span>
                <span className="text-primary text-xl">✦</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Custom Styles for Stroke Text */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px #25f46a;
        }
      `}</style>
    </div>
  );
};

export default Landing;

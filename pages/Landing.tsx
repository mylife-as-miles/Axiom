import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Network, ArrowRight, Code, CheckCircle, Cpu, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroAsset: React.FC = () => {
    return (
        <div className="relative w-full aspect-square max-w-[400px] z-10 perspective-[1000px]">
             {/* Ambient Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/20 blur-[90px] rounded-full z-0"></div>

             <motion.div
                className="relative w-full h-full flex items-center justify-center transform-style-3d"
                animate={{
                    rotateY: [0, 15, 0, -15, 0],
                    rotateX: [0, 5, 0, -5, 0],
                    y: [0, -20, 0]
                }}
                transition={{
                    rotateY: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                    rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
             >
                {/* Simulated Crystal/Prism using CSS 3D */}
                <div className="relative w-48 h-64 transform-style-3d">
                     {/* Front Face */}
                     <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent border border-primary/30 backdrop-blur-sm rounded-xl transform translate-z-10 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-50"></div>
                     </div>
                     {/* Back Face */}
                     <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent border border-primary/20 backdrop-blur-md rounded-xl transform -translate-z-10 scale-95 opacity-70"></div>

                     {/* Inner Core */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-48 bg-primary/20 rounded-lg blur-md"></div>

                     {/* Floating Particles/Data inside */}
                     <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                     >
                        <Network className="text-primary w-16 h-16 opacity-80 drop-shadow-[0_0_15px_rgba(37,244,106,0.8)]" />
                     </motion.div>
                </div>

                {/* Floater Card 1 - Threat Level */}
                <motion.div
                    className="absolute top-10 -right-4 glass-panel p-3 rounded-lg flex items-center gap-3"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <CheckCircle className="text-primary w-4 h-4" />
                    <div className="text-[10px] font-mono text-white/90 uppercase tracking-widest">
                        <div className="text-white/40 text-[8px]">Threat Level</div>
                        Zero
                    </div>
                </motion.div>

                {/* Floater Card 2 - Processing */}
                <motion.div
                    className="absolute bottom-10 -left-4 glass-panel p-3 rounded-lg flex items-center gap-3"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <div className="h-8 w-8 rounded bg-primary/20 flex items-center justify-center border border-primary/40">
                        <Cpu className="text-primary w-4 h-4" />
                    </div>
                    <div>
                        <div className="text-[8px] font-mono text-white/40 uppercase">Processing</div>
                        <div className="text-xs font-mono text-primary">14.2 TB/s</div>
                    </div>
                </motion.div>
             </motion.div>
        </div>
    );
};

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col w-full bg-background-dark text-slate-900 dark:text-white font-body overflow-x-hidden selection:bg-primary selection:text-background-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-background-dark">
        {/* Deep fade overlay to simulate pitch black depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-background-dark/50 to-background-dark z-0"></div>

        {/* Animated Grid Floor */}
        <div
            className="absolute top-[50%] left-[-50%] right-[-50%] h-[100vh] z-0 opacity-40"
            style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(37, 244, 106, 0.15) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(37, 244, 106, 0.15) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
                transform: 'perspective(500px) rotateX(60deg)',
                transformOrigin: '50% 0',
                maskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)'
            }}
        ></div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050a07_100%)] z-10"></div>
      </div>

      {/* Floating Navbar */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-5xl glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        >
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
                <Network className="text-primary w-8 h-8 group-hover:drop-shadow-[0_0_8px_rgba(37,244,106,0.8)] transition-all" />
                <span className="font-bold text-xl tracking-wider text-white font-display">AXIOM</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
                {['Features', 'Pricing', 'API', 'About'].map((item) => (
                    <a
                        key={item}
                        href="#"
                        className="text-sm font-medium text-white/70 hover:text-primary hover:drop-shadow-[0_0_5px_rgba(37,244,106,0.5)] transition-all"
                    >
                        {item}
                    </a>
                ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
                <button className="hidden sm:block text-sm font-bold text-white hover:text-primary px-3 py-2 transition-colors">
                    Login
                </button>
                <button
                    onClick={() => navigate('/app')}
                    className="bg-primary text-background-dark text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#1ee05e] transition-all shadow-[0_0_15px_rgba(37,244,106,0.3)] hover:shadow-[0_0_25px_rgba(37,244,106,0.6)] cursor-pointer"
                >
                    Start Trial
                </button>
            </div>
        </motion.div>
      </header>

      {/* Main Hero Section */}
      <main className="flex-grow flex flex-col justify-center items-center relative z-10 pt-32 pb-12 px-6 lg:px-12 w-full max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left relative">
                {/* Status Indicator */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 w-fit backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-xs font-mono text-primary tracking-[0.2em] uppercase font-semibold">System Operational</span>
                </motion.div>

                {/* Massive Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight text-white mix-blend-screen font-display"
                >
                    AUTONOMOUS<br/>
                    <span className="text-primary tracking-widest drop-shadow-[0_0_25px_rgba(37,244,106,0.4)]">INTELLIGENCE.</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="h-px w-24 bg-gradient-to-r from-primary to-transparent my-2 origin-left"
                ></motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-lg md:text-2xl text-white/80 max-w-xl font-light leading-relaxed"
                >
                    Anomaly detection at the speed of thought. <br/>
                    <span className="text-white/40">Processed in real-time. Actioned instantly.</span>
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="flex flex-wrap gap-4 mt-6"
                >
                    <button className="group flex items-center justify-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-lg font-bold text-base hover:bg-[#1ee05e] transition-all shadow-[0_0_20px_rgba(37,244,106,0.25)] hover:shadow-[0_0_30px_rgba(37,244,106,0.5)] hover:-translate-y-1 cursor-pointer">
                        <span className="tracking-wide">INITIALIZE SYSTEM</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white border border-white/10 hover:bg-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 cursor-pointer">
                        <span className="tracking-wide">DOCUMENTATION</span>
                        <Code className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" />
                    </button>
                </motion.div>
            </div>

            {/* Right: 3D Asset Prism (5 cols) */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center min-h-[400px]">
                <HeroAsset />
            </div>
        </div>
      </main>

      {/* Marquee Section */}
      <div className="w-full border-t border-primary/20 bg-black/40 backdrop-blur-sm py-8 overflow-hidden relative z-20">
            {/* Fade gradients on sides */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background-dark to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background-dark to-transparent z-10"></div>

            {/* Scrolling Content Wrapper */}
            <div className="flex w-full overflow-hidden">
                <motion.div
                    className="flex items-center gap-16 min-w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-5xl font-display font-bold uppercase italic tracking-widest text-stroke-primary opacity-40 hover:opacity-100 transition-opacity cursor-default" style={{ WebkitTextStroke: '1px #33e67a', color: 'transparent' }}>Real-Time Analysis</span>
                            <Sparkles className="text-primary w-8 h-8" />
                            <span className="text-5xl font-display font-bold uppercase italic tracking-widest text-stroke-primary opacity-80 hover:opacity-100 transition-opacity cursor-default drop-shadow-[0_0_8px_rgba(37,244,106,0.5)]" style={{ WebkitTextStroke: '1px #33e67a', color: 'transparent' }}>Predictive Action</span>
                            <Sparkles className="text-primary w-8 h-8" />
                            <span className="text-5xl font-display font-bold uppercase italic tracking-widest text-stroke-primary opacity-40 hover:opacity-100 transition-opacity cursor-default" style={{ WebkitTextStroke: '1px #33e67a', color: 'transparent' }}>Zero-Latency Cognition</span>
                            <Sparkles className="text-primary w-8 h-8" />
                            <span className="text-5xl font-display font-bold uppercase italic tracking-widest text-stroke-primary opacity-60 hover:opacity-100 transition-opacity cursor-default" style={{ WebkitTextStroke: '1px #33e67a', color: 'transparent' }}>Encrypted Core</span>
                            <Sparkles className="text-primary w-8 h-8" />
                            <span className="text-5xl font-display font-bold uppercase italic tracking-widest text-stroke-primary opacity-40 hover:opacity-100 transition-opacity cursor-default" style={{ WebkitTextStroke: '1px #33e67a', color: 'transparent' }}>Neural Mapping</span>
                            <Sparkles className="text-primary w-8 h-8" />
                            <span className="text-5xl font-display font-bold uppercase italic tracking-widest text-stroke-primary opacity-40 hover:opacity-100 transition-opacity cursor-default" style={{ WebkitTextStroke: '1px #33e67a', color: 'transparent' }}>Deep Learning</span>
                            <Sparkles className="text-primary w-8 h-8" />
                        </div>
                    ))}
                </motion.div>
            </div>
      </div>
    </div>
  );
};

export default Landing;

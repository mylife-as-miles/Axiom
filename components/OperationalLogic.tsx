import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDownToLine, BrainCircuit, Rocket, Database, Activity, Radio, Cpu, Network } from 'lucide-react';

const OperationalLogic = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Monitor scroll within the component to determine active step
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Divide the scroll progress into 3 sections for the steps
  // 0.0 - 0.33: Ingest
  // 0.33 - 0.66: Analyze
  // 0.66 - 1.0: Execute
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.35) {
        setActiveStep(0);
      } else if (latest < 0.75) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Smooth scroll tracking for the vertical line
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative w-full z-20 bg-[#050a07] overflow-hidden">
      {/* Background Noise Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-30 mix-blend-overlay"
        style={{ backgroundImage: 'url(/assets/noise-texture.png)' }}
      ></div>

      <div className="relative z-10 flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-6">

        {/* Left Column: Logic Flow (Timeline) - Extended Height for Scroll */}
        <div className="w-full lg:w-5/12 py-24 lg:pl-0 lg:pr-12 flex flex-col">
          <div className="mb-24 sticky top-24 transition-opacity duration-300">
            <h2 className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Operational Logic Flow</h2>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-6">
              AUTONOMOUS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">INTELLIGENCE</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Axiom's neural engine processes reality in three distinct phases, turning raw chaos into executed order instantly.
            </p>
          </div>

          {/* Timeline Container with increased spacing for scroll distance */}
          <div className="relative space-y-64 pl-4 pb-32">
            {/* Vertical Line Background - Static rail */}
            <div className="absolute left-[27px] top-4 bottom-0 w-[2px] bg-slate-800 h-full"></div>

            {/* Animated Progress Line */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-[27px] top-4 w-[2px] bg-gradient-to-b from-primary via-primary to-emerald-500 z-10 origin-top"
            ></motion.div>

            {/* Step 1: Ingest */}
            <StepItem
              stepNumber="01"
              title="INGEST"
              description="Aggregating disparate data streams into a singular truth source. Compatible with 500+ integration points."
              icon={ArrowDownToLine}
              isActive={activeStep >= 0}
              isCurrent={activeStep === 0}
            />

            {/* Step 2: Analyze */}
            <StepItem
              stepNumber="02"
              title="ANALYZE"
              description="Autonomous pattern recognition and predictive modeling running in real-time. Detecting anomalies before they manifest."
              icon={BrainCircuit}
              isActive={activeStep >= 1}
              isCurrent={activeStep === 1}
            />

            {/* Step 3: Execute */}
            <StepItem
              stepNumber="03"
              title="EXECUTE"
              description="Deploying automated logic to rectify anomalies instantly. Zero-touch resolution protocols engaged."
              icon={Rocket}
              isActive={activeStep >= 2}
              isCurrent={activeStep === 2}
            />
          </div>
        </div>

        {/* Right Column: Sticky Visualization */}
        <div className="hidden lg:flex lg:w-7/12 h-screen sticky top-0 items-center justify-center lg:pl-12 px-6">
          <VisualizationPanel activeStep={activeStep} />
        </div>
      </div>
    </section>
  );
};

// --- Sub-Components ---

const StepItem = ({ stepNumber, title, description, icon: Icon, isActive, isCurrent }: any) => {
  return (
    <div className={`group relative grid grid-cols-[60px_1fr] gap-6 transition-all duration-500 ${isCurrent ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}>
      {/* Connector & Node */}
      <div className="flex flex-col items-center h-full">
        <div className={`relative z-20 flex items-center justify-center w-12 h-12 rounded-xl border transition-all duration-500
          ${isActive ? 'bg-[#050a07] border-primary shadow-glow' : 'bg-background-dark border-slate-700'}`}>
          <Icon className={`w-6 h-6 transition-colors duration-500 ${isActive ? 'text-primary' : 'text-slate-500'}`} />
        </div>
      </div>
      {/* Content */}
      <div className="pt-2 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className={`font-mono text-xs font-bold px-2 py-1 rounded transition-colors duration-500
            ${isActive ? 'text-primary bg-primary/10' : 'text-slate-600 bg-slate-900'}`}>
            {stepNumber} //
          </span>
          <h3 className={`text-2xl font-bold tracking-wide transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-500'}`}>
            {title}
          </h3>
        </div>
        <p className={`font-mono text-sm leading-relaxed border-l-2 pl-4 py-1 transition-colors duration-500
          ${isActive ? 'text-slate-400 border-primary/30' : 'text-slate-600 border-slate-800'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

const VisualizationPanel = ({ activeStep }: { activeStep: number }) => {
  return (
    <div className="relative w-full aspect-square md:aspect-video lg:aspect-square max-h-[600px] bg-[#0a110e] border border-primary/30 rounded-lg overflow-hidden shadow-2xl transition-all duration-700">
      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-20"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary z-20"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary z-20"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-20"></div>

      {/* Top Bar UI */}
      <div className="absolute top-0 w-full h-10 bg-primary/5 border-b border-primary/20 flex items-center justify-between px-4 z-20">
        <div className="text-[10px] text-primary font-mono flex gap-4">
          <span>MODE:
            {activeStep === 0 && " INGESTION_STREAM"}
            {activeStep === 1 && " NEURAL_ANALYSIS"}
            {activeStep === 2 && " ACTIVE_DEPLOYMENT"}
          </span>
          <span>BUFFER: 100%</span>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
          <div className="w-2 h-2 rounded-full bg-primary shadow-neon"></div>
        </div>
      </div>

      {/* Main Visualization Viewport */}
      <div className="w-full h-full relative group">

        {/* State 0: Ingest (Data Stream) */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: activeStep === 0 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-[#050a07] flex items-center justify-center overflow-hidden"
        >
          {/* Abstract Stream Lines */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-[#050a07] to-[#050a07]"></div>
          {/* Grid Floor */}
          <div className="absolute bottom-0 w-full h-1/2 bg-[linear-gradient(to_top,rgba(37,244,106,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(37,244,106,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom"></div>
          {/* Central Subject */}
          <div className="relative z-10 w-64 h-64 border border-primary/50 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
            <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="w-48 h-48 border border-primary/60 rounded-full flex items-center justify-center bg-primary/5 backdrop-blur-sm shadow-neon">
              <Database className="text-primary w-16 h-16 animate-pulse" />
            </div>
          </div>
          {/* Floating Data Points */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping [animation-delay:0.5s]"></div>

          {/* Image Overlay */}
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen pointer-events-none"
            alt="Data stream"
            src="/assets/logic-flow-viz.png"
          />
        </motion.div>


        {/* State 1: Analyze (Neural Network) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: activeStep === 1 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-[#0a110e] flex items-center justify-center overflow-hidden pointer-events-none"
        >
          {/* Grid Network Background */}
          <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, #25f46a 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}>
          </div>

          {/* Connecting Lines Animation */}
          <svg className="absolute inset-0 w-full h-full z-0 opacity-40">
             <motion.path
               d="M100,300 Q300,100 500,300 T900,300"
               stroke="var(--color-primary)" strokeWidth="2" fill="none"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: activeStep === 1 ? 1 : 0 }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             />
             <motion.path
               d="M100,300 Q300,500 500,300 T900,300"
               stroke="var(--color-primary)" strokeWidth="2" fill="none"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: activeStep === 1 ? 1 : 0 }}
               transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
             />
          </svg>

          {/* Central Brain/Chip */}
          <div className="relative z-10 w-56 h-56 flex items-center justify-center">
             <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full animate-pulse"></div>
             <Cpu className="text-primary w-32 h-32 relative z-10 drop-shadow-[0_0_15px_rgba(37,244,106,0.8)]" />

             {/* Orbiting Nodes */}
             <motion.div
               className="absolute w-full h-full border border-primary/30 rounded-full"
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_white]"></div>
             </motion.div>
          </div>

          <div className="absolute bottom-12 left-12 text-xs font-mono text-primary/70">
            <p>PATTERN_MATCHING: 99.9%</p>
            <p>ANOMALIES_DETECTED: 0</p>
          </div>
        </motion.div>


        {/* State 2: Execute (Launch/Deploy) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: activeStep === 2 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-[#050a07] flex items-center justify-center overflow-hidden pointer-events-none"
        >
           {/* Radar / Target Effect */}
           <div className="absolute inset-0 flex items-center justify-center">
             <motion.div
               className="w-[400px] h-[400px] border border-primary/20 rounded-full"
               animate={{ scale: [0.8, 1.2], opacity: [0.5, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
             />
             <motion.div
               className="absolute w-[200px] h-[200px] border border-primary/40 rounded-full"
               animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
               transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
             />
           </div>

           {/* Central Launch Icon */}
           <div className="relative z-10 flex flex-col items-center gap-4">
             <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full"></div>
                <Rocket className="text-emerald-400 w-24 h-24 relative z-10 drop-shadow-[0_0_20px_rgba(16,185,129,1)]" />
             </div>
             <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-emerald-500/10 border border-emerald-500/50 px-4 py-2 rounded text-emerald-400 font-mono font-bold tracking-widest"
             >
               PROTOCOL EXECUTED
             </motion.div>
           </div>
        </motion.div>

        {/* Scanlines Overlay (Global) */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[size:100%_2px,3px_100%]"></div>
      </div>

      {/* Bottom HUD */}
      <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-[#050a07] to-transparent z-20">
        <div className="flex justify-between items-end">
          <div className="font-mono text-xs text-primary/70">
            <p>COORD: 45.332, -12.004</p>
            <p>TARGET: STREAM_01</p>
          </div>
          <div className="border border-primary/30 bg-black/50 px-3 py-1 rounded text-primary text-xs font-mono">
            LIVE FEED
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationalLogic;

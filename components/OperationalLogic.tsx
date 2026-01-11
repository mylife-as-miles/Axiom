import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Database, Activity, Target, Zap, Server, Shield, Network, Crosshair } from 'lucide-react';

// --- Visualizations ---

const IngestVisual = () => (
  <div className="w-full h-full relative group">
    {/* Background Grid */}
    <div className="absolute inset-0 bg-background-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_70%)]"></div>
      <div className="absolute bottom-0 w-full h-1/2 bg-[linear-gradient(to_top,rgba(37,244,106,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(37,244,106,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom"></div>

      {/* Central Subject: Stream Node */}
      <div className="relative z-10 w-64 h-64 border border-primary/50 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
        <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="w-48 h-48 border border-primary/60 rounded-full flex items-center justify-center bg-primary/5 backdrop-blur-sm shadow-neon">
          <Server className="w-24 h-24 text-primary animate-pulse" />
        </div>
      </div>

      {/* Floating Particles */}
      <motion.div
        animate={{ y: [-20, 20], opacity: [0.5, 1] }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "mirror" }}
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full shadow-neon"
      />
      <motion.div
        animate={{ y: [20, -20], opacity: [0.5, 1] }}
        transition={{ repeat: Infinity, duration: 3, repeatType: "mirror" }}
        className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full shadow-neon"
      />
    </div>

    {/* Scanlines */}
    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[size:100%_2px,3px_100%]"></div>
  </div>
);

const AnalyzeVisual = () => (
  <div className="w-full h-full relative group bg-background-dark overflow-hidden">
    {/* Neural Network Background */}
    <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full">
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(37, 244, 106, 0.1)" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    </div>

    {/* Central Brain/Network Node */}
    <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[300px] h-[300px]">
            {/* Connecting Lines (Simulated with SVG) */}
            <svg className="absolute inset-0 w-full h-full overflow-visible">
                {[...Array(6)].map((_, i) => (
                    <motion.line
                        key={i}
                        x1="50%" y1="50%"
                        x2={`${50 + 40 * Math.cos(i * 1.05)}%`}
                        y2={`${50 + 40 * Math.sin(i * 1.05)}%`}
                        stroke="#25f46a"
                        strokeWidth="1"
                        strokeOpacity="0.4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    />
                ))}
            </svg>

            {/* Nodes */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-primary rounded-full shadow-neon"
                    style={{
                        top: `${50 + 40 * Math.sin(i * 1.05)}%`,
                        left: `${50 + 40 * Math.cos(i * 1.05)}%`,
                    }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
            ))}

            {/* Central Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/10 rounded-full border border-primary backdrop-blur-md flex items-center justify-center shadow-glow-strong">
                <Network className="w-10 h-10 text-primary animate-pulse" />
            </div>

             {/* Orbiting Rings */}
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-dashed border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        </div>
    </div>

    {/* Floating Data Labels */}
    <motion.div
        className="absolute top-20 right-20 bg-black/80 border border-primary/30 p-2 rounded text-[10px] font-mono text-primary"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
    >
        PATTERN_MATCH: 99.9%
    </motion.div>
  </div>
);

const ExecuteVisual = () => (
  <div className="w-full h-full relative group bg-background-dark overflow-hidden flex items-center justify-center">
    {/* Radar/Targeting Background */}
    <div className="absolute inset-0">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,244,106,0.1)_0%,transparent_60%)]"></div>
         {/* Concentric Circles */}
         {[150, 300, 450].map((size, i) => (
             <div
                key={i}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
                style={{ width: size, height: size }}
             ></div>
         ))}
         {/* Crosshairs */}
         <div className="absolute top-1/2 left-0 w-full h-px bg-primary/20"></div>
         <div className="absolute left-1/2 top-0 w-px h-full bg-primary/20"></div>
    </div>

    {/* Target Locking UI */}
    <div className="relative z-10 w-[200px] h-[200px]">
        {/* Rotating Lock Rings */}
        <div className="absolute inset-0 border-2 border-primary/50 rounded-full border-t-transparent border-l-transparent animate-[spin_2s_linear_infinite]"></div>
        <div className="absolute inset-2 border-2 border-primary/30 rounded-full border-b-transparent border-r-transparent animate-[spin_3s_linear_infinite_reverse]"></div>

        {/* Center Target */}
        <div className="absolute inset-0 flex items-center justify-center">
             <Crosshair className="w-16 h-16 text-primary drop-shadow-[0_0_10px_rgba(37,244,106,0.8)]" />
        </div>

        {/* Lock Status Text */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
             <div className="bg-primary text-black font-bold font-mono text-xs px-2 py-1 rounded animate-pulse">
                 TARGET LOCKED // EXECUTING
             </div>
        </div>
    </div>

    {/* Side Bars */}
    <div className="absolute right-10 top-1/2 -translate-y-1/2 w-2 h-32 bg-primary/10 rounded overflow-hidden border border-primary/30">
        <motion.div
            className="w-full bg-primary shadow-glow"
            animate={{ height: ["0%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
        />
    </div>
  </div>
);

// --- Main Components ---

const LogicStep = ({
  stepNumber,
  title,
  description,
  icon: Icon,
  visual: VisualComponent
}: {
  stepNumber: string,
  title: string,
  description: string,
  icon: any,
  visual: any
}) => {
  return (
    <section className="h-screen w-full snap-start [scroll-snap-stop:always] relative flex items-center justify-center overflow-hidden border-b border-white/5">
      <div className="max-w-7xl w-full mx-auto px-6 h-full flex flex-col lg:flex-row">

        {/* Left: Content */}
        <div className="w-full lg:w-5/12 h-full flex flex-col justify-center relative z-20 pointer-events-none">
           <div className="pointer-events-auto pl-4 lg:pl-0 border-l-2 border-primary/30 lg:border-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-4"
              >
                  <span className="text-primary font-mono text-sm font-bold bg-primary/10 px-2 py-1 rounded">{stepNumber} //</span>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
              >
                {title}
              </motion.h2>

              <motion.p
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ duration: 0.5, delay: 0.4 }}
                 className="text-slate-400 text-lg leading-relaxed max-w-md border-l-2 border-primary/50 pl-6"
              >
                {description}
              </motion.p>
           </div>
        </div>

        {/* Right: Visualization (Full Height/Width on mobile, Right side on desktop) */}
        <div className="absolute inset-0 lg:relative lg:w-7/12 lg:h-full flex items-center justify-center p-0 lg:p-12 z-0 lg:z-10 opacity-20 lg:opacity-100">
           <div className="w-full h-full lg:max-h-[600px] lg:aspect-square bg-surface-dark border border-primary/20 rounded-xl overflow-hidden shadow-2xl relative">

              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-20"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary z-20"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary z-20"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-20"></div>

              {/* Top Bar HUD */}
              <div className="absolute top-0 w-full h-10 bg-primary/5 border-b border-primary/20 flex items-center justify-between px-4 z-20">
                <div className="text-[10px] text-primary font-mono flex gap-4">
                    <span>MODE: {title.toUpperCase()}</span>
                    <span>BUFFER: 100%</span>
                </div>
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-primary shadow-neon"></div>
                </div>
              </div>

              {/* The Visual Content */}
              <VisualComponent />

           </div>
        </div>

      </div>
    </section>
  );
};

const OperationalLogic = () => {
  return (
    <div className="relative bg-background-dark w-full">
       <LogicStep
          stepNumber="01"
          title="INGEST"
          description="Aggregating disparate data streams into a singular truth source. Compatible with 500+ integration points."
          icon={Database}
          visual={IngestVisual}
       />
       <LogicStep
          stepNumber="02"
          title="ANALYZE"
          description="Autonomous pattern recognition and predictive modeling running in real-time. Detecting anomalies before they manifest."
          icon={Network}
          visual={AnalyzeVisual}
       />
       <LogicStep
          stepNumber="03"
          title="EXECUTE"
          description="Deploying automated logic to rectify anomalies instantly. Zero-touch resolution protocols engaged."
          icon={Target}
          visual={ExecuteVisual}
       />
    </div>
  );
};

export default OperationalLogic;

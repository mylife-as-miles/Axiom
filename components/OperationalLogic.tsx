import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, BrainCircuit, Rocket, ArrowDownToLine } from 'lucide-react';

const OperationalLogic = () => {
  return (
    <section className="relative w-full z-20 bg-[#050a07] py-12 lg:py-24 overflow-hidden">
      {/* Background Noise Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-30 mix-blend-overlay"
        style={{ backgroundImage: 'url(/assets/noise-texture.png)' }}
      ></div>

      <div className="relative z-10 flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-6">

        {/* Left Column: Logic Flow (Timeline) */}
        <motion.div
          className="w-full lg:w-5/12 py-12 lg:pl-0 lg:pr-12 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12">
            <h2 className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Operational Logic Flow</h2>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-6">
              AUTONOMOUS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">INTELLIGENCE</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Axiom's neural engine processes reality in three distinct phases, turning raw chaos into executed order instantly.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative space-y-12 pl-4">
            {/* Vertical Line Background */}
            <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-slate-800"></div>

            {/* Step 1: Ingest (Active) */}
            <div className="group relative grid grid-cols-[60px_1fr] gap-6">
              {/* Connector & Node */}
              <div className="flex flex-col items-center h-full">
                <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-primary to-primary absolute left-[27px] top-0 bottom-0 opacity-100 transition-all duration-500 z-0"></div>
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-[#050a07] border border-primary shadow-[0_0_10px_rgba(37,244,106,0.5)] transition-all duration-300 group-hover:scale-110">
                  <ArrowDownToLine className="text-primary w-6 h-6" />
                </div>
              </div>
              {/* Content */}
              <div className="pt-2 pb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary font-mono text-xs font-bold bg-primary/10 px-2 py-1 rounded">01 //</span>
                  <h3 className="text-white text-2xl font-bold tracking-wide group-hover:text-primary transition-colors">INGEST</h3>
                </div>
                <p className="text-slate-400 font-mono text-sm leading-relaxed border-l-2 border-primary/30 pl-4 py-1">
                  Aggregating disparate data streams into a singular truth source. Compatible with 500+ integration points.
                </p>
              </div>
            </div>

            {/* Step 2: Analyze (Inactive/Hoverable) */}
            <div className="group relative grid grid-cols-[60px_1fr] gap-6">
              {/* Connector & Node */}
              <div className="flex flex-col items-center h-full">
                <div className="w-[2px] h-full bg-slate-800 group-hover:bg-primary/50 absolute left-[27px] top-[-50%] bottom-0 z-0 transition-colors duration-500"></div>
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-[#050a07] border border-slate-700 group-hover:border-primary group-hover:shadow-[0_0_10px_rgba(37,244,106,0.5)] transition-all duration-300">
                  <BrainCircuit className="text-slate-500 group-hover:text-primary transition-colors w-6 h-6" />
                </div>
              </div>
              {/* Content */}
              <div className="pt-2 pb-8 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-slate-600 group-hover:text-primary font-mono text-xs font-bold bg-slate-900 group-hover:bg-primary/10 px-2 py-1 rounded transition-colors">02 //</span>
                  <h3 className="text-white text-2xl font-bold tracking-wide group-hover:text-primary transition-colors">ANALYZE</h3>
                </div>
                <p className="text-slate-500 group-hover:text-slate-400 font-mono text-sm leading-relaxed border-l-2 border-slate-800 group-hover:border-primary/30 pl-4 py-1 transition-colors">
                  Autonomous pattern recognition and predictive modeling running in real-time. Detecting anomalies before they manifest.
                </p>
              </div>
            </div>

            {/* Step 3: Execute (Inactive/Hoverable) */}
            <div className="group relative grid grid-cols-[60px_1fr] gap-6">
              {/* Connector & Node */}
              <div className="flex flex-col items-center h-full">
                <div className="w-[2px] h-full bg-gradient-to-b from-slate-800 to-transparent group-hover:from-primary/50 absolute left-[27px] top-[-50%] bottom-0 z-0 transition-colors duration-500"></div>
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-[#050a07] border border-slate-700 group-hover:border-primary group-hover:shadow-[0_0_10px_rgba(37,244,106,0.5)] transition-all duration-300">
                  <Rocket className="text-slate-500 group-hover:text-primary transition-colors w-6 h-6" />
                </div>
              </div>
              {/* Content */}
              <div className="pt-2 pb-8 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-slate-600 group-hover:text-primary font-mono text-xs font-bold bg-slate-900 group-hover:bg-primary/10 px-2 py-1 rounded transition-colors">03 //</span>
                  <h3 className="text-white text-2xl font-bold tracking-wide group-hover:text-primary transition-colors">EXECUTE</h3>
                </div>
                <p className="text-slate-500 group-hover:text-slate-400 font-mono text-sm leading-relaxed border-l-2 border-slate-800 group-hover:border-primary/30 pl-4 py-1 transition-colors">
                  Deploying automated logic to rectify anomalies instantly. Zero-touch resolution protocols engaged.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pl-20">
            <button className="bg-primary hover:bg-emerald-400 text-black font-bold py-3 px-8 rounded-lg shadow-[0_0_10px_rgba(37,244,106,0.5)] hover:shadow-[0_0_15px_rgba(37,244,106,0.7)] transition-all duration-300 flex items-center gap-2 group">
              <span>INITIATE SEQUENCE</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Right Column: Sticky Visualization */}
        <motion.div
          className="w-full lg:w-7/12 py-12 lg:h-screen sticky top-0 flex items-center justify-center lg:pl-12 px-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Visual Container */}
          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square max-h-[600px] bg-[#0a110e] border border-primary/30 rounded-lg overflow-hidden shadow-2xl">
            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-20"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary z-20"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary z-20"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-20"></div>

            {/* Top Bar UI */}
            <div className="absolute top-0 w-full h-10 bg-primary/5 border-b border-primary/20 flex items-center justify-between px-4 z-20">
              <div className="text-[10px] text-primary font-mono flex gap-4">
                <span>MODE: VISUALIZATION</span>
                <span>BUFFER: 100%</span>
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(37,244,106,0.5)]"></div>
              </div>
            </div>

            {/* 3D Visualization Placeholder (Abstract Representation) */}
            <div className="w-full h-full relative group">
              {/* Default Active State: Ingest Stream */}
              <div className="absolute inset-0 bg-[#050a07] flex items-center justify-center overflow-hidden">
                {/* Abstract Stream Lines (CSS Gradients) */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-[#050a07] to-[#050a07]"></div>

                {/* Grid Floor */}
                <div className="absolute bottom-0 w-full h-1/2 bg-[linear-gradient(to_top,rgba(37,244,106,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(37,244,106,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom"></div>

                {/* Central Subject */}
                <div className="relative z-10 w-64 h-64 border border-primary/50 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                  <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="w-48 h-48 border border-primary/60 rounded-full flex items-center justify-center bg-primary/5 backdrop-blur-sm shadow-[0_0_20px_rgba(37,244,106,0.3)]">
                    <Database className="text-primary w-16 h-16 animate-pulse" />
                  </div>
                </div>

                {/* Floating Data Points */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping [animation-delay:0.5s]"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-ping [animation-delay:1.2s]"></div>

                {/* Image Overlay for extra texture */}
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen pointer-events-none"
                  alt="Abstract server rack lights creating a data stream effect"
                  src="/assets/logic-flow-viz.png"
                />
              </div>

              {/* Scanlines Overlay */}
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
        </motion.div>
      </div>
    </section>
  );
};

export default OperationalLogic;

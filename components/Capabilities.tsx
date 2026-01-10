import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- Utility Components ---

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
        text.split("").map((letter, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          }).join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 2;
    }, 30);
    return () => clearInterval(interval);
  }, [started, text]);

  return <span className={`font-mono ${className}`}>{display}</span>;
};

// --- Sub-components for the Grid ---

const RadarCard = () => {
  return (
    <div className="group relative md:col-span-7 bg-black border border-white/5 rounded-lg p-6 md:p-10 transition-all duration-300 hover:border-primary/50 overflow-hidden min-h-[400px] flex flex-col justify-between">
      {/* Number */}
      <span className="absolute top-0 right-0 text-[120px] md:text-[180px] font-bold text-[#111] leading-none -mt-8 -mr-8 select-none z-0 group-hover:text-[#161f19] transition-colors">01</span>

      <div className="relative z-10 h-full flex flex-col">
        <div className="mb-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Real-time Detection</h3>
          <p className="text-white/60 max-w-xs">Identify outliers in milliseconds with high-fidelity radar scanning.</p>
        </div>

        {/* Radar Visual */}
        <div className="mt-8 self-center relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
          {/* Radar Circles */}
          <div className="absolute w-full h-full border border-primary/20 rounded-full"></div>
          <div className="absolute w-3/4 h-3/4 border border-primary/20 rounded-full"></div>
          <div className="absolute w-1/2 h-1/2 border border-primary/20 rounded-full"></div>
          <div className="absolute w-1/4 h-1/4 border border-primary/40 rounded-full bg-primary/5"></div>

          {/* Crosshairs */}
          <div className="absolute w-full h-[1px] bg-primary/20"></div>
          <div className="absolute h-full w-[1px] bg-primary/20"></div>

          {/* Sweep Animation */}
          <motion.div
            className="absolute w-full h-full rounded-full overflow-hidden"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
             <div className="w-1/2 h-1/2 bg-gradient-to-tl from-primary/40 to-transparent absolute top-0 right-0 origin-bottom-left" style={{ transform: 'skewY(-15deg)' }}></div>
          </motion.div>

          {/* Blips */}
          <motion.div
            className="absolute top-[20%] right-[30%] w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#25f46a]"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
           <motion.div
            className="absolute bottom-[35%] left-[25%] w-1.5 h-1.5 bg-primary/80 rounded-full"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />

          <div className="absolute bottom-4 right-4 font-mono text-[10px] text-primary">SCANNING_SECTOR_04</div>
        </div>
      </div>
    </div>
  );
};

const SwitchCard = () => {
    const [active, setActive] = useState(true);

    return (
        <div className="group relative md:col-span-5 bg-black border border-white/5 rounded-lg p-6 md:p-10 transition-all duration-300 hover:border-primary/50 overflow-hidden min-h-[400px] flex flex-col">
            <span className="absolute top-0 right-0 text-[120px] md:text-[180px] font-bold text-[#111] leading-none -mt-8 -mr-8 select-none z-0 group-hover:text-[#161f19] transition-colors">02</span>

            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Manual Override</h3>
                    <p className="text-white/60">Seamless intervention protocols with human-in-the-loop controls.</p>
                </div>

                <div className="mt-auto flex flex-col items-center justify-center py-8">
                    <div className="relative bg-[#0a160f] p-8 rounded-xl border-2 border-white/10 shadow-inner w-full max-w-[240px] flex flex-col items-center gap-6">
                        {/* Screws */}
                        <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#333] flex items-center justify-center"><div className="w-full h-[1px] bg-[#111] rotate-45"></div></div>
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#333] flex items-center justify-center"><div className="w-full h-[1px] bg-[#111] rotate-45"></div></div>
                        <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[#333] flex items-center justify-center"><div className="w-full h-[1px] bg-[#111] rotate-45"></div></div>
                        <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#333] flex items-center justify-center"><div className="w-full h-[1px] bg-[#111] rotate-45"></div></div>

                        {/* Status LED */}
                        <div className="flex items-center gap-2">
                             <motion.div
                                className="w-3 h-3 rounded-full bg-primary"
                                animate={{ boxShadow: active ? "0 0 8px #25f46a" : "none", opacity: active ? 1 : 0.3 }}
                             />
                            <span className="font-mono text-[10px] text-primary tracking-widest">{active ? "SYSTEM_ACTIVE" : "STANDBY"}</span>
                        </div>

                        {/* Switch */}
                        <div
                            className="relative w-20 h-36 bg-black rounded-full border-4 border-[#222] shadow-[inset_0_0_10px_black] p-1 cursor-pointer"
                            onClick={() => setActive(!active)}
                        >
                            <div className="w-full h-full rounded-full relative overflow-hidden">
                                <div className="absolute bottom-0 w-full h-1/2 bg-primary/20"></div>
                            </div>
                            <motion.div
                                className="absolute top-1 left-1 w-[calc(100%-8px)] h-[calc(50%-4px)] bg-gradient-to-b from-[#333] to-[#111] rounded-full border border-[#444] shadow-lg flex items-center justify-center z-10"
                                animate={{ y: active ? "0%" : "100%" }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <div className="flex flex-col gap-1 w-1/2">
                                    <div className="h-[1px] bg-[#555] w-full"></div>
                                    <div className="h-[1px] bg-[#555] w-full"></div>
                                    <div className="h-[1px] bg-[#555] w-full"></div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="font-mono text-[10px] text-[#555] uppercase mt-2">Mode Select</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ArchivesCard = () => {
    return (
        <div className="group relative md:col-span-12 lg:col-span-8 bg-black border border-white/5 rounded-lg p-6 md:p-10 transition-all duration-300 hover:border-primary/50 overflow-hidden min-h-[300px] flex flex-col md:flex-row gap-8 items-center">
            <span className="absolute bottom-0 right-0 text-[120px] md:text-[200px] font-bold text-[#111] leading-none -mb-8 -mr-8 select-none z-0 group-hover:text-[#161f19] transition-colors">03</span>

            <div className="relative z-10 flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Deep Archives</h3>
                <p className="text-white/60 max-w-lg mb-6 text-lg">Infinite retention with zero latency retrieval for historical analysis. Our archival nodes use quantum-resistant encryption.</p>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-3 py-1 bg-black/50 border border-white/10 rounded text-xs font-mono text-white/60">
                         <span className="material-symbols-outlined !text-[14px]">database</span>
                        PETABYTE_SCALE
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-black/50 border border-white/10 rounded text-xs font-mono text-white/60">
                        <span className="material-symbols-outlined !text-[14px]">lock</span>
                        AES_256_GCM
                    </div>
                </div>
            </div>

            {/* Visualization */}
            <div className="relative z-10 w-full md:w-1/3 h-48 bg-[#0a160f] rounded border border-white/10 p-4 flex flex-col gap-2">
                <motion.div className="h-2 w-3/4 bg-primary/20 rounded-sm" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                <div className="h-2 w-full bg-primary/10 rounded-sm"></div>
                <div className="h-2 w-5/6 bg-primary/20 rounded-sm"></div>
                <div className="h-2 w-2/3 bg-primary/10 rounded-sm"></div>
                <motion.div className="h-2 w-full bg-primary/20 rounded-sm" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} />

                <div className="mt-auto flex justify-between items-end border-t border-white/10 pt-2">
                     {[20, 40, 25, 80, 50, 30].map((h, i) => (
                         <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className={`w-2 rounded-sm ${h > 60 ? 'bg-primary shadow-[0_0_8px_#25f46a]' : 'bg-primary/30'}`}
                        />
                     ))}
                </div>
            </div>
        </div>
    );
};

const DeployCard = () => {
    return (
        <div className="group relative md:col-span-12 lg:col-span-4 bg-[#08120b] border border-primary/20 rounded-lg p-8 flex flex-col justify-center items-center text-center gap-6 overflow-hidden">
             {/* Carbon texture simulation */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #333 1px, transparent 1px)", backgroundSize: "4px 4px" }}></div>

            <div className="relative z-10">
                <span className="material-symbols-outlined !text-[48px] text-primary mb-2">rocket_launch</span>
                <h3 className="text-xl font-bold text-white">Deploy Axiom</h3>
                <p className="text-white/60 text-sm mt-2 mb-6">Ready to upgrade your operational capacity?</p>
                <button className="w-full py-3 px-4 bg-primary text-black font-bold text-sm uppercase tracking-wide rounded hover:bg-white transition-colors duration-300">
                    Start Integration
                </button>
            </div>
        </div>
    );
};


// --- Main Component ---

const Capabilities = () => {
  return (
    <section className="relative w-full z-20 bg-background-dark pb-20">

      {/* Marquee Section */}
      <div className="w-full bg-[#0a0a0a] border-y border-white/5 py-3 overflow-hidden flex relative z-10 mb-20">
        <motion.div
            className="flex whitespace-nowrap font-mono text-xs md:text-sm text-primary tracking-wider items-center gap-8 min-w-full"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
            {[...Array(6)].map((_, i) => (
                 <React.Fragment key={i}>
                    <span>:: SYSTEM HEARTBEAT ::</span>
                    <span>CPU_LOAD: 45%</span>
                    <span>MEM_USAGE: 12GB</span>
                    <span>UPTIME: 99.999%</span>
                    <span>ACTIVE_NODES: 8,421</span>
                    <span>ANOMALY_DETECTED: NONE</span>
                 </React.Fragment>
            ))}
        </motion.div>
      </div>

      {/* Section Header */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20 relative z-10">
            <div className="max-w-2xl">
                <h2 className="text-primary font-mono text-sm tracking-widest mb-4 uppercase">/// Capabilities</h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tighter">
                    <ScrambleText text="OPERATIONAL" delay={0.2} /><br/>
                    <ScrambleText text="DOMINANCE" delay={0.6} />
                </h1>
            </div>
            <p className="text-white/60 max-w-sm text-base md:text-lg leading-relaxed font-light">
                Advanced control protocols designed for mission-critical operations where zero latency is the only acceptable standard.
            </p>
         </div>

         {/* Grid */}
         <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-min">
            <RadarCard />
            <SwitchCard />
            <ArchivesCard />
            <DeployCard />
         </div>

      </div>
    </section>
  );
};

export default Capabilities;

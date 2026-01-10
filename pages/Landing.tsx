import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Cpu,
  Rocket,
  ArrowRight,
  Activity,
  Zap,
  ShieldCheck,
  Terminal,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  const fullText = "INITIALIZING SYSTEM... ACCESS GRANTED.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background-dark text-white font-display overflow-hidden relative">
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(51,230,122,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(51,230,122,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 glass-panel">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/20 border border-primary flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rotate-45"></div>
            </div>
            <span className="text-xl font-bold tracking-wider">AXIOM</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span>SYSTEM STATUS: OPTIMAL</span>
            </div>
            <div className="hidden md:block">LATENCY: &lt;1ms</div>
            <div className="hidden md:block">VER: 2.4.0</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto px-6 relative z-10">

        {/* Left Column: Content */}
        <div className="flex-1 flex flex-col justify-center py-12 lg:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-primary mb-4 font-mono text-sm tracking-widest">
              <Terminal size={14} />
              <span>OPERATIONAL LOGIC FLOW</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              AUTONOMOUS <br />
              <span className="text-primary drop-shadow-[0_0_15px_rgba(51,230,122,0.5)]">INTELLIGENCE</span>
            </h1>

            <p className="text-gray-400 text-lg mb-12 max-w-xl leading-relaxed">
              Deploy advanced neural architectures to detect anomalies, optimize datasets, and execute complex logic flows in real-time.
            </p>

            {/* Timeline Steps */}
            <div className="space-y-8 mb-12 border-l-2 border-white/10 pl-8 relative">
              {[
                { icon: Box, title: "INGEST", desc: "High-throughput data assimilation" },
                { icon: Cpu, title: "ANALYZE", desc: "Neural pattern recognition" },
                { icon: Rocket, title: "EXECUTE", desc: "Automated decision deployment" }
              ].map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-background-dark border-2 border-gray-600 rounded-full group-hover:border-primary group-hover:bg-primary/20 transition-all flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 border border-white/10 rounded group-hover:border-primary/50 transition-colors">
                      <step.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        {step.title} <span className="text-xs font-mono text-gray-500">// 0{idx + 1}</span>
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/app')}
              className="group relative px-8 py-4 bg-primary text-black font-bold text-lg tracking-wider flex items-center gap-3 overflow-hidden hover:bg-primary-dim transition-all"
            >
              <span className="relative z-10">INITIATE SEQUENCE</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </button>

            <div className="mt-4 font-mono text-xs text-primary/70 h-6">
              {typedText}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visualization */}
        <div className="flex-1 flex items-center justify-center py-12 lg:pl-12 relative">
          {/* Decorative UI Chrome */}
          <div className="absolute top-10 right-10 text-xs font-mono text-primary border border-primary/30 px-2 py-1 bg-primary/5">
            MODE: VISUALIZATION
          </div>
          <div className="absolute bottom-10 left-10 text-xs font-mono text-gray-400 border border-white/10 px-2 py-1">
            BUFFER: 100%
          </div>

          <div className="relative w-full max-w-lg aspect-square">
            {/* Concentric Circles Animation */}
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-[15%] border border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-[30%] border border-dashed border-primary/30 rounded-full animate-[spin_20s_linear_infinite]"></div>

            {/* Central Element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-32 h-32 bg-black border border-primary/50 flex items-center justify-center shadow-[0_0_30px_rgba(51,230,122,0.2)]">
                <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>
                <div className="w-16 h-16 border-t-2 border-r-2 border-primary rotate-45"></div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] right-[10%] p-4 glass-panel border border-white/10 backdrop-blur-md max-w-[150px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={16} className="text-primary" />
                <span className="text-xs font-bold">SECURE</span>
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[80%]"></div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] left-[10%] p-4 glass-panel border border-white/10 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 mb-2">
                <Activity size={16} className="text-primary" />
                <span className="text-xs font-bold">LIVE FEED</span>
              </div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-1 h-4 bg-primary/50 animate-[pulse_1s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.1}s` }}></div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;

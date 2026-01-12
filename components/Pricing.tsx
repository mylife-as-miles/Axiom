import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  Target,
  History,
  Terminal,
  Zap,
  Crosshair,
  Activity,
  Cpu,
  Gauge,
  Network,
  Shield,
  Brain,
  Headset,
  Infinity as InfinityIcon
} from 'lucide-react';

const Pricing = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 bg-background-dark text-white font-display overflow-hidden">
      {/* Topographic Background Layer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 bg-repeat bg-center"
        style={{ backgroundImage: 'url(/assets/topo-pattern.png)' }}
        aria-label="Faint dark grey topographic map pattern"
      ></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center gap-16">

        {/* Header Group */}
        <div className="flex flex-col items-center gap-6 text-center max-w-2xl px-4">
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-primary"></div>
            <h4 className="text-primary text-xs font-black leading-normal tracking-[0.3em] uppercase">
              Deployment Infrastructure
            </h4>
            <div className="h-px w-8 bg-primary"></div>
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-[-0.05em] text-white">
            Axiom Deployment Tiers
          </h1>

          <p className="text-white/50 text-lg font-normal max-w-xl">
            Autonomous analytics at the speed of thought. Select your operational scale for deep-neural processing.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl px-4">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex min-w-[200px] flex-1 flex-col gap-2 rounded border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Global Throughput</p>
            <p className="text-primary tracking-tighter text-3xl font-black">250 PB/S</p>
            <div className="flex items-center gap-1 text-primary text-xs font-bold">
              <TrendingUp className="w-4 h-4" /> +12.5%
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex min-w-[200px] flex-1 flex-col gap-2 rounded border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Avg Latency</p>
            <p className="text-primary tracking-tighter text-3xl font-black">2.4 MS</p>
            <div className="flex items-center gap-1 text-red-500 text-xs font-bold">
              <TrendingDown className="w-4 h-4" /> -0.4%
            </div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex min-w-[200px] flex-1 flex-col gap-2 rounded border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Active Nodes</p>
            <p className="text-primary tracking-tighter text-3xl font-black">14,209</p>
            <div className="flex items-center gap-1 text-primary text-xs font-bold">
              <TrendingUp className="w-4 h-4" /> +5.2%
            </div>
          </motion.div>
        </div>

        {/* Pricing Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-4 items-stretch">

          {/* Tier 1: Pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex flex-col gap-8 rounded-sm border border-primary/30 bg-white/5 p-10 group transition-all hover:border-primary/60 shadow-[0_0_10px_rgba(37,244,106,0.1)] hover:shadow-[0_0_20px_rgba(37,244,106,0.2)]"
          >
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-[10px] font-black tracking-[0.4em] text-white/20 uppercase group-hover:text-primary/40 transition-colors">
              Scalability: L1 Basic
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-white/60 text-xs font-black uppercase tracking-[0.2em]">Tier 01</h2>
              <h3 className="text-white text-3xl font-black uppercase tracking-tighter">Pulse</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-primary text-6xl font-black tracking-tighter drop-shadow-[0_0_15px_rgba(37,244,106,0.5)]">$499</span>
                <span className="text-white/40 text-sm font-bold uppercase">/mo</span>
              </div>
            </div>
            <div className="flex flex-col gap-5 py-4 border-y border-white/10">
              <FeatureItem icon={Target} text="Autonomous Monitoring" />
              <FeatureItem icon={History} text="24h Data Retention" />
              <FeatureItem icon={Terminal} text="Basic API Access" />
              <FeatureItem icon={Zap} text="Latency: <10ms" />
            </div>
            <button className="mt-auto flex w-full items-center justify-center rounded-sm bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-black transition-all h-14 text-sm font-black uppercase tracking-widest cursor-pointer">
              Deploy Tier
            </button>
          </motion.div>

          {/* Tier 2: Neural (Most Popular) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1.05 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="relative flex flex-col gap-8 rounded-sm border-2 border-primary bg-primary/5 p-12 shadow-[0_0_30px_rgba(37,244,106,0.1)] z-10 md:scale-105"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 text-[10px] font-black tracking-[0.2em] uppercase rounded-full">
              Most Popular
            </div>
            <div className="absolute -right-5 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-[10px] font-black tracking-[0.4em] text-primary/60 uppercase">
              Scalability: L2 Neural
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-primary text-xs font-black uppercase tracking-[0.2em]">Tier 02</h2>
              <h3 className="text-white text-4xl font-black uppercase tracking-tighter">Neural</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-primary text-7xl font-black tracking-tighter drop-shadow-[0_0_15px_rgba(37,244,106,0.5)]">$1,299</span>
                <span className="text-white/40 text-sm font-bold uppercase">/mo</span>
              </div>
            </div>
            <div className="flex flex-col gap-5 py-6 border-y border-primary/20">
              <FeatureItem icon={Crosshair} text="Neural Pattern Recognition" highlight />
              <FeatureItem icon={Activity} text="Real-time Scaling" highlight />
              <FeatureItem icon={Cpu} text="Priority Compute Nodes" highlight />
              <FeatureItem icon={Gauge} text="Latency: <5ms" highlight />
              <FeatureItem icon={Network} text="Multi-Region Sync" highlight />
            </div>
            <button className="mt-auto flex w-full items-center justify-center rounded-sm bg-primary text-black hover:brightness-110 transition-all h-16 text-md font-black uppercase tracking-[0.2em] cursor-pointer">
              Deploy Core
            </button>
          </motion.div>

          {/* Tier 3: Axiom Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="relative flex flex-col gap-8 rounded-sm border border-primary/30 bg-white/5 p-10 group transition-all hover:border-primary/60 shadow-[0_0_10px_rgba(37,244,106,0.1)] hover:shadow-[0_0_20px_rgba(37,244,106,0.2)]"
          >
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-[10px] font-black tracking-[0.4em] text-white/20 uppercase group-hover:text-primary/40 transition-colors">
              Scalability: L3 Infinite
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-white/60 text-xs font-black uppercase tracking-[0.2em]">Tier 03</h2>
              <h3 className="text-white text-3xl font-black uppercase tracking-tighter">Axiom Core</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-primary text-5xl font-black tracking-tighter drop-shadow-[0_0_15px_rgba(37,244,106,0.5)]">Custom</span>
                <span className="text-white/40 text-xs font-bold uppercase">/quote</span>
              </div>
            </div>
            <div className="flex flex-col gap-5 py-4 border-y border-white/10">
              <FeatureItem icon={Shield} text="Full Infra Management" />
              <FeatureItem icon={Brain} text="Custom LLM Integration" />
              <FeatureItem icon={Headset} text="24/7 Tactical Support" />
              <FeatureItem icon={InfinityIcon} text="Unlimited Throughput" />
            </div>
            <button className="mt-auto flex w-full items-center justify-center rounded-sm bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-black transition-all h-14 text-sm font-black uppercase tracking-widest cursor-pointer">
              Contact Ops
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

// Helper component for list items
const FeatureItem = ({ icon: Icon, text, highlight = false }: { icon: React.ElementType, text: string, highlight?: boolean }) => (
  <div className={`flex items-center gap-4 text-sm ${highlight ? 'font-bold text-white' : 'font-medium text-white/80'}`}>
    <Icon className={`w-5 h-5 ${highlight ? 'text-primary' : 'text-primary'}`} />
    {text}
  </div>
);

export default Pricing;

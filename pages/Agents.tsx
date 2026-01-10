import React from 'react';
import ActivityTable from '../components/ActivityTable';

const Agents: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto p-4 sm:p-8 scroll-smooth">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Autonomous Agents</h1>
            <p className="text-gray-400 mt-2">Manage and monitor AI agents operating across your infrastructure.</p>
          </div>
          <button className="bg-primary text-black font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-all shadow-neon flex items-center gap-2">
            <span className="material-symbols-outlined">add</span>
            Deploy New Agent
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Database Optimizer', 'Security Sentinel', 'Load Balancer', 'Performance Tuner'].map((name, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl border border-[#254632] flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className={`size-10 rounded-lg flex items-center justify-center ${
                  i === 0 ? 'bg-primary/10 text-primary' :
                  i === 1 ? 'bg-orange-500/10 text-orange-500' :
                  i === 2 ? 'bg-blue-500/10 text-blue-500' : 'bg-purple-500/10 text-purple-500'
                }`}>
                  <span className="material-symbols-outlined text-2xl">
                    {i === 0 ? 'database' : i === 1 ? 'security' : i === 2 ? 'dns' : 'speed'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-green-500">Active</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="text-xs text-gray-400 mt-1">Version 2.4.0 • Uptime 14d</p>
              </div>
              <div className="mt-auto pt-4 border-t border-[#254632] flex justify-between items-center">
                <span className="text-xs text-gray-500">Last action: 5m ago</span>
                <button className="text-primary hover:text-white transition-colors">
                  <span className="material-symbols-outlined">settings</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reuse Activity Table for now */}
        <div className="h-full">
            <ActivityTable />
        </div>
      </div>
    </main>
  );
};

export default Agents;

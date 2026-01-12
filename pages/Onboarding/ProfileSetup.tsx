import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSetup: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [role, setRole] = useState('Analyst');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/onboarding/finalize');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-white font-display min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-background-dark">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(rgba(37,244,106,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,244,106,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark pointer-events-none z-0"></div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col h-screen max-h-screen w-full mx-auto max-w-[1200px] p-4 md:p-8">

        {/* Header / Progress Section */}
        <header className="flex flex-col gap-4 w-full max-w-3xl mx-auto pt-4 md:pt-8 animate-pulse">
          <div className="flex justify-between items-end px-1">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm animate-spin">sync</span>
              <p className="text-primary text-xs tracking-[0.2em] font-bold">SYSTEM_READINESS</p>
            </div>
            <p className="text-primary text-xl font-bold tracking-widest" style={{ textShadow: '0 0 10px rgba(37, 244, 106, 0.7)' }}>50%</p>
          </div>
          <div className="h-1.5 w-full bg-[#1a331a] rounded-full overflow-hidden border border-[#1a331a]">
            <div className="h-full bg-primary w-1/2 shadow-[0_0_15px_rgba(37,244,106,0.8)]"></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center gap-8 py-6">
          <div className="w-full max-w-md bg-black/40 border border-primary/20 rounded-lg p-8 backdrop-blur-sm relative">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-primary"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-primary"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary"></div>

            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-white tracking-tight uppercase mb-2" style={{ textShadow: '0 0 10px rgba(37, 244, 106, 0.7)' }}>
                Identity <span className="text-primary">Config</span>
              </h1>
              <p className="text-primary/60 text-xs tracking-[0.2em] uppercase">Establish Operative Profile</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="space-y-2">
                <label className="text-primary/80 text-xs font-bold tracking-wider uppercase">Operative ID (Name)</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-surface-dark/50 border border-primary/30 text-white rounded p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors font-mono text-sm"
                  placeholder="ENTER_NAME"
                />
              </div>

              <div className="space-y-2">
                <label className="text-primary/80 text-xs font-bold tracking-wider uppercase">Sector Assignment</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-surface-dark/50 border border-primary/30 text-white rounded p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors font-mono text-sm"
                >
                  <option value="Analyst">DATA_ANALYST</option>
                  <option value="Engineer">SYSTEM_ENGINEER</option>
                  <option value="Admin">SECTOR_ADMIN</option>
                  <option value="Observer">OBSERVER_UNIT</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-4 bg-primary text-background-dark font-bold py-3 px-4 rounded hover:bg-primary-dim transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_10px_rgba(37,244,106,0.3)] hover:shadow-[0_0_20px_rgba(37,244,106,0.6)]"
              >
                <span>ESTABLISH_LINK</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfileSetup;

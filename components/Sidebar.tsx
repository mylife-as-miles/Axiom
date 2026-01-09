import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) => 
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
      isActive 
        ? 'bg-primary/10 border border-primary/20 text-white shadow-neon' 
        : 'hover:bg-[#122118] text-gray-400 hover:text-white'
    }`;

  const iconClasses = ({ isActive }: { isActive: boolean }) =>
    `material-symbols-outlined transition-transform ${
      isActive 
        ? 'text-primary scale-110' 
        : 'group-hover:text-primary'
    }`;

  return (
    <aside className="w-72 flex flex-col border-r border-[#254632] bg-[#0a120d] shrink-0 z-20 h-full">
      <div className="p-6 pb-8">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center size-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
            <span className="material-symbols-outlined text-primary text-2xl">hexagon</span>
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white leading-none">AXIOM</h1>
            <p className="text-xs text-primary/70 font-medium tracking-wider mt-1">COMMAND CENTER</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
        <NavLink to="/" className={linkClasses} end>
          {({ isActive }) => (
            <>
              <span className={iconClasses({ isActive })}>dashboard</span>
              <span className="font-medium">Dashboard</span>
            </>
          )}
        </NavLink>
        <NavLink to="/anomalies" className={linkClasses}>
          {({ isActive }) => (
            <>
              <span className={iconClasses({ isActive })}>warning</span>
              <span className="font-medium">Anomalies</span>
              <span className="ml-auto bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded-full">3</span>
            </>
          )}
        </NavLink>
        <NavLink to="/agents" className={linkClasses}>
          {({ isActive }) => (
            <>
              <span className={iconClasses({ isActive })}>smart_toy</span>
              <span className="font-medium">Agents</span>
            </>
          )}
        </NavLink>
        <NavLink to="/reports" className={linkClasses}>
           {({ isActive }) => (
            <>
              <span className={iconClasses({ isActive })}>analytics</span>
              <span className="font-medium">Reports</span>
            </>
          )}
        </NavLink>
        <div className="my-4 border-t border-[#254632]"></div>
        <NavLink to="/settings" className={linkClasses}>
           {({ isActive }) => (
            <>
              <span className={iconClasses({ isActive })}>settings</span>
              <span className="font-medium">Settings</span>
            </>
          )}
        </NavLink>
      </nav>

      <div className="p-4 mt-auto">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-[#122118] border border-[#254632]">
          <div 
            className="bg-center bg-cover size-10 rounded-full border border-primary/30" 
            style={{backgroundImage: "url('https://picsum.photos/100/100')"}}
          ></div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white truncate">Alex Chen</p>
            <p className="text-xs text-gray-400 truncate">Lead Ops</p>
          </div>
          <button className="text-gray-400 hover:text-white">
            <span className="material-symbols-outlined text-xl">logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

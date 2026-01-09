import React from 'react';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className="flex items-center justify-between px-4 sm:px-8 py-5 border-b border-[#254632] bg-[#050505]/80 backdrop-blur-md z-10 sticky top-0">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 -ml-2 text-gray-400 hover:text-white"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-[#122118] transition-colors border border-transparent hover:border-[#254632]">
          <span className="material-symbols-outlined text-primary">domain</span>
          <span className="hidden sm:inline text-lg font-bold tracking-tight">Production-US-East</span>
          <span className="material-symbols-outlined text-gray-500 text-sm">expand_more</span>
        </button>
        <div className="hidden sm:block h-6 w-px bg-[#254632]"></div>
        <span className="hidden sm:flex text-sm text-gray-400 items-center gap-2">
          <span className="size-2 rounded-full bg-primary animate-pulse"></span>
          System Operational
        </span>
      </div>
      <div className="flex items-center gap-2 sm:gap-6">
        <div className="relative group">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors">search</span>
          <input 
            className="bg-[#122118] border border-[#254632] text-sm text-white placeholder-gray-500 rounded-full py-2.5 pl-10 pr-4 w-10 focus:w-64 sm:w-64 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
            placeholder="Search..."
            type="text"
          />
        </div>
        <button className="relative p-2 rounded-full hover:bg-[#122118] text-gray-400 hover:text-white transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-background-dark"></span>
        </button>
        <button className="hidden sm:block p-2 rounded-full hover:bg-[#122118] text-gray-400 hover:text-white transition-colors">
          <span className="material-symbols-outlined">help</span>
        </button>
      </div>
    </header>
  );
};

export default Header;

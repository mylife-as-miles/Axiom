import React from 'react';

const InsightPanel: React.FC = () => {
  return (
    <div className="lg:col-span-1 flex flex-col gap-6">
      <div className="glass-panel rounded-2xl p-6 relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-orange-500 animate-pulse">warning</span>
            Critical Insight
          </h3>
        </div>
        <div className="bg-black/40 rounded-xl p-4 border border-white/5 mb-4">
          <p className="text-sm text-gray-300 font-medium leading-relaxed">
            Unusual outbound traffic detected in <span className="text-white font-bold">Payment Service</span>. Deviation of <span className="text-orange-500 font-bold">+450%</span> from baseline.
          </p>
        </div>
        
        {/* Radar Chart Visualization */}
        <div className="relative w-full aspect-square max-h-[250px] mx-auto my-4 flex items-center justify-center">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
            {/* Grid Circles */}
            <circle cx="50" cy="50" fill="none" r="40" stroke="#254632" strokeWidth="1"></circle>
            <circle cx="50" cy="50" fill="none" r="25" stroke="#254632" strokeWidth="1"></circle>
            <circle cx="50" cy="50" fill="none" r="10" stroke="#254632" strokeWidth="1"></circle>
            
            {/* Axis Lines */}
            <line stroke="#254632" strokeWidth="1" x1="50" x2="50" y1="10" y2="90"></line>
            <line stroke="#254632" strokeWidth="1" x1="15" x2="85" y1="30" y2="70"></line>
            <line stroke="#254632" strokeWidth="1" x1="85" x2="15" y1="30" y2="70"></line>
            
            {/* Labels */}
            <text fill="#6b7280" fontFamily="monospace" fontSize="6" textAnchor="middle" x="50" y="5">Volume</text>
            <text fill="#6b7280" fontFamily="monospace" fontSize="6" textAnchor="middle" x="90" y="28">Freq</text>
            <text fill="#6b7280" fontFamily="monospace" fontSize="6" textAnchor="middle" x="90" y="75">Error</text>
            <text fill="#6b7280" fontFamily="monospace" fontSize="6" textAnchor="middle" x="50" y="98">CPU</text>
            <text fill="#6b7280" fontFamily="monospace" fontSize="6" textAnchor="middle" x="10" y="75">Mem</text>
            <text fill="#6b7280" fontFamily="monospace" fontSize="6" textAnchor="middle" x="10" y="28">Net</text>
            
            {/* Data Polygon */}
            <polygon 
              className="animate-[pulse_4s_ease-in-out_infinite]" 
              fill="rgba(51, 230, 122, 0.2)" 
              filter="drop-shadow(0 0 4px rgba(51, 230, 122, 0.6))" 
              points="50,15 80,45 60,60 50,65 30,55 25,35" 
              stroke="#33e67a" 
              strokeWidth="2"
            ></polygon>
          </svg>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-4">
          <button className="py-2.5 rounded-lg border border-primary/30 text-primary font-bold text-sm hover:bg-primary/10 transition-colors">
            Investigate
          </button>
          <button className="py-2.5 rounded-lg bg-primary text-black font-bold text-sm hover:bg-primary-dim transition-colors shadow-neon">
            Auto-Fix
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightPanel;

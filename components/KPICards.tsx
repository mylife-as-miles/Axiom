import React from 'react';
import { MetricCardProps } from '../types';

const KPICard: React.FC<MetricCardProps> = ({ title, value, trend, trendDirection, confidence, chartType }) => {
  return (
    <div className="glass-panel rounded-2xl p-6 relative group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex justify-between items-start mb-2 relative z-10">
        <div className="flex flex-col">
          <span className="text-gray-400 text-sm font-medium">{title}</span>
          <h3 className="text-3xl font-bold mt-1 text-white">{value}</h3>
        </div>
        <div className="flex flex-col items-end">
          <span className={`flex items-center text-sm font-bold px-2 py-1 rounded-full border ${
            trendDirection === 'up' ? 'text-primary bg-primary/10 border-primary/20' : 
            trendDirection === 'down' ? 'text-primary bg-primary/10 border-primary/20' : 
            'text-gray-400 bg-white/5 border-white/10'
          }`}>
            <span className="material-symbols-outlined text-base mr-1">
              {trendDirection === 'up' ? 'trending_up' : trendDirection === 'down' ? 'trending_down' : 'remove'}
            </span>
            {trend}
          </span>
        </div>
      </div>

      <div className="h-16 w-full mt-4 flex items-end gap-1 relative">
        {chartType === 'bars' && (
          <>
            <div className="w-full bg-primary/20 h-[30%] rounded-sm"></div>
            <div className="w-full bg-primary/30 h-[45%] rounded-sm"></div>
            <div className="w-full bg-primary/20 h-[35%] rounded-sm"></div>
            <div className="w-full bg-primary/40 h-[60%] rounded-sm"></div>
            <div className="w-full bg-primary/30 h-[50%] rounded-sm"></div>
            <div className="w-full bg-primary/50 h-[75%] rounded-sm"></div>
            <div className="w-full bg-primary/40 h-[65%] rounded-sm"></div>
            <div className="w-full bg-primary/60 h-[85%] rounded-sm"></div>
            <div className="w-full bg-primary/80 h-[80%] rounded-sm"></div>
            <div className="w-full bg-primary h-[95%] rounded-sm shadow-[0_0_10px_rgba(51,230,122,0.5)]"></div>
          </>
        )}
        
        {chartType === 'wave' && (
          <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60">
            <path d="M0,40 Q20,35 40,45 T80,30 T120,40 T160,20 T200,35" fill="none" filter="drop-shadow(0px 0px 4px rgba(51,230,122,0.5))" stroke="#33e67a" strokeWidth="2"></path>
            <circle cx="200" cy="35" fill="#33e67a" r="3"></circle>
          </svg>
        )}

        {chartType === 'segments' && (
           <div className="w-full h-full flex items-center gap-1">
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[20%] h-full bg-primary/50"></div>
            </div>
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[10%] h-full bg-primary/50"></div>
            </div>
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[50%] h-full bg-primary"></div>
            </div>
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[5%] h-full bg-primary/50"></div>
            </div>
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[2%] h-full bg-primary/50"></div>
            </div>
           </div>
        )}
      </div>

      <div className="mt-4 flex justify-between items-center relative z-10 border-t border-white/5 pt-3">
        <span className="text-xs text-gray-500 font-medium">Confidence Score</span>
        <span className="text-xs font-bold text-white">{confidence}</span>
      </div>
    </div>
  );
};

const KPICards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <KPICard 
        title="Total Revenue" 
        value="$142,302" 
        trend="+12.4%" 
        trendDirection="up" 
        confidence="99.8%" 
        chartType="bars" 
      />
      <KPICard 
        title="Avg Latency" 
        value="24ms" 
        trend="-4.2%" 
        trendDirection="down" 
        confidence="95.4%" 
        chartType="wave" 
      />
      <KPICard 
        title="Error Rate" 
        value="0.02%" 
        trend="Stable" 
        trendDirection="stable" 
        confidence="98.1%" 
        chartType="segments" 
      />
    </div>
  );
};

export default KPICards;

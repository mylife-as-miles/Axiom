import React from 'react';
import KPICards from './KPICards';
import ActivityTable from './ActivityTable';
import InsightPanel from './InsightPanel';

const Dashboard: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto p-8 scroll-smooth">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-8">
        
        {/* KPI Section */}
        <section>
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">KPI Overview</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs font-bold text-primary bg-primary/10 border border-primary/20 rounded-md">1H</button>
              <button className="px-3 py-1 text-xs font-bold text-gray-400 hover:text-white rounded-md">24H</button>
              <button className="px-3 py-1 text-xs font-bold text-gray-400 hover:text-white rounded-md">7D</button>
            </div>
          </div>
          <KPICards />
        </section>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
          <ActivityTable />
          <InsightPanel />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

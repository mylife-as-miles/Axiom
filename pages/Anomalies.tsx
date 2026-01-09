import React from 'react';
import { useNavigate } from 'react-router-dom';

const anomalies = [
  {
    id: '8492',
    type: 'API Latency Spike',
    severity: 'Critical',
    service: 'Payment Gateway',
    region: 'US-East-1a',
    time: '14:02 UTC',
    status: 'Active',
    confidence: '94%'
  },
  {
    id: '8491',
    type: 'Memory Leak',
    severity: 'Warning',
    service: 'Auth Service',
    region: 'EU-West-2',
    time: '12:45 UTC',
    status: 'Investigating',
    confidence: '82%'
  },
  {
    id: '8490',
    type: 'High Error Rate',
    severity: 'Critical',
    service: 'Inventory DB',
    region: 'AP-South-1',
    time: '09:30 UTC',
    status: 'Resolved',
    confidence: '99%'
  }
];

const Anomalies: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="flex-1 overflow-y-auto p-8 scroll-smooth">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Active Anomalies</h2>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-[#122118] border border-border-green rounded-lg text-sm hover:text-white text-gray-400 transition-colors">
              <span className="material-symbols-outlined text-lg">filter_list</span>
              Filter
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm text-primary font-medium hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-lg">refresh</span>
              Refresh
            </button>
          </div>
        </div>

        <div className="glass-panel rounded-2xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#122118] text-xs uppercase text-gray-500">
              <tr>
                <th className="px-6 py-4 font-medium tracking-wider">ID</th>
                <th className="px-6 py-4 font-medium tracking-wider">Type / Service</th>
                <th className="px-6 py-4 font-medium tracking-wider">Severity</th>
                <th className="px-6 py-4 font-medium tracking-wider">Region</th>
                <th className="px-6 py-4 font-medium tracking-wider">Detected</th>
                <th className="px-6 py-4 font-medium tracking-wider">AI Confidence</th>
                <th className="px-6 py-4 font-medium tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#254632]">
              {anomalies.map((item) => (
                <tr 
                  key={item.id} 
                  onClick={() => navigate(`/anomalies/${item.id}`)}
                  className="group hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4 font-mono text-gray-400">#{item.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-white group-hover:text-primary transition-colors">{item.type}</span>
                      <span className="text-xs text-gray-500">{item.service}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
                      item.severity === 'Critical' ? 'bg-red-500/10 border-red-500/20 text-red-500' :
                      item.severity === 'Warning' ? 'bg-orange-500/10 border-orange-500/20 text-orange-500' :
                      'bg-green-500/10 border-green-500/20 text-green-500'
                    }`}>
                      <span className={`size-1.5 rounded-full ${
                        item.severity === 'Critical' ? 'bg-red-500 animate-pulse' :
                        item.severity === 'Warning' ? 'bg-orange-500' :
                        'bg-green-500'
                      }`}></span>
                      {item.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300 text-sm">{item.region}</td>
                  <td className="px-6 py-4 text-gray-400 text-sm font-mono">{item.time}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: item.confidence }}></div>
                      </div>
                      <span className="text-xs font-bold text-primary">{item.confidence}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors">chevron_right</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Anomalies;

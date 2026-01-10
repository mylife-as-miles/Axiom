import React from 'react';

const Dataset: React.FC = () => {
  const sampleData = [
    { id: '001', timestamp: '2023-10-27 10:00:01', latency: '45ms', user: 'user_882', region: 'US-East', status: 'Active', churnRisk: 12 },
    { id: '002', timestamp: '2023-10-27 10:00:05', latency: '120ms', user: 'user_991', region: 'EU-West', status: 'Warning', churnRisk: 45 },
    { id: '003', timestamp: '2023-10-27 10:01:22', latency: '22ms', user: 'user_110', region: 'US-West', status: 'Active', churnRisk: 5 },
    { id: '004', timestamp: '2023-10-27 10:02:15', latency: '530ms', user: 'user_342', region: 'AP-South', status: 'Critical', churnRisk: 88 },
  ];

  return (
    <main className="flex-1 overflow-y-auto p-4 sm:p-8 scroll-smooth">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-8">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Import Dataset</h1>
          <p className="text-gray-400 mt-2">Drag CSV, JSON, or Parquet files here to begin analysis.</p>
        </div>

        {/* Drop Zone */}
        <div className="border-2 border-dashed border-[#254632] rounded-2xl bg-[#122118]/30 p-12 flex flex-col items-center justify-center gap-4 hover:bg-[#122118]/50 transition-colors cursor-pointer group">
          <div className="size-16 rounded-full bg-[#122118] border border-[#254632] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
            <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-white">Drop files to upload</h3>
            <p className="text-sm text-gray-400">Support for .csv, .json, .parquet up to 5GB</p>
          </div>
          <button className="mt-4 bg-primary text-black font-bold px-8 py-3 rounded-lg hover:bg-primary/90 transition-all shadow-neon cursor-pointer">
            BROWSE FILES
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Data Preview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">table_chart</span>
                Data Preview
              </h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-xs font-bold text-primary bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">EXPORT</button>
                <button className="px-4 py-2 text-xs font-bold text-gray-400 border border-[#254632] rounded-lg hover:text-white hover:border-white transition-colors cursor-pointer">CLEAR</button>
              </div>
            </div>

            <div className="glass-panel rounded-2xl border border-[#254632] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead className="bg-[#122118] text-xs uppercase text-gray-500">
                    <tr>
                      <th className="px-6 py-4 font-medium tracking-wider">ID</th>
                      <th className="px-6 py-4 font-medium tracking-wider">Timestamp</th>
                      <th className="px-6 py-4 font-medium tracking-wider">Latency</th>
                      <th className="px-6 py-4 font-medium tracking-wider">User_ID</th>
                      <th className="px-6 py-4 font-medium tracking-wider">Region</th>
                      <th className="px-6 py-4 font-medium tracking-wider">Status</th>
                      <th className="px-6 py-4 font-medium tracking-wider">Churn Risk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#254632]">
                    {sampleData.map((row) => (
                      <tr key={row.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 text-sm text-white font-mono">{row.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-400 font-mono">{row.timestamp}</td>
                        <td className={`px-6 py-4 text-sm font-mono font-bold ${
                          parseInt(row.latency) > 500 ? 'text-red-500' :
                          parseInt(row.latency) > 100 ? 'text-yellow-500' : 'text-primary'
                        }`}>
                          {row.latency}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-300 font-mono">{row.user}</td>
                        <td className="px-6 py-4 text-sm text-gray-300 font-mono">{row.region}</td>
                        <td className="px-6 py-4">
                           <span className={`px-2 py-1 rounded-md text-xs font-bold border ${
                             row.status === 'Critical' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                             row.status === 'Warning' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                             'bg-primary/10 text-primary border-primary/20'
                           }`}>
                             {row.status}
                           </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                             <div className="w-16 h-1.5 bg-[#254632] rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${
                                    row.churnRisk > 75 ? 'bg-red-500' :
                                    row.churnRisk > 40 ? 'bg-yellow-500' : 'bg-primary'
                                  }`}
                                  style={{ width: `${row.churnRisk}%` }}
                                ></div>
                             </div>
                             <span className="text-xs font-mono text-gray-400">{row.churnRisk}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* AI Sidebar */}
          <div className="lg:col-span-1 space-y-6">

             {/* Header */}
             <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
                </div>
                <div>
                    <h3 className="text-lg font-bold">Axiom Intelligence</h3>
                    <p className="text-xs text-gray-400">AI-driven data insights</p>
                </div>
             </div>

             <div className="space-y-6 bg-[#122118]/30 p-6 rounded-2xl border border-[#254632]">
                {/* Suggested Explorations */}
                <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">SUGGESTED EXPLORATIONS</h4>
                    <div className="space-y-3">
                        <div className="p-4 rounded-xl bg-[#122118] border border-[#254632] hover:border-primary/50 transition-colors cursor-pointer group">
                            <h5 className="font-bold text-white mb-1 group-hover:text-primary transition-colors">Analyze High Latency</h5>
                            <p className="text-xs text-gray-400 leading-relaxed">Show outlier events where latency &gt; 500ms and group by region.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-[#122118] border border-[#254632] hover:border-primary/50 transition-colors cursor-pointer group">
                            <h5 className="font-bold text-white mb-1 group-hover:text-primary transition-colors">Correlation Analysis</h5>
                            <p className="text-xs text-gray-400 leading-relaxed">What is the correlation between latency spikes and churn risk?</p>
                        </div>
                        <div className="p-4 rounded-xl bg-[#122118] border border-[#254632] hover:border-primary/50 transition-colors cursor-pointer group">
                            <h5 className="font-bold text-white mb-1 group-hover:text-primary transition-colors">Traffic Distribution</h5>
                            <p className="text-xs text-gray-400 leading-relaxed">Visualize traffic volume grouped by Region over the last hour.</p>
                        </div>
                    </div>
                </div>

                {/* Saved Queries */}
                <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">SAVED QUERIES</h4>
                    <div className="flex flex-wrap gap-2">
                        {['#churn_prediction', '#latency_logs', '#user_activity'].map(tag => (
                          <span key={tag} className="px-3 py-1.5 rounded-full bg-[#122118] border border-[#254632] text-xs font-medium text-gray-300 hover:text-primary hover:border-primary/50 cursor-pointer transition-colors">
                            {tag}
                          </span>
                        ))}
                    </div>
                </div>

                {/* Input */}
                <div className="relative pt-4 border-t border-[#254632]">
                    <input type="text" placeholder="Ask a custom question..." className="w-full bg-[#0a120d] border border-[#254632] rounded-xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-primary/50 placeholder:text-gray-600 transition-colors" />
                    <button className="absolute right-2 top-1/2 mt-2 -translate-y-1/2 p-2 text-primary hover:text-white transition-colors cursor-pointer">
                        <span className="material-symbols-outlined">send</span>
                    </button>
                </div>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Dataset;

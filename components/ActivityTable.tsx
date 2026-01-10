import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AgentLog } from '../types';

const logs: AgentLog[] = [
  {
    id: '1',
    actionName: 'Auto-scale Read Replicas',
    agentName: 'Database Optimizer Agent',
    status: 'Executed',
    time: '2 min ago',
    icon: 'database',
    iconColorClass: 'text-primary',
    iconBgClass: 'bg-primary/10',
    statusColorClass: 'text-primary',
    statusBgClass: 'bg-primary/20',
  },
  {
    id: '2',
    actionName: 'Block IP Range 192.168.x.x',
    agentName: 'Security Sentinel Agent',
    status: 'Pending Approval',
    time: '15 min ago',
    icon: 'security',
    iconColorClass: 'text-orange-500',
    iconBgClass: 'bg-orange-500/10',
    statusColorClass: 'text-orange-500',
    statusBgClass: 'bg-orange-500/20',
  },
  {
    id: '3',
    actionName: 'Reroute Traffic US-West',
    agentName: 'Load Balancer Agent',
    status: 'Executed',
    time: '42 min ago',
    icon: 'dns',
    iconColorClass: 'text-blue-500',
    iconBgClass: 'bg-blue-500/10',
    statusColorClass: 'text-primary',
    statusBgClass: 'bg-primary/20',
  },
  {
    id: '4',
    actionName: 'Cache Invalidation: Svc A',
    agentName: 'Performance Agent',
    status: 'Failed',
    time: '1h 12m ago',
    icon: 'cached',
    iconColorClass: 'text-purple-500',
    iconBgClass: 'bg-purple-500/10',
    statusColorClass: 'text-red-500',
    statusBgClass: 'bg-red-500/20',
  },
];

const ActivityTable: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:col-span-2 glass-panel rounded-2xl flex flex-col overflow-hidden h-full min-h-[400px]">
      <div className="p-6 border-b border-[#254632] flex flex-wrap gap-4 justify-between items-center bg-[#122118]/50">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">smart_toy</span>
          Autonomous Agent Activity
        </h3>
        <button
          onClick={() => navigate('/agents')}
          className="text-xs text-primary font-bold hover:underline cursor-pointer"
        >
          View All Logs
        </button>
      </div>
      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead className="bg-[#122118] text-xs uppercase text-gray-500 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-4 font-medium tracking-wider">Agent / Action</th>
              <th className="px-6 py-4 font-medium tracking-wider">Status</th>
              <th className="px-6 py-4 font-medium tracking-wider">Time</th>
              <th className="px-6 py-4 font-medium tracking-wider text-right">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#254632]">
            {logs.map((log) => (
              <tr key={log.id} className="group hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${log.iconBgClass} ${log.iconColorClass}`}>
                      <span className="material-symbols-outlined text-sm">{log.icon}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{log.actionName}</p>
                      <p className="text-xs text-gray-400">{log.agentName}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${log.statusBgClass} ${log.statusColorClass} border-opacity-20`}>
                    <span className={`size-1.5 rounded-full ${
                        log.status === 'Executed' ? 'bg-primary shadow-[0_0_5px_#33e67a]' : 
                        log.status === 'Pending Approval' ? 'bg-orange-500 animate-pulse' : 
                        'bg-red-500'
                    }`}></span>
                    {log.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-400 font-mono">{log.time}</td>
                <td className="px-6 py-4 text-right">
                    {log.status === 'Pending Approval' ? (
                         <button className="text-xs bg-primary hover:bg-primary/90 text-black font-bold px-3 py-1 rounded-md transition-colors shadow-neon">Approve</button>
                    ) : log.status === 'Failed' ? (
                        <button className="text-gray-500 hover:text-white transition-colors">
                            <span className="material-symbols-outlined">refresh</span>
                        </button>
                    ) : (
                        <button className="text-gray-500 hover:text-white transition-colors">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityTable;

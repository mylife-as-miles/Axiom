import React from 'react';

const Settings: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto p-4 sm:p-8 scroll-smooth">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Settings</h1>
          <p className="text-gray-400 mt-2">Manage your account preferences and system configurations.</p>
        </div>

        <div className="glass-panel rounded-2xl border border-[#254632] overflow-hidden">
          <div className="p-6 border-b border-[#254632]">
            <h2 className="text-xl font-bold">General</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-white">Project Name</h3>
                <p className="text-sm text-gray-400">The name of your project visible in the dashboard.</p>
              </div>
              <input type="text" defaultValue="Axiom Intelligence" className="bg-[#0a120d] border border-[#254632] rounded-lg px-4 py-2 text-white focus:border-primary outline-none" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-white">Timezone</h3>
                <p className="text-sm text-gray-400">Set your preferred timezone for reporting.</p>
              </div>
              <select className="bg-[#0a120d] border border-[#254632] rounded-lg px-4 py-2 text-white focus:border-primary outline-none">
                <option>UTC (GMT+0)</option>
                <option>EST (GMT-5)</option>
                <option>PST (GMT-8)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-2xl border border-[#254632] overflow-hidden">
          <div className="p-6 border-b border-[#254632]">
            <h2 className="text-xl font-bold">Notifications</h2>
          </div>
          <div className="p-6 space-y-4">
             {['Email Alerts', 'Slack Integration', 'Mobile Push', 'Weekly Digest'].map(item => (
               <div key={item} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                 <span className="text-white font-medium">{item}</span>
                 <label className="relative inline-flex items-center cursor-pointer">
                   <input type="checkbox" defaultChecked className="sr-only peer" />
                   <div className="w-11 h-6 bg-[#254632] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                 </label>
               </div>
             ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Settings;

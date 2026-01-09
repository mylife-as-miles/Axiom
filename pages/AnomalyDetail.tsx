import React from 'react';
import { Link } from 'react-router-dom';

const AnomalyDetail: React.FC = () => {
  return (
    <div className="flex flex-1 overflow-hidden relative flex-col h-full">
        {/* Page Toolbar / Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between whitespace-nowrap border-b border-border-green px-4 sm:px-6 py-3 bg-surface-dark/50 backdrop-blur-md z-20 shrink-0 gap-3 sm:gap-0">
            <div className="flex items-center gap-6 overflow-x-auto">
                <div className="flex items-center text-sm font-medium text-gray-400 gap-2">
                    <Link to="/anomalies" className="hover:text-white transition-colors">Systems</Link>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    <span className="hover:text-white transition-colors cursor-pointer">US-East</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    <span className="text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">Latency Anomaly</span>
                </div>
            </div>
            <div className="flex items-center gap-4 justify-between sm:justify-end">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    LIVE INCIDENT
                </div>
                <div className="hidden sm:block h-6 w-px bg-border-green"></div>
                <div className="flex gap-2">
                    <div className="size-9 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold">
                        JS
                    </div>
                </div>
            </div>
        </div>

        {/* Main Workspace */}
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden relative">
            {/* Background Grid Decoration */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#33e67a 1px, transparent 1px), linear-gradient(90deg, #33e67a 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
            </div>

            {/* Left Column: Data Analysis (Scrollable) */}
            <main className="flex-1 flex flex-col overflow-y-auto z-10 p-4 sm:p-6 lg:p-8 gap-6 relative">
                {/* Page Header */}
                <div className="flex flex-wrap justify-between items-end gap-4 pb-4 border-b border-border-green/50">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Anomaly #8492: API Latency Spike</h1>
                            <span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Critical</span>
                        </div>
                        <p className="text-gray-400 text-sm font-body flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px]">schedule</span>
                            Detected at 14:02 UTC
                            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                            Region: US-East-1a
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 h-10 rounded-lg border border-border-green bg-surface-dark text-white text-sm font-medium hover:bg-border-green transition-colors">
                            <span className="material-symbols-outlined text-[18px]">share</span>
                            Share
                        </button>
                        <button className="flex items-center gap-2 px-4 h-10 rounded-lg border border-border-green bg-surface-dark text-white text-sm font-medium hover:bg-border-green transition-colors">
                            <span className="material-symbols-outlined text-[18px]">download</span>
                            Export Log
                        </button>
                    </div>
                </div>

                {/* Key Metrics Tickers */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Card 1 */}
                    <div className="p-4 rounded-xl border border-primary/20 bg-surface-dark/80 backdrop-blur shadow-glow relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                        <div className="flex justify-between items-start mb-2">
                            <p className="text-gray-400 text-sm font-medium">Current Latency</p>
                            <span className="material-symbols-outlined text-primary/50 group-hover:text-primary transition-colors">speed</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-white">452ms</span>
                            <span className="text-primary text-xs font-bold bg-primary/10 px-1.5 py-0.5 rounded">+210%</span>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="p-4 rounded-xl border border-border-green bg-surface-dark/80 backdrop-blur group">
                        <div className="flex justify-between items-start mb-2">
                            <p className="text-gray-400 text-sm font-medium">Error Rate</p>
                            <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors">error</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-white">2.4%</span>
                            <span className="text-primary text-xs font-bold">+1.2%</span>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="p-4 rounded-xl border border-border-green bg-surface-dark/80 backdrop-blur group">
                        <div className="flex justify-between items-start mb-2">
                            <p className="text-gray-400 text-sm font-medium">User Impact</p>
                            <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors">group</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-white">15k</span>
                            <span className="text-primary text-xs font-bold">+500</span>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="p-4 rounded-xl border border-border-green bg-surface-dark/80 backdrop-blur group">
                        <div className="flex justify-between items-start mb-2">
                            <p className="text-gray-400 text-sm font-medium">Server Load</p>
                            <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors">memory</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-white">89%</span>
                            <span className="text-orange-500 text-xs font-bold">-5%</span>
                        </div>
                    </div>
                </div>

                {/* Main Chart Area */}
                <div className="flex flex-col rounded-2xl border border-border-green bg-surface-dark/60 backdrop-blur-xl relative overflow-hidden min-h-[400px]">
                    <div className="flex items-center justify-between p-6 border-b border-border-green/50">
                        <div>
                            <h3 className="text-lg font-bold text-white">Real-time Traffic vs. Historical Baseline</h3>
                            <p className="text-sm text-gray-400 mt-1">Comparing current session against 7-day rolling average</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-400 px-2 py-1 bg-white/5 rounded">
                                <span className="w-2 h-2 rounded-full bg-gray-500"></span> Baseline
                            </span>
                            <span className="flex items-center gap-1.5 text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded border border-primary/20">
                                <span className="w-2 h-2 rounded-full bg-primary"></span> Live Data
                            </span>
                        </div>
                    </div>
                    <div className="relative flex-1 w-full p-6 pt-10">
                        {/* Chart Highlight Zone (Anomaly) */}
                        <div className="absolute top-[60px] bottom-[50px] left-[65%] w-[15%] bg-gradient-to-b from-primary/20 to-transparent border-x border-primary/30 z-0 pointer-events-none">
                            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-primary text-background-dark text-xs font-bold px-2 py-1 rounded shadow-glow whitespace-nowrap">
                                ANOMALY DETECTED
                            </div>
                        </div>
                        {/* SVG Chart */}
                        <svg className="w-full h-[300px] overflow-visible z-10 relative" preserveAspectRatio="none" viewBox="0 0 800 300">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#33e67a" stopOpacity="0.2"></stop>
                                    <stop offset="100%" stopColor="#33e67a" stopOpacity="0"></stop>
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur result="coloredBlur" stdDeviation="2.5"></feGaussianBlur>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"></feMergeNode>
                                        <feMergeNode in="SourceGraphic"></feMergeNode>
                                    </feMerge>
                                </filter>
                            </defs>
                            {/* Grid Lines */}
                            <g className="stroke-gray-800" strokeDasharray="4 4" strokeWidth="1">
                                <line x1="0" x2="800" y1="50" y2="50"></line>
                                <line x1="0" x2="800" y1="125" y2="125"></line>
                                <line x1="0" x2="800" y1="200" y2="200"></line>
                                <line x1="0" x2="800" y1="275" y2="275"></line>
                            </g>
                            {/* Historical Baseline (Grey) */}
                            <path d="M0,250 C100,240 150,260 250,200 C350,140 400,160 500,150 C600,140 650,180 750,200 L800,210" fill="none" stroke="#525252" strokeDasharray="5,5" strokeWidth="2"></path>
                            {/* Live Data (Green) */}
                            {/* Normal part */}
                            <path d="M0,245 C100,235 150,255 250,195 C350,135 400,155 480,145" fill="none" filter="url(#glow)" stroke="#33e67a" strokeWidth="2"></path>
                            {/* Spike part (in anomaly zone) */}
                            <path d="M480,145 C500,140 510,50 540,40 C570,30 590,140 620,150" fill="none" filter="url(#glow)" stroke="#33e67a" strokeWidth="3"></path>
                            {/* Return to quasi-normal */}
                            <path d="M620,150 C680,160 750,190 800,200" fill="none" opacity="0.6" stroke="#33e67a" strokeDasharray="2 2" strokeWidth="2"></path>
                            {/* Area under the curve */}
                            <path d="M0,245 C100,235 150,255 250,195 C350,135 400,155 480,145 C500,140 510,50 540,40 C570,30 590,140 620,150 C680,160 750,190 800,200 V300 H0 Z" fill="url(#chartGradient)"></path>
                            {/* Interactive Dot */}
                            <circle cx="540" cy="40" fill="#112117" filter="url(#glow)" r="6" stroke="#33e67a" strokeWidth="2"></circle>
                        </svg>
                        {/* Time Labels */}
                        <div className="flex justify-between text-xs text-gray-500 font-mono mt-4 border-t border-border-green/50 pt-2">
                            <span>12:00</span>
                            <span>12:30</span>
                            <span>13:00</span>
                            <span>13:30</span>
                            <span>14:00</span>
                            <span>14:30</span>
                            <span>15:00</span>
                            <span>15:30</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Correlation & Heatmap */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
                    {/* Heatmap Widget */}
                    <div className="rounded-xl border border-border-green bg-surface-dark/60 p-6 flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <h4 className="text-white font-bold">Regional Correlation</h4>
                            <button className="text-xs text-primary hover:underline">View Full Map</button>
                        </div>
                        {/* Simplified Heatmap Visualization */}
                        <div className="grid grid-cols-6 gap-1 h-32">
                            {/* Row 1 */}
                            <div className="bg-primary/20 rounded-sm"></div> <div className="bg-primary/20 rounded-sm"></div> <div className="bg-primary/20 rounded-sm"></div> <div className="bg-primary/20 rounded-sm"></div> <div className="bg-primary/20 rounded-sm"></div> <div className="bg-primary/20 rounded-sm"></div>
                            {/* Row 2 */}
                            <div className="bg-primary/20 rounded-sm"></div> <div className="bg-red-500 rounded-sm animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div> <div className="bg-red-500/80 rounded-sm"></div> <div className="bg-primary/20 rounded-sm"></div> <div className="bg-primary/20 rounded-sm"></div> <div className="bg-primary/20 rounded-sm"></div>
                            {/* Row 3 */}
                            <div className="bg-primary/20 rounded-sm"></div> <div className="bg-red-500/60 rounded-sm"></div> <div className="bg-primary/20 rounded-sm"></div> <div className="bg-primary/20 rounded-sm"></div> <div className="bg-primary/40 rounded-sm"></div> <div className="bg-primary/20 rounded-sm"></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 font-body">
                            <span>Cluster: US-East-1</span>
                            <span className="text-red-400 font-bold">High Correlation (0.98)</span>
                        </div>
                    </div>
                    {/* Log Snippet */}
                    <div className="rounded-xl border border-border-green bg-surface-dark/60 p-6 flex flex-col gap-4 font-mono text-xs overflow-hidden">
                        <div className="flex justify-between items-center">
                            <h4 className="text-white font-bold font-display">Live Logs</h4>
                            <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
                        </div>
                        <div className="flex flex-col gap-2 text-gray-400 opacity-80">
                            <p><span className="text-gray-600">[14:02:01]</span> <span className="text-red-400">ERR</span> Connection timeout: db-shard-04</p>
                            <p><span className="text-gray-600">[14:02:03]</span> <span className="text-yellow-400">WARN</span> Latency &gt; 400ms on /api/v1/query</p>
                            <p><span className="text-gray-600">[14:02:05]</span> <span className="text-blue-400">INFO</span> Auto-scale trigger initiated (Group B)</p>
                            <p><span className="text-gray-600">[14:02:12]</span> <span className="text-red-400">ERR</span> 502 Bad Gateway upstream</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Right Column: Decision Intelligence Sidebar */}
            <aside className="w-full lg:w-[420px] bg-surface-dark border-l border-border-green flex flex-col shadow-2xl z-20">
                {/* Sidebar Header */}
                <div className="p-6 border-b border-border-green bg-surface-dark/95 backdrop-blur">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-green-800 flex items-center justify-center shadow-glow">
                            <span className="material-symbols-outlined text-black text-[20px]">smart_toy</span>
                        </div>
                        <h2 className="text-lg font-bold text-white tracking-tight">Decision Intelligence</h2>
                    </div>
                    <p className="text-sm text-gray-400 font-body">AI-driven root cause analysis and mitigation strategies.</p>
                </div>
                {/* Chat Interface */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-surface-dark to-black">
                    {/* AI Message 1 */}
                    <div className="flex gap-4">
                        <div className="size-8 rounded-full bg-primary/10 border border-primary/20 flex-shrink-0 flex items-center justify-center text-primary mt-1">
                            <span className="material-symbols-outlined text-[16px]">psychology</span>
                        </div>
                        <div className="flex flex-col gap-2 max-w-[90%]">
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Axiom AI • 14:03</div>
                            <div className="p-4 rounded-r-xl rounded-bl-xl bg-border-green/30 border border-border-green/50 text-gray-200 text-sm font-body leading-relaxed">
                                <p>I've analyzed the logs from the last 15 minutes. The latency spike correlates with a recent deployment to the <span className="text-white font-bold">US-East load balancer</span>.</p>
                            </div>
                        </div>
                    </div>
                    {/* AI Message 2 (Analysis) */}
                    <div className="flex gap-4">
                        <div className="size-8 rounded-full bg-primary/10 border border-primary/20 flex-shrink-0 flex items-center justify-center text-primary mt-1">
                            <span className="material-symbols-outlined text-[16px]">psychology</span>
                        </div>
                        <div className="flex flex-col gap-2 max-w-[90%]">
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Axiom AI • 14:04</div>
                            <div className="p-4 rounded-r-xl rounded-bl-xl bg-border-green/30 border border-border-green/50 text-gray-200 text-sm font-body leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-500">
                                <p className="mb-2">Root cause identified with <span className="text-primary font-bold">94% confidence</span>: The new routing logic in <code className="bg-black/50 px-1 py-0.5 rounded text-primary font-mono text-xs">v4.2.1</code> is causing connection pooling exhaustion.</p>
                                <div className="mt-3 p-3 bg-black/40 rounded border border-primary/10 flex gap-3 items-center">
                                    <span className="material-symbols-outlined text-yellow-500">warning</span>
                                    <span className="text-xs text-gray-300">Requires immediate rollback to restore service stability.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* User Message Simulation */}
                    <div className="flex gap-4 flex-row-reverse">
                        <div className="size-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center text-white mt-1">
                            <span className="text-xs font-bold">JS</span>
                        </div>
                        <div className="flex flex-col gap-2 items-end max-w-[90%]">
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">You • 14:05</div>
                            <div className="p-3 rounded-l-xl rounded-br-xl bg-gray-800 text-white text-sm font-body">
                                <p>What are the mitigation options?</p>
                            </div>
                        </div>
                    </div>
                    {/* AI Message 3 (Options) */}
                    <div className="flex gap-4">
                        <div className="size-8 rounded-full bg-primary/10 border border-primary/20 flex-shrink-0 flex items-center justify-center text-primary mt-1">
                            <span className="material-symbols-outlined text-[16px]">psychology</span>
                        </div>
                        <div className="flex flex-col gap-2 max-w-[90%]">
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Axiom AI • Just Now</div>
                            <div className="p-4 rounded-r-xl rounded-bl-xl bg-border-green/30 border border-border-green/50 text-gray-200 text-sm font-body leading-relaxed">
                                <p>I recommend an automated rollback. Alternatively, we can scale the cluster horizontally, though this may only delay the crash.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Action Center (Sticky Footer) */}
                <div className="p-6 bg-surface-dark border-t border-border-green space-y-4">
                    <button className="w-full group relative flex items-center justify-center gap-3 h-12 rounded-lg bg-primary text-background-dark font-bold text-base hover:shadow-glow-strong transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="material-symbols-outlined z-10">autorenew</span>
                        <span className="z-10">Approve Auto-Mitigation</span>
                    </button>
                    <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center gap-2 h-10 rounded-lg border border-primary/30 text-primary font-medium text-sm hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">science</span>
                            Simulate
                        </button>
                        <button className="flex items-center justify-center gap-2 h-10 rounded-lg border border-gray-700 text-gray-400 font-medium text-sm hover:border-gray-500 hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[18px]">undo</span>
                            Undo
                        </button>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2">
                        <span className="material-symbols-outlined text-[14px]">lock</span>
                        Actions are logged for audit compliance.
                    </div>
                </div>
            </aside>
        </div>
    </div>
  );
};

export default AnomalyDetail;
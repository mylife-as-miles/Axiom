import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // Simulate successful login
    navigate('/app');
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
      <div className="flex flex-1 h-screen w-full relative">
        {/* Left Panel: System Log Terminal */}
        <div className="hidden lg:flex w-[45%] flex-col relative border-r border-primary/20 terminal-bg overflow-hidden">
          {/* Overlay Gradient */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>

          <div className="flex-1 p-8 flex flex-col justify-end gap-2 font-mono text-sm leading-relaxed overflow-hidden select-none opacity-80">
            <div className="text-primary/40">[08:42:01] SYSTEM_BOOT_SEQUENCE_INITIATED</div>
            <div className="text-primary/50">[08:42:02] KERNEL_LOAD: SUCCESS</div>
            <div className="text-primary/60">[08:42:05] CHECKING_INTEGRITY... 100%</div>
            <div className="text-primary/60">[08:42:08] MOUNTING_VOLUME_Z: OK</div>
            <div className="text-primary/70">[08:42:12] <span className="text-white">PING 192.168.0.1</span> ... <span className="text-primary font-bold">OK</span></div>
            <div className="text-primary/70">[08:42:14] HANDSHAKE_VERIFICATION ... <span className="text-primary font-bold">VERIFIED</span></div>
            <div className="text-primary/80">[08:42:15] PACKET_TRACE ... <span className="text-primary font-bold">ACTIVE</span></div>
            <div className="text-primary/80">[08:42:19] SECTOR_7_NODE ... <span className="text-red-500 font-bold">OFFLINE</span></div>
            <div className="text-primary/90">[08:42:21] AUTH_TOKEN_REFRESH ... <span className="text-yellow-400 font-bold">PENDING</span></div>
            <div className="text-primary">[08:42:24] NEURAL_LINK_ESTABLISHED</div>
            <div className="text-primary">[08:42:25] ENCRYPTING_CONNECTION_STREAM...</div>
            <div className="text-primary mt-2 animate-pulse">&gt; WAITING_FOR_USER_INPUT_</div>
          </div>

          {/* Bottom Status Bar */}
          <div className="h-12 border-t border-primary/20 bg-primary/5 flex items-center px-6 justify-between text-xs text-primary/60 tracking-wider font-mono">
            <span>TERMINAL_ID: AX-9902</span>
            <span>STATUS: SECURE</span>
          </div>
        </div>

        {/* Right Panel: Auth Form */}
        <div className="flex-1 flex flex-col relative bg-background-dark">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 to-transparent opacity-50 pointer-events-none"></div>

          <div className="flex-1 flex items-center justify-center p-6 sm:p-12 z-10">
            <div className="w-full max-w-[480px] flex flex-col gap-8">

              {/* Header Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-primary/80 text-xs font-bold tracking-[0.2em] uppercase">
                  <span className="material-symbols-outlined text-sm">lock_open</span>
                  Secure Access v3.1
                </div>
                <h1 className="text-white tracking-tight text-5xl font-bold leading-none uppercase" style={{ fontFeatureSettings: "'ss04' on" }}>
                  System<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">Access</span>
                </h1>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                  Identify yourself to proceed to the mainframe. Unauthorized access attempts will be logged and reported to Sector Security.
                </p>
              </div>

              {/* Neural Link Progress */}
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <p className="text-primary text-xs font-bold tracking-wider">NEURAL LINK STABILITY</p>
                  <p className="text-white text-xs font-mono">65%</p>
                </div>
                <div className="h-1 w-full bg-gray-800 rounded overflow-hidden">
                  <div className="h-full bg-primary shadow-glow w-[65%]"></div>
                </div>
                <p className="text-slate-500 text-[10px] tracking-widest text-right">ENCRYPTING CONNECTION...</p>
              </div>

              {/* Auth Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-4">

                {/* Identity Key */}
                <div className="group">
                  <label className="block text-primary/80 text-xs font-bold tracking-wider mb-2 uppercase">
                    Identity_Key (Email)
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-primary/50 material-symbols-outlined">alternate_email</span>
                    <input
                      type="email"
                      placeholder="operative@axiom.net"
                      className="w-full bg-surface-dark text-white border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary h-14 pl-12 pr-4 text-sm rounded transition-all duration-300 placeholder:text-slate-600 outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Passphrase */}
                <div className="group">
                  <label className="block text-primary/80 text-xs font-bold tracking-wider mb-2 uppercase">
                    Passphrase
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-primary/50 material-symbols-outlined">encrypted</span>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••••••"
                      className="w-full bg-surface-dark text-white border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary h-14 pl-12 pr-12 text-sm rounded transition-all duration-300 placeholder:text-slate-600 outline-none"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 top-0 h-full px-4 text-primary/50 hover:text-primary transition-colors flex items-center"
                    >
                      <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                    </button>
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div className="flex justify-end">
                  <a href="#" className="text-xs text-slate-400 hover:text-primary transition-colors">Recover Credentials?</a>
                </div>

                {/* Interlock Buttons */}
                <div className="flex w-full mt-4 h-14 relative group/buttons">
                  {/* Left Button (Login) */}
                  <button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary-dim text-background-dark font-bold text-base tracking-wide flex items-center justify-center gap-2 rounded-l z-10 clip-path-interlock-left transition-transform active:scale-[0.98] cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">login</span>
                    INITIALIZE
                  </button>

                  {/* Right Button (Sign Up) */}
                  <button
                    type="button"
                    onClick={() => navigate('/onboarding/profile')}
                    className="flex-1 bg-transparent border border-primary/30 border-l-0 text-primary hover:bg-primary/10 font-medium text-base tracking-wide flex items-center justify-center gap-2 rounded-r -ml-[1px] z-0 transition-colors cursor-pointer"
                  >
                    REGISTER
                    <span className="material-symbols-outlined text-[20px]">person_add</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer info */}
          <div className="p-6 text-center lg:text-left lg:pl-12 text-[10px] text-slate-600">
            AXIOM CORP © 2084 // ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Anomalies from './pages/Anomalies';
import AnomalyDetail from './pages/AnomalyDetail';

// Placeholder pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex-1 p-8 flex items-center justify-center flex-col text-gray-500">
    <span className="material-symbols-outlined text-6xl mb-4 opacity-20">construction</span>
    <h2 className="text-2xl font-bold">{title} Under Construction</h2>
  </div>
);

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="flex h-screen w-full bg-background-dark text-white font-display overflow-hidden selection:bg-primary selection:text-black">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#112117] via-[#050505] to-[#050505]">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Outlet />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="anomalies" element={<Anomalies />} />
          <Route path="anomalies/:id" element={<AnomalyDetail />} />
          <Route path="agents" element={<Placeholder title="Agents" />} />
          <Route path="reports" element={<Placeholder title="Reports" />} />
          <Route path="settings" element={<Placeholder title="Settings" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

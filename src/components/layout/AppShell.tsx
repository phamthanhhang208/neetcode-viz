import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { useAuth } from '@/hooks/useAuth';
import { useProgress } from '@/hooks/useProgress';

export default function AppShell() {
  const [collapsed, setCollapsed] = useState(false);
  const init = useAuth((s) => s.init);
  const user = useAuth((s) => s.user);
  const fetchProgress = useProgress((s) => s.fetchProgress);

  useEffect(() => {
    init();
  }, [init]);

  // Fetch progress when auth state changes
  useEffect(() => {
    fetchProgress();
  }, [user, fetchProgress]);

  return (
    <div className="h-screen flex bg-editor-bg overflow-hidden">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

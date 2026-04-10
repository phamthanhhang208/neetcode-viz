import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { useAuth } from '@/hooks/useAuth';
import { useProgress } from '@/hooks/useProgress';
import { useFavorites } from '@/hooks/useFavorites';

export default function AppShell() {
  const [collapsed, setCollapsed] = useState(false);
  const init = useAuth((s) => s.init);
  const user = useAuth((s) => s.user);
  const fetchProgress = useProgress((s) => s.fetchProgress);
  const fetchFavorites = useFavorites((s) => s.fetchFavorites);
  const fetchLists = useFavorites((s) => s.fetchLists);

  useEffect(() => {
    init();
  }, [init]);

  // Fetch data when auth state changes
  useEffect(() => {
    fetchProgress();
    fetchFavorites();
    fetchLists();
  }, [user, fetchProgress, fetchFavorites, fetchLists]);

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

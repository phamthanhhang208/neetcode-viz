import AuthGuard from '@/components/auth/AuthGuard';
import ListsDashboard from '@/components/lists/ListsDashboard';

export default function ListsPage() {
  return (
    <AuthGuard>
      <ListsDashboard />
    </AuthGuard>
  );
}

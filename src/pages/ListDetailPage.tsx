import AuthGuard from '@/components/auth/AuthGuard';
import ListDetail from '@/components/lists/ListDetail';

export default function ListDetailPage() {
  return (
    <AuthGuard>
      <ListDetail />
    </AuthGuard>
  );
}

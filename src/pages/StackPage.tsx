import AuthGuard from '@/components/auth/AuthGuard';
import StackView from '@/components/flashcards/StackView';

export default function StackPage() {
  return (
    <AuthGuard>
      <StackView />
    </AuthGuard>
  );
}

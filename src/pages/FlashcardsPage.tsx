import AuthGuard from '@/components/auth/AuthGuard';
import FlashcardDashboard from '@/components/flashcards/FlashcardDashboard';

export default function FlashcardsPage() {
  return (
    <AuthGuard>
      <FlashcardDashboard />
    </AuthGuard>
  );
}

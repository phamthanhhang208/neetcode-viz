import AuthGuard from '@/components/auth/AuthGuard';
import StudyMode from '@/components/flashcards/StudyMode';

export default function StudyPage() {
  return (
    <AuthGuard>
      <StudyMode />
    </AuthGuard>
  );
}

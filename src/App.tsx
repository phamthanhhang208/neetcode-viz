import { Routes, Route } from 'react-router-dom';
import AppShell from '@/components/layout/AppShell';
import HomePage from '@/pages/HomePage';
import TopicPage from '@/pages/TopicPage';
import ProblemPage from '@/pages/ProblemPage';
import LoginPage from '@/pages/LoginPage';
import FlashcardsPage from '@/pages/FlashcardsPage';
import StackPage from '@/pages/StackPage';
import StudyPage from '@/pages/StudyPage';
import ListsPage from '@/pages/ListsPage';
import ListDetailPage from '@/pages/ListDetailPage';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/topic/:topicId" element={<TopicPage />} />
        <Route path="/topic/:topicId/:problemId" element={<ProblemPage />} />
        <Route path="/flashcards" element={<FlashcardsPage />} />
        <Route path="/flashcards/:stackId" element={<StackPage />} />
        <Route path="/flashcards/:stackId/study" element={<StudyPage />} />
        <Route path="/lists" element={<ListsPage />} />
        <Route path="/lists/:listId" element={<ListDetailPage />} />
      </Route>
    </Routes>
  );
}

import { Routes, Route } from 'react-router-dom';
import AppShell from '@/components/layout/AppShell';
import HomePage from '@/pages/HomePage';
import TopicPage from '@/pages/TopicPage';
import ProblemPage from '@/pages/ProblemPage';

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/topic/:topicId" element={<TopicPage />} />
        <Route path="/topic/:topicId/:problemId" element={<ProblemPage />} />
      </Route>
    </Routes>
  );
}

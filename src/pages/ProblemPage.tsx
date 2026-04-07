import { useParams, Navigate } from 'react-router-dom';
import { getProblemById } from '@/data/registry';
import VisualizerPage from '@/components/visualizer/VisualizerPage';
import type { TopicId } from '@/data/types';

export default function ProblemPage() {
  const { topicId, problemId } = useParams<{ topicId: string; problemId: string }>();
  const problem = getProblemById(topicId as TopicId, problemId!);

  if (!problem) {
    return <Navigate to={topicId ? `/topic/${topicId}` : '/'} replace />;
  }

  return <VisualizerPage problem={problem} />;
}

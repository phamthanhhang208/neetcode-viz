import { useParams, Navigate } from 'react-router-dom';
import { getTopicMeta } from '@/data/topics';
import TopicStudyPage from '@/components/study/TopicStudyPage';
import type { TopicId } from '@/data/types';

export default function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = getTopicMeta(topicId as TopicId);

  if (!topic) return <Navigate to="/" replace />;

  return <TopicStudyPage topic={topic} />;
}

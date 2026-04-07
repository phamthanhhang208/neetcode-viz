import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { getTopicMeta } from '@/data/topics';
import { getProblemById } from '@/data/registry';
import type { TopicId } from '@/data/types';

export default function TopBar() {
  const location = useLocation();
  const parts = location.pathname.split('/').filter(Boolean);

  const crumbs: { label: string; to: string }[] = [{ label: 'Home', to: '/' }];

  if (parts[0] === 'topic' && parts[1]) {
    const topicId = parts[1] as TopicId;
    const topic = getTopicMeta(topicId);
    if (topic) {
      crumbs.push({ label: topic.name, to: `/topic/${topicId}` });
    }
    if (parts[2]) {
      const problem = getProblemById(topicId, parts[2]);
      if (problem) {
        crumbs.push({ label: problem.name, to: location.pathname });
      }
    }
  }

  return (
    <header className="h-10 bg-editor-sidebar border-b border-editor-border flex items-center px-4 gap-2">
      <Home size={14} className="text-text-muted flex-shrink-0" />
      {crumbs.map((crumb, i) => (
        <div key={crumb.to} className="flex items-center gap-2">
          {i > 0 && <ChevronRight size={12} className="text-text-muted" />}
          {i === crumbs.length - 1 ? (
            <span className="text-xs text-text-primary">{crumb.label}</span>
          ) : (
            <Link to={crumb.to} className="text-xs text-text-secondary hover:text-text-primary transition-colors">
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </header>
  );
}

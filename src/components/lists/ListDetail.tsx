import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFavorites } from '@/hooks/useFavorites';
import { useProgress } from '@/hooks/useProgress';
import { NEETCODE_150 } from '@/data/neetcode150';
import StatusDot from '@/components/shared/StatusDot';
import DifficultyBadge from '@/components/shared/DifficultyBadge';
import FavoriteStar from '@/components/shared/FavoriteStar';
import { ArrowLeft, X, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ListDetail() {
  const { listId } = useParams<{ listId: string }>();
  const navigate = useNavigate();
  const { favorites, lists, listItems, fetchListItems, removeFromList, toggleFavorite } = useFavorites();
  const { getStatus, setStatus } = useProgress();
  const _statuses = useProgress((s) => s.statuses);

  const isFavoritesView = listId === 'favorites';
  const list = isFavoritesView ? null : lists.find((l) => l.id === listId);
  const problemIds = isFavoritesView ? favorites : (listId ? listItems[listId] ?? [] : []);

  useEffect(() => {
    if (listId && !isFavoritesView) fetchListItems(listId);
  }, [listId, isFavoritesView, fetchListItems]);

  const problems = problemIds
    .map((id) => NEETCODE_150.find((p) => p.id === id))
    .filter(Boolean) as typeof NEETCODE_150;

  const title = isFavoritesView ? 'Favorites' : list?.name ?? 'List';
  const color = isFavoritesView ? '#dcdcaa' : list?.color ?? '#569cd6';

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate('/lists')}
        className="flex items-center gap-1 text-xs text-text-muted hover:text-text-primary mb-4 transition-colors"
      >
        <ArrowLeft size={12} />
        All Lists
      </button>

      <div className="flex items-center gap-3 mb-6">
        {isFavoritesView ? (
          <Star size={20} className="text-accent-yellow" fill="currentColor" />
        ) : (
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
        )}
        <h1 className="text-xl font-bold text-text-bright">{title}</h1>
        <span className="text-xs text-text-muted">{problems.length} problem{problems.length !== 1 ? 's' : ''}</span>
      </div>

      {problems.length === 0 ? (
        <div className="text-center py-12 bg-editor-sidebar border border-editor-border rounded-lg">
          <p className="text-text-secondary mb-1">No problems in this list</p>
          <p className="text-xs text-text-muted">
            {isFavoritesView
              ? 'Click the star icon on any problem to add it to favorites'
              : 'Use the + icon on any problem to add it to this list'}
          </p>
        </div>
      ) : (
        <div className="space-y-1">
          {problems.map((problem) => {
            const status = getStatus(problem.id);
            const canClick = problem.hasVisualization;

            return (
              <div
                key={problem.id}
                className={cn(
                  'flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200',
                  canClick ? 'hover:bg-editor-hover cursor-pointer' : 'opacity-50',
                )}
                onClick={() => canClick && navigate(`/topic/${problem.topicId}/${problem.id}`)}
              >
                <StatusDot status={status} onClick={(next) => setStatus(problem.id, next)} />
                <FavoriteStar problemId={problem.id} size={12} />
                <span className="text-xs text-text-muted font-mono w-8">{problem.number}</span>
                <span className="flex-1 text-sm text-text-primary">{problem.name}</span>
                <DifficultyBadge difficulty={problem.difficulty} />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isFavoritesView) {
                      toggleFavorite(problem.id);
                    } else if (listId) {
                      removeFromList(listId, problem.id);
                    }
                  }}
                  className="text-text-muted hover:text-accent-red transition-colors"
                >
                  <X size={12} />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

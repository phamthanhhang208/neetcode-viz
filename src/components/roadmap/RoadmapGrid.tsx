import { useNavigate } from 'react-router-dom';
import { NEETCODE_150, getProblemsForTopicIndex, getVizCoverage } from '@/data/neetcode150';
import { getOrderedTopics } from '@/data/topics';
import { useProgress } from '@/hooks/useProgress';
import { cn, difficultyColor } from '@/lib/utils';
import StatusDot from '@/components/shared/StatusDot';
import type { TopicId } from '@/data/types';

export default function RoadmapGrid() {
  const navigate = useNavigate();
  const topics = getOrderedTopics();
  const { getStatus, setStatus, getCompletedCount } = useProgress();
  const coverage = getVizCoverage();
  const totalDone = useProgress((s) =>
    NEETCODE_150.filter((p) => s.statuses[p.id] === 'done').length,
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-bright mb-2">NeetCode 150</h1>
        <p className="text-text-secondary text-sm">
          {coverage.visualized}/{coverage.total} visualized &bull; {totalDone}/{coverage.total} completed
        </p>
      </div>

      <div className="space-y-6">
        {topics.map((topic) => {
          const problems = getProblemsForTopicIndex(topic.id);
          if (problems.length === 0) return null;

          return (
            <div key={topic.id} className="bg-editor-sidebar rounded-lg border border-editor-border p-4">
              <button
                onClick={() => navigate(`/topic/${topic.id}`)}
                className="flex items-center gap-2 mb-3 hover:opacity-80 transition-opacity"
              >
                <span className="text-lg">{topic.icon}</span>
                <h2 className="text-sm font-semibold text-text-bright">{topic.name}</h2>
                <span className="text-xs text-text-muted ml-1">
                  ({getCompletedCount(problems.map((p) => p.id))}/{problems.length})
                </span>
              </button>

              <div className="flex flex-wrap gap-2">
                {problems.map((problem) => {
                  const status = getStatus(problem.id);
                  const canClick = problem.hasVisualization;

                  return (
                    <button
                      key={problem.id}
                      onClick={() => canClick && navigate(`/topic/${problem.topicId}/${problem.id}`)}
                      disabled={!canClick}
                      className={cn(
                        'group relative flex items-center gap-1.5 px-3 py-1.5 rounded border text-xs font-mono transition-all duration-200',
                        canClick
                          ? 'border-editor-border bg-editor-active hover:border-accent-blue hover:bg-editor-hover cursor-pointer'
                          : 'border-editor-border/50 bg-editor-bg/50 opacity-40 cursor-not-allowed',
                      )}
                    >
                      <StatusDot status={status} onClick={(next) => setStatus(problem.id, next)} />
                      <span className={cn('truncate max-w-[140px]', difficultyColor(problem.difficulty))}>
                        {problem.number}. {problem.name}
                      </span>
                      {!canClick && (
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-editor-active text-[10px] text-text-muted opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          Coming soon
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

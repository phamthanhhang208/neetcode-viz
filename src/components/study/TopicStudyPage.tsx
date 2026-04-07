import { useNavigate } from 'react-router-dom';
import type { TopicId, TopicMeta, NeetCodeProblem } from '@/data/types';
import { getProblemsForTopicIndex } from '@/data/neetcode150';
import { useProgress } from '@/hooks/useProgress';
import ConceptCard from './ConceptCard';
import DifficultyBadge from '@/components/shared/DifficultyBadge';
import StatusDot from '@/components/shared/StatusDot';
import { cn } from '@/lib/utils';
import { BookOpen, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

interface Props {
  topic: TopicMeta;
}

export default function TopicStudyPage({ topic }: Props) {
  const navigate = useNavigate();
  const problems = getProblemsForTopicIndex(topic.id);
  const { getStatus } = useProgress();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Hero */}
      <div className="text-center py-8">
        <span className="text-5xl mb-4 block">{topic.icon}</span>
        <h1 className="text-3xl font-bold text-text-bright mb-3">{topic.name}</h1>
        <p className="text-lg text-text-secondary max-w-xl mx-auto">{topic.summary.keyIdea}</p>
      </div>

      {/* Concepts */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <BookOpen size={16} className="text-accent-blue" />
          <h2 className="text-lg font-semibold text-text-bright">Key Concepts</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {topic.summary.concepts.map((c) => (
            <ConceptCard key={c.term} term={c.term} description={c.description} color={topic.color} />
          ))}
        </div>
      </section>

      {/* When to Use */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle size={16} className="text-accent-green" />
          <h2 className="text-lg font-semibold text-text-bright">When to Use</h2>
        </div>
        <ul className="space-y-2">
          {topic.summary.whenToUse.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
              <ArrowRight size={14} className="text-accent-green mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Common Mistakes */}
      {topic.summary.commonMistakes && topic.summary.commonMistakes.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={16} className="text-accent-yellow" />
            <h2 className="text-lg font-semibold text-text-bright">Common Mistakes</h2>
          </div>
          <ul className="space-y-2">
            {topic.summary.commonMistakes.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                <AlertTriangle size={14} className="text-accent-yellow mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Complexity */}
      <div className="bg-editor-active rounded-lg p-4 border border-editor-border">
        <p className="text-sm text-text-secondary">
          <span className="text-text-bright font-medium">Complexity: </span>
          {topic.summary.complexity}
        </p>
      </div>

      {/* Problem List */}
      <section>
        <h2 className="text-lg font-semibold text-text-bright mb-4">Problems</h2>
        <div className="space-y-1">
          {problems.map((problem) => (
            <ProblemRow key={problem.id} problem={problem} topicId={topic.id} status={getStatus(problem.id)} onClick={() => {
              if (problem.hasVisualization) {
                navigate(`/topic/${topic.id}/${problem.id}`);
              }
            }} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProblemRow({ problem, topicId, status, onClick }: {
  problem: NeetCodeProblem;
  topicId: TopicId;
  status: ReturnType<ReturnType<typeof useProgress>['getStatus']>;
  onClick: () => void;
}) {
  const canClick = problem.hasVisualization;

  return (
    <button
      onClick={onClick}
      disabled={!canClick}
      className={cn(
        'w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left transition-all duration-200',
        canClick
          ? 'hover:bg-editor-hover cursor-pointer'
          : 'opacity-40 cursor-not-allowed',
      )}
    >
      <StatusDot status={status} />
      <span className="text-xs text-text-muted font-mono w-8">{problem.number}</span>
      <span className="flex-1 text-sm text-text-primary">{problem.name}</span>
      <DifficultyBadge difficulty={problem.difficulty} />
      {!canClick && <span className="text-[10px] text-text-muted">No viz</span>}
    </button>
  );
}

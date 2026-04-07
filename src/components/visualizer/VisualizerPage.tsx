import { useEffect, useCallback } from 'react';
import type { Problem } from '@/data/types';
import { useStepper } from '@/hooks/useStepper';
import { useProgress } from '@/hooks/useProgress';
import CodePanel from './CodePanel';
import VisualPanel from './VisualPanel';
import VariablesPanel from './VariablesPanel';
import StepControls from './StepControls';
import StepMessage from './StepMessage';
import HintsPanel from './HintsPanel';
import DifficultyBadge from '@/components/shared/DifficultyBadge';
import { ExternalLink } from 'lucide-react';

interface Props {
  problem: Problem;
}

export default function VisualizerPage({ problem }: Props) {
  const [state, actions] = useStepper(problem.steps);
  const setLastVisited = useProgress((s) => s.setLastVisited);
  const setStatus = useProgress((s) => s.setStatus);

  useEffect(() => {
    setLastVisited(problem.id);
    setStatus(problem.id, 'in-progress');
  }, [problem.id, setLastVisited, setStatus]);

  // Keyboard shortcuts
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
    switch (e.key) {
      case 'ArrowRight': case 'l': e.preventDefault(); actions.next(); break;
      case 'ArrowLeft': case 'h': e.preventDefault(); actions.prev(); break;
      case ' ': e.preventDefault(); actions.togglePlay(); break;
      case 'r': actions.reset(); break;
      case '[': {
        const speeds = [0.5, 1, 1.5, 2, 3];
        const idx = speeds.indexOf(state.speed);
        if (idx > 0) actions.setSpeed(speeds[idx - 1]);
        break;
      }
      case ']': {
        const speeds = [0.5, 1, 1.5, 2, 3];
        const idx = speeds.indexOf(state.speed);
        if (idx < speeds.length - 1) actions.setSpeed(speeds[idx + 1]);
        break;
      }
      case '1': actions.setSpeed(1); break;
      case '2': actions.setSpeed(2); break;
      case '3': actions.setSpeed(3); break;
    }
  }, [actions, state.speed]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  const prevStep = state.currentStep > 0 ? problem.steps[state.currentStep - 1] : undefined;

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-2 border-b border-editor-border bg-editor-sidebar">
        <h1 className="text-sm font-semibold text-text-bright">
          {problem.number}. {problem.name}
        </h1>
        <DifficultyBadge difficulty={problem.difficulty} />
        <span className="px-2 py-0.5 rounded text-[10px] bg-editor-active text-text-secondary border border-editor-border">
          {problem.pattern}
        </span>
        <a
          href={problem.link}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-text-muted hover:text-text-primary transition-colors"
        >
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Main split view */}
      <div className="flex-1 flex flex-col md:flex-row min-h-0">
        {/* Code Panel */}
        <div className="md:w-1/2 w-full border-b md:border-b-0 md:border-r border-editor-border overflow-hidden">
          <CodePanel
            code={problem.code}
            activeLine={state.step.line}
            isKeyMoment={state.step.isKeyMoment}
          />
        </div>

        {/* Viz Panel + Variables */}
        <div className="md:w-1/2 w-full flex flex-col min-h-0">
          <div className="flex-1 overflow-auto">
            <VisualPanel viz={state.step.viz} />
          </div>
          {state.step.viz.variables && (
            <VariablesPanel
              variables={state.step.viz.variables}
              prevVariables={prevStep?.viz.variables}
            />
          )}
        </div>
      </div>

      {/* Controls */}
      <StepControls
        currentStep={state.currentStep}
        totalSteps={state.totalSteps}
        isPlaying={state.isPlaying}
        speed={state.speed}
        isAtStart={state.isAtStart}
        isAtEnd={state.isAtEnd}
        isKeyMoments={problem.steps.map((s) => !!s.isKeyMoment)}
        onPrev={actions.prev}
        onNext={actions.next}
        onTogglePlay={actions.togglePlay}
        onGoTo={actions.goTo}
        onSetSpeed={actions.setSpeed}
        onReset={actions.reset}
      />

      {/* Step Message */}
      <StepMessage
        label={state.step.label}
        message={state.step.message}
        isKeyMoment={state.step.isKeyMoment}
      />

      {/* Hints */}
      {problem.hints && <HintsPanel hints={problem.hints} />}
    </div>
  );
}

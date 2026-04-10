import { useEffect, useCallback, useMemo, useState, useRef } from 'react';
import type { Problem, SupportedLanguage } from '@/data/types';
import { useStepper } from '@/hooks/useStepper';
import { useProgress } from '@/hooks/useProgress';
import { useLanguage } from '@/hooks/useLanguage';
import CodePanel from './CodePanel';
import VisualPanel from './VisualPanel';
import VariablesPanel from './VariablesPanel';
import StepControls from './StepControls';
import StepMessage from './StepMessage';
import HintsPanel from './HintsPanel';
import PseudocodePanel from './PseudocodePanel';
import PatternPanel from './PatternPanel';
import ComplexityPanel from './ComplexityPanel';
import ResizeHandle from './ResizeHandle';
import TranscriptPanel from './TranscriptPanel';
import DifficultyBadge from '@/components/shared/DifficultyBadge';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  problem: Problem;
}

const LANGUAGES: { value: SupportedLanguage; label: string }[] = [
  { value: 'python', label: 'Python' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'go', label: 'Go' },
];

export default function VisualizerPage({ problem }: Props) {
  const [state, actions] = useStepper(problem.steps);
  const setLastVisited = useProgress((s) => s.setLastVisited);
  const setStatus = useProgress((s) => s.setStatus);
  const { language, setLanguage } = useLanguage();
  const [splitPercent, setSplitPercent] = useState(50);
  const [showTranscript, setShowTranscript] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLastVisited(problem.id);
    setStatus(problem.id, 'in-progress');
  }, [problem.id, setLastVisited, setStatus]);

  // Show transcript when reaching the end
  useEffect(() => {
    if (state.isAtEnd && !state.isPlaying) {
      setShowTranscript(true);
    }
  }, [state.isAtEnd, state.isPlaying]);

  // Hide transcript when user navigates away from end
  useEffect(() => {
    if (!state.isAtEnd) {
      setShowTranscript(false);
    }
  }, [state.isAtEnd]);

  const hasTranslation = useCallback(
    (lang: SupportedLanguage) => lang === 'python' || !!problem.codeSolutions?.[lang]?.code,
    [problem.codeSolutions],
  );

  const activeCode = useMemo(() => {
    if (language === 'python' || !problem.codeSolutions?.[language]) {
      return problem.code;
    }
    return problem.codeSolutions[language].code;
  }, [language, problem]);

  const activeLine = useMemo(() => {
    if (language === 'python' || !problem.codeSolutions?.[language]?.lineMap) {
      return state.step.line;
    }
    return problem.codeSolutions[language].lineMap![state.step.line] ?? state.step.line;
  }, [language, problem, state.step.line]);

  const handleHorizontalResize = useCallback((delta: number) => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    const pctDelta = (delta / width) * 100;
    setSplitPercent((prev) => Math.max(20, Math.min(80, prev + pctDelta)));
  }, []);

  // Keyboard shortcuts
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) return;
    switch (e.key) {
      case 'ArrowRight': case 'l': e.preventDefault(); actions.next(); break;
      case 'ArrowLeft': case 'h': e.preventDefault(); actions.prev(); break;
      case ' ': e.preventDefault(); actions.togglePlay(); break;
      case 'r': actions.reset(); break;
      case 'p': if (hasTranslation('python')) setLanguage('python'); break;
      case 'j': if (hasTranslation('javascript')) setLanguage('javascript'); break;
      case 'g': if (hasTranslation('go')) setLanguage('go'); break;
      case 't': setShowTranscript((prev) => !prev); break;
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
  }, [actions, state.speed, hasTranslation, setLanguage]);

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

        {/* Language Dropdown */}
        <div className="relative ml-auto mr-2">
          <select
            value={language}
            onChange={(e) => {
              const lang = e.target.value as SupportedLanguage;
              if (hasTranslation(lang)) setLanguage(lang);
            }}
            className="appearance-none bg-editor-active border border-editor-border rounded px-3 py-1 pr-7 text-xs text-text-primary cursor-pointer hover:border-accent-blue/50 transition-colors focus:outline-none focus:border-accent-blue"
          >
            {LANGUAGES.map((lang) => (
              <option
                key={lang.value}
                value={lang.value}
                disabled={!hasTranslation(lang.value)}
              >
                {lang.label}{!hasTranslation(lang.value) ? ' (soon)' : ''}
              </option>
            ))}
          </select>
          <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
        </div>

        <a
          href={problem.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-text-primary transition-colors"
        >
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Main split view */}
      <div ref={containerRef} className="flex-1 flex flex-col md:flex-row min-h-0">
        {/* Code Panel */}
        <div className="w-full border-b md:border-b-0 overflow-hidden" style={{ flex: `0 0 ${splitPercent}%` }}>
          <CodePanel
            code={activeCode}
            activeLine={activeLine}
            isKeyMoment={state.step.isKeyMoment}
          />
        </div>

        {/* Resize Handle */}
        <div className="hidden md:block">
          <ResizeHandle direction="horizontal" onResize={handleHorizontalResize} />
        </div>

        {/* Viz Panel + Variables / Transcript */}
        <div className="flex-1 flex flex-col min-h-0 min-w-0">
          {showTranscript && state.isAtEnd ? (
            <TranscriptPanel steps={problem.steps} problemName={problem.name} />
          ) : (
            <>
              <div className="flex-1 overflow-auto">
                <VisualPanel viz={state.step.viz} />
              </div>
              {state.step.viz.variables && (
                <VariablesPanel
                  variables={state.step.viz.variables}
                  prevVariables={prevStep?.viz.variables}
                />
              )}
            </>
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

      {/* Understanding Panels */}
      <PseudocodePanel code={problem.code} />
      <PatternPanel pattern={problem.pattern} timeComplexity={problem.timeComplexity} spaceComplexity={problem.spaceComplexity} />
      <ComplexityPanel timeComplexity={problem.timeComplexity} spaceComplexity={problem.spaceComplexity} />

      {/* Hints */}
      {problem.hints && <HintsPanel hints={problem.hints} />}
    </div>
  );
}

import { cn } from '@/lib/utils';
import type { VisualizationStep } from '@/data/types';
import { ScrollText } from 'lucide-react';

interface Props {
  steps: VisualizationStep[];
  problemName: string;
}

export default function TranscriptPanel({ steps, problemName }: Props) {
  return (
    <div className="h-full flex flex-col bg-editor-bg">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-editor-border bg-editor-sidebar">
        <ScrollText size={14} className="text-accent-green" />
        <h3 className="text-xs font-semibold text-text-bright">Full Walkthrough — {problemName}</h3>
        <span className="text-[10px] text-text-muted ml-auto">{steps.length} steps</span>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {steps.map((step, i) => (
          <div
            key={i}
            className={cn(
              'flex gap-3 text-xs',
              step.isKeyMoment && 'bg-accent-green/5 rounded-lg p-2 -mx-2',
            )}
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-editor-sidebar border border-editor-border flex items-center justify-center text-text-muted font-mono text-[10px]">
              {i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className={cn(
                  'px-1.5 py-0.5 rounded text-[10px] font-medium',
                  step.isKeyMoment
                    ? 'bg-accent-green/20 text-accent-green'
                    : 'bg-editor-active text-text-secondary',
                )}>
                  {step.isKeyMoment && '✨ '}{step.label}
                </span>
                <span className="text-text-muted text-[10px]">Line {step.line}</span>
              </div>
              <p className="text-text-primary leading-relaxed">{step.message}</p>
            </div>
          </div>
        ))}
        <div className="text-center pt-4 pb-2">
          <p className="text-xs text-accent-green font-medium">Visualization complete!</p>
          <p className="text-[10px] text-text-muted mt-1">Use the controls above to replay any step</p>
        </div>
      </div>
    </div>
  );
}

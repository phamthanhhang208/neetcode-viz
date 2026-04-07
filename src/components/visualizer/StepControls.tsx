import { cn } from '@/lib/utils';
import {
  SkipBack, ChevronLeft, Play, Pause, ChevronRight, SkipForward,
} from 'lucide-react';

interface StepControlsProps {
  currentStep: number;
  totalSteps: number;
  isPlaying: boolean;
  speed: number;
  isAtStart: boolean;
  isAtEnd: boolean;
  isKeyMoments: boolean[];
  onPrev: () => void;
  onNext: () => void;
  onTogglePlay: () => void;
  onGoTo: (index: number) => void;
  onSetSpeed: (speed: number) => void;
  onReset: () => void;
}

const SPEEDS = [0.5, 1, 1.5, 2, 3];

export default function StepControls({
  currentStep, totalSteps, isPlaying, speed, isAtStart, isAtEnd,
  isKeyMoments, onPrev, onNext, onTogglePlay, onGoTo, onSetSpeed, onReset,
}: StepControlsProps) {
  return (
    <div className="flex items-center gap-4 px-4 py-2 bg-editor-sidebar border-t border-editor-border">
      {/* Transport */}
      <div className="flex items-center gap-1">
        <ControlButton onClick={onReset} disabled={isAtStart} icon={<SkipBack size={14} />} />
        <ControlButton onClick={onPrev} disabled={isAtStart} icon={<ChevronLeft size={16} />} />
        <button
          onClick={onTogglePlay}
          className={cn(
            'w-8 h-8 rounded-full flex items-center justify-center transition-colors',
            isPlaying
              ? 'bg-accent-blue text-white'
              : 'bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/30',
          )}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
        </button>
        <ControlButton onClick={onNext} disabled={isAtEnd} icon={<ChevronRight size={16} />} />
        <ControlButton onClick={() => onGoTo(totalSteps - 1)} disabled={isAtEnd} icon={<SkipForward size={14} />} />
      </div>

      {/* Step Counter */}
      <span className="text-xs text-text-secondary font-mono min-w-[80px]">
        Step {currentStep + 1} / {totalSteps}
      </span>

      {/* Scrubber */}
      <div className="flex-1 flex items-center gap-0.5 h-6 cursor-pointer">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            className={cn(
              'flex-1 rounded-sm transition-all duration-200 min-w-[6px]',
              isKeyMoments[i] ? 'h-4' : 'h-2',
              i <= currentStep
                ? isKeyMoments[i]
                  ? 'bg-accent-green'
                  : 'bg-accent-blue'
                : 'bg-editor-border hover:bg-editor-hover',
            )}
          />
        ))}
      </div>

      {/* Speed */}
      <div className="flex items-center gap-1">
        {SPEEDS.map((s) => (
          <button
            key={s}
            onClick={() => onSetSpeed(s)}
            className={cn(
              'px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors',
              s === speed
                ? 'bg-accent-blue/20 text-accent-blue'
                : 'text-text-muted hover:text-text-secondary',
            )}
          >
            {s}x
          </button>
        ))}
      </div>
    </div>
  );
}

function ControlButton({ onClick, disabled, icon }: { onClick: () => void; disabled: boolean; icon: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'w-7 h-7 rounded flex items-center justify-center transition-colors',
        disabled
          ? 'text-text-muted cursor-not-allowed'
          : 'text-text-secondary hover:text-text-primary hover:bg-editor-hover',
      )}
    >
      {icon}
    </button>
  );
}

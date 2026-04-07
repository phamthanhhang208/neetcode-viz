import { useState, useCallback, useRef, useEffect } from 'react';
import type { VisualizationStep } from '@/data/types';

interface StepperState {
  currentStep: number;
  totalSteps: number;
  isPlaying: boolean;
  speed: number;
  step: VisualizationStep;
  isAtStart: boolean;
  isAtEnd: boolean;
}

interface StepperActions {
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  togglePlay: () => void;
  play: () => void;
  pause: () => void;
  setSpeed: (speed: number) => void;
  reset: () => void;
  loadSteps: (steps: VisualizationStep[]) => void;
}

const BASE_INTERVAL_MS = 1500;

export function useStepper(initialSteps: VisualizationStep[]): [StepperState, StepperActions] {
  const [steps, setSteps] = useState<VisualizationStep[]>(initialSteps);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeedState] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSteps = steps.length;
  const isAtStart = currentStep === 0;
  const isAtEnd = currentStep >= totalSteps - 1;

  // Clear any existing interval
  const clearTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Auto-play effect
  useEffect(() => {
    clearTimer();

    if (isPlaying && totalSteps > 0) {
      const intervalMs = BASE_INTERVAL_MS / speed;

      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= totalSteps - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, intervalMs);
    }

    return clearTimer;
  }, [isPlaying, speed, totalSteps, clearTimer]);

  // Stop playing when we reach the end
  useEffect(() => {
    if (isAtEnd && isPlaying) {
      setIsPlaying(false);
    }
  }, [isAtEnd, isPlaying]);

  const next = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  }, [totalSteps]);

  const prev = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setCurrentStep(Math.max(0, Math.min(index, totalSteps - 1)));
    },
    [totalSteps],
  );

  const play = useCallback(() => {
    if (totalSteps > 0 && currentStep < totalSteps - 1) {
      setIsPlaying(true);
    }
  }, [totalSteps, currentStep]);

  const pause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }
    // Replay from start when at the end
    if (currentStep >= totalSteps - 1) {
      setCurrentStep(0);
    }
    setIsPlaying(true);
  }, [isPlaying, currentStep, totalSteps]);

  const setSpeed = useCallback((newSpeed: number) => {
    setSpeedState(newSpeed);
  }, []);

  const reset = useCallback(() => {
    setIsPlaying(false);
    setCurrentStep(0);
  }, []);

  const loadSteps = useCallback((newSteps: VisualizationStep[]) => {
    setIsPlaying(false);
    setSteps(newSteps);
    setCurrentStep(0);
  }, []);

  const state: StepperState = {
    currentStep,
    totalSteps,
    isPlaying,
    speed,
    step: steps[currentStep],
    isAtStart,
    isAtEnd,
  };

  const actions: StepperActions = {
    next,
    prev,
    goTo,
    togglePlay,
    play,
    pause,
    setSpeed,
    reset,
    loadSteps,
  };

  return [state, actions];
}

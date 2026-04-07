export interface FlashcardStack {
  id: string;
  user_id: string;
  name: string;
  color: string;
  created_at: string;
}

export interface Flashcard {
  id: string;
  user_id: string;
  stack_id: string;
  front: string;
  back: string;
  next_review: string;
  interval_days: number;
  ease_factor: number;
  repetitions: number;
  created_at: string;
}

export type ReviewRating = 'again' | 'hard' | 'easy';

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://pinwfbmnjpyyrhydzkeh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpbndmYm1uanB5eXJoeWR6a2VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1MjU1MzQsImV4cCI6MjA5MTEwMTUzNH0.uu6xYZ2BENF8FSkDNkczivrfJ5mqjvGD7oC7isIHX6U';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let _bootstrapped = false;

export async function bootstrapDB() {
  if (_bootstrapped) return;
  _bootstrapped = true;

  const { error } = await supabase.rpc('exec_sql', {
    query: `
      CREATE TABLE IF NOT EXISTS flashcard_stacks (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
        name text NOT NULL,
        color text DEFAULT '#569cd6',
        created_at timestamptz DEFAULT now()
      );

      CREATE TABLE IF NOT EXISTS flashcards (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
        stack_id uuid NOT NULL REFERENCES flashcard_stacks(id) ON DELETE CASCADE,
        front text NOT NULL,
        back text NOT NULL,
        next_review timestamptz DEFAULT now(),
        interval_days float DEFAULT 0,
        ease_factor float DEFAULT 2.5,
        repetitions int DEFAULT 0,
        created_at timestamptz DEFAULT now()
      );

      ALTER TABLE flashcard_stacks ENABLE ROW LEVEL SECURITY;
      ALTER TABLE flashcards ENABLE ROW LEVEL SECURITY;

      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'stacks_user_policy') THEN
          CREATE POLICY stacks_user_policy ON flashcard_stacks
            FOR ALL USING (auth.uid() = user_id)
            WITH CHECK (auth.uid() = user_id);
        END IF;
        IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'cards_user_policy') THEN
          CREATE POLICY cards_user_policy ON flashcards
            FOR ALL USING (auth.uid() = user_id)
            WITH CHECK (auth.uid() = user_id);
        END IF;
      END $$;
    `,
  });

  // If RPC doesn't exist, tables likely need to be created via Supabase dashboard
  if (error) {
    console.warn('DB bootstrap via RPC failed (tables may already exist or need manual setup):', error.message);
  }
}

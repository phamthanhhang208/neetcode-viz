# NeetCode 150 Visualizer

An interactive algorithm study platform for the [NeetCode 150](https://neetcode.io/) problem set. Step through algorithm visualizations with synced code highlighting, study topic concepts, and track your progress — all in a polished dark IDE theme.

**Live:** [neetcode-viz.vercel.app](https://neetcode-viz.vercel.app)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Auth_%2B_DB-3FCF8E?logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?logo=vercel&logoColor=white)

---

## Features

### Algorithm Visualizer
- **150/150 problems** with step-by-step visualization of algorithm execution
- **15 visualization components** — Array, HashMap, Set, Stack, Queue, LinkedList, BinaryTree, Graph, Matrix, BinarySearch, Intervals, DPTable, Trie, Heap, Pointers
- **Synced code highlighting** — active line tracks the current step
- **Multi-language support** — Python, JavaScript, and Go solutions via dropdown
- **Resizable split panels** — drag to resize code vs visualization
- **Playback controls** — play/pause, speed (0.5x–3x), step scrubber, replay
- **Keyboard shortcuts** — arrow keys, space, `r` reset, `p`/`j`/`g` language switch

### Understanding Aids
- **Pseudocode panel** — auto-converted plain English version of the code
- **Pattern explanation** — why this pattern applies, when to use it, key insight (25+ patterns)
- **Complexity visualizer** — Big-O chart with growth comparison curves
- **Step transcript** — full walkthrough summary after completing all steps
- **Progressive hints** — reveal hints one at a time

### Study System
- **18 topic pages** — key concepts, when-to-use checklists, common mistakes
- **Roadmap grid** — NeetCode-style overview of all 150 problems by topic
- **Progress tracking** — click status dots to mark todo/in-progress/done (synced to Supabase)

### Flashcard / Active Recall
- **Card stacks** — organize flashcards by topic (Frontend, Algo, System Design, etc.)
- **Markdown support** — code blocks, tables, bold, lists in card content
- **SM-2 spaced repetition** — Again/Hard/Easy rating with intelligent scheduling
- **CSV import** — bulk import cards from CSV files
- **Seed data** — 20 "Algorithms & Data Structures" cards on first login

### Auth & Persistence
- **Supabase Auth** — Email/password + Google OAuth
- **Cloud sync** — progress and flashcards persist across devices
- **Offline fallback** — localStorage when not logged in

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 |
| State | Zustand |
| Animation | Framer Motion |
| Icons | Lucide React |
| Routing | React Router v6 |
| Backend | Supabase (Auth + PostgreSQL) |
| Markdown | react-markdown + remark-gfm |
| CSV | PapaParse |
| Deploy | Vercel |

---

## Getting Started

```bash
# Clone
git clone https://github.com/phamthanhhang208/neetcode-viz.git
cd neetcode-viz

# Install
npm install

# Run dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Environment

The app connects to Supabase for auth and data persistence. The Supabase config is in `src/lib/supabase.ts`. To use your own Supabase project, update the URL and anon key there.

### Database Setup

Run this SQL in your Supabase SQL Editor:

```sql
-- Flashcard tables
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

-- Progress table
CREATE TABLE IF NOT EXISTS problem_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  problem_id text NOT NULL,
  status text NOT NULL DEFAULT 'todo',
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, problem_id)
);

-- Row Level Security
ALTER TABLE flashcard_stacks ENABLE ROW LEVEL SECURITY;
ALTER TABLE flashcards ENABLE ROW LEVEL SECURITY;
ALTER TABLE problem_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY stacks_user_policy ON flashcard_stacks FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY cards_user_policy ON flashcards FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY progress_user_policy ON problem_progress FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
```

---

## Project Structure

```
src/
├── components/
│   ├── layout/          # AppShell, Sidebar, TopBar
│   ├── visualizer/      # VisualizerPage, CodePanel, StepControls, viz/*
│   ├── roadmap/         # RoadmapGrid
│   ├── study/           # TopicStudyPage, ConceptCard
│   ├── flashcards/      # Dashboard, StackView, StudyMode, ImportCards
│   ├── auth/            # LoginPage, AuthGuard
│   └── shared/          # DifficultyBadge, StatusDot
├── data/
│   ├── types.ts         # Core TypeScript interfaces
│   ├── topics.ts        # 18 topics with study content
│   ├── neetcode150.ts   # Full 150-problem index
│   ├── registry.ts      # Problem lookup + translation merge
│   ├── problems/        # Per-topic visualization step data
│   └── translations/    # JS/Go code translations per topic
├── hooks/               # useStepper, useProgress, useAuth, useFlashcards, useLanguage
├── lib/                 # utils, supabase client
├── pages/               # Route page wrappers
└── styles/              # Tailwind theme (globals.css)
```

---

## Keyboard Shortcuts (Visualizer)

| Key | Action |
|-----|--------|
| `→` / `l` | Next step |
| `←` / `h` | Previous step |
| `Space` | Play / Pause |
| `r` | Reset to step 0 |
| `[` / `]` | Decrease / Increase speed |
| `1` `2` `3` | Set speed 1x / 2x / 3x |
| `p` `j` `g` | Switch to Python / JavaScript / Go |
| `t` | Toggle transcript |

---

## License

MIT

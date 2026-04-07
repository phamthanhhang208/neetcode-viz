import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { getOrderedTopics } from '@/data/topics';
import { getProblemsForTopicIndex } from '@/data/neetcode150';
import { useProgress } from '@/hooks/useProgress';
import { PanelLeftClose, PanelLeft, Layers, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const topics = getOrderedTopics();
  const getCompletedCount = useProgress((s) => s.getCompletedCount);
  const { user, signOut } = useAuth();

  return (
    <aside
      className={cn(
        'h-full bg-editor-sidebar border-r border-editor-border flex flex-col transition-all duration-200',
        collapsed ? 'w-14' : 'w-[260px]',
      )}
    >
      <div className="flex items-center justify-between p-3 border-b border-editor-border">
        {!collapsed && (
          <NavLink to="/" className="text-text-bright font-semibold text-sm tracking-wide">
            NeetCode Viz
          </NavLink>
        )}
        <button
          onClick={onToggle}
          className="p-1.5 rounded hover:bg-editor-hover text-text-secondary hover:text-text-primary transition-colors"
        >
          {collapsed ? <PanelLeft size={16} /> : <PanelLeftClose size={16} />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        {topics.map((topic) => {
          const problems = getProblemsForTopicIndex(topic.id);
          const completed = getCompletedCount(problems.map((p) => p.id));
          const total = problems.length;

          return (
            <NavLink
              key={topic.id}
              to={`/topic/${topic.id}`}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2 mx-1 rounded text-sm transition-colors',
                  isActive
                    ? 'bg-editor-active text-text-bright'
                    : 'text-text-secondary hover:bg-editor-hover hover:text-text-primary',
                )
              }
            >
              <span className="text-base flex-shrink-0">{topic.icon}</span>
              {!collapsed && (
                <div className="flex-1 min-w-0">
                  <div className="truncate">{topic.name}</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="flex-1 h-1 rounded-full bg-editor-border overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${total > 0 ? (completed / total) * 100 : 0}%`,
                          backgroundColor: topic.color,
                        }}
                      />
                    </div>
                    <span className="text-[10px] text-text-muted">
                      {completed}/{total}
                    </span>
                  </div>
                </div>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Separator + Flashcards */}
      <div className="mx-3 my-1 border-t border-editor-border" />
      <NavLink
        to="/flashcards"
        className={({ isActive }) =>
          cn(
            'flex items-center gap-3 px-3 py-2 mx-1 rounded text-sm transition-colors',
            isActive
              ? 'bg-editor-active text-text-bright'
              : 'text-text-secondary hover:bg-editor-hover hover:text-text-primary',
          )
        }
      >
        <Layers size={16} className="flex-shrink-0" />
        {!collapsed && <span>Flashcards</span>}
      </NavLink>

      {/* User section */}
      {user && (
        <div className="px-3 py-2 border-t border-editor-border mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue text-[10px] font-bold flex-shrink-0">
              {user.email?.[0]?.toUpperCase() ?? '?'}
            </div>
            {!collapsed && (
              <>
                <span className="text-xs text-text-secondary truncate flex-1">{user.email}</span>
                <button onClick={signOut} className="text-text-muted hover:text-text-primary transition-colors flex-shrink-0">
                  <LogOut size={12} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </aside>
  );
}

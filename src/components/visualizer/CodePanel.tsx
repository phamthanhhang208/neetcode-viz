import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CodePanelProps {
  code: string;
  activeLine: number;
  isKeyMoment?: boolean;
}

type TokenType = 'keyword' | 'string' | 'number' | 'comment' | 'function' | 'property' | 'operator' | 'default';

const TOKEN_COLORS: Record<TokenType, string> = {
  keyword: '#569cd6',
  string: '#ce9178',
  number: '#b5cea8',
  comment: '#6a9955',
  function: '#dcdcaa',
  property: '#9cdcfe',
  operator: '#d4d4d4',
  default: '#d4d4d4',
};

const KEYWORDS = new Set([
  'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while',
  'do', 'switch', 'case', 'break', 'continue', 'new', 'this', 'class',
  'import', 'export', 'from', 'default', 'of', 'in', 'true', 'false', 'null',
  'undefined', 'typeof', 'instanceof', 'def', 'elif', 'None', 'True', 'False',
  'and', 'or', 'not', 'is', 'lambda', 'yield', 'async', 'await', 'try',
  'catch', 'finally', 'throw', 'extends', 'implements', 'interface', 'type',
  'enum', 'abstract', 'static', 'private', 'public', 'protected', 'readonly',
  'range', 'len', 'print', 'self', 'pass', 'with', 'as', 'except', 'raise',
]);

function tokenize(line: string): { text: string; color: string }[] {
  const tokens: { text: string; color: string }[] = [];
  let i = 0;

  while (i < line.length) {
    // Comments
    if (line[i] === '/' && line[i + 1] === '/') {
      tokens.push({ text: line.slice(i), color: TOKEN_COLORS.comment });
      break;
    }
    if (line[i] === '#') {
      tokens.push({ text: line.slice(i), color: TOKEN_COLORS.comment });
      break;
    }

    // Strings
    if (line[i] === '"' || line[i] === "'" || line[i] === '`') {
      const quote = line[i];
      let j = i + 1;
      while (j < line.length && line[j] !== quote) {
        if (line[j] === '\\') j++;
        j++;
      }
      tokens.push({ text: line.slice(i, j + 1), color: TOKEN_COLORS.string });
      i = j + 1;
      continue;
    }

    // Numbers
    if (/\d/.test(line[i]) && (i === 0 || /[\s,(\[{=<>!+\-*/:;]/.test(line[i - 1]))) {
      let j = i;
      while (j < line.length && /[\d.]/.test(line[j])) j++;
      tokens.push({ text: line.slice(i, j), color: TOKEN_COLORS.number });
      i = j;
      continue;
    }

    // Words (keywords, functions, properties)
    if (/[a-zA-Z_$]/.test(line[i])) {
      let j = i;
      while (j < line.length && /[a-zA-Z0-9_$]/.test(line[j])) j++;
      const word = line.slice(i, j);

      if (KEYWORDS.has(word)) {
        tokens.push({ text: word, color: TOKEN_COLORS.keyword });
      } else if (j < line.length && line[j] === '(') {
        tokens.push({ text: word, color: TOKEN_COLORS.function });
      } else if (i > 0 && line[i - 1] === '.') {
        tokens.push({ text: word, color: TOKEN_COLORS.property });
      } else {
        tokens.push({ text: word, color: TOKEN_COLORS.property });
      }
      i = j;
      continue;
    }

    // Operators and other chars
    tokens.push({ text: line[i], color: TOKEN_COLORS.operator });
    i++;
  }

  return tokens;
}

export default function CodePanel({ code, activeLine, isKeyMoment }: CodePanelProps) {
  const activeRef = useRef<HTMLDivElement>(null);
  const lines = code.split('\n');

  useEffect(() => {
    activeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [activeLine]);

  return (
    <div className="h-full overflow-auto bg-editor-bg font-mono text-xs leading-6">
      {lines.map((line, i) => {
        const lineNum = i + 1;
        const isActive = lineNum === activeLine;

        return (
          <div
            key={i}
            ref={isActive ? activeRef : undefined}
            className={cn(
              'flex transition-all duration-200 border-l-2',
              isActive
                ? isKeyMoment
                  ? 'bg-accent-green/10 border-accent-green shadow-[inset_0_0_20px_rgba(106,153,85,0.1)]'
                  : 'bg-editor-line/40 border-accent-blue'
                : 'border-transparent',
            )}
          >
            <span className="w-10 text-right pr-3 text-text-muted select-none flex-shrink-0">
              {lineNum}
            </span>
            <code className="flex-1 pr-4 whitespace-pre">
              {tokenize(line).map((token, j) => (
                <span key={j} style={{ color: token.color }}>
                  {token.text}
                </span>
              ))}
            </code>
          </div>
        );
      })}
    </div>
  );
}

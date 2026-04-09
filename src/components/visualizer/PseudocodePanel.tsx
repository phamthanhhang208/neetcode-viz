import { useState } from 'react';
import { ChevronDown, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  code: string;
}

const PSEUDO_KEYWORDS = new Set(['IF', 'ELSE', 'FOR', 'WHILE', 'RETURN', 'SET', 'DO', 'END', 'THEN', 'EACH', 'IN', 'TO', 'AND', 'OR', 'NOT', 'CREATE', 'ADD', 'REMOVE', 'CHECK', 'INITIALIZE', 'LOOP', 'REPEAT', 'UNTIL', 'OUTPUT', 'INPUT']);

function highlightPseudo(line: string) {
  return line.split(/(\s+)/).map((word, i) => {
    const upper = word.toUpperCase();
    if (PSEUDO_KEYWORDS.has(upper)) {
      return <span key={i} className="text-accent-blue font-semibold">{word}</span>;
    }
    if (/^\d+$/.test(word)) {
      return <span key={i} className="text-accent-green">{word}</span>;
    }
    if (word.startsWith('"') || word.startsWith("'")) {
      return <span key={i} className="text-accent-orange">{word}</span>;
    }
    if (word.startsWith('//') || word.startsWith('#')) {
      return <span key={i} className="text-accent-green/70 italic">{word}</span>;
    }
    return <span key={i}>{word}</span>;
  });
}

function pythonToPseudo(code: string): string {
  return code
    .split('\n')
    .map(line => {
      let s = line;
      // Remove type annotations and Python-specific syntax
      s = s.replace(/^def (\w+)\(([^)]*)\):/, 'FUNCTION $1($2):');
      s = s.replace(/^(\s*)for (\w+) in range\((.+)\):/, '$1FOR $2 FROM 0 TO $3:');
      s = s.replace(/^(\s*)for (\w+), (\w+) in enumerate\((.+)\):/, '$1FOR EACH index $2, value $3 IN $4:');
      s = s.replace(/^(\s*)for (\w+) in (.+):/, '$1FOR EACH $2 IN $3:');
      s = s.replace(/^(\s*)while (.+):/, '$1WHILE $2:');
      s = s.replace(/^(\s*)if (.+):/, '$1IF $2:');
      s = s.replace(/^(\s*)elif (.+):/, '$1ELSE IF $2:');
      s = s.replace(/^(\s*)else:/, '$1ELSE:');
      s = s.replace(/^(\s*)return (.+)/, '$1RETURN $2');
      s = s.replace(/^(\s*)return$/, '$1RETURN');
      s = s.replace(/ not in /, ' NOT IN ');
      s = s.replace(/ in /, ' IN ');
      s = s.replace(/ and /, ' AND ');
      s = s.replace(/ or /, ' OR ');
      s = s.replace(/ not /, ' NOT ');
      s = s.replace(/(\w+) = \{\}/, 'CREATE empty hashmap $1');
      s = s.replace(/(\w+) = \[\]/, 'CREATE empty list $1');
      s = s.replace(/(\w+) = set\(\)/, 'CREATE empty set $1');
      s = s.replace(/(\w+)\.append\((.+)\)/, 'ADD $2 to $1');
      s = s.replace(/(\w+)\.add\((.+)\)/, 'ADD $2 to $1');
      s = s.replace(/(\w+)\.pop\(\)/, 'REMOVE last from $1');
      s = s.replace(/len\((\w+)\)/, 'length of $1');
      s = s.replace(/max\((.+)\)/, 'maximum of $1');
      s = s.replace(/min\((.+)\)/, 'minimum of $1');
      s = s.replace(/#(.*)/, '// $1');
      return s;
    })
    .join('\n');
}

export default function PseudocodePanel({ code }: Props) {
  const [open, setOpen] = useState(false);
  const pseudo = pythonToPseudo(code);

  return (
    <div className="border-t border-editor-border bg-editor-sidebar">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-4 py-2 text-xs text-text-secondary hover:text-text-primary transition-colors"
      >
        <Code2 size={12} />
        <span>Pseudocode / Plain English</span>
        <ChevronDown size={12} className={cn('ml-auto transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="px-4 pb-3">
          <div className="bg-editor-bg rounded p-3 font-mono text-xs leading-5 overflow-auto max-h-[200px]">
            {pseudo.split('\n').map((line, i) => (
              <div key={i} className="text-text-primary whitespace-pre">
                {highlightPseudo(line)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

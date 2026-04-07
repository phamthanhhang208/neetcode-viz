import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';

interface Props {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className={cn('text-sm leading-relaxed', className)}
      components={{
        h1: ({ children }) => <h1 className="text-lg font-bold text-text-bright mb-2">{children}</h1>,
        h2: ({ children }) => <h2 className="text-base font-semibold text-text-bright mb-2">{children}</h2>,
        h3: ({ children }) => <h3 className="text-sm font-semibold text-text-bright mb-1">{children}</h3>,
        p: ({ children }) => <p className="text-text-primary mb-2 last:mb-0">{children}</p>,
        strong: ({ children }) => <strong className="text-text-bright font-semibold">{children}</strong>,
        em: ({ children }) => <em className="text-accent-yellow">{children}</em>,
        code: ({ children, className: codeClass }) => {
          const isBlock = codeClass?.includes('language-');
          if (isBlock) {
            return (
              <code className="block bg-editor-bg rounded p-3 my-2 text-xs font-mono text-text-primary overflow-x-auto whitespace-pre">
                {children}
              </code>
            );
          }
          return (
            <code className="bg-editor-bg rounded px-1.5 py-0.5 text-xs font-mono text-accent-light-blue">
              {children}
            </code>
          );
        },
        pre: ({ children }) => <pre className="my-2">{children}</pre>,
        ul: ({ children }) => <ul className="list-disc list-inside space-y-0.5 mb-2 text-text-primary">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal list-inside space-y-0.5 mb-2 text-text-primary">{children}</ol>,
        li: ({ children }) => <li className="text-text-primary">{children}</li>,
        table: ({ children }) => (
          <div className="overflow-x-auto my-2">
            <table className="border-collapse text-xs w-full">{children}</table>
          </div>
        ),
        thead: ({ children }) => <thead className="bg-editor-bg">{children}</thead>,
        th: ({ children }) => <th className="border border-editor-border px-2 py-1 text-left text-text-bright font-medium">{children}</th>,
        td: ({ children }) => <td className="border border-editor-border px-2 py-1 text-text-primary">{children}</td>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 border-accent-blue pl-3 my-2 text-text-secondary">{children}</blockquote>
        ),
        hr: () => <hr className="border-editor-border my-3" />,
        a: ({ href, children }) => (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">{children}</a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

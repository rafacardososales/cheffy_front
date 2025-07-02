import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import clsx from 'clsx';

type SafeMarkDownProps = {
  markdown: string;
};

export function SafeMarkDown({ markdown }: SafeMarkDownProps) {
  return (
    <div
      className={clsx(
        'prose prose-slate',
        ' w-full max-w-none',
        ' overflow-hidden',
        ' prose-a:no-underline',
        ' prose-a:transition',
        ' prose-a:text-blue-500',
        ' prose-a:hover:text-blue-700',
        'prose-img:mx-auto',
        'md:prose-lg',
      )}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

import * as React from 'react';
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown';

const Markdown: React.SFC<ReactMarkdownProps> = (props) => (
  <ReactMarkdown escapeHtml={false} {...props} />
);

export { Markdown };

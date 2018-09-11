import * as React from 'react';
import unified from 'unified';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehype2React from 'rehype-react';

interface RemarkReactComponentsMapping {
  [tagType: string]: React.ComponentType;
}

const renderMarkdownToReactComponent = (
  components?: RemarkReactComponentsMapping,
) => (content: string) =>
  unified()
    .use(remarkParse)
    .use(remark2rehype, { allowDangerousHTML: true })
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(rehype2React, { createElement: React.createElement, components })
    .processSync(content).contents;

export { renderMarkdownToReactComponent };

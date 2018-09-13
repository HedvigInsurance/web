import React from 'react';
import { Provider } from 'constate';

import { CSSInjector } from 'src/cms/css-injector';
import { BlogPostTemplate } from 'src/templates/blog-post';

const BlogPostPreview = ({ entry }) => (
  <CSSInjector>
    <Provider initialState={{}}>
      <BlogPostTemplate
        title={entry.getIn('data', 'title')}
        date={entry.getIn('data', 'date')}
        author={entry.getIn('data', 'author')}
        content={entry.getIn('data', 'content')}
        topImage={entry.getIn('data', 'topImage')}
        topImageColor={entry.getIn('data', 'topImageColor')}
        tags={entry.getIn('data', 'tags').toJS()}
        cta={entry.getIn('data', 'cta').toJS()}
      />
    </Provider>
  </CSSInjector>
);

export default BlogPostPreview;

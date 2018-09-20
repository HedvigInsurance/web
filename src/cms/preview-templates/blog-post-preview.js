import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'constate'

import { CSSInjector } from 'src/cms/css-injector'
import { BlogPostTemplate } from 'src/templates/blog-post'
import { StaticRouter } from 'react-router-dom'

const BlogPostPreview = ({ entry }) => {
  const tags = entry.getIn(['data', 'tags'])
  const cta = entry.getIn(['data', 'cta'])
  return (
    <CSSInjector>
      <Provider initialState={{}}>
        <StaticRouter context={{ path: '/blog/fake-post' }}>
          <BlogPostTemplate
            title={entry.getIn(['data', 'title'])}
            date={entry.getIn(['data', 'date'])}
            author={entry.getIn(['data', 'author'])}
            content={entry.getIn(['data', 'content'])}
            topImage={entry.getIn(['data', 'topImage'])}
            tags={tags && tags.toJS ? tags.toJS() : tags}
            cta={cta && cta.toJS()}
          />
        </StaticRouter>
      </Provider>
    </CSSInjector>
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
}

export default BlogPostPreview

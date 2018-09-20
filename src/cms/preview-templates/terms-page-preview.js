import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'constate'
import { TermsTemplate } from 'src/templates/terms-page'

const TermsPagePreview = ({ entry }) => (
  <Provider initialState={{}}>
    <TermsTemplate
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      sections={entry.getIn(['data', 'sections']).toJS()}
    />
  </Provider>
)

TermsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
}

export default TermsPagePreview

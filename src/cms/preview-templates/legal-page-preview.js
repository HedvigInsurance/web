import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'constate'
import { LegalTemplate } from 'src/templates/legal-page'

const LegalPagePreview = ({ entry }) => (
  <Provider initialState={{}}>
    <LegalTemplate
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      sections={entry.getIn(['data', 'sections']).toJS()}
    />
  </Provider>
)

LegalPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
}

export default LegalPagePreview

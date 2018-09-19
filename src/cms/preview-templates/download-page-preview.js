import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'constate'
import { DownloadTemplate } from 'src/templates/download-page'

const DownloadPagePreview = ({ entry }) => (
  <Provider initialState={{}}>
    <DownloadTemplate
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      phoneNumberPlaceholder={entry.getIn(['data', 'phone_number_placeholder'])}
      ctaText={entry.getIn(['data', 'cta_text'])}
      successText={entry.getIn(['data', 'success_text'])}
      errorText={entry.getIn(['data', 'error_text'])}
    />
  </Provider>
)

DownloadPagePreview.propTypes = {
  entry: PropTypes.shape({ getIn: PropTypes.func }).isRequired,
}

export default DownloadPagePreview

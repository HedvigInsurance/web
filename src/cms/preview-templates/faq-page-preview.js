import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'constate'
import { FAQTemplate } from 'src/templates/faq-page'

const FAQPagePreview = ({ entry }) => (
  <Provider initialState={{}}>
    <FAQTemplate
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      questions={entry.getIn(['data', 'questions']).toJS()}
    />
  </Provider>
)

FAQPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
}

export default FAQPagePreview

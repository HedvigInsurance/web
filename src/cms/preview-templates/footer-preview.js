import React from 'react'
import PropTypes from 'prop-types'
import Footer from 'src/components/Footer'

const FooterPreview = ({ entry }) => (
  <React.Fragment>
    <Footer
      data={{
        se: entry.getIn(['data', 'se']).toJS(),
        en: entry.getIn(['data', 'en']).toJS(),
      }}
      langKey="se"
    />
    <Footer
      data={{
        se: entry.getIn(['data', 'se']).toJS(),
        en: entry.getIn(['data', 'en']).toJS(),
      }}
      langKey="en"
    />
  </React.Fragment>
)

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func.isRequired,
  }).isRequired,
}

export default FooterPreview

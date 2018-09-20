import React from 'react'
import PropTypes from 'prop-types'
import { LottieLoader } from 'src/components/LottieLoader'

const claimOnPhoneAnimation = require('assets/animations/three-explainers/claim-on-your-phone.json')

const claimOnPhoneOptions = {
  loop: true,
  autoplay: false,
  renderer: 'svg',
  animationData: claimOnPhoneAnimation,
  rendererSettings: {
    progressiveLoad: true,
    preserveAspectRatio: 'xMaxYMin meet',
  },
}

const ClaimOnPhone = React.forwardRef(({ sideLength }, ref) => (
  <LottieLoader
    ref={ref}
    options={claimOnPhoneOptions}
    width={sideLength}
    height={sideLength}
  />
))

ClaimOnPhone.propTypes = {
  ref: PropTypes.func.isRequired,
  sideLength: PropTypes.number.isRequired,
}

export default ClaimOnPhone

import React from "react"
import PropTypes from "prop-types"
import "./hero.css"

const Hero = ({imageUrl, alt}) => (
  <div
    role="img"
    className="Hero"
    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`}}
    aria-label={alt}
  />
)

Hero.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Hero

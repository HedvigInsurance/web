import React from 'react'
import { Portal } from 'react-portal'
import PropTypes from 'prop-types'

export const Modal = ({ children }) => <Portal>{children}</Portal>

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

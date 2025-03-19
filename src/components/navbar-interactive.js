import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './navbar-interactive.css'

const NavbarInteractive = (props) => {
  return (
    <div className={`navbar-interactive-container1 ${props.rootClassName} `}>
      <header
        data-thq="thq-navbar"
        className="navbar-interactive-navbar-interactive"
      >
        <div className="navbar-interactive-container2"></div>
        <span className="navbar-interactive-text1 button">
          {props.text ?? (
            <Fragment>
              <span className="navbar-interactive-text3">Servicii</span>
            </Fragment>
          )}
        </span>
        <span className="navbar-interactive-text2 button">
          {props.text1 ?? (
            <Fragment>
              <span className="navbar-interactive-text4">Contact</span>
            </Fragment>
          )}
        </span>
      </header>
    </div>
  )
}

NavbarInteractive.defaultProps = {
  text: undefined,
  rootClassName: '',
  text1: undefined,
}

NavbarInteractive.propTypes = {
  text: PropTypes.element,
  rootClassName: PropTypes.string,
  text1: PropTypes.element,
}

export default NavbarInteractive

import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar8.css'

const Navbar8 = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  return (
    <header className={`navbar8-container1 ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive1">
        <Link to="/" className="navbar8-navlink1">
          <h1 className="navbar8-link">
            {props.link ?? (
              <Fragment>
                <span className="navbar8-text3">EscapePlan</span>
              </Fragment>
            )}
          </h1>
        </Link>
      </header>
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive2">
        <div className="navbar8-container2"></div>
        <Link to="/servici" className="navbar8-navlink2 button">
          {props.text ?? (
            <Fragment>
              <span className="navbar8-text1">Servicii</span>
            </Fragment>
          )}
        </Link>
        <Link to="/contact" className="navbar8-navlink3 button">
          {props.text1 ?? (
            <Fragment>
              <span className="navbar8-text2">Contact</span>
            </Fragment>
          )}
        </Link>
      </header>
    </header>
  )
}

Navbar8.defaultProps = {
  text: undefined,
  text1: undefined,
  rootClassName: '',
  link: undefined,
}

Navbar8.propTypes = {
  text: PropTypes.element,
  text1: PropTypes.element,
  rootClassName: PropTypes.string,
  link: PropTypes.element,
}

export default Navbar8

import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-max-width thq-section-padding">
        <div className="hero17-content">
          <h1 className="hero17-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text2">
                  Alege destinatia potritvita pentru tine
                </span>
              </Fragment>
            )}
          </h1>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  heading1: undefined,
}

Hero17.propTypes = {
  heading1: PropTypes.element,
}

export default Hero17

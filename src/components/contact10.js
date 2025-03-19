import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div
      className={`contact10-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact10-container2"></div>
      <div className="contact10-container3">
        <p className="contact10-text1 thq-body-large">
          {props.location2Description1 ?? (
            <Fragment>
              <span className="contact10-text3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          )}
        </p>
        <h3 className="contact10-text2 thq-heading-3">
          {props.location21 ?? (
            <Fragment>
              <span className="contact10-text4">Cluj - Napoca</span>
            </Fragment>
          )}
        </h3>
      </div>
      <div className="contact10-container4"></div>
    </div>
  )
}

Contact10.defaultProps = {
  location2Description1: undefined,
  location21: undefined,
  rootClassName: '',
}

Contact10.propTypes = {
  location2Description1: PropTypes.element,
  location21: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Contact10

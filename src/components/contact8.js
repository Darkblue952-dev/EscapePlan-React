import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact8.css'

const Contact8 = (props) => {
  return (
    <div
      className={`contact8-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact8-max-width thq-section-max-width">
        <div className="contact8-content1 thq-flex-row">
          <div className="contact8-content2">
            <h2 className="contact8-text1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact8-text2">
                    Locația sediului nostru
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="contact8-content3 thq-flex-row">
          <div className="contact8-container2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57427.6718025441!2d26.221890552481387!3d47.67127039935739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734fc2c901e307d%3A0x805d8c8e5187360a!2sUniversitatea%20%E2%80%9E%C8%98tefan%20cel%20Mare%E2%80%9D%20din%20Suceava!5e0!3m2!1sro!2sro!4v1742044497219!5m2!1sro!2sro"
              title="Map"
              className="contact8-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact8.defaultProps = {
  rootClassName: '',
  heading1: undefined,
}

Contact8.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
}

export default Contact8

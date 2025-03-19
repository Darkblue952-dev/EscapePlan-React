import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form5.css'

const ContactForm5 = (props) => {
  return (
    <div
      className={`contact-form5-contact1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-flex-column thq-section-max-width">
        <div className="contact-form5-section-title thq-flex-column">
          <div className="contact-form5-content">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact-form5-text2">Contactați-ne</span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <form
          id="myform"
          method="get"
          className="contact-form5-form thq-flex-column"
        >
          <div className="contact-form5-container1">
            <div className="contact-form5-input1">
              <input
                type="text"
                id="nume"
                required
                placeholder="Nume"
                className="contact-form5-text-input1 thq-input"
              />
            </div>
            <div className="contact-form5-input2">
              <input
                type="text"
                id="prenume"
                required
                placeholder="Prenume"
                className="contact-form5-text-input2 thq-input"
              />
            </div>
          </div>
          <div className="contact-form5-container2">
            <div className="contact-form5-input3">
              <input
                type="email"
                id="email"
                required
                placeholder="Email"
                className="contact-form5-text-input3 thq-input"
              />
            </div>
            <div className="contact-form5-input4">
              <input
                type="tel"
                id="numar"
                required
                placeholder="Numar"
                className="contact-form5-text-input4 thq-input"
              />
            </div>
          </div>
          <div className="contact-form5-container3">
            <textarea
              id="descriere"
              rows="3"
              placeholder="Descriere"
              className="thq-input contact-form5-textarea"
            ></textarea>
          </div>
          <button
            id="submitbutton"
            type="reset"
            formnovalidate="false"
            className="contact-form5-button thq-button-filled"
          >
            <span className="contact-form5-action1 thq-body-small">Submit</span>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm5.defaultProps = {
  heading1: undefined,
  rootClassName: '',
}

ContactForm5.propTypes = {
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default ContactForm5

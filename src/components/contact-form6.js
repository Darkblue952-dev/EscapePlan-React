import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form6.css'

const ContactForm6 = (props) => {
  return (
    <div className="contact-form6-contact1 thq-section-padding">
      <div className="thq-flex-row thq-section-max-width contact-form6-max-width">
        <div className="contact-form6-section-title thq-flex-column">
          <span className="thq-body-small">
            {props.content2 ?? (
              <Fragment>
                <span className="contact-form6-text24">
                  Get in touch with us today!
                </span>
              </Fragment>
            )}
          </span>
          <div className="contact-form6-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact-form6-text23">Contact us</span>
                </Fragment>
              )}
            </h2>
            <span className="thq-body-small contact-form6-text12">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact-form6-text21">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="contact-form6-content2">
            <div className="contact-form6-row1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <span className="thq-body-small">
                {props.email ?? (
                  <Fragment>
                    <span className="contact-form6-text20">Your Email</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="contact-form6-row2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <span className="thq-body-small">
                {props.phone ?? (
                  <Fragment>
                    <span className="contact-form6-text22">
                      +1 (555) 000-0000
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="contact-form6-row3">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <span className="thq-body-small">
                {props.address ?? (
                  <Fragment>
                    <span className="contact-form6-text25">
                      789 Test St, Bucharest
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <form className="contact-form6-form thq-flex-column">
          <div className="contact-form6-container1">
            <div className="contact-form6-input1">
              <label
                htmlFor="contact-form-6-first-name"
                className="thq-body-small"
              >
                First name
              </label>
              <input
                type="text"
                id="contact-form-6-first-name"
                placeholder="First Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form6-input2">
              <label
                htmlFor="contact-form-6-last-name"
                className="thq-body-small"
              >
                Last name
              </label>
              <input
                type="text"
                id="contact-form-6-last-name"
                placeholder="Last Name"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form6-container2">
            <div className="contact-form6-input3">
              <label htmlFor="contact-form-6-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-6-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="contact-form6-input4">
              <label htmlFor="contact-form-6-phone" className="thq-body-small">
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-form-6-phone"
                placeholder="Phone Number"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form6-container3">
            <div className="contact-form6-input5">
              <label
                htmlFor="contact-form-6-options"
                className="thq-body-small"
              >
                Choose one topic
              </label>
              <select
                id="contact-form-6-options"
                placeholder="Select one"
                className="thq-select"
              >
                <option value="Option 1">Option 1</option>
                <option value="Option 1">Customer service</option>
                <option value="Option 2">Finance</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Feature request</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="contact-form6-container4">
            <div className="contact-form6-input6">
              <label
                htmlFor="contact-form-6-message"
                className="thq-body-small"
              >
                Message
              </label>
              <textarea
                id="contact-form-6-message"
                rows="3"
                placeholder="Enter your message"
                className="thq-input"
              ></textarea>
            </div>
          </div>
          <div className="contact-form6-checkbox1">
            <input
              type="checkbox"
              id="contact-form-6-check"
              checked="true"
              required="true"
              className="thq-checkbox"
            />
            <label htmlFor="contact-form-6-check" className="thq-body-small">
              I accept the Terms
            </label>
          </div>
          <button
            type="submit"
            className="contact-form6-button thq-button-filled"
          >
            <span className="thq-body-small">
              {props.action ?? (
                <Fragment>
                  <span className="contact-form6-text26">Submit</span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm6.defaultProps = {
  email: undefined,
  content1: undefined,
  phone: undefined,
  heading1: undefined,
  content2: undefined,
  address: undefined,
  action: undefined,
}

ContactForm6.propTypes = {
  email: PropTypes.element,
  content1: PropTypes.element,
  phone: PropTypes.element,
  heading1: PropTypes.element,
  content2: PropTypes.element,
  address: PropTypes.element,
  action: PropTypes.element,
}

export default ContactForm6

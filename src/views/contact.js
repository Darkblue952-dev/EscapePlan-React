import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Contact8 from '../components/contact8'
import ContactForm5 from '../components/contact-form5'
import Footer3 from '../components/footer3'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - EscapePlan</title>
        <meta property="og:title" content="Contact - EscapePlan" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar8
        link={
          <Fragment>
            <span className="contact-text10">EscapePlan</span>
          </Fragment>
        }
        text={
          <Fragment>
            <span className="contact-text11">Servicii</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="contact-text12">Contact</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name1"
      ></Navbar8>
      <Contact8
        heading1={
          <Fragment>
            <span className="contact-text13">Locația sediului nostru</span>
          </Fragment>
        }
        rootClassName="contact8root-class-name"
      ></Contact8>
      <ContactForm5
        heading1={
          <Fragment>
            <span className="contact-text14">
              <span className="contact-text15">Contactaţi-ne</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        rootClassName="contact-form5root-class-name"
      ></ContactForm5>
      <Footer3
        heading={
          <Fragment>
            <span className="contact-text17">Date contact:</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text18">Str. Universităţii nr. 13</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="contact-text19">Telefon:0751288856</span>
          </Fragment>
        }
        rootClassName="footer3root-class-name3"
      ></Footer3>
    </div>
  )
}

export default Contact

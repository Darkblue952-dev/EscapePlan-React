import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Footer3 from '../components/footer3'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>EscapePlan</title>
        <meta property="og:title" content="EscapePlan" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive1">
        <h1 className="home-link1">Serviciile si ofertele oferite</h1>
      </header>
      <header data-thq="thq-navbar" className="home-navbar-interactive2">
        <Link to="/servici" className="home-navlink1">
          <h1 className="home-text1 button">
            Vezi vacanta potrivita pentru tine
          </h1>
        </Link>
      </header>
      <img
        alt="image"
        src="/external/5734b331-ae52-4262-b327-50dddd638e6c-1500h.jpeg"
        className="home-image"
      />
      <Footer3
        heading={
          <Fragment>
            <span className="home-text2">Date contact:</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text3">Str. Universităţii nr. 13</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="home-text4">Telefon:0751288856</span>
          </Fragment>
        }
        rootClassName="footer3root-class-name"
      ></Footer3>
      <header data-thq="thq-navbar" className="home-navbar-interactive3">
        <Link to="/" className="home-navlink2">
          <h1 className="home-link2">EscapePlan</h1>
        </Link>
      </header>
      <header data-thq="thq-navbar" className="home-navbar-interactive4">
        <div className="home-container2"></div>
        <Link to="/servici" className="home-navlink3 button">
          Servicii
        </Link>
        <Link to="/contact" className="home-navlink4 button">
          Contact
        </Link>
      </header>
    </div>
  )
}

export default Home

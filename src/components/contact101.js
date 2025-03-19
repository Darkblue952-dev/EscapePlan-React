import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './contact101.css'

const Contact101 = (props) => {
  return (
    <div className="contact101-container10 thq-section-padding">
      <div className="contact101-max-width1 thq-section-max-width">
        <div className="contact101-content1 thq-flex-row">
          <div className="contact101-container11">
            <img
              alt={props.location1ImageAlt1}
              src="/fotos%20de%20dubai_%2030%20imagens%20que%20mostram%20a%20modernidade%20dessa%20cidade-1400w.jpg"
              className="contact101-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact101-text10 thq-heading-3">
              {props.location11 ?? (
                <Fragment>
                  <span className="contact101-text23">
                    Dubai – Viitorul Este Acum 🌆
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description1 ?? (
                <Fragment>
                  <span className="contact101-text32">
                    Experimentează orizontul futurist al Dubaiului, unde
                    zgârie-nori impozanți, shopping-ul de lux și distracția se
                    întâlnesc cu cultura arabă. De la impresionantul Burj
                    Khalifa la magnificul Dubai Mall și peisajele vaste ale
                    deșertului, Dubaiul oferă atât opulență, cât și aventură în
                    mod egal. Descoperă un oraș aflat într-o continuă evoluție,
                    care împinge limitele a ceea ce este posibil în lux și
                    inovație.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact101-container12">
              <Link
                to="/contact"
                className="contact101-navlink1 thq-button-flat thq-body-small"
              >
                Get directions
              </Link>
            </div>
          </div>
          <div className="contact101-container13">
            <img
              alt={props.location2ImageAlt1}
              src="/experience%20the%20magic%20of%20santorini-1400w.jpg"
              className="contact101-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact101-text12 thq-heading-3">
              {props.location21 ?? (
                <Fragment>
                  <span className="contact101-text29">
                    Santorini – Trăiește Magia Greciei🌊
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description1 ?? (
                <Fragment>
                  <span className="contact101-text26">
                    Descoperă farmecul atemporal al Santorini, o insulă unde
                    peisajele impresionante, casele albe cu acoperișuri albastre
                    și apusurile de soare uimitoare se întâlnesc cu tradiția
                    grecească. De la plajele cu nisip negru și ape cristaline,
                    la satele pitorești cu străduțe înguste, Santorini oferă
                    atât relaxare, cât și explorare. Vizitează Oia, gustă vinuri
                    locale și savurează preparate tradiționale în restaurante cu
                    vederi spectaculoase. 
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact101-container14">
              <Link
                to="/contact"
                className="contact101-navlink2 thq-button-flat thq-body-small"
              >
                Get directions
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="contact101-max-width2 thq-section-max-width">
        <div className="contact101-content2 thq-flex-row">
          <div className="contact101-container15">
            <img
              alt={props.location1ImageAlt12}
              src="/phi%20phi%20islands%20%C3%A2%C2%80%C2%93the%20paradise%20found_%20%C3%B0%C2%9F%C2%8F%C2%9D%C3%AF%C2%B8%C2%8F%C3%A2%C2%98%C2%80%C3%AF%C2%B8%C2%8F%20time%20to%C3%A2%C2%80%C2%A6-1400w.jpg"
              className="contact101-image3 thq-img-ratio-16-9"
            />
            <h3 className="contact101-text14 thq-heading-3">
              {props.location112 ?? (
                <Fragment>
                  <span className="contact101-text31">
                    Insulele Phi Phi – Paradisul Descoperit 🏝️
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description12 ?? (
                <Fragment>
                  <span className="contact101-text24">
                    Descoperă frumusețea nepătrunsă a Insulelor Phi Phi, un
                    paradis tropical care promite ape cristaline, stânci
                    impresionante și plaje de nisip auriu. Indiferent dacă îți
                    dorești să te relaxezi pe malul mării turcoaz, să explorezi
                    peșteri ascunse sau să te bucuri de viața de noapte
                    vibrantă, Phi Phi oferă o vacanță de neuitat pentru fiecare
                    călător. Pornește într-o excursie cu barca, înconjurat de
                    stânci impozante și natură nealterată.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact101-container16">
              <Link
                to="/contact"
                className="contact101-navlink3 thq-button-flat thq-body-small"
              >
                Get directions
              </Link>
            </div>
          </div>
          <div className="contact101-container17">
            <img
              alt={props.location2ImageAlt12}
              src="/su%C3%A3%C2%AD%C3%A3%C2%A7a-1400w.jpg"
              className="contact101-image4 thq-img-ratio-16-9"
            />
            <h3 className="contact101-text16 thq-heading-3">
              {props.location212 ?? (
                <Fragment>
                  <span className="contact101-text33">
                    Elveția – Un Peisaj Ca Niciunul Altul 🏔️
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description12 ?? (
                <Fragment>
                  <span className="contact101-text28">
                    Evadează în Elveția, unde vârfuri alpine uimitoare se
                    întâlnesc cu văi verzi și pline de viață. Indiferent dacă
                    ești un iubitor de adrenalină, bucurându-te de schi pe
                    munții acoperiți cu zăpadă, sau un iubitor de natură care
                    explorează sate pitorești, Elveția oferă destinația perfectă
                    pentru orice tip de aventurier. Îmbrățișează liniștea
                    acestei minuni elvețiene, unde fiecare colț descoperă
                    frumusețea peisajului și o moștenire culturală deosebită.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact101-container18">
              <Link
                to="/contact"
                className="contact101-navlink4 thq-button-flat thq-body-small"
              >
                Get directions
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="contact101-max-width3 thq-section-max-width">
        <div className="contact101-content3 thq-flex-row">
          <div className="contact101-container19">
            <img
              alt={props.location1ImageAlt13}
              src="/taste%20paris_%20croissants%2C%20pastries%2C%20cheeses%2C%20and%20fine%20dining-1400w.jpg"
              className="contact101-image5 thq-img-ratio-16-9"
            />
            <h3 className="contact101-text18 thq-heading-3">
              {props.location113 ?? (
                <Fragment>
                  <span className="contact101-text27">
                    Savurează Parisul - Croissante, Patiserii, Brânzeturi și
                    Restaurante  🥐
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description13 ?? (
                <Fragment>
                  <span className="contact101-text30">
                    Îndrăgostește-te din nou de Paris cu patiseriile sale
                    irezistibile, cultura cafelei deosebite și gastronomia de
                    renume mondial. Savurează croissante proaspete pe malul
                    Senei sau bucură-te de o masă gourmet într-o cafenea
                    fermecătoare cu Turnul Eiffel în fundal. Parisul este un
                    oraș unde mâncarea și cultura se întâlnesc în perfectă
                    armonie.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact101-container20">
              <Link
                to="/contact"
                className="contact101-navlink5 thq-button-flat thq-body-small"
              >
                Get directions
              </Link>
            </div>
          </div>
          <div className="contact101-container21">
            <img
              alt={props.location2ImageAlt13}
              src="/the%20coliseum%2C%20rome-1400w.jpg"
              className="contact101-image6 thq-img-ratio-16-9"
            />
            <h3 className="contact101-text20 thq-heading-3">
              {props.location213 ?? (
                <Fragment>
                  <span className="contact101-text25">
                    Colosseumul - O Călătorie în Inima Romei Antice 🏛️
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description13 ?? (
                <Fragment>
                  <span className="contact101-text22">
                    Pășește în inima Romei antice cu o vizită la faimosul
                    Colosseum. Mergi pe urmele gladiatorilor și minunează-te de
                    realizările inginerești ale romanilor. Înconjurat de străzi
                    pietruite fermecătoare, ruine romane și istorie vibrantă,
                    Roma este un oraș unde istoria prinde viață. Lasă-te
                    transportat în trecut de frumusețea atemporală a
                    Colosseumului.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact101-container22">
              <Link
                to="/contact"
                className="contact101-navlink6 thq-button-flat thq-body-small"
              >
                Get directions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact101.defaultProps = {
  location2ImageAlt1: 'image2Alt',
  location2Description13: undefined,
  location11: undefined,
  location1Description12: undefined,
  location213: undefined,
  location2Description1: undefined,
  location1ImageAlt12: 'image1Alt',
  location113: undefined,
  location2Description12: undefined,
  location21: undefined,
  location2ImageAlt12: 'image2Alt',
  location2ImageAlt13: 'image2Alt',
  location1Description13: undefined,
  location112: undefined,
  location1ImageAlt13: 'image1Alt',
  location1Description1: undefined,
  location1ImageAlt1: 'image1Alt',
  location212: undefined,
}

Contact101.propTypes = {
  location2ImageAlt1: PropTypes.string,
  location2Description13: PropTypes.element,
  location11: PropTypes.element,
  location1Description12: PropTypes.element,
  location213: PropTypes.element,
  location2Description1: PropTypes.element,
  location1ImageAlt12: PropTypes.string,
  location113: PropTypes.element,
  location2Description12: PropTypes.element,
  location21: PropTypes.element,
  location2ImageAlt12: PropTypes.string,
  location2ImageAlt13: PropTypes.string,
  location1Description13: PropTypes.element,
  location112: PropTypes.element,
  location1ImageAlt13: PropTypes.string,
  location1Description1: PropTypes.element,
  location1ImageAlt1: PropTypes.string,
  location212: PropTypes.element,
}

export default Contact101

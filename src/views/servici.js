import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Contact101 from '../components/contact101'
import Footer3 from '../components/footer3'
import './servici.css'

const Servici = (props) => {
  return (
    <div className="servici-container">
      <Helmet>
        <title>Servici - EscapePlan</title>
        <meta property="og:title" content="Servici - EscapePlan" />
      </Helmet>
      <Navbar8
        link={
          <Fragment>
            <span className="servici-text10">EscapePlan</span>
          </Fragment>
        }
        text={
          <Fragment>
            <span className="servici-text11">Servicii</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="servici-text12">Contact</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        heading1={
          <Fragment>
            <span className="servici-text13">
              Alege destinatia potritvita pentru tine
            </span>
          </Fragment>
        }
      ></Hero17>
      <Contact101
        location11={
          <Fragment>
            <span className="servici-text14">
              Dubai – Viitorul Este Acum 🌆
            </span>
          </Fragment>
        }
        location21={
          <Fragment>
            <span className="servici-text15">
              Santorini – Trăiește Magia Greciei🌊
            </span>
          </Fragment>
        }
        location112={
          <Fragment>
            <span className="servici-text16">
              Insulele Phi Phi – Paradisul Descoperit 🏝️
            </span>
          </Fragment>
        }
        location113={
          <Fragment>
            <span className="servici-text17">
              Savurează Parisul - Croissante, Patiserii, Brânzeturi și
              Restaurante  🥐
            </span>
          </Fragment>
        }
        location212={
          <Fragment>
            <span className="servici-text18">
              Elveția – Un Peisaj Ca Niciunul Altul 🏔️
            </span>
          </Fragment>
        }
        location213={
          <Fragment>
            <span className="servici-text19">
              Colosseumul - O Călătorie în Inima Romei Antice 🏛️
            </span>
          </Fragment>
        }
        location1ImageSrc="/fotos%20de%20dubai_%2030%20imagens%20que%20mostram%20a%20modernidade%20dessa%20cidade-600h.jpg"
        location1Description1={
          <Fragment>
            <span className="servici-text20">
              Experimentează orizontul futurist al Dubaiului, unde zgârie-nori
              impozanți, shopping-ul de lux și distracția se întâlnesc cu
              cultura arabă. De la impresionantul Burj Khalifa la magnificul
              Dubai Mall și peisajele vaste ale deșertului, Dubaiul oferă atât
              opulență, cât și aventură în mod egal. Descoperă un oraș aflat
              într-o continuă evoluție, care împinge limitele a ceea ce este
              posibil în lux și inovație.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        location2Description1={
          <Fragment>
            <span className="servici-text21">
              Descoperă farmecul atemporal al Santorini, o insulă unde peisajele
              impresionante, casele albe cu acoperișuri albastre și apusurile de
              soare uimitoare se întâlnesc cu tradiția grecească. De la plajele
              cu nisip negru și ape cristaline, la satele pitorești cu străduțe
              înguste, Santorini oferă atât relaxare, cât și explorare.
              Vizitează Oia, gustă vinuri locale și savurează preparate
              tradiționale în restaurante cu vederi spectaculoase. 
            </span>
          </Fragment>
        }
        location1Description12={
          <Fragment>
            <span className="servici-text22">
              Descoperă frumusețea nepătrunsă a Insulelor Phi Phi, un paradis
              tropical care promite ape cristaline, stânci impresionante și
              plaje de nisip auriu. Indiferent dacă îți dorești să te relaxezi
              pe malul mării turcoaz, să explorezi peșteri ascunse sau să te
              bucuri de viața de noapte vibrantă, Phi Phi oferă o vacanță de
              neuitat pentru fiecare călător. Pornește într-o excursie cu barca,
              înconjurat de stânci impozante și natură nealterată.
            </span>
          </Fragment>
        }
        location1Description13={
          <Fragment>
            <span className="servici-text23">
              Îndrăgostește-te din nou de Paris cu patiseriile sale
              irezistibile, cultura cafelei deosebite și gastronomia de renume
              mondial. Savurează croissante proaspete pe malul Senei sau
              bucură-te de o masă gourmet într-o cafenea fermecătoare cu Turnul
              Eiffel în fundal. Parisul este un oraș unde mâncarea și cultura se
              întâlnesc în perfectă armonie.
            </span>
          </Fragment>
        }
        location2Description12={
          <Fragment>
            <span className="servici-text24">
              Evadează în Elveția, unde vârfuri alpine uimitoare se întâlnesc cu
              văi verzi și pline de viață. Indiferent dacă ești un iubitor de
              adrenalină, bucurându-te de schi pe munții acoperiți cu zăpadă,
              sau un iubitor de natură care explorează sate pitorești, Elveția
              oferă destinația perfectă pentru orice tip de aventurier.
              Îmbrățișează liniștea acestei minuni elvețiene, unde fiecare colț
              descoperă frumusețea peisajului și o moștenire culturală
              deosebită.
            </span>
          </Fragment>
        }
        location2Description13={
          <Fragment>
            <span className="servici-text25">
              Pășește în inima Romei antice cu o vizită la faimosul Colosseum.
              Mergi pe urmele gladiatorilor și minunează-te de realizările
              inginerești ale romanilor. Înconjurat de străzi pietruite
              fermecătoare, ruine romane și istorie vibrantă, Roma este un oraș
              unde istoria prinde viață. Lasă-te transportat în trecut de
              frumusețea atemporală a Colosseumului.
            </span>
          </Fragment>
        }
      ></Contact101>
      <Footer3
        heading={
          <Fragment>
            <span className="servici-text26">Date contact:</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="servici-text27">Str. Universităţii nr. 13</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="servici-text28">Telefon:0751288856</span>
          </Fragment>
        }
        rootClassName="footer3root-class-name1"
      ></Footer3>
    </div>
  )
}

export default Servici

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import CompanyImg from "../images/company.png"
import Rep1Img from "../images/repertory/bernstein.jpg"
import Rep2Img from "../images/repertory/drop.jpg"
import Rep3Img from "../images/repertory/episodes.jpg"
import Rep4Img from "../images/repertory/exit.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="page-content">
      <div className="page-content-item gradient-white">
        <p>Founded in 2003 by Artistic Director Larry Keigwin and Associate Director Nicole Wolcott, KEIGWIN + COMPANY creates and presents Keigwin’s electrifying brand of contemporary dance.</p>
        <p>K+C reaches national and international audiences and invigorates diverse communities with a refreshing vision of dance that embodies a theatrical sensibility of wit, style, and heart.</p>
        <div className="clip"></div>
        <p>Community projects and education seek to physically engage audiences and aspiring dancers in movement and the choreographic process, and bring opportunities for individuals to become more invested in dance.</p>
        <div className="item-title-bottom"></div>
        <h2 className="item-title-bottom-text">About<br/>Us</h2>
      </div>
      <div className="page-content-item gradient-accent" style={{padding:'0'}}>
        <div className="item-title-top"></div>
        <div className="image-grid">
          <div></div>
          <div className="image-grid-item" style={{backgroundImage:'url(' + Rep1Img + ')'}}></div>
          <div className="image-grid-item" style={{backgroundImage:'url(' + Rep2Img + ')'}}></div>
          <div className="image-grid-item" style={{backgroundImage:'url(' + Rep3Img + ')'}}></div>
          <div className="image-grid-item" style={{backgroundImage:'url(' + Rep4Img + ')'}}></div>
        </div>
        <h2 className="item-title-top-text">Repertory</h2>
      </div>
    </div>
    <img src={CompanyImg} alt="Company" className="company"></img>
  </Layout>
)

export default IndexPage

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { gsap } from "gsap"

import Header from "./header"
import "../style/main.scss"
import BottomLeftCorner from "../images/bottom-left-corner.svg"
import TopRightCorner from "../images/top-right-corner.svg"
import LogoRoundImg from "../images/logo-round.png"
import Dancer1Img from "../images/dancers/kacie.png"
import Dancer2Img from "../images/dancers/brandon.jpg"
import Dancer3Img from "../images/dancers/gina.png"
import Dancer4Img from "../images/dancers/nicholas.jpg"
import Dancer5Img from "../images/dancers/rebecca.jpg"
import Dancer6Img from "../images/dancers/zack.jpg"
import DancerImg from "../images/dancer.jpg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  if (typeof document !== `undefined`) {
    setTimeout(() => {
      gsap.from(".dancer", {
        duration: 2,
        scale: 0.5, 
        opacity: 0, 
        delay: 0.5, 
        stagger: 0.2,
        ease: "elastic", 
        force3D: true
      });
      gsap.from(".site-title", {
        duration: 2, x: -300, ease: "bounce"
      });
      gsap.from(".page-content-item.gradient-white", {
        rotation: 10, duration: 2, ease: "elastic"
      });
      gsap.from(".page-content-item.gradient-accent", {
        height: 10, duration: 2, ease: "back.out(1.7)"
      });
      gsap.from(".site-logo", {
        rotate: -40, duration: 1.5, ease: "sine"
      });
      gsap.from(".nav-menu", {
        y: -40, duration: 2, 
        ease: "sine"
      });
      gsap.from(".nav-menu", {
        rotate: -40, duration: 2, ease: "sine"
      });
    }, 0)
  }
  return (
    <div className="site-container">
      <img src={DancerImg} className="dancer-illustration left" />
      <img src={DancerImg} className="dancer-illustration right" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container">
        <main className="container-content">
          <div className="dancers">
            <Link to="/" className="site-logo-link">
              <picture>
                <source srcSet={LogoRoundImg} />
                <img src={LogoRoundImg} alt='' className="site-logo" />
              </picture>
            </Link>
            <div className="dancer" style={{backgroundImage:'url(' + Dancer1Img + ')'}}></div>
            <div className="dancer" style={{backgroundImage:'url(' + Dancer2Img + ')'}}></div>
            <div className="dancer" style={{backgroundImage:'url(' + Dancer3Img + ')'}}></div>
            <div className="dancer" style={{backgroundImage:'url(' + Dancer4Img + ')'}}></div>
            <div className="dancer" style={{backgroundImage:'url(' + Dancer5Img + ')'}}></div>
            <div className="dancer" style={{backgroundImage:'url(' + Dancer6Img + ')'}}></div>
          </div>
          {children}
        </main>
        <img src={TopRightCorner} alt="KC" className="container-top-right"></img>
        <img src={BottomLeftCorner} alt="KC" className="container-bottom-left"></img>
      </div>
      <address className="address">129 East 70th Street, 4th Floor, New York, NY 10021</address>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Keigwin + Company. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const Header = ({ siteTitle }) => (
  <header className="header">
    <Link to="/">
      <h1 className="site-title">KEIGWIN <span className="plus">+</span> COMPANY</h1>
    </Link>
    <div className="nav-menu">
      <div className="nav-menu-toggle">
        <FontAwesomeIcon icon={faBars} className="nav-icon" />
      </div>
      <Link to="#"><FontAwesomeIcon icon={faTwitter} className="nav-icon social1" /></Link>
      <Link to="#"><FontAwesomeIcon icon={faInstagram} className="nav-icon social2" /></Link>
      <Link to="#"><FontAwesomeIcon icon={faFacebookF} className="nav-icon social3" /></Link>
      <Link to="#"><FontAwesomeIcon icon={faEnvelope} className="nav-icon social4" /></Link>
      <nav className="nav-menu-links">
        <Link to="#">Abc</Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

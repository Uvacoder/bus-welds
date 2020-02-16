import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteDescription }) => (
  <header>
    <div className="header-inner-wrap">
      <div className="header-primary">
        <h1>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
        <p style={{color: `white`}}>{siteDescription}</p>
      </div>
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

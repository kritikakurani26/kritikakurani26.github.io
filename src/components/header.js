import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { ImLinkedin, ImGithub } from "react-icons/im"
import { BsMedium } from "react-icons/bs"
import { IconType } from "react-icons/lib/cjs/iconBase"

import Text from "./text"
import {
  container,
  leftLinks,
  link,
  activeLink,
  rightLinks,
  iconlink,
} from "../styles/header.module.css"

const IconLink = ({ url, children }) => {
  return (
    <Link to={url} className={iconlink} activeClassName={activeLink}>
      {children}
    </Link>
  )
}

IconLink.propTypes = {
  url: PropTypes.string,
  children: IconType,
}

const Header = ({ siteTitle }) => {
  return (
    <div className={container}>
      <div className={leftLinks}>
        <Link to="/" className={link} activeClassName={activeLink}>
          <Text>About</Text>
        </Link>
      </div>

      <div className={rightLinks}>
        <IconLink url="https://www.linkedin.com/in/kritikakurani/">
          <ImLinkedin color="white" />
        </IconLink>
        <IconLink url="https://github.com/kritikakurani26">
          <ImGithub color="white" />
        </IconLink>
        <IconLink url="https://medium.com/@kritikakurani">
          <BsMedium color="white" />
        </IconLink>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { ImLinkedin, ImGithub } from "react-icons/im"
import { BsMedium } from "react-icons/bs"
import { IconType } from "react-icons/lib/cjs/iconBase"

import Text from "./text"
import * as styles from "../styles/header.module.scss"

const IconLink = ({ url, children }) => {
  return (
    <Link
      to={url}
      className={styles.iconlink}
      activeclassName={styles.activeLink}
    >
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
    <div className={styles.container}>
      <div className={styles.leftLinks}>
        <Link
          to="/"
          className={styles.link}
          activeclassName={styles.activeLink}
        >
          <Text>About</Text>
        </Link>
      </div>

      <div className={styles.rightLinks}>
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

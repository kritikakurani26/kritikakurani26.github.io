import * as React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import Text from "../components/text"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../styles/about.module.scss"

const AboutPage = () => (
  // Removed Layout for now. To be added later
  <div className={styles.rootGrid}>
    <div>
      <Text size="large" className={styles.introTextMain}>
        Hello there, I'm Kritika Kurani. Nice to meet you.
      </Text>
      <Text>
        Currently working as a fullstack software engineer at Meta Platforms
        Inc. in SF Bay Area, my focus area is external user features primarily
        in Facebook app. When I'm not working I love to read, paint, crochet and
        cook.
      </Text>
      <Text>
        Drop me an email or reach out to me, via my contact links above if you
        are interested in chatting.
      </Text>
    </div>
    <StaticImage
      src="../images/personal_pic.jpg"
      alt="Kritika's photo"
      className={styles.personalPic}
      imgClassName={styles.personalPicImg}
    />
  </div>
)

AboutPage.propTypes = {
  showHeader: PropTypes.bool,
}

export default AboutPage

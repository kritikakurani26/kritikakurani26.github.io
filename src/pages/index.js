import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Text from "../components/text"
import Timeline from "../components/timeline"
import * as styles from "../styles/index.module.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Kritika Kurani" />
    <div className={styles.textCenter}>
      <Text>Hi! I'm Kritika.</Text>
      <Text>A Software Engineer</Text>
    </div>
    <Timeline />
  </Layout>
)

export default IndexPage

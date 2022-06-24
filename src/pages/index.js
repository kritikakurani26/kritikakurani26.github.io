import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Text from "../components/text"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Kritika Kurani" />
    <div className={styles.textCenter}>
      <Text>Hi! I'm Kritika.</Text>
      <Text>A Software Engineer</Text>
    </div>
  </Layout>
)

export default IndexPage

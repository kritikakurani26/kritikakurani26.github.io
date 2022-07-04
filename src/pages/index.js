import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutPage from "./about"

const IndexPage = () => (
  <Layout>
    <Seo title="Kritika Kurani" />
    <AboutPage showHeader={false} />
  </Layout>
)

export default IndexPage

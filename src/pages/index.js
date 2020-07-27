import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../../src/styles/styles.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Bienvenido a la APP de EDUK Diseño</h1>
    <Link className={styles.link} to="/page-2/">Go to page 2</Link>
    <Link className={styles.link} to="/using-typescript/">Go to "Using TypeScript"</Link>
    <Link className={styles.link} to="/object/">Go to Object page</Link>
  </Layout>
)

export default IndexPage

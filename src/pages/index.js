import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundImage from 'gatsby-background-image'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundImage
      className="masthead"
      fluid={props.data.indexImage.childImageSharp.fluid}
    >
      <div className="black-overlay">
        <div className="content-box">
          <h1>Bienvenido a la aplicación de EDUK DISEÑO</h1>
          <h2>Seleccione una vitrina</h2>
        </div>
      </div>
    </BackgroundImage>
  </Layout>
)

export default IndexPage
export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "home.png"} ) {
      childImageSharp {
        fluid(maxWidth:100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

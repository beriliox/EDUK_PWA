import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundImage from 'gatsby-background-image'
import indexStyles from "./index.module.scss";

const IndexPage = () => { 

  const query = useStaticQuery(graphql`
    query {
      allNodeShowcase {
        edges {
          node {
            drupal_internal__nid
            title
          }
        }
      }
      
      indexImage: file(relativePath: { eq: "home.png"} ) {
        childImageSharp {
          fluid(maxWidth:1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage
            className="masthead"
            fluid={query.indexImage.childImageSharp.fluid}
      >
        <div className="black-overlay">
          <div className="content-box">
            <h1>Bienvenido a la aplicación de EDUK DISEÑO</h1>
            <h2>Seleccione una vitrina</h2>
            <ol className={indexStyles.showcases}>
              { query.allNodeShowcase.edges.map((edge) => {
                    return (
                        <li className={indexStyles.showcase}>
                            <Link to={`/showcase/${edge.node.drupal_internal__nid}`}>
                                <h2>{ edge.node.title }</h2>
                            </Link>
                        </li>
                    )
                }) }
            </ol>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}

export default IndexPage

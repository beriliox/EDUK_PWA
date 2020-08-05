import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundImage from "gatsby-background-image"
import indexStyles from "./index.module.scss"

//import { Provider } from "react-redux"
//import store from "../store"

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

      allNodeObject {
        edges {
          node {
            drupal_internal__nid
            title
          }
        }
      }

      indexImage: file(relativePath: { eq: "home.png" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    //<Provider store={store}>
    <Layout>
      <SEO title="Home" />
      <BackgroundImage
        className={indexStyles.masthead}
        fluid={query.indexImage.childImageSharp.fluid}
      >
        <div className={indexStyles.blackOverlay}>
          <div className={indexStyles.contentBox}>
            <h1>Bienvenido a la aplicación de EDUK DISEÑO</h1>
            <h2 className={indexStyles.subtitlesH2}>Seleccione una vitrina</h2>
            <ol className={indexStyles.showcases}>
              {query.allNodeShowcase.edges.map((edge, key) => {
                return (
                  <li className={indexStyles.showcase} key={key}>
                    <Link to={`/showcase/${edge.node.drupal_internal__nid}`}>
                      <h2>{edge.node.title}</h2>
                    </Link>
                  </li>
                )
              })}
            </ol>

            <h2 className={indexStyles.subtitlesH2}>Selecciona una cedula</h2>
            <ol className={indexStyles.showcases}>
              {query.allNodeObject.edges.map((edge, key) => {
                return (
                  <li className={indexStyles.showcase} key={key}>
                    <Link to={`/object/${edge.node.drupal_internal__nid}`}>
                      <h2>{edge.node.title}</h2>
                    </Link>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
    //</Provider>
  )
}

export default IndexPage

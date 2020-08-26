import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Provider } from "react-redux"
import store from "../store"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Vitrina from "../templates/vitrina"

import BackgroundImage from "gatsby-background-image"
import indexStyles from "./index.module.scss"

import { BrowserRouter as Router, Route } from "react-router-dom"

const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query {
      allNodeVitrina {
        edges {
          node {
            drupal_internal__nid
            title
          }
        }
      }

      indexImage: file(relativePath: { eq: "home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Provider store={store}>
      <Layout>
        <SEO title="Home" />
        <BackgroundImage
          className={indexStyles.masthead}
          fluid={query.indexImage.childImageSharp.fluid}
        >
          {
            <div className={indexStyles.blackOverlay}>
              <div className={indexStyles.contentBox}>
                <h1>Bienvenido a la aplicación de EDUK DISEÑO</h1>
                <h2 className={indexStyles.subtitlesH2}>
                  Seleccione una vitrina
                </h2>
                <ol className={indexStyles.vitrinas}>
                  {query.allNodeVitrina.edges.map((edge, key) => {
                    return (
                      <li className={indexStyles.vitrina} key={key}>
                        <Link to={`/vitrina/${edge.node.drupal_internal__nid}`}>
                          <h2>{edge.node.title}</h2>
                        </Link>
                        <Router>
                          <Route path={"/vitrina"} component={Vitrina} />
                        </Router>
                      </li>
                    )
                  })}
                </ol>
              </div>
            </div>
          }
        </BackgroundImage>
      </Layout>
    </Provider>
  )
}

export default IndexPage

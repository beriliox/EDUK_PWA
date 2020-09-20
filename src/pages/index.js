import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import indexStyles from "./index.module.scss"

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
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div id={`main-height`} className={indexStyles.Background}>
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
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        }
      </div>
    </Layout>
  )
}

export default IndexPage

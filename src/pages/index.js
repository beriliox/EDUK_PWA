import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import indexStyles from "./index.module.scss"
import Pagination from "react-pagination-list"

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

  const vitrinas = query.allNodeVitrina.edges

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

              <div className={indexStyles.vitrina}>
                <Pagination
                  className={indexStyles.vitrinas}
                  data={vitrinas}
                  pageSize={9}
                  renderItem={(item, key) => (
                    <Link
                      key={key}
                      to={`/vitrina/${item.node.drupal_internal__nid}`}
                    >
                      <h2>{item.node.title}</h2>
                    </Link>
                  )}
                />
              </div>
            </div>
          </div>
        }
      </div>
    </Layout>
  )
}

export default IndexPage

import React from "react"
import Layout from "../components/layout"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import vitrinaStyles from "./vitrina.module.scss"
import SEO from "../components/seo"
import Tablet from "../components/tablet/tablet"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
const Vitrina = () => {
  const query = useStaticQuery(
    graphql`
      query($drupal_internal__nid: Int) {
        nodeVitrina(drupal_internal__nid: { eq: $drupal_internal__nid }) {
          drupal_internal__nid
          title
          relationships {
            node__tablet {
              drupal_internal__nid
              title
              relationships {
                node__imagenes_vitrina {
                  title
                  relationships {
                    field_imagen_vitrina {
                      localFile {
                        publicURL
                      }
                    }
                    node__grupo {
                      field_coords
                      relationships {
                        node__objeto {
                          drupal_internal__nid
                          title
                          body {
                            value
                          }
                          field_material
                          field_codigo
                          field_sitio_arqueologico
                          field_comuna
                          field_provincia
                          relationships {
                            field_video {
                              localFile {
                                publicURL
                              }
                            }
                            field_3d {
                              localFile {
                                publicURL
                              }
                            }
                            field_imagen {
                              localFile {
                                publicURL
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const tablets = query.nodeVitrina.relationships.node__tablet
    ? query.nodeVitrina.relationships.node__tablet
    : []

  return (
    <Layout key={Math.round(Math.random())}>
      <SEO title="Vitrinas" />
      <div className={vitrinaStyles.Background}>
        {
          <div className={vitrinaStyles.blackOverlay}>
            <div className={vitrinaStyles.contentBox}>
              <h1>Bienvenido a la aplicación de EDUK DISEÑO</h1>
              <h2 className={vitrinaStyles.subtitlesH2}>
                Seleccione una tablet
              </h2>
              <ol className={vitrinaStyles.vitrinas}>
                {tablets.map((edge, key) => {
                  const vitrinas = edge.relationships.node__imagenes_vitrina
                    ? edge.relationships.node__imagenes_vitrina
                    : []

                  return (
                    <Router>
                      <li className={vitrinaStyles.vitrina} key={key}>
                        <Link to={`/tablet`}>
                          <h2>{edge.title}</h2>
                        </Link>
                      </li>
                      <Switch>
                        <Route>
                          <Tablet vitrinas={vitrinas} />
                        </Route>
                      </Switch>
                    </Router>
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

const mapStateToProps = state => ({
  object: state.app.obj,
  group: state.app.group,
})

export default connect(mapStateToProps, null)(Vitrina)

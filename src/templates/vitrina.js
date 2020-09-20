import React from "react"
import Layout from "../components/layout"
import { connect } from "react-redux"
import { Link, useStaticQuery, graphql } from "gatsby"
import vitrinaStyles from "./vitrina.module.scss"
import SEO from "../components/seo"
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
                  return (
                    <li className={vitrinaStyles.vitrina} key={key}>
                      <Link to={`/tablet/${edge.node.drupal_internal__nid}`}>
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

const mapStateToProps = state => ({
  object: state.app.obj,
  group: state.app.group,
})

export default connect(mapStateToProps, null)(Vitrina)

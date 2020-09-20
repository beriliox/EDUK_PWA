import React from "react"
import Layout from "../layout"
import { Link, useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import ObjectComponent from "../object/object"
import ObjectGroup from "../object/objectgroup"
import VitrinaCarousel from "../vitrina/vitrinacarousel"

const Tablet = ({ object, group, vitrinas }) => {
  const query = useStaticQuery(
    graphql`
      query($drupal_internal__nid: Int) {
        nodeTablet(drupal_internal__nid: { eq: $drupal_internal__nid }) {
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
    `
  )
  console.log(query)
  return false
}

const mapStateToProps = state => ({
  object: state.app.obj,
  group: state.app.group,
})

export default connect(mapStateToProps, null)(Tablet)

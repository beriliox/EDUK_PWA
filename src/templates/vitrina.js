import React, { useState } from "react"
import Layout from "../components/layout"
import { Carousel } from "react-bootstrap"
import { graphql } from "gatsby"
import ObjectComponent from "../components/object"
import vitrinaStyles from "./vitrina.module.scss"

const Vitrina = props => {
  const [object, setObject] = useState(false)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  const _showObject = obj => {
    setObject(obj)
    setShow(true)
    console.log(obj)
  }

  const _showCoords = e => {
    let x = e.nativeEvent.offsetX
    let y = e.nativeEvent.offsetY
    console.log(x, y)
  }

  const modalObjectProps = {
    show,
    handleClose,
    object,
  }

  return (
    <Layout key={Math.round(Math.random())}>
      <Carousel key={Math.round(Math.random())}>
        {props.data.nodeVitrina.relationships.node__imagenes_vitrina.map(
          (vitrina, key) => {
            return (
              <Carousel.Item key={key}>
                <div
                  width="800"
                  height="1280"
                  onClick={e => _showCoords(e)}
                  style={{
                    backgroundImage: `url(${vitrina.relationships.field_imagen_vitrina.localFile.publicURL})`,
                  }}
                >
                  {vitrina.relationships.node__objeto.map((obj, k) => {
                    return (
                      <svg key={k} width="800" height="1280">
                        <circle
                          onClick={() => _showObject(obj)}
                          cx={obj.field_cx}
                          cy={obj.field_cy}
                          r={obj.field_cr}
                          className={vitrinaStyles.circle}
                        ></circle>
                      </svg>
                    )
                  })}
                </div>
              </Carousel.Item>
            )
          }
        )}
      </Carousel>
      <ObjectComponent props={modalObjectProps} />
    </Layout>
  )
}

export default Vitrina
export const query = graphql`
  query($drupal_internal__nid: Int) {
    nodeVitrina(drupal_internal__nid: { eq: $drupal_internal__nid }) {
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
              field_cx
              field_cy
              field_cr
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
`

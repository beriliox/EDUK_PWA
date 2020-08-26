import React, { useState } from "react"
import { connect } from "react-redux"
import { graphql } from "gatsby"
import { Carousel, Modal } from "react-bootstrap"
import Layout from "../components/layout"
import ObjectComponent from "../components/object"
import vitrinaStyles from "./vitrina.module.scss"
import "./vitrina.css"
const Vitrina = (props, { showHelp, handleCloseHelp }) => {
  //const [showHelp, setShowHelp] = useState(true)

  //const handleCloseHelp = () => setShowHelp(false)

  const [onSelect, setOnSelect] = useState(0)
  const [object, setObject] = useState(false)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  const _showObject = (obj, key) => {
    //console.log(key)
    setOnSelect(key)
    setObject(obj)
    setShow(true)
    //console.log(obj)
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

  const vitrinas = props.data.nodeVitrina.relationships.node__imagenes_vitrina
    ? props.data.nodeVitrina.relationships.node__imagenes_vitrina
    : []

  return (
    <Layout key={Math.round(Math.random())}>
      <Carousel
        key={Math.round(Math.random())}
        defaultActiveIndex={onSelect}
        interval={null}
      >
        {vitrinas.map((vitrina, key) => {
          return (
            <Carousel.Item key={key}>
              <div
                width="800"
                height="1280"
                onClick={e => _showCoords(e)}
                style={{
                  backgroundImage: `
                    url(${vitrina.relationships.field_imagen_vitrina.localFile.publicURL}),
                    linear-gradient(rgba(0,0,0,50%), white, white)
                  `,
                }}
              >
                <svg width="800" height="1280">
                  {vitrina.relationships.node__objeto.map(obj => {
                    return obj.field_coords.map((coord, k) => {
                      let cx = parseInt(coord.split(",")[0])
                      let cy = parseInt(coord.split(",")[1])
                      let cr = parseInt(coord.split(",")[2])
                        ? parseInt(coord.split(",")[2])
                        : 10
                      return (
                        <circle
                          key={k}
                          onClick={() => _showObject(obj, key)}
                          cx={cx}
                          cy={cy}
                          r={cr}
                          className={vitrinaStyles.circle}
                        ></circle>
                      )
                    })
                  })}
                </svg>
              </div>
              <Carousel.Caption className={vitrinaStyles.Modal}>
                <Modal
                  show={showHelp}
                  onHide={handleCloseHelp}
                  dialogClassName={vitrinaStyles.modalHelpDialog}
                >
                  <Modal.Header className={vitrinaStyles.Help} closeButton>
                    <Modal.Title>
                      Recorre la vitrina y seleccione objetos
                    </Modal.Title>
                  </Modal.Header>
                </Modal>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
      <ObjectComponent props={modalObjectProps} />
    </Layout>
  )
}

const mapStateToProps = state => ({
  showHelp: state.showHelp,
})

const mapDispatchToProps = dispatch => {
  return {
    handleCloseHelp: () => {
      dispatch({
        type: "CLOSE_MODAL",
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vitrina)
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
              field_coords
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

import React, { useState } from "react"
import Layout from "../components/layout"
import { Image, Carousel } from "react-bootstrap"
import { graphql } from "gatsby"
import ObjectComponent from "../components/object"
import vitrinaStyles from "./vitrina.module.scss"

const Vitrina = props => {
  const [object, setObject] = useState(false)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  /*const searchCoords = (x, y, objectX, objectY, r, j) => {
    const i = 1
    while (j < r) {
      let newPosX = x + i
      let newNegX = x - i
      let newPosY = y + i
      let newNegY = y - i

      let Aa = { newPosX, y }
      let Bb = { newNegX, y }
      let Cc = { x, newPosY }
      let Dd = { x, newNegY }

      console.log(`${x},${y}`)

      console.log(`${x} === ${objectX} && ${y} === ${objectY}`)

      console.log(`${Aa.newPosX} === ${objectX} && ${Aa.y} === ${objectY}`)

      if (Aa.newPosX === objectX && Aa.y === objectY) {
        return searchCoords(Aa.newPosX, Aa.y, objectX, objectY, r, j++)
      } else if (Bb.newPosX === objectX && Bb.y === objectY) {
        return searchCoords(Bb.newPosX, Bb.y, objectX, objectY, r, j++)
      } else if (Cc.newPosX === objectX && Cc.y === objectY) {
        return searchCoords(Cc.newPosX, Cc.y, objectX, objectY, r, j++)
      } else if (Dd.newPosX === objectX && Dd.y === objectY) {
        return searchCoords(Dd.newPosX, Dd.y, objectX, objectY, r, j++)
      } else {
        return false
      }
    }
  }*/

  /*const _showObject = (e, showcase) => {
    let x = e.nativeEvent.offsetX
    let y = e.nativeEvent.offsetY
    showcase.objects.forEach(obj => {
      let objGntCode = "S02_V06_A" // definir campo obj.<CODE>
      if (objGntCode === showcase.imageName) {
        console.log(obj)
        console.log(x, y)
        setObject(obj)
        setShow(true)
        //let getObjectFromImage = document.querySelector(`#${objGntCode}`)
        let objectX = 300 //parseInt(getObjectFromImage.getAttribute("cx"))
        let objectY = 300 //parseInt(getObjectFromImage.getAttribute("cy"))
        let objectR = 5 //parseInt(getObjectFromImage.getAttribute("r"))
        if (x === objectX && y === objectY) {
          console.log("Ideal Case: I found it!!")
          setObject(obj)
          setShow(true)
        } else {
          //searchCoords(x, y, objectR)
        }
      }
    })
  }*/

  const _showObject = (e, objects) => {
    let x = e.nativeEvent.offsetX
    let y = e.nativeEvent.offsetY
    objects.forEach(obj => {
      let objectX = obj.field_cx
      let objectY = obj.field_cy
      let objectR = 5 // fixed radio
      if (x === objectX && y === objectY) {
        //console.log(`${x},${y}`)
        setObject(obj)
        setShow(true)
      } else {
        //const coordsFound = searchCoords(x, y, objectX, objectY, objectR, 0)
      }
    })
  }

  const objects = props.data.nodeVitrina.relationships.node__imagenes_vitrina.map(
    vitrina => {
      return vitrina.relationships.node__objeto
    }
  )

  const modalObjectProps = {
    show,
    handleClose,
    object,
  }

  return (
    <Layout>
      {/*<h2>{props.data.nodeVitrina.title}</h2>*/}
      <Carousel>
        {props.data.nodeVitrina.relationships.node__imagenes_vitrina.map(
          vitrina => {
            return vitrina.relationships.field_imagen.map((field, key) => {
              console.log(field.localFile.publicURL)
              return (
                <Carousel.Item key={key}>
                  <Image
                    onClick={e => _showObject(e, objects)}
                    className={vitrinaStyles.masthead}
                    src={field.localFile.publicURL}
                    fluid
                  />
                </Carousel.Item>
              )
            })
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
        field_sala {
          title
          drupal_internal__nid
        }
        node__imagenes_vitrina {
          title
          relationships {
            field_imagen {
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

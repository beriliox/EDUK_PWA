import React, { useState } from "react"
import Layout from "../components/layout"
import { Image, Carousel } from "react-bootstrap"
import { graphql } from "gatsby"
import ObjectComponent from "../components/object"
import showCaseStyles from "./showcase.module.scss"

const Showcase = props => {
  const [object, setObject] = useState(false)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  const _showObject = (e, showcase) => {
    //let x = e.nativeEvent.offsetX
    //let y = e.nativeEvent.offsetY
    showcase.objects.forEach(obj => {
      let objGntCode = "S02_V06_A" // definir campo obj.<CODE>
      if (objGntCode === showcase.imageName) {
        /*let getObjectFromImage = document.getElementById(objGntCode)
        let objectX = getObjectFromImage.cx
        let objectY = getObjectFromImage.cy*/

        //if (x === objectX && y === objectY) {
        setObject(obj)
        setShow(true)
        //}
      }
    })
  }

  const objects = props.data.nodeShowcase.relationships.node__object
  const modalObjectProps = {
    show,
    handleClose,
    object,
  }

  return (
    <Layout>
      {/*<h2>{props.data.nodeShowcase.title}</h2>*/}
      <Carousel>
        {props.data.nodeShowcase.relationships.field_showcase_image.map(
          (field, key) => {
            const imageName = field.localFile.name
            const clickProps = {
              imageName,
              objects,
            }
            return (
              <Carousel.Item key={key}>
                <Image
                  onClick={e => _showObject(e, clickProps)}
                  className={showCaseStyles.masthead}
                  src={field.localFile.publicURL}
                  fluid
                />
                <Carousel.Caption>
                  <ObjectComponent props={modalObjectProps} />
                </Carousel.Caption>
              </Carousel.Item>
            )
          }
        )}
      </Carousel>
    </Layout>
  )
}

export default Showcase
export const query = graphql`
  query($drupal_internal__nid: Int) {
    nodeShowcase(drupal_internal__nid: { eq: $drupal_internal__nid }) {
      drupal_internal__nid
      title
      relationships {
        field_showcase_image {
          localFile {
            name
            publicURL
          }
        }
        node__object {
          drupal_internal__nid
          title
          body {
            value
          }
          field_material
          field_code
          field_archeological_site
          field_commune
          field_province
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
            field_image {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  }
`

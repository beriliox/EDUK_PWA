import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//import connect from "react-redux"
import Layout from "../components/layout"
import ObjectModal from "../components/objectmodal.js"

const ObjectComponent = () => {
  const object = useStaticQuery(graphql`
    query($drupal_internal__nid: Int) {
      nodeObject(drupal_internal__nid: { eq: $drupal_internal__nid }) {
        drupal_internal__nid
        title
        body {
          value
        }
        field_cx
        field_cy
        field_cr
        field_material
        field_code
        field_resource_type
        relationships {
          field_video {
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
        relationships {
          field_showcase {
            title
            drupal_internal__nid
            relationships {
              field_showcase_image {
                localFile {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <ObjectModal props={object.nodeObject} />
    </Layout>
  )
}

/*const mapStateToProps = reducer => ({
  object: state.object,
})

const mapDispatchToProps = dispatch => ({
  functionDispatchName(obj) {
    dispatch({
      type: "ACTION_TYPE_NAME",
      obj,
    })
  },
})*/

export default ObjectComponent
//export default connect(mapStateToProps, mapDispatchToProps)(ObjectComponent)

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//import connect from "react-redux"
import Layout from "../components/layout"
import CedulaModal from "../components/cedulamodal.js"

const CedulaComponent = props => {
  const cedula = useStaticQuery(graphql`
    query($drupal_internal__nid: Int) {
      nodeCedula(drupal_internal__nid: { eq: $drupal_internal__nid }) {
        drupal_internal__nid
        title
        field_material
        field_numero_inventario
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
        }
      }
    }
  `)
  return (
    <Layout>
      <CedulaModal props={cedula.nodeCedula} />
    </Layout>
  )
}

/*const mapStateToProps = reducer => ({
  cedula: state.cedula,
})

const mapDispatchToProps = dispatch => ({
  functionDispatchName(obj) {
    dispatch({
      type: "ACTION_TYPE_NAME",
      obj,
    })
  },
})*/

export default CedulaComponent
//export default connect(mapStateToProps, mapDispatchToProps)(CedulaComponent)

import React from "react"
import Layout from "../components/layout"
import { connect } from "react-redux"
import { Link, graphql } from "gatsby"
import vitrinaStyles from "./vitrina.module.scss"
import SEO from "../components/seo"
const Vitrina = props => {
  const showHelp = props.showHelp
  const toggleShowHelp = props.toggleShowHelp

  const tablets = props.data.nodeVitrina.relationships.node__tablet
    ? props.data.nodeVitrina.relationships.node__tablet
    : []

  return (
    <Layout key={Math.round(Math.random())}>
      <SEO title="Vitrinas" />
      <div id={`main-height`} className={vitrinaStyles.Background}>
        {
          <div className={vitrinaStyles.blackOverlay}>
            <div className={vitrinaStyles.contentBox}>
              <h2 className={vitrinaStyles.subtitlesH2}>
                Seleccione una tablet
              </h2>
              <ol className={vitrinaStyles.vitrinas}>
                {tablets.map((edge, key) => {
                  return (
                    <li className={vitrinaStyles.vitrina} key={key}>
                      <Link
                        to={`/tablet/${edge.drupal_internal__nid}`}
                        onClick={() => toggleShowHelp(!showHelp)}
                      >
                        <h2>{edge.title}</h2>
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
  showHelp: state.app.showHelp,
})

const mapDispatchToProps = dispatch => ({
  toggleShowHelp(showHelp) {
    dispatch({
      type: "TOGGLE_SHOWHELP",
      showHelp,
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Vitrina)

export const query = graphql`
  query($drupal_internal__nid: Int) {
    nodeVitrina(drupal_internal__nid: { eq: $drupal_internal__nid }) {
      drupal_internal__nid
      title
      relationships {
        node__tablet {
          drupal_internal__nid
          title
        }
      }
    }
  }
`

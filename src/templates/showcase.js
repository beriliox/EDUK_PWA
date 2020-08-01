import React from "react"
import Layout from "../components/layout"
import { Image, Carousel } from "react-bootstrap"
import { graphql } from "gatsby"
import showCaseStyles from "./showcase.module.scss"

const Showcase = props => {
  return (
    <Layout>
      {/*<h2>{props.data.nodeShowcase.title}</h2>*/}
      <Carousel>
        {props.data.nodeShowcase.relationships.field_showcase_image.map(
          field => {
            return (
              <Carousel.Item>
                <Image
                  className={showCaseStyles.masthead}
                  src={field.localFile.publicURL}
                  fluid
                />
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
            publicURL
          }
        }
      }
    }
  }
`

import React from 'react'
import Layout  from "../components/layout";
import { Carousel } from 'react-bootstrap';
import Img from "gatsby-image"

import { graphql } from "gatsby"

const Showcase = (props) => {
    return (
        <Layout>
            <h2>{props.data.nodeShowcase.title}</h2>
            <Carousel>
                { props.data.nodeShowcase.relationships.field_showcase_image.map(field => {
                    return (
                        <Carousel.Item>
                            <Img src={field.localFile.url} fluid/>
                        </Carousel.Item>
                    )
                })}
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
                        url
                    }
                }
            }
        }
    }`
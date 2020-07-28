import React from 'react'
import Layout  from "../components/layout";

import { graphql } from "gatsby"

export const query = graphql`
    query($drupal_internal__nid: Int) {
        nodeShowcase(drupal_internal__nid: { eq: $drupal_internal__nid }) {
            drupal_internal__nid
            title
        }
    }`

const Object = (props) => {
    return (
        <Layout>
            <h1>{props.data.nodeShowcase.title}</h1>
        </Layout>
    )
}

export default Object
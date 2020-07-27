import React from 'react'
import Layout  from "../components/layout";
import Video  from "../components/video";

import { graphql } from "gatsby"

export const query = graphql`
    query($drupal_internal__nid: Int) {
        nodeObject(drupal_internal__nid: { eq: $drupal_internal__nid }) {
        drupal_internal__nid
            title
            body {
                value
            }
            relationships {
                field_video {
                    localFile {
                        publicURL
                    }
                }
            }
        }
    }`

const Object = (props) => {
    let body = props.data.nodeObject.body ? props.data.nodeObject.body.value : ''
    return (
        <Layout>
            <h1>{props.data.nodeObject.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: body}}></div>
            <Video videoSrcURL={props.data.nodeObject.relationships.field_video.localFile.publicURL}/>
        </Layout>
    )
}

export default Object
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
    const body = props.data.nodeObject.body ? props.data.nodeObject.body.value : ''
    const video = props.data.nodeObject.relationships.field_video.localFile.publicURL ? props.data.nodeObject.relationships.field_video.localFile.publicURL : '';
    return (
        <Layout>
            <h1>{props.data.nodeObject.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: body}}></div>
            <Video videoSrcURL={video}/>
        </Layout>
    )
}

export default Object
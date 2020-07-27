import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout";
import objectStyles from "./object.module.scss";

const ObjectPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allNodeObject {
          edges {
            node {
                drupal_internal__nid
                title
                body {
                    value
                }
            }
          }
      }
    }
  `)

  return (

    <Layout>
        <h1>Object</h1>
        <ol className={objectStyles.objects}>
            { data.allNodeObject.edges.map((edge) => {
                let body = edge.node.body ? edge.node.body.value : ''
                return (
                    <li className={objectStyles.object}>
                        <Link to={`/object/${edge.node.drupal_internal__nid}`}>
                            <h2>{ edge.node.title }</h2>
                            <p dangerouslySetInnerHTML={{ __html: body}}></p>
                        </Link>
                    </li>
                )
            }) }
        </ol>
    </Layout>)
}

export default ObjectPage

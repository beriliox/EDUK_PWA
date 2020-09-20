/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

//createPages-> create pages based on storaged content
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const vitrinaTemplate = path.resolve("./src/templates/vitrina.js")
  const resVitrina = await graphql(`
    query {
      allNodeVitrina {
        edges {
          node {
            drupal_internal__nid
          }
        }
      }
    }
  `)

  resVitrina.data.allNodeVitrina.edges.forEach(edge => {
    createPage({
      component: vitrinaTemplate,
      path: `/vitrina/${edge.node.drupal_internal__nid}`,
      context: {
        drupal_internal__nid: edge.node.drupal_internal__nid,
      },
    })
  })

  const tabletTemplate = path.resolve("./src/components/tablet/tablet.js")
  const resTablet = await graphql(`
    query {
      allNodeTablet {
        edges {
          node {
            drupal_internal__nid
          }
        }
      }
    }
  `)

  resTablet.data.allNodeTablet.edges.forEach(edge => {
    createPage({
      component: tabletTemplate,
      path: `/tablet/${edge.node.drupal_internal__nid}`,
      context: {
        drupal_internal__nid: edge.node.drupal_internal__nid,
      },
    })
  })
}

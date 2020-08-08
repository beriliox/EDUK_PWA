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

  const showcaseTemplate = path.resolve("./src/templates/showcase.js")
  const resShowcase = await graphql(`
    query {
      allNodeShowcase {
        edges {
          node {
            drupal_internal__nid
          }
        }
      }
    }
  `)

  resShowcase.data.allNodeShowcase.edges.forEach(edge => {
    createPage({
      component: showcaseTemplate,
      path: `/showcase/${edge.node.drupal_internal__nid}`,
      context: {
        drupal_internal__nid: edge.node.drupal_internal__nid,
      },
    })
  })
}

const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      projects: allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.projects.edges.forEach(({ node }) => {
    createPage({
      path: `portfolio/${node.slug}`,
      component: path.resolve(`./src/templates/project-template.js`),
      context: { slug: node.slug },
    })
  })
}

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
      posts: allContentfulBlogPost {
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
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve(`./src/templates/blog-template.js`),
      context: { slug: node.slug },
    })
  })
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Daventertainment Inc",
    description: "Portfolio site show casing work and services for daventertainment inc.",
    author: "D.Cox",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`
      }
    },
    "gatsby-transformer-sharp", 
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-styled-components",
  ],
}

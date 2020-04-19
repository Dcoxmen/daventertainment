/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Daventertainment Inc",
    description: "Web developer for over 15 years Full stack engineering, digital marketing, software development and more. Located in the Tustin area of Orange County, Ca. Virtually available world wide.",
    author: "@daventertainmentdj",
    facebookUsername: "@daventertainmentdj",
    image: "/daventertainment.png",
    siteUrl: "https://daventertainment.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://daventertainment.com",
        sitemap: "https://daventertainment.com/sitemap.xml",
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    "gatsby-transformer-sharp", 
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-transition-link",
  ],
}

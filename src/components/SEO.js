import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getSeoData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
        author
        siteUrl
        image
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getSeoData)
  const {
    siteDescription,
    siteTitle,
    siteUrl,
    image,
  } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image} />
      {/* facebook card */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={"website"} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
    </Helmet>
  )
}

export default SEO

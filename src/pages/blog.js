import React from "react"
import Layout from "../components/Layout.js"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import BlogList from "../components/Blog/BlogList"
import SEO from "../components/SEO"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" description="Blog page details" />
      <StyledHero img={data.blogImage.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  )
}

export const query = graphql`
  query {
    blogImage: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default BlogPage

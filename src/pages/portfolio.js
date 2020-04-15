import React from "react"
import Layout from "../components/Layout.js"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Projects from "../components/Projects/Projects"

const Portfolio = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.defaultImage.childImageSharp.fluid} />
      <h1>We love what we do</h1>
      <p>Engineering for the web with solutions in mind</p>
      <p>Need a developer?</p>
      <Projects />
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultImage: file(relativePath: { eq: "portfolioBcg.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default Portfolio

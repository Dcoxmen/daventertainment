import React from "react"
import Layout from "../components/Layout.js"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.contactImage.childImageSharp.fluid} />
      <h1>Contact Us</h1>
      <p>Tell us the problem you need solved. Let's brainstorm!</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    contactImage: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default ContactPage

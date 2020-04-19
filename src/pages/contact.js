import React from "react"
import Layout from "../components/Layout.js"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" description="Use contact form to reach out to us." />
      <StyledHero img={data.contactImage.childImageSharp.fluid} />

      <Contact />
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

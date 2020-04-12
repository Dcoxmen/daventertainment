import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultImage.childImageSharp.fluid}>
      <Banner
        title="Full-Stack with Style"
        info="Build your audience with rich and interactive experiences. Combine programming, video and sound with accurate and eye catching database displays to enhance engagement, improve performance or solve a problem. Experienced full-stack web engineer. Coding to contribute, create, and progress."
      >
        <AniLink
          cover
          to="/portfolio"
          direction="right"
          bg="url(https://bhcmedia.com/HTML/images/arrow-techBlue.png)
                  center / cover   /* position / size */
                  "
          className="btn-white"
        >
          View Portfolio
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
)
export const query = graphql`
  query {
    defaultImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

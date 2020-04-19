import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import { graphql } from "gatsby"
import FeaturedProjects from "../components/Home/FeaturedProjects"
import SEO from "../components/SEO"

export default ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      description="Welcome to Daventertainment inc  home page. The best in all things web development. Websites, mobile apps, progressive web apps, corporate software and e-commerce. Let's make the difference"
    />
    <StyledHero home="true" img={data.defaultImage.childImageSharp.fluid}>
      <Banner
        title="Full-Stack with Style"
        info="Build your audience with rich and interactive experiences. Combine programming, video and sound with accurate and eye catching dynamic displays to enhance engagement, improve performance and solve unique issues. Experienced full-stack web engineer. Coding to contribute, create, and progress."
      >
        <AniLink fade to="/portfolio" className="btn-white">
          View Portfolio
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedProjects />
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

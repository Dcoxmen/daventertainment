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
        title="Full stack with Style"
        info="Welcome to Daventertainment. My name is David Cox. I enjoy the creativity and challenges involved in the process of creating rich user experiences and connecting modern frameworks to robust backend solutions. Specializing in JAM,
        MERN, and MAMP stack development.
        This site is a showcase of my latest work and interests. Coding to contribute, create, and progress. DAV
         "
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
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

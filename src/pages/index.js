import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="Full-Stack with Style"
        info="Build your audience with rich and interactive experiences. Combine programming, video and sound with accurate and eye catching database displays to enhance engagement, improve performance or solve a problem. Experienced full-stack web engineer. Coding to contribute, create, and progress."
      >
        <Link to="/portfolio" className="btn-white">
          View Portfolio
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)

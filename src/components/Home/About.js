import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import ImgGatsby from "gatsby-image"

const getAboutPic = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "teamCoding.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutPic)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <ImgGatsby
              fluid={aboutImage.childImageSharp.fluid}
              alt="about daventertainment"
            ></ImgGatsby>
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Make the Difference</h4>
          <p>
            We design, architect, build and stylize rich user experiences
            connected to robust modern frameworks and powerful diverse backend
            solutions. Optimize your brand, software and results.
          </p>
          <p>
            Specializing in full-stack solutions. Fluent in MERN and MAMP
            stacks. Abilities and languages include: HTML, CSS, Javascript, PHP,
            NodeJS, MySQL, Postgres, ORM, MVC, MongoDB, Google Cloud, Adobe
            Creative Suite and Restful API's. Rich video and audio enhancement
            with trackabilities. Mobile, desktop and software. Lets find the
            right solution!
          </p>
          <button className="btn-primary">Find Out More</button>
        </article>
      </div>
    </section>
  )
}
export default About

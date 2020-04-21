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
      <Title title="about" subtitle="dav" />
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
            Creative front-end web developer with 12+ years’ experience building
            out client web platforms with a passion for the entertainment
            industry. Known for deep programming skills as well as reputation
            for mentoring teams to success. Thrive in challenging environments
            requiring adaptability and change management
          </p>
          <p>
            I am a full stack engineer by day and party yacht DJ at night. A web
            based creator with enterprise level experience. Specializing in JAM,
            MERN, and MAMP stack solutions. My other passions are fatherhood,
            music composition, video production, and spinning tunes on a harbour
            cruise. I am fortunate to do what I love.
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/david-cox-78b88b44/"
              target="blank"
            >
              <button className="btn-primary">Linkdin Info Here</button>
            </a>
          </p>
        </article>
      </div>
    </section>
  )
}
export default About

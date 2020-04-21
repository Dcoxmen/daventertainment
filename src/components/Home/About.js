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
            I architect, design, and build rich user experiences connected to
            modern frameworks and robust backend solutions. Optimizing your
            brand, apps and software.
          </p>
          <p>
            Experience with the following programming languages and
            technologies. NodeJS and PHP on the server side. Front end tools
            include HTML, CSS, Javascript and React. I have used MYSQL and
            POSTGRES relational databases plus MongoDB and Firebase
            non-relational DBs. Other tech include Restful API's, GraphQL, SEO,
            and Adobe creative suite. Worked with startups, small business, and
            enterprise corporation team
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

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaAtom } from "react-icons/fa"
import Week from "../components/SingleProject/Week"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Template = ({ data }) => {
  const {
    name,
    cost,
    type,
    daysToComplete,
    startDate,
    description: { description },
    images,
    timeline,
  } = data.project

  const [mainImage, ...projectImages] = images

  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {projectImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="single project"
                  className={styles.images}
                />
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              client cost ${cost}
            </p>
          </div>
          <div className={styles.info}>
            <p>
              <FaAtom className={styles.icon} />
              type: {type}
            </p>
          </div>
          <h4>project started on: {startDate}</h4>
          <h4>weeks to develop: {daysToComplete} weeks</h4>
          <p className={styles.desc}>{description}</p>
          <h2>weekly timeline</h2>
          <div className={styles.timeline}>
            {timeline.map((item, index) => {
              return (
                <Week
                  key={index}
                  week={item.week}
                  day={item.day}
                  info={item.info}
                />
              )
            })}
          </div>
          <AniLink fade to="/portfolio" className="btn-primary">
            back to portfolio
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    project: contentfulProject(slug: { eq: $slug }) {
      name
      cost
      type
      daysToComplete
      startDate(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      timeline {
        id
        info
        day
        week
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
export default Template

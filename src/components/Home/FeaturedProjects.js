import React from "react"
import Project from "../Projects/Project"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getProjects = graphql`
  query {
    featuredProjects: allContentfulProject(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          type
          cost
          slug
          contentful_id
          daysToComplete
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const FeaturedProjects = () => {
  const response = useStaticQuery(getProjects)
  const projects = response.featuredProjects.edges

  return (
    <section className={styles.projects}>
      <Title title="featured" subtitle="projects" />
      <div className={styles.center}>
        {projects.map(({ node }) => {
          return <Project key={node.contentful_id} project={node} />
        })}
      </div>
      <AniLink
        cover
        direction="right"
        bg="url(https://bhcmedia.com/HTML/images/arrow-techBlue.png)
            center / cover   /* position / size */
            no-repeat        /* repeat */"
        to="/portfolio"
        className="btn-primary"
      >
        all projects
      </AniLink>
    </section>
  )
}
export default FeaturedProjects

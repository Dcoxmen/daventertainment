import React from "react"
import Image from "gatsby-image"
import styles from "../../css/project.module.css"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Project = ({ project }) => {
  const { name, cost, type, daysToComplete, slug, images } = project
  let mainImage = images[0].fluid

  return (
    <article className={styles.project}>
      <div className={styles.imgContainer}>
        <Image
          fluid={mainImage}
          className={styles.img}
          alt="single project display"
        />
        <AniLink fade className={styles.link} to={`/portfolio/${slug}`}>
          Details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.type}>
            <FaMap className={styles.icon} />
            {type}
          </h4>
          <div className={styles.details}>
            <h6>{daysToComplete} days</h6>
            <h6>${cost} Cost</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Project

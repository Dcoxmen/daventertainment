import React from "react"
import styles from "../../css/blog-card.module.css"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogCard = ({ blog }) => {
  const { slug, title, image, publishedDate } = blog
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image fluid={image.fluid} className={styles.img} alt="single post" />
        <AniLink
          cover
          direction="right"
          bg="url(https://bhcmedia.com/HTML/images/arrow-techBlue.png)
            center / cover   /* position / size */
            no-repeat        /* repeat */"
          to={`/blog/${slug}`}
          className={styles.link}
        >
          read more
        </AniLink>
        <h6 className={styles.date}>{publishedDate}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default BlogCard

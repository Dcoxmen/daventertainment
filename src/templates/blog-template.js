import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Blog = ({ data }) => {
  const {
    title,
    publishedDate,
    body: { json },
  } = data.post
  console.log(title)
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div className="rich">
            <img
              width="400"
              src={node.data.target.fields.file["en-US"].url}
              alt="blog images"
            />

            <p>images provided by D.Cox</p>
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at: {publishedDate}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM, Do, YYYY")
      body {
        json
      }
    }
  }
`

export default Blog

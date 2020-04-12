import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner"

export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops selected page does not exist">
          <AniLink
            cover
            to="/"
            direction="right"
            bg="url(https://bhcmedia.com/HTML/images/arrow-techBlue.png)
                  center / cover   /* position / size */
                  "
            className="btn-white"
          >
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner"
import SEO from "../components/SEO"

export default function error() {
  return (
    <Layout>
      <SEO title="Error" description="Page not found. Please try again" />
      <header className={styles.error}>
        <Banner title="oops selected page does not exist">
          <AniLink fade to="/" className="btn-white">
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

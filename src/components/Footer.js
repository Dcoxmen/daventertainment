import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <AniLink
              cover
              key={index}
              to={item.path}
              direction="right"
              bg="url(https://bhcmedia.com/HTML/images/arrow-techBlue.png)
            center / cover   /* position / size */
            "
            >
              {item.text}
            </AniLink>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; Daventertainment Inc {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  )
}
export default Footer

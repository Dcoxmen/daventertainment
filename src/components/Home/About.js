import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/teamCoding.jpg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about daventertainment"></img>
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Make the Difference</h4>
          <p>
            We architect, design, build and stylize rich user experiences
            connected to robust modern frameworks and powerful diverse backend
            solutions. Optimize your brand, software and results.
          </p>
          <p>
            Specializing in full-stack solutions. Fluent in MERN and MAMP
            stacks. Abilities and languages include: HTML, CSS, Javascript, PHP,
            NodeJS, MySQL, Postgres, ORM, MVC, MongoDB, Google Cloud, Adobe
            Creative Suite and Restful API's. Rich video and audio enhancement
            with trackabilities. Mobile, desktop and software. Lets find the
            right solution!
          </p>
          <button className="btn-primary">Find Out More</button>
        </article>
      </div>
    </section>
  )
}
export default About

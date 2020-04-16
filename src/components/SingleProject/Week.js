import React, { useState } from "react"
import { FaAngleDown } from "react-icons/fa"
import styles from "../../css/week.module.css"

const Week = ({ day, week, info }) => {
  const [showInfo, setInfo] = useState(false)
  const toggleInfo = () => {
    setInfo(showInfo => !showInfo)
  }

  return (
    <article className={styles.week}>
      <h4>
        week: {week}
        <button className={styles.btn} onClick={toggleInfo}>
          <FaAngleDown />
        </button>
      </h4>
      {showInfo && <div>day of week: {day}</div>}
      {showInfo && <p>progress: {info}</p>}
    </article>
  )
}

export default Week

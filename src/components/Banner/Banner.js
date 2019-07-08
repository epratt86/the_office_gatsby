import React from "react"
import disco from "../../img/discoball-compressor.png"

import styles from "./Banner.module.scss"

const banner = props => {
  return (
    <div className={styles.banner}>
      <img src={disco} alt="disco at the office" />
      <h1 className={styles.title}>{props.title}</h1>
    </div>
  )
}

export default banner

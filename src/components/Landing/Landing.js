import React from "react"
import img from "../../img/landing-img-compressor.png"

import styles from "./Landing.module.scss"

const landing = props => (
  <section className={styles.landing}>
    <img
      src={img}
      alt="The Office Bar San Diego - Cocktails and entertainment in North Park since 1948."
    />
  </section>
)

export default landing

import React from "react"
import MenuState from "../Menu/MenuState/MenuState"

import styles from "./Layout.module.scss"

const layout = props => (
  <div className={styles.layout}>
    <MenuState />
    <div className={styles.content}>{props.children}</div>
  </div>
)

export default layout

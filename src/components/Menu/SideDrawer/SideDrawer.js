import React from "react"
import { Link } from "gatsby"

import styles from "./SideDrawer.module.scss"

const sideDrawer = props => {
  let drawerClasses = styles.sideDrawer
  if (props.show) {
    drawerClasses = `${styles.sideDrawer} ${styles.open}`
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Events</Link>
        </li>
        <li>
          <Link to="/">Merch</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default sideDrawer

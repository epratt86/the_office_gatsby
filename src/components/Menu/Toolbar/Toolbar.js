import React from "react"
import { Link } from "gatsby"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"

import styles from "./Toolbar.module.scss"

const Toolbar = props => (
  <header className={styles.toolbar}>
    <nav className={styles.toolbar__navigation}>
      <div className={styles.toolbar__toggler}>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className={styles.toolbar__logo}>
        <Link to="/">The Office Bar</Link>
      </div>
      <div className={styles.spacer} />
      <div className={styles.toolbar__nav_items}>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Events</Link>
          </li>
          <li>
            <Link>Merch</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar

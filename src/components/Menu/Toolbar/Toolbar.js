import React from "react"
import { Link } from "gatsby"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import logo from "../../../img/TheOfficeBar-compressor.png"

import styles from "./Toolbar.module.scss"

const Toolbar = props => (
  <header className={styles.toolbar}>
    <nav className={styles.toolbar__navigation}>
      <div className={styles.toolbar__toggler}>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className={styles.toolbar__logo}>
        <Link to="/" title="Home">
          <img src={logo} alt="The Office Bar" />
        </Link>
      </div>
      <div className={styles.spacer} />
      <div className={styles.toolbar__nav_items}>
        <ul>
          <li>
            <Link to="/" activeClassName={styles.active} title="Home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName={styles.active} title="About">
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" activeClassName={styles.active} title="Menu">
              Menu
            </Link>
          </li>
          <li>
            <a href="https://www.instagram.com/theofficebarsd/" target="_blank" rel="noopener noreferrer">Events</a>
          </li>
          <li style={{ paddingRight: "0" }}>
            <Link to="/contact" activeClassName={styles.active} title="Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar

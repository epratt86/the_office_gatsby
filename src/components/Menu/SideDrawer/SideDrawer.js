import React from "react"
import { Link } from "gatsby"
import officeParty from "../../../img/office-party-compressor-white.png"

import styles from "./SideDrawer.module.scss"

const sideDrawer = props => {
  let drawerClasses = styles.sideDrawer
  if (props.show) {
    drawerClasses = `${styles.sideDrawer} ${styles.open}`
  }
  return (
    <nav className={drawerClasses}>
      <button className={styles.close} onClick={props.click}>
        X
      </button>
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
        <li>
          <Link to="/contact" activeClassName={styles.active} title="Contact">
            Contact
          </Link>
        </li>
      </ul>
      <img src={officeParty} alt="The Office Bar" />
    </nav>
  )
}

export default sideDrawer

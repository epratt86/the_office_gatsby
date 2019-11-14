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
          <Link to='/' activeClassName={styles.active} title='Home'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/events' activeClassName={styles.active} title='Events'>
            Events
          </Link>
        </li>
        <li>
          <Link to='/contact' activeClassName={styles.active} title='Contact'>
            Contact
          </Link>
        </li>
      </ul>
      <img src={officeParty} alt='The Office Bar' />
    </nav>
  )
}

export default sideDrawer

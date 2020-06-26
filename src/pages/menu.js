import React from "react"
import Layout from "../components/Layout/Layout"
import Head from "../components/Head"
import Banner from "../components/Banner/Banner"
import img from "../img/cocktail-menu-the-office-bar.png"
import styles from "./about.module.scss"

const MenuPage = () => {
  return (
    <Layout>
      <Head
        title="Menu"
        description="Cocktail menu for The Office Bar, San Diego, CA. Crafting cocktails in North Park since 1948."
      />
      <main
        style={{
          maxWidth: "1100px",
          width: "90%",
          margin: "100px auto 0 auto",
          display: "block",
        }}
      >
        <Banner title="Menu" />
        <section className={styles.about}>
          <img
            src={img}
            alt="Drink menu for The Office"
            style={{ display: "block", margin: "auto", width: "100%" }}
          />
        </section>
      </main>
    </Layout>
  )
}

export default MenuPage

import React from "react"
import Layout from "../components/Layout/Layout"
import Head from "../components/Head"
import Banner from "../components/Banner/Banner"

import styles from "./merch.module.scss"

const MerchPage = () => {
  return (
    <Layout>
      <Head
        title="Merch"
        description="We have clothing available for sale. Load up on all your favorite Office apparel right here."
      />

      <main
        style={{
          maxWidth: "1100px",
          width: "90%",
          margin: "100px auto 0 auto",
          display: "block",
        }}
      >
        <section className={styles.merch}>
          <Banner title="Merchandise" />
          <h2>Purchase your favorite Office attire</h2>
          <br />
          <h3>This page is coming soon! Check back for updates...</h3>
        </section>
      </main>
    </Layout>
  )
}

export default MerchPage

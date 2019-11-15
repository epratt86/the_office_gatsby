import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Head from "../components/Head"
import Banner from "../components/Banner/Banner"

import styles from "./success.module.scss"

const SuccessPage = () => {
  return (
    <Layout>
      <Head
        title='Success'
        description='Thank you for reaching out to us @ The Office. Someone will be getting in touch with you soon.'
      />

      <main
        style={{
          maxWidth: "1100px",
          width: "90%",
          margin: "100px auto 0 auto",
          display: "block",
        }}
      >
        <section className={styles.success}>
          <Banner title='Success!' />
          <h2>
            Your form was successfully submitted&nbsp;&nbsp; –Thank you for
            reaching out to us @ The Office. Someone will be getting in touch
            with you soon.
          </h2>
          <Link to='/' class={styles.button}>
            Return Home
          </Link>
        </section>
      </main>
    </Layout>
  )
}

export default SuccessPage

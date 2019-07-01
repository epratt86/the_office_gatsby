import React from "react"
import Layout from "../components/Layout/Layout"
import Head from "../components/Head"
import Banner from "../components/Banner/Banner"

const SuccessPage = () => {
  return (
    <Layout>
      <Head
        title="Success"
        description="Thank you for reaching out to us @ The Office. Someone will be getting in touch with you soon."
      />

      <main
        style={{
          maxWidth: "1100px",
          width: "90%",
          margin: "100px auto 0 auto",
          display: "block",
        }}
      >
        <section style={{ fontFamily: "Filmotype Gay" }}>
          <Banner title="Success" />
          <h2>
            Thank you for reaching out to us @ The Office. Someone will be
            getting in touch with you soon.
          </h2>
        </section>
      </main>
    </Layout>
  )
}

export default SuccessPage

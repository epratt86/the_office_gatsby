import React from "react"
import Layout from "../components/Layout/Layout"
import Head from "../components/Head"

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
        <p>This is coming from merch.js</p>
      </main>
    </Layout>
  )
}

export default MerchPage

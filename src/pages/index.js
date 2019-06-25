import React from "react"
import Layout from "../components/Layout/Layout"
import Head from "../components/Head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" description="Description here" />

      <main style={{ marginTop: "100px" }}>
        <p>This is coming from index.js</p>
      </main>
    </Layout>
  )
}

export default IndexPage

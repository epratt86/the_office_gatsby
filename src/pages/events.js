import React from "react"
import Layout from "../components/Layout/Layout"
import Head from "../components/Head"

const EventsPage = () => {
  return (
    <Layout>
      <Head title="Events" description="Description here" />

      <main style={{ marginTop: "60px" }}>
        <p>This is coming from events.js</p>
      </main>
    </Layout>
  )
}

export default EventsPage

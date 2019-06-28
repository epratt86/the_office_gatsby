import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Head from "../components/Head"

const NotFound = () => {
  return (
    <Layout>
      <Head
        title="404 - Page Not Found"
        description="Page not found. Please return home."
      />

      <main
        style={{
          maxWidth: "1100px",
          width: "90%",
          margin: "100px auto 0 auto",
          display: "block",
          fontFamily: "sans-serif",
        }}
      >
        <h1 style={{ paddingTop: "1rem" }}>Page Not Found</h1>
        <h3>
          Sorry, we can't find what you are looking for. Please return{" "}
          <Link to="/">Home</Link>
        </h3>
      </main>
    </Layout>
  )
}

export default NotFound

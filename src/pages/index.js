import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout/Layout"
import Head from "../components/Head"
import Landing from "../components/Landing/Landing"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        edges {
          node {
            title
            file {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Home" description="Description here" />

      <main style={{ marginTop: "100px" }}>
        <Landing />
        {data.allContentfulAsset.edges.map(edge => {
          return (
            <img
              src={edge.node.file.url}
              alt={edge.node.title}
              style={{
                maxWidth: "100vw",
                width: "1100px",
                display: "block",
                margin: "1rem auto",
              }}
            />
          )
        })}
      </main>
    </Layout>
  )
}

export default IndexPage

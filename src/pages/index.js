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
      <Head
        title="Home"
        description="Welcome to the offical web site for The Office Bar. We have been providing cocktails and entertainment in North Park since 1948."
      />

      <main style={{ marginTop: "60px" }}>
        <Landing />
        {data.allContentfulAsset.edges.map(edge => {
          return (
            <img
              src={edge.node.file.url}
              alt="It's a business doing pleasure with you ;)"
              style={{
                maxWidth: "95vw",
                width: "900px",
                display: "block",
                margin: "0 auto",
                boxShadow: "2px 5px 3px 0px rgba(0, 0, 0, 0.5)",
              }}
            />
          )
        })}
      </main>
    </Layout>
  )
}

export default IndexPage

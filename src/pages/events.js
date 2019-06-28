import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout/Layout"
import Head from "../components/Head"

import styles from "./events.module.scss"

const EventsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(sort: { fields: timestamp, order: DESC }) {
        edges {
          node {
            caption
            thumbnails {
              src
            }
            timestamp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head
        title="Events"
        description="Check out our events page to find out what's going on this week at The Office."
      />

      <main
        style={{
          maxWidth: "1100px",
          width: "90%",
          margin: "100px auto 0 auto",
          display: "block",
        }}
      >
        <section className={styles.events}>
          <h1 className={styles.title}>Events</h1>
          <h2>See whats happening @theofficebarsd</h2>
          <div className={styles.flexRow}>
            {data.allInstaNode.edges.map(edge => {
              let timeStamp = edge.node.timestamp
              return (
                <div className={styles.post}>
                  <img
                    src={edge.node.thumbnails[4].src}
                    alt={edge.node.caption}
                    style={{
                      width: "340px",
                      display: "block",
                    }}
                  />
                  <p>{edge.node.caption}</p>
                  <p>
                    Posted on: {new Date(timeStamp * 1000).toLocaleDateString()}
                  </p>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default EventsPage

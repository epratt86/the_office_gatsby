import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa"
import Layout from "../components/Layout/Layout"
import Head from "../components/Head"
import Banner from "../components/Banner/Banner"

import styles from "./events.module.scss"

const EventsPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allInstaNode(sort: { fields: timestamp, order: DESC }) {
  //       edges {
  //         node {
  //           caption
  //           thumbnails {
  //             src
  //           }
  //           timestamp
  //         }
  //       }
  //     }
  //   }
  // `)
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
          <Banner title="Events" />
          <div className={styles.header}>
            <h2>See whats happening @theofficebarsd</h2>
            <div className={styles.icons}>
              <a
                href="https://www.facebook.com/theofficebarsd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare style={{ color: "#3b5998" }} />
              </a>
              <a
                href="https://www.instagram.com/theofficebarsd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram style={{ margin: "0 1rem", color: "#d62976" }} />
              </a>
              <a
                href="https://www.twitter.com/theofficebarsd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitterSquare style={{ color: "#1da1f2" }} />
              </a>
            </div>
          </div>
          {/* <div className={styles.flexRow}>
            {data.allInstaNode.edges.map(edge => {
              let timeStamp = edge.node.timestamp
              return (
                <div className={styles.post}>
                  <img
                    src={edge.node.thumbnails[4].src}
                    alt={edge.node.caption}
                  />
                  <p>{edge.node.caption}</p>
                  <p style={{ textAlign: "right" }}>
                    Posted on: {new Date(timeStamp * 1000).toLocaleDateString()}
                  </p>
                </div>
              )
            })}
          </div> */}
        </section>
      </main>
    </Layout>
  )
}

export default EventsPage

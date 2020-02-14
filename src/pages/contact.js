import React from "react"
import Layout from "../components/Layout/Layout"
import Head from "../components/Head"
import Form from "../components/Form/Form"
import Banner from "../components/Banner/Banner"

import map from "../img/map-compressor.png"

import styles from "./contact.module.scss"

const ContactPage = () => {
  return (
    <Layout>
      <Head
        title="Contact"
        description="To get in touch with the men upstairs please fill out the contact form. You can also call us anytime at 619-450-6632."
      />
      <main
        style={{
          maxWidth: "1100px",
          width: "90%",
          margin: "100px auto 0 auto",
          display: "block",
        }}
      >
        <Banner title="Contact" />
        <section className={styles.contact}>
          <Form />
          <article className={styles.card}>
            <h6>
              Phone:&nbsp;
              <a
                href="tel:619-450-6632"
                target="_blank"
                rel="noopener noreferrer"
              >
                619-450-6632
              </a>
            </h6>
            <h6>
              Location:{" "}
              <a
                href="https://goo.gl/maps/wnHYnMYUU5F2xvPi8"
                target="_blank"
                rel="noopener noreferrer"
              >
                3936 30th Street, San Diego 92104 <br />
              </a>
            </h6>
            <div className={styles.info}>
              <p>Happy Hour: 4-9pm Daily</p>
              <p>Cocktails and entertainment nightly</p>
            </div>

            <a
              href="https://goo.gl/maps/wnHYnMYUU5F2xvPi8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={map}
                className={styles.map}
                alt="The office bar, 3936 30th street"
              />
            </a>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default ContactPage

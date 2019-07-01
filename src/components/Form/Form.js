import React from "react"

import styles from "./Form.module.scss"

const form = props => (
  <section className={styles.contact}>
    <h2>Please fill out the form to get in touch</h2>
    <form
      name="contact"
      method="POST"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div className={styles.fields}>
        <input
          className={styles.name}
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className={styles.subject}
          type="text"
          placeholder="Subject"
          name="subject"
        />
        <input
          className={styles.email}
          type="email"
          placeholder="Email Address"
          name="email"
          required
        />
        <input
          className={styles.phone}
          type="text"
          placeholder="Phone Number"
          name="phone"
        />
        <input type="hidden" name="form-name" value="contact" />
        <textarea
          className={styles.message}
          placeholder="Enter Message"
          name="message"
          required
        />
      </div>
      <button type="submit" className={styles.submit}>
        Submit
      </button>
    </form>
  </section>
)

export default form

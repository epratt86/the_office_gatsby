import React from "react"
import Layout from "../components/Layout/Layout"
import Head from "../components/Head"
import Form from "../components/Form/Form"

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
        <Form />
      </main>
    </Layout>
  )
}

export default ContactPage

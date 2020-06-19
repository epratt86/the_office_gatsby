import React from "react"
import Layout from "../components/Layout/Layout"
import Head from "../components/Head"
import Banner from "../components/Banner/Banner"
import styles from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <Head
        title="About"
        description="The Office has been a cocktail bar in North Park since 1948 with the current owners taking over in June of 2008. It's a business doing pleasure with you ;)"
      />
      <main
        style={{
          maxWidth: "1100px",
          width: "90%",
          margin: "100px auto 0 auto",
          display: "block",
        }}
      >
        <Banner title="About" />
        <div className={styles.header}>
          <h2>*Its a business doing pleasure with you</h2>
        </div>
        <section className={styles.about}>
          {/* <div className={styles.info}>
            <h4>hours: 4pm – 2am</h4>
            <h5>happy hour daily: 4pm – 9pm</h5>
          </div> */}
          <div className={styles.body}>
            <p>
              The first record of cocktails being served at 3936 30th Street was
              the opening night of Club Belvedere, in 1948. Just a few years
              later, The 1956 San Diego edition of Polk’s Business Directory in
              shows the location as The Office. Fast-forward to 1983, George
              Scolari bought & personalized his new bar, calling it Scolari’s
              Office. Scolari's Office became a popular neighborhood bar and
              later a famous/infamous punk rock venue known all across the
              United States.
            </p>
            <p>
              For the record, it was in June of 2008 that the major renovation
              was completed & Scolari’s Office became The Office once again.
            </p>
            <p>
              The physical & cultural landscape of the 9-5 'daily grind' or 'rat
              race' has changed in just the last decade. With smart phones,
              laptop computers & WiFi- we’ve adopted ways to be productive
              anywhere, anytime. The typical office as portrayed in movies &
              television is not-so-typical anymore...thinking outside the
              cubicle is to be expected (The Office has free WiFi & places to
              power up).
            </p>
            <p>
              We can all agree that we've imagined this scene: kicking our feet
              up in the boss's office, sitting in a leather throne behind a
              walnut desk, cocktail in hand (cue AMC's hit show Mad Men). The
              concept behind The Office Bar combines the comfort and personality
              of a classic cocktail lounge with the a twist: you're the boss!
            </p>

            <p>
              The Office is available for Birthday Parties, Special Events,
              Benefits, Mixers, etc and shows Chargers, Lakers, NFL, NBA & MLB
              games in HD. Nightly entertainment starts at 9pm with Djs and live
              music. Please click on the 'Events' link for more information
              about a specific date.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default AboutPage

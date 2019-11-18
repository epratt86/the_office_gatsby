import React from "react"
import { Link } from "gatsby"
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa"

import styles from "./Footer.module.scss"

const year = new Date().getFullYear()

const footer = props => (
  <footer className={styles.footer}>
    <div className={styles.row}>
      <link
        href='//cdn-images.mailchimp.com/embedcode/slim-10_7.css'
        rel='stylesheet'
        type='text/css'
      />
      <div id='mc_embed_signup' className={styles.mailingList}>
        <form
          action='https://epratt.us19.list-manage.com/subscribe/post?u=e48eb00d3affd286ee30bf450&amp;id=397fc9813c'
          method='post'
          id='mc-embedded-subscribe-form'
          name='mc-embedded-subscribe-form'
          className='validate'
          target='_blank'
          novalidate
          style={{ padding: "0" }}
        >
          <div id='mc_embed_signup_scroll'>
            <label for='mce-EMAIL' className={styles.signUp}>
              Sign up for our mailing list and stay up to date with upcoming
              events and special promotions.
            </label>

            <div className={styles.input}>
              <input
                type='email'
                name='EMAIL'
                className={styles.email}
                id='mce-EMAIL'
                placeholder='Enter your email address'
                required
              />
              <input
                type='submit'
                value='Subscribe'
                name='subscribe'
                id='mc-embedded-subscribe'
              />
            </div>

            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden='true'
            >
              <input
                type='text'
                name='b_e48eb00d3affd286ee30bf450_397fc9813c'
                tabindex='-1'
                value=''
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div style={{ borderBottom: "1px solid #ccc" }}>
      <div
        className={styles.container}
        style={{ marginTop: "2rem", padding: "10px" }}
      >
        <div className={styles.spaceBetween}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ fontSize: "24px", marginTop: "0" }}>
              COCKTAILS AND ENTERTAINMENT IN NORTH PARK SINCE 1948
            </h1>
            <Link to='home'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='events'>Events</Link>
            <Link to='contact'>Contact</Link>
            <div className={styles.icons}>
              <a
                href='https://www.facebook.com/theofficebarsd'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebookSquare style={{ color: "#3b5998" }} />
              </a>
              <a
                href='https://www.instagram.com/theofficebarsd'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram style={{ margin: "0 1rem", color: "#d62976" }} />
              </a>
              <a
                href='https://www.twitter.com/theofficebarsd'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTwitterSquare style={{ color: "#1da1f2" }} />
              </a>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "3rem",
            }}
          >
            <h3>
              Hours: 4pm - 2am <br />
              Address:&nbsp;
              <a
                href='https://goo.gl/maps/wnHYnMYUU5F2xvPi8'
                target='_blank'
                rel='noopener noreferrer'
              >
                3936 30th Street, San Diego, California 92104 <br />
              </a>
              Phone:&nbsp;
              <a
                href='tel:619-450-6632'
                target='_blank'
                rel='noopener noreferrer'
              >
                619-450-6632
                <br />
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.container}>
      <h4 style={{ padding: "10px 0" }}>
        © {year} The Office. All rights reserved.&nbsp;
        <a
          href='https://www.epratt.net'
          target='_blank'
          rel='noopener noreferrer'
        >
          Site by eric
        </a>
      </h4>
    </div>
  </footer>
)

export default footer

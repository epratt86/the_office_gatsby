require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "The Office Bar - Cocktails & Entertainment since 1948",
    author: "Eric Pratt",
    keywords:
      "The Office, The Office Bar, happy hour, north park, san diego, cocktails, craft beer, night club",
    description:
      "The Office Bar has been providing cocktails and entertainment in North Park since 1948. We offer happy hour DAILY from 4pm-9pm and have entertainment nightly from 9pm - 2am. Our hours are from 4pm - 2am daily.",
    siteUrl: "https://www.theofficebarsd.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `theofficebarsd`,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-130550866-1",
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.theofficebarsd.com",
        sitemap: "https://www.theofficebarsd.com/sitemap.xml",
        policity: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
  ],
}

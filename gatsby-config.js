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
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "UA-130672056-1",
    //     head: true,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-robots-txt",
    //   options: {
    //     host: "https://www.epratt.net",
    //     sitemap: "https://www.epratt.net/sitemap.xml",
    //     policity: [{ userAgent: "*", allow: "/" }],
    //   },
    // },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       "gatsby-remark-relative-images",
    //       {
    //         resolve: "gatsby-remark-images",
    //         options: {
    //           maxWidth: 750,
    //           linkImagesToOriginal: false,
    //         },
    //       },
    //     ],
    //   },
    // },
  ],
}

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "The Office Bar - Cocktails & Entertainment since 1948",
    author: "Eric Pratt",
    keywords:
      "The Office, The Office Bar, happy hour San Diego, north park happy hour, san diego, cocktails, craft beer, night club, North Park craft cocktails",
    description:
      "The Office Bar has been providing cocktails and entertainment in North Park since 1948. We offer happy hour from 4pm-9pm and have entertainment from 9pm - 2am. Our hours are from 4pm - 2am Wednesday - Sunday.",
    siteUrl: "https://www.theofficebarsd.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: `theofficebarsd`,
    //   },
    // },
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1060,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
  ],
}

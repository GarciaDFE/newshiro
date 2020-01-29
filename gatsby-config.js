module.exports = {
  siteMetadata: {
    title: `Shiro Usinagens`,
    description: `Website Shiro Usinagem Especializada em manutenção e reparo de elevadores`,
    siteUrl: `http://www.shirousinagens.com.br`,
    author: `Marcial Garcia`,
    social: [
      {
        name: "twitter",
        url: "<link project in the Twitter>"
      },
      {
        name: "youtube",
        url: "<link project in the Youtube>"
      },
      {
        name: "facebook",
        url: "https://www.facebook.com/shirousinagens/"
      },
      {
        name: "instagram",
        url: "<link project in the Instagram>"
      },
      {
        name: "whatsapp",
        url: "<link project in the Professional WhatsApp>"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `newshiro`,
        short_name: `newshiro`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#A00000`,
        display: `template-ui`,
        icon: `src/images/globals/favicon.ico`, // 512x512px.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional
        color: `tomato`,
        // Disable the loading spinner in the middle view
        showSpinner: false,
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    `gatsby-plugin-offline`,
  ],
}

module.exports = {
  siteMetadata: {
    title: `Andy's Website`,
    siteUrl: `https://www.atsang36.github.io`,
    description: `React website`,
  },
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-plugin-mdx",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andy T.'s Website`,
        short_name: `Andy T.`,
        description: `Personal Website for Andy T.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    // "gatsby-source-filesystem",
    "gatsby-transformer-sharp",
  ],
};

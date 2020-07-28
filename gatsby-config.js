module.exports = {
  siteMetadata: {
    title: `EDUK DISEÑO | MUSEOGRAFÍA DIDÁCTICA GRÁFICA`,
    description: ``,
    author: `@beriliox`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `node-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    //`gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EDUK DISEÑO | MUSEOGRAFÍA DIDÁCTICA GRÁFICA`,
        short_name: `EDUK DISEÑO`,
        start_url: `/`,
        background_color: `#AB7657`,
        theme_color: `#AB7657`,
        display: `standalone`,
        icon: `src/images/eduk_logo.png`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available, please see:
          // https://developer.mozilla.org/en-US/docs/Web/Manifest
          // https://w3c.github.io/manifest/#purpose-member
          purpose: `maskable`,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`,
     {
       resolve: `gatsby-source-drupal`,
       options: {
         baseUrl: `http://eduk_diseno.lndo.site/`,
         apiBase: `jsonapi`, // optional, defaults to `jsonapi`
         basicAuth: {
          username: process.env.BASIC_AUTH_USERNAME,
          password: process.env.BASIC_AUTH_PASSWORD,
        },
      }
     }
  ],
}

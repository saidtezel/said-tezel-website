module.exports = {
  siteMetadata: {
    title: `Saïd Tezel – Data Analyst and Developer Based in London`,
    name: `Saïd Tezel`,
    siteUrl: `https://saidtezel.com`,
    description: `Perspectives on data, programming and digital marketing from Saïd Tezel`,
    hero: {
      heading: `Perspectives on data, programming and digital marketing.`,
      subheading: `Testing subheading`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/said_tezel`,
      },
      {
        name: `github`,
        url: `https://github.com/saidtezel`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/said_tezel`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/saidtezel`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KM77VQR",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Saïd Tezel`,
        short_name: `Saïd Tezel`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: `Saïd Tezel – Data Analyst, Front-End Developer Based in London`,
    name: `Saïd Tezel`,
    siteUrl: `https://saidtezel.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to Novela, the simplest way to start publishing with Gatsby.`,
      maxWidth: 800,
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
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};

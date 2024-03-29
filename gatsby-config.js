const siteUrl = "https://www.aa-ghanbari.com"
module.exports = {
  siteMetadata: {
    title: 'Arman Alighanbari  blog',
    description: 'Arman Alighanbari personal blog',
    siteUrl: "https://www.aa-ghanbari.com",
    og: {
      siteName: "arman alighanbari personal blog",
    }
  },
  plugins: [

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/headerIcon.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`fa`, `en`],
        defaultLanguage: 'fa',
        redirect: false,
        generateDefaultLanguagePage: true,
        i18nextOptions: {
          interpolation: {
            escapeValue: false
          },
          keySeparator: false,
          nsSeparator: false
        }
      },
      pages: [
        {
          matchPath: "/blog",
          Languages: ['fa']
        }
      ]
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/**/404', '/**/404.html'],
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.aa-ghanbari.com`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,

  ]
};

const secrets = require("./.github/actions/export-secret/index.js")

module.exports = {
  siteMetadata: {
    title: `NARAZUKE`,
    author: [
      {
        name: `nozzle`,
        summary: `who lives in gummaken.`,
        social: {
          github: "nozzlex3"
        }
      },
      {
        name: `konnyaku`,
        summary: `who is known as Siege Sukosuko Samurai.`,
        social: {
          github: "wabetarou"
        }
      }
    ],
    description: `narazuke saiko-`,
    siteUrl: `https://narazuke.github.io`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 1600,
              height: 900
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
              backgroundColor: `none`,
              wrapperStyle: `overflow: visible`
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
          `gatsby-remark-code-titles`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-189619597-1`
      }
    },
    {
      resolve: "gatsby-plugin-gitalk",
      options: {
        config: {
          clientID: `${secrets.NARAZUKE_ID}`,
          clientSecret: `${secrets.NARAZUKE_SECRET}`,
          repo: "narazuke.github.io",
          owner: "narazuke",
          admin: ["wabetarou", "nozzlex3"],
          pagerDirection: "first",
          createIssueManually: false,
          distractionFreeMode: false,
          enableHotKey: true
        }
      }
    },
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-twitter`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-source-github-api`,
    //   options: {
    //     // url: API URL to use. Defaults to  https://api.github.com/graphql
    //     url: "https://api.github.com/graphql",

    //     // token: required by the GitHub API
    //     token: `${secret.githubTokenNarapickle}`,

    //     // GraphQLquery: defaults to a search query
    //     variables: {},
    //     graphQLQuery: `query {
    //       organization(login: "narazuke") {
    //         repository(name: "narazuke.github.io") {
    //           issues(orderBy: {field:UPDATED_AT, direction: DESC}, last: 100) {
    //             nodes {
    //               id
    //               comments(last: 1, orderBy: {field: UPDATED_AT, direction: ASC}) {
    //                 totalCount
    //                 nodes {
    //                   body
    //                   author {
    //                     avatarUrl(size: 10)
    //                     login
    //                     url
    //                   }
    //                   updatedAt
    //                 }
    //               }
    //               body
    //               title
    //             }
    //           }
    //         }
    //       }
    //     }`
    //   }
    // }

    // variables: defaults to variables needed for a search query
    // variables: {
    //   q: "author:nozzlex3 sort:comments",
    //   nFirst: 2,
    // },
  ]
}

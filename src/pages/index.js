import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostColumn from "../components/post-column"
import LatestCommentsDisplay from "../components/latest-comments"
// import CategoriesMini from "../components/categories-mini"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { edges } = data.allMarkdownRemark
  const updatedIssues =
    data.githubData.data.organization.repository.issues.nodes
  if (edges.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <Link to="/tags">All tags</Link>
      {/* <CategoriesMini data={data} /> */}
      <hr />

      <ol style={{ listStyle: `none` }}>
        {edges.map(({ node }) => {
          return <PostColumn key={"postcolumn-list"} node={node} />
        })}
      </ol>
      <LatestCommentsDisplay updatedIssues={updatedIssues} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
          summary
          social {
            github
          }
        }
      }
    }
    githubData {
      data {
        organization {
          repository {
            issues {
              nodes {
                comments {
                  totalCount
                  nodes {
                    body
                    updatedAt(formatString: "YYYY-MM-D ddd HH:mm z")
                    author {
                      login
                      avatarUrl
                    }
                  }
                }
                body
                title
              }
            }
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___created], order: DESC }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            tag
            created(formatString: "Y-M-D ddd")
            author
            category
          }
        }
      }
    }
    categoriesGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`

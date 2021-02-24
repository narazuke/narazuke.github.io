import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Search from "../components/search"
import SEO from "../components/seo"
import LatestComments from "../components/latest-comments"
import Posts from "../components/posts"
import Button from "../components/button"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { edges } = data.allMarkdownRemark
  let [searchedPosts, setSearchedPosts] = useState(edges)
  const { nodes: issuesNodes } = data.githubData.data.organization.repository.issues
  if (edges.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the
          "gatsby-source-filesystem" plugin in gatsby-config.js).
        </p>
      </Layout>
    )
  }
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <Link to="/tags">All tags</Link>
      <Button edges={edges} setSearchedPosts={setSearchedPosts} />
      <Search edges={searchedPosts} setSearchedPosts={setSearchedPosts} />
      {searchedPosts.length} 件
      <hr />
      <Posts nodes={searchedPosts} />
      <LatestComments issuesNodes={issuesNodes} />
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
                    updatedAt
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
    allMarkdownRemark(limit: 2000, sort: { fields: [frontmatter___created], order: DESC }) {
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
            updated
            created
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

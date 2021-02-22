import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Search from "../components/search"
import SEO from "../components/seo"
import PostColumn from "../components/post-column"
import LatestComments from "../components/latest-comments"
// import CategoriesMini from "../components/categories-mini"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { edges } = data.allMarkdownRemark
  const [word, setWord] = useState("")
  const {
    nodes: issuesNodes,
  } = data.githubData.data.organization.repository.issues
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
      <Search setWord={setWord}/>
      <hr />
      <ol style={{ listStyle: `none` }}>
        {edges.filter(node => node.node.frontmatter.title.includes(word)).sort(function (a, b) {
          let atime,btime
          if(a.node.frontmatter.category === "diary") {
            atime = a.node.frontmatter.created
          } else {
            atime = a.node.frontmatter.updated
          }
          if(b.node.frontmatter.category === "diary") {
            btime = b.node.frontmatter.created
          } else {
            btime = b.node.frontmatter.updated
          }
          return Date.parse(atime) < Date.parse(btime)
        }).map(({ node }) => {
          return <PostColumn key={"postcolumn-list"} node={node} />
        })}
      </ol>
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

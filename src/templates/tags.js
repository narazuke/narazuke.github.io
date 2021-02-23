import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PostColumn from "../components/post-column"

const Tags = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  // const tagHeader = `${totalCount} post${
  //   totalCount === 1 ? "" : "s"
  // } tagged with "${tag}"`
  const tagHeader = `"${tag}" : ${totalCount}件`
  return (
    <Layout location={location} title={siteTitle}>
      <h2>{tagHeader}</h2>
      <ol style={{ listStyle: `none` }}>
        {edges
          .sort(function (a, b) {
            let atime, btime
            if (a.node.frontmatter.category === "diary") {
              atime = a.node.frontmatter.created
            } else {
              atime = a.node.frontmatter.updated
            }
            if (b.node.frontmatter.category === "diary") {
              btime = b.node.frontmatter.created
            } else {
              btime = b.node.frontmatter.updated
            }
            return Date.parse(btime) - Date.parse(atime)
          })
          .map(({ node }) => {
            return <PostColumn node={node} />
          })}
      </ol>
      <Link to="/tags">All tags</Link>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
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
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___created], order: DESC }
      filter: { frontmatter: { tag: { in: [$tag] } } }
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
            created
            updated
            tag
            author
            category
          }
        }
      }
    }
  }
`

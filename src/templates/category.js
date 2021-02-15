import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PostColumn from "../components/post-column"

const Category = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  // const authorHeader = `${totalCount} post${
  //   totalCount === 1 ? "" : "s"
  // } authorged with "${author}"`
  const categoryHeader = `category ${category} : ${totalCount}件`
  return (
    <Layout location={location} title={siteTitle}>
      <h2>{categoryHeader}</h2>
      <ol style={{ listStyle: `none` }}>
        {edges.map(({ node }) => {
          return <PostColumn node={node} />
        })}
      </ol>
      <Link to="/categorys">All categorys</Link>
    </Layout>
  )
}

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
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

export default Category

export const pageQuery = graphql`
  query($category: String) {
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
      filter: { frontmatter: { category: { in: [$category] } } }
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
            created(formatString: "Y-M-D ddd")
            tag
            author
            category
          }
        }
      }
    }
  }
`

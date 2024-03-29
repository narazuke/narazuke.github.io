const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const tagTemplate = path.resolve("src/templates/tags.js")
  const authorTemplate = path.resolve("src/templates/author.js")
  const categoryTemplate = path.resolve("src/templates/category.js")
  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        postsRemark: allMarkdownRemark(sort: { fields: [frontmatter___created], order: ASC }, limit: 10000) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                category
                tag
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tag) {
            fieldValue
          }
        }
        authorsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___author) {
            fieldValue
          }
        }
        categoriesGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your blog posts`, result.errors)
    return
  }

  const posts = result.data.postsRemark.edges

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].node.id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].node.id
      const category = post.node.frontmatter.category
      const tagList = post.node.frontmatter.tag
      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          id: post.node.id,
          previousPostId,
          nextPostId,
          category,
          tagList
        }
      })
    })
  }

  // {URL}/tag/hoge のページを作る
  const tags = result.data.tagsGroup.group
  tags.forEach((tag) => {
    createPage({
      path: `/tag/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue
      }
    })
  })
  const authors = result.data.authorsGroup.group
  authors.forEach((author) => {
    createPage({
      path: `/author/${_.kebabCase(author.fieldValue)}/`,
      component: authorTemplate,
      context: {
        author: author.fieldValue
      }
    })
  })
  const categories = result.data.categoriesGroup.group
  categories.forEach((category) => {
    createPage({
      path: `/category/${_.kebabCase(category.fieldValue)}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteMetadata {
      title: String
      author: [Author]
      siteUrl: String
    }

    type Author {
      name: String
      summary: String
      social: Social
      image: String
    }
    
    type Social {
      github: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      created: Date @dateformat
      updated: Date @dateformat
      title: String!
      description: String
      author: [String]
      tag: [String]
      category: String
    }

    type Fields {
      slug: String
    }

  `)
}

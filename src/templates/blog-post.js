import React from "react"
import { Link, graphql } from "gatsby"
import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "@suziwen/gitalk/dist/gitalk.css"
import Gitalk from "gatsby-plugin-gitalk"
import "katex/dist/katex.min.css"

import DateStr2Date from "../components/date"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const { edges: relatedPostEdges } = data.relatedPosts
  let gitalkConfig = {
    id: post.fields.slug,
    title: post.frontmatter.title
  }
  let date,
    subDate = null
  let randomArray = []
  let relatedPostsHeader = null
  if (post.frontmatter.category === "diary") {
    date = post.frontmatter.created
    subDate = null
  } else {
    date = post.frontmatter.updated
    subDate = post.frontmatter.created
    // 日記ではない、同タグの記事が他に1以上ある記事に「関連記事」を表示する
    if (data.relatedPosts.totalCount > 1) {
      randomArray = randomSelect(data.relatedPosts.totalCount, 3)
      relatedPostsHeader = <h5>関連記事</h5>
    }
  }
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <article className="blog-post" itemScope itemType="http://schema.org/Article">
        <header>
          <small>
            <div className={`category ${post.frontmatter.category}`}>
              <Link to={`/category/${post.frontmatter.category}/`}>{post.frontmatter.category}</Link>
            </div>
          </small>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>
            <div className="post-date">
              {subDate ? (
                <span className="sub-date">
                  <DateStr2Date dateStr={subDate} />
                </span>
              ) : null}
              <span className="main-date">
                <DateStr2Date dateStr={date} />
              </span>
            </div>
          </p>
          <div className="tag-list">
            {post.frontmatter.tag?.map((tag) => {
              return (
                <small>
                  <div className="tag">
                    <Link to={`/tag/${tag}/`}>{tag}</Link>
                  </div>
                </small>
              )
            })}
          </div>
          <small className="profile-mini-list">
            {post.frontmatter.author?.map((name) => {
              return (
                <Link to={`/author/${name}/`} className="profile-mini">
                  <figure>
                    <Image
                      filename={"profile-pic-" + name + ".jpg"}
                      style={{
                        borderRadius: `50%`
                      }}
                      fixed={true}
                    />
                  </figure>
                  <div>{name}</div>
                </Link>
              )
            })}
          </small>
        </header>
        <hr />
        <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <div className="related-posts">
        {relatedPostsHeader}
        {relatedPostEdges
          .filter(({ node }, index) => {
            return randomArray.includes(index) && node.fields.slug !== post.fields.slug
          })
          .map(({ node }) => {
            return (
              <li>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </li>
            )
          })}
      </div>
      <Gitalk options={gitalkConfig} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String, $tagList: [String]) {
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
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        created
        updated
        description
        tag
        author
        category
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    relatedPosts: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___created], order: DESC }
      filter: { frontmatter: { tag: { in: $tagList } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
// 0以上arrayLength-1以下のnum個の要素を重複なしで取り出す
function randomSelect(arrayLength, num) {
  // [0, 1, 2, .... arrayLength-1]の配列を宣言
  if (arrayLength < num) {
    num = arrayLength
  }
  let serialArray = new Array(arrayLength).fill().map((_, i) => i)
  let randomArray = []
  while (randomArray.length < num && serialArray.length > 0) {
    // 配列からランダムな要素を選ぶ
    const rand = Math.floor(Math.random() * serialArray.length)
    // 選んだ要素を別の配列に登録する
    randomArray.push(serialArray[rand])
    // もとの配列からは削除する
    serialArray.splice(rand, 1)
  }
  return randomArray
}

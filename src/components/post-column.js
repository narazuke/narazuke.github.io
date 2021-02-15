import React from "react"
import { Link } from "gatsby"
import Image from "./image"

const PostColumnTemplate = ({ node }) => {
  console.log(node.frontmatter)
  //   const { node } = data.allMarkdownRemark.edges
  return (
    <li className="post-list" key={node.fields.slug}>
      <article
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h2>
            <Link to={node.fields.slug} itemProp="url">
              <span itemProp="headline">{node.frontmatter.title}</span>
            </Link>
          </h2>
          <small>{node.frontmatter.created}</small>
          <div className="tag-list">
            <small>
              <div className="category">
                <Link>{node.frontmatter.category}</Link>
              </div>
            </small>
            {node.frontmatter.tag?.map((tag, index) => {
              if (index === 0) return null
              return (
                <small>
                  <div className="tag">
                    <Link to={`/tags/${tag}/`}>{tag}</Link>
                  </div>
                </small>
              )
            })}
          </div>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
            itemProp="description"
          />
        </section>
        {node.frontmatter.author?.map(name => {
          return (
            <small>
              <Link to={`/author/${name}/`} className="profile-mini">
                <figure>
                  <Image
                    filename={"profile-pic-" + name + ".jpg"}
                    style={{
                      borderRadius: `50%`,
                    }}
                    fixed={true}
                  />
                </figure>
                <div>{name}</div>
              </Link>
            </small>
          )
        })}
      </article>
      <hr />
    </li>
  )
}
export default PostColumnTemplate

import React from "react"
import { Link } from "gatsby"
import Image from "./image"

const PostColumnTemplate = ({ node }) => {
  return (
    <li className="post-list" key={node.fields.slug}>
      <article
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <small>
            <div className={`category ${node.frontmatter.category}`}>
              <Link to={`/category/${node.frontmatter.category}/`}>
                {node.frontmatter.category}
              </Link>
            </div>
          </small>
          <h2>
            <Link to={node.fields.slug} itemProp="url">
              <span itemProp="headline">{node.frontmatter.title}</span>
            </Link>
          </h2>
          <small>{node.frontmatter.created}</small>
          <div className="tag-list">
            {node.frontmatter.tag?.map(tag => {
              return (
                <small key={"post-list"}>
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
            <small key={"author-list"} className="profile-mini">
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
            </small>
          )
        })}
      </article>
      <hr />
    </li>
  )
}
export default PostColumnTemplate

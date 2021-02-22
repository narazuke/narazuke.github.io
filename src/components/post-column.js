import React from "react"
import { Link } from "gatsby"
import Image from "./image"

import DateStr2Date from "../components/date"

const PostColumnTemplate = ({ node }) => {
  // let commentDate = new Date(node.frontmatter.created)
  let date = null
  if (node.frontmatter.category === "diary") {
    date = node.frontmatter.created
  } else {
    date = node.frontmatter.updated
  }
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
          <small>
            <DateStr2Date dateStr={date} />
          </small>
          <div className="tag-list">
            {node.frontmatter.tag?.map(tag => {
              return (
                <small key={"post-list"}>
                  <div className="tag">
                    <Link to={`/tag/${tag}/`}>{tag}</Link>
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
            <small key={"author-list"}>
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

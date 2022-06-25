/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "./image"
import { Link } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            social {
              github
            }
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const authors = data.site.siteMetadata?.author

  return (
    <div className="bio" style={{ margin: "auto" }}>
      {authors.map((author) => {
        const name = author.name
        const src_path = "profile-pic-" + name + ".jpg"
        return (
          <div key={"bio-list-" + name} style={{ width: "50%" }}>
            <div style={{ width: "100px" }}>
              <Link to={`/author/${name}/`}>
                <Image
                  filename={src_path}
                  style={{
                    borderRadius: `50%`
                  }}
                />
              </Link>
            </div>
            {author?.name && (
              <p>
                <strong>{author.name}</strong> {author?.summary || null}
                {` `}
                <br />
                <a href={`https://github.com/${author?.social?.github || ``}`}>Github</a>
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Bio

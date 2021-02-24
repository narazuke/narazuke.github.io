import React from "react"
import PostColumn from "../components/post-column"
const Posts = ({ nodes }) => {
  return (
    <div className="posts">
      <ol style={{ listStyle: `none` }}>
        {nodes
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
            return <PostColumn key={"postcolumn-list"} node={node} />
          })}
      </ol>
    </div>
  )
}
export default Posts

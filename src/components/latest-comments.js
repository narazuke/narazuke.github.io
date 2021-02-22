import React from "react"
import { Link } from "gatsby"

function LatestComments({ issues }) {
  let commentsCount = 0
  return (
    <div className="recent-comments">
      <h6>最新のコメント</h6>
      <ol className="comments-list">
        {issues.map(issue => {
          const comments = issue.comments
          if (comments.totalCount > 0) {
            commentsCount += 1
          }
          if (commentsCount > 5) return null
          return (
            <li className="comment-block">
              {comments.nodes.map(comment => {
                let commentDate = new Date(comment.updatedAt)
                return (
                  <div>
                    <div className="comment-main">
                      <div className="github-avatar">
                        <a
                          href={`https://github.com/${
                            comment.author.login || ``
                          }`}
                        >
                          {" "}
                          <img src={`${comment.author.avatarUrl}`} alt=""></img>
                        </a>
                      </div>
                      <div className="comment-body">
                        <div className="comment-info">
                          {comment.author.login}
                        </div>
                        <Link to={`/${issue.body.split("/")[3]}`}>
                          {comment.body}
                        </Link>
                        <div className="comment-info">
                          {commentDate
                            .toLocaleString("jp", {
                              year: "numeric",
                              month: "numeric",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                            })
                            .replace(/\//g, "-")}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
export default LatestComments

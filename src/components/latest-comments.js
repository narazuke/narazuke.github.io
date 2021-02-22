import React from "react"
import { Link } from "gatsby"

import DateStr2Date from "../components/date"

function LatestComments({ issuesNodes }) {
  let commentsCount = 0
  return (
    <div className="recent-comments">
      <h6>最新のコメント</h6>
      <ol className="comments-list">
        {issuesNodes.map(issue => {
          const { nodes: commentsNodes } = issue.comments
          if (issue.comments.totalCount > 0) {
            commentsCount += 1
          }
          if (commentsCount > 5) return null
          return (
            <li className="comment-block">
              {commentsNodes.map(comment => {
                return (
                  <div>
                    <div className="comment-main">
                      <div className="github-avatar">
                        <a
                          href={`https://github.com/${
                            comment.author.login || ``
                          }`}
                        >
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
                          <DateStr2Date dateStr={comment.updatedAt} />
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

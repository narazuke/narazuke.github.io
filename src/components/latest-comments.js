import React from "react"
import { Link } from "gatsby"

const LatestCommentsDisplay = ({ updatedIssues }) => {
  return (
    <div className="recent-comments">
      <h6>最新のコメント</h6>
      <ol className="comments-list">
        {updatedIssues.map((updatedIssue, index) => {
          const comments = updatedIssue.comments.nodes
          if (index > 4) return null
          return (
            <li className="comment-block">
              {/* <Link to={`/${updatedIssue.body.split("/")[3]}`}>
                <div className="comment-info">{updatedIssue.title}</div>
              </Link> */}
              {comments.map(comment => {
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
                          {/* <a href={`https://github.com/${comment.author.login || ``}`} */}

                          {comment.author.login}
                          {/* </a> */}
                        </div>
                        <Link to={`/${updatedIssue.body.split("/")[3]}`}>
                          {comment.body}
                        </Link>
                        <div className="comment-info">{comment.updatedAt}</div>
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
export default LatestCommentsDisplay

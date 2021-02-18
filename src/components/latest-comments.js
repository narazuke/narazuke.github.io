import React from "react"
import { Link } from "gatsby"

function LatestCommentsDisplay ({ updatedIssues }) {
  let displayCommentsCount = 0
  return (
    <div className="recent-comments">
      <h6>最新のコメント</h6>
      <ol className="comments-list">
        {updatedIssues.map(updatedIssue => {
          const comments = updatedIssue.comments
          if (comments.totalCount > 0) {
            displayCommentsCount += 1
          }
          if (displayCommentsCount > 5) return null
          return (
            <li className="comment-block">
              {/* <Link to={`/${updatedIssue.body.split("/")[3]}`}>
                <div className="comment-info">{updatedIssue.title}</div>
              </Link> */}
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
                          {/* <a href={`https://github.com/${comment.author.login || ``}`} */}
                          {comment.author.login}
                          {/* </a> */}
                        </div>
                        <Link to={`/${updatedIssue.body.split("/")[3]}`}>
                          {comment.body}
                        </Link>
                        <div className="comment-info">{
                          commentDate.toLocaleString("jp",{
                            year:"numeric",
                            month:"numeric",
                            day:"numeric",
                            hour:"numeric",
                            minute:"numeric"
                          }).replace(/\//g,'-')
                        }</div>
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

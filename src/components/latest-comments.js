import React from "react"
import { Link } from "gatsby"

function LatestComments({ issuesNodes }) {
  let commentsCount = 0
  let currentTimeMs = Date.now()
  return (
    <div className="recent-comments">
      <h6>最新のコメント</h6>
      <ol className="comments-list">
        {issuesNodes.map((issue) => {
          const { nodes: commentsNodes } = issue.comments
          if (issue.comments.totalCount > 0) {
            commentsCount += 1
          }
          if (commentsCount > 5) return null
          return (
            <li className="comment-block" key={"comment-list-" + issue.id}>
              {commentsNodes.map((comment) => {
                let diffTimeMs = currentTimeMs - Date.parse(comment.updatedAt)
                let diffTime,
                  diffTimeDay,
                  diffTimeHour,
                  diffTimeMin,
                  diffTimeSec = null
                diffTimeDay = Math.floor(diffTimeMs / 1000 / 60 / 60 / 24)
                diffTimeHour = Math.floor(diffTimeMs / 1000 / 60 / 60) % 24
                diffTimeMin = Math.floor(diffTimeMs / 1000 / 60) % 60
                diffTimeSec = Math.floor(diffTimeMs / 1000) % 60
                if (diffTimeDay > 0) {
                  diffTime = diffTimeDay + "日前"
                } else if (diffTimeHour > 0) {
                  diffTime = diffTimeHour + "時間前"
                } else if (diffTimeMin > 0) {
                  diffTime = diffTimeMin + "分前"
                } else {
                  diffTime = diffTimeSec + "秒前"
                }
                return (
                  <div key={"comment-item" + comment.id}>
                    <div className="comment-main">
                      <div className="github-avatar">
                        <a href={`https://github.com/${comment.author.login || ``}`}>
                          <img src={`${comment.author.avatarUrl}`} alt=""></img>
                        </a>
                      </div>
                      <div className="comment-body">
                        <div className="comment-info">{comment.author.login}</div>
                        <Link to={`/${issue.body.split("/")[3]}`}>{comment.body}</Link>
                        <div className="comment-info">
                          {/* <DateStr2Date dateStr={comment.updatedAt} /> */}
                          {diffTime}
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

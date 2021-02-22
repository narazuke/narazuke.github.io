import React from "react"

const DateStr2Date = ({ dateStr }) => {
  let date = new Date(dateStr)
  return (
    <div>
      {date
        .toLocaleString("ja", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          timeZone: "Asia/Tokyo",
        })
        .replace(/\//g, "-")}{" "}
      {date
        .toLocaleString("en", {
          weekday: "short",
          timeZone: "Asia/Tokyo",
        })
        .replace(/\//g, "-")}{" "}
      {date
        .toLocaleString("ja", {
          hour: "numeric",
          minute: "numeric",
          timeZone: "Asia/Tokyo",
        })
        .replace(/\//g, "-")}
    </div>
  )
}
export default DateStr2Date

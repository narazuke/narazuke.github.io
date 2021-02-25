import React, { useState } from "react"

function Button(props) {
  const [category, setCategory] = useState("")
  const handleClick = (category) => {
    setCategory(category)
    let searchedPosts = props.edges.filter((edge) => {
      return edge.node.frontmatter.category.includes(category)
    })
    props.setSearchedPosts(searchedPosts)
  }
  return (
    <div className="category-tabs">
      <label>
        <input type="radio" name="tab" onChange={handleClick.bind(this, "")} />
        <div className="tab all">all</div>
      </label>
      <label>
        <input type="radio" name="tab" onChange={handleClick.bind(this, "tech")} />
        <div className="tab tech">tech</div>
      </label>
      <label>
        <input type="radio" name="tab" onChange={handleClick.bind(this, "diary")} />
        <div className="tab diary">diary</div>
      </label>
      <label>
        <input type="radio" name="tab" onChange={handleClick.bind(this, "thought")} />
        <div className="tab thought">thought</div>
      </label>
      <label>
        <input type="radio" name="tab" onChange={handleClick.bind(this, "memo")} />
        <div className="tab memo">memo</div>
      </label>
    </div>
  )
}
export default Button

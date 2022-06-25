import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"

export default function Search(props) {
  const { register, handleSubmit } = useForm()
  const [category, setCategory] = useState("")
  const [word, setWord] = useState("")
  const [postCount, setPostCount] = useState("")

  useEffect(() => {
    let searchedPosts = props.edges.filter((edge) => {
      let frontmatter = edge.node.frontmatter
      let words = word.split(" ")
      return (
        (category === "" || frontmatter.category.includes(category)) &&
        (words.length === 0 ||
          words.every((word) => {
            word = word.toLowerCase()
            if (word.slice(0, 1) === "-") {
              word = word.slice(1)
              return (
                word === "" ||
                !(
                  frontmatter.category.includes(word) ||
                  frontmatter.title.toLowerCase().includes(word) ||
                  frontmatter.description?.toLowerCase().includes(word) ||
                  frontmatter.tag.some((tag) => tag.toLowerCase().includes(word))
                )
              )
            }
            return (
              frontmatter.category.includes(word) ||
              frontmatter.title.toLowerCase().includes(word) ||
              frontmatter.description?.toLowerCase().includes(word) ||
              frontmatter.tag.some((tag) => tag.toLowerCase().includes(word))
            )
          }))
      )
    })
    props.setSearchedPosts(searchedPosts)
    setPostCount(searchedPosts.length)
  }, [category, word])

  return (
    <div>
      <div className="search">
        <div className="search-box">
          <form>
            <input
              name="word"
              defaultValue=""
              ref={register}
              placeholder="Search"
              onChange={handleSubmit((data) => setWord(data.word))}
            />
          </form>
        </div>
        <div className="search-info">
          <span className="search-info-num">{postCount} </span>
          {` `}
          <span>{postCount === 1 ? "Post" : "Posts"}</span>
        </div>
      </div>
      <div className="category-tabs">
        <label>
          <input type="radio" name="tab" onChange={() => setCategory("")} defaultChecked />
          <div className="tab all">all</div>
        </label>
        <label>
          <input type="radio" name="tab" onChange={() => setCategory("tech")} />
          <div className="tab tech">tech</div>
        </label>
        <label>
          <input type="radio" name="tab" onChange={() => setCategory("diary")} />
          <div className="tab diary">diary</div>
        </label>
        <label>
          <input type="radio" name="tab" onChange={() => setCategory("thought")} />
          <div className="tab thought">thought</div>
        </label>
        <label>
          <input type="radio" name="tab" onChange={() => setCategory("memo")} />
          <div className="tab memo">memo</div>
        </label>
      </div>
    </div>
  )
}

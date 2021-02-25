import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"

export default function Filter(props) {
  const { register, handleSubmit } = useForm()
  const [category, setCategory] = useState("")
  const [word, setWord] = useState("")

  useEffect(() => {
    console.log(category)
    console.log(word)
  }, [category, word])

  //   useEffect(() => {
  //     let searchedPosts = props.edges.filter((edge) => {
  //       let frontmatter = edge.node.frontmatter
  //       let words = word.split(" ")
  //       return (
  //         (category === "" || frontmatter.category.includes(category)) &&
  //         (words.length === 0 ||
  //           words.every((word) => {
  //             word = word.toLowerCase()
  //             if (word.slice(0, 1) === "-") {
  //               word = word.slice(1)
  //               return (
  //                 word === "" ||
  //                 !(
  //                   frontmatter.category.includes(word) ||
  //                   frontmatter.title.toLowerCase().includes(word) ||
  //                   frontmatter.description?.toLowerCase().includes(word) ||
  //                   frontmatter.tag.some((tag) => tag.toLowerCase().includes(word))
  //                 )
  //               )
  //             }
  //             return (
  //               frontmatter.category.includes(word) ||
  //               frontmatter.title.toLowerCase().includes(word) ||
  //               frontmatter.description?.toLowerCase().includes(word) ||
  //               frontmatter.tag.some((tag) => tag.toLowerCase().includes(word))
  //             )
  //           }))
  //       )
  //     })
  //     props.setSearchedPosts(searchedPosts)
  //   }, [])

  return (
    <div>
      <form>
        <input name="word" defaultValue="" ref={register} onChange={handleSubmit(setWord)} />
      </form>
      <div className="category-tabs">
        <label>
          <input type="radio" name="tab" onChange={() => setCategory("")} />
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

import React from "react"
import { useForm } from "react-hook-form"

export default function Search(props) {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    let searchedPosts = props.edges.filter((edge) => {
      let frontmatter = edge.node.frontmatter
      let words = data.word.split(" ")
      return (
        words.length === 0 ||
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
        })
      )
    })
    props.setSearchedPosts(searchedPosts)
  }

  return (
    <div>
      <form>
        <input name="word" defaultValue="" ref={register} onChange={handleSubmit(onSubmit)} />
      </form>
    </div>
  )
}

import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
const CategoriesMini = ({ data }) => (
  <div className="categories-mini">
    {data.categoriesGroup.group.map(category => (
      <div
        key={category.totalCount}
        className={`category ${kebabCase(category.fieldValue)}`}
      >
        <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
          {category.fieldValue} ({category.totalCount})
        </Link>
      </div>
    ))}

    <div className="category">
      <Link to="/tags">All tags</Link>
    </div>
  </div>
)
export default CategoriesMini

import React from "react"
import { graphql } from "gatsby"

const Template = ({ data }) => {
  const {
    name,
    cost,
    type,
    daysToComplete,
    startDate,
    description: { description },
    images,
    timeline,
  } = data.project

  const [mainImage, ...projectImages] = images
  console.log(mainImage)
  console.log(projectImages)
  return <h1>{name}</h1>
}

export const query = graphql`
  query($slug: String!) {
    project: contentfulProject(slug: { eq: $slug }) {
      name
      cost
      type
      daysToComplete
      startDate(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      timeline {
        id
        info
        week
      }
      images {
        fluid {
          src
        }
      }
    }
  }
`
export default Template

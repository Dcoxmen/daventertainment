import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import img from "../images/connectBcg.jpeg"
import ImgGatsby from "gatsby-image"

const getImages = graphql`
  query Images {
    fixed: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 400, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const pics = useStaticQuery(getImages)

  return (
    <Wrapper>
      <article>
        <h3>basic image</h3>
        <img src={img} className="basic" alt="pic1" />
      </article>
      <article>
        <h3>fixed image</h3>
        <ImgGatsby fixed={pics.fixed.childImageSharp.fixed} alt="pic2" />
      </article>
      <article>
        <h3>fluid image/svg</h3>
        <ImgGatsby fluid={pics.fluid.childImageSharp.fluid} alt="pic3" />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;
  article {
    border: 3px solid gray;
    padding: 1rem 0;
  }
  .basic {
    width: 100%;
  }
  @media (min-width: 990px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`

export default Images

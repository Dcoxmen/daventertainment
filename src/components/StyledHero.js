import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledHero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}
export default styled(StyledHero)`
  min-height: ${props => (props.home ? "calc(100vh - 62px)" : "60vh")};
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(51, 71, 153, 0.7), rgba(0, 0, 0, 0.7))"
      : "none"};
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1 !important;
`

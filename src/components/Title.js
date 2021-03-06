import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h4>
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </h4>
    </div>
  )
}
export default styled(Title)`
text-transform: uppercase;
font-size: 2.3rem;
margin-bottom: 2rem;
h4{
  text-align:center;
  letter-spacing: 7px:
 
}
.title{
  color: var(--primaryColor);
}
.subtitle{
  color:#ae0e15;
}
span{
  display:block;
}
@media (min-width: 576px) {
  span{
    display:inline-block;
    margin:0 0.35rem
  }
}
`

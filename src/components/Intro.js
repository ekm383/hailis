import React from "react"
import styled from "styled-components"

const Intro = ({ heading, subheading, style }) => {
  return (
    <IntroWrapper>
      <div>
        <h2 style={style}>{heading}</h2>
        <p>{subheading}</p>
      </div>
    </IntroWrapper>
  )
}

const IntroWrapper = styled.div`
  flex-basis: 90%;
  margin-bottom: 1rem;
  h2 {
    color: var(--mainColor);
    line-height: 3rem;
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    flex-basis: 100%;
    h2 {
      font-size: 1.2rem;
      margin-bottom: 0rem;
      line-height: 2rem;
    }
    p {
      font-size: 0.8rem;
      line-height: 1.2rem;
    }
  }
`

export default Intro

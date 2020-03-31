import React from "react"
import styled from "styled-components"

const SectionRow = ({ id, children, style }) => {
  return (
    <SectionWrapper id={id} style={style}>
      {children}
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  width: 70vw;
  margin: 0rem auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 90vw;
  }
`

export default SectionRow

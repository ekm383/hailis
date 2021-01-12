import React from "react"
import styled from "styled-components"

const Flyers = () => {
  return <StyledFlyer></StyledFlyer>
}

const StyledFlyer = styled.div`
  width: 80%;
  margin: 3rem auto 0rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .promo-image {
    width: 320px;
    margin-top: 25px;
  }
  a .promo-image {
    width: 300px;
    margin-top: 25px;
  }
  @media (max-width: 768px) {
    .promo-image {
      width: 500px;
    }
  }
`

export default Flyers

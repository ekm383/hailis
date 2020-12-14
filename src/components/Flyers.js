import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Flyers = () => {
  const data = useStaticQuery(graphql`
    query {
      promo: file(relativePath: { eq: "hailis-promo.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      xmas: file(relativePath: { eq: "Hailis-Xmas-Ad.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const promoImage = data.promo.childImageSharp.fluid
  const xmasImage = data.xmas.childImageSharp.fluid
  return (
    <StyledFlyer>
      <Img className="promo-image" fluid={promoImage} alt="promotion" />
      <a href="https://www.grindztogo.com/single.php/order/restaurant/hailis-hawaiian-foods/18?takeout=1">
        <Img className="promo-image" fluid={xmasImage} alt="promotion" />
      </a>
    </StyledFlyer>
  )
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

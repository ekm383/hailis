import React from "react"
import styled from "styled-components"

export const Menu = () => {
  return (
    <MenuWrapper>
      <div className="box">
        <div>
          <h4>‘Eleu Menu:</h4>
          <ul>
            <li>Imu Kalua Pig</li>
            <li>Taro Rolls</li>
            <li>Pineapple</li>
            <li>Lomi Salmon</li>
            <li>Sweet Potato</li>
            <li>Haupia</li>
          </ul>
        </div>
        <div>
          <h4>Hapa Menu:</h4>
          <ul>
            <li>Imu Kalua Pig</li>
            <li>Taro Rolls</li>
            <li>Haupia</li>
            <li>Pineapple</li>
            <li>Mini Laulaus</li>
            <li>Assorted Sushi</li>
            <li>Sweet Potato</li>
          </ul>
        </div>
      </div>
      <div className="box">
        <div>
          <h4>Imua Menu:</h4>
          <ul>
            <li>Rice</li>
            <li>Imu Kalua Pig</li>
            <li>Taro Rolls</li>
            <li>Shoyu Chicken</li>
            <li>Pineapple</li>
            <li>Pipikaula</li>
            <li>Baked Mahi Mahi or Salmon</li>
            <li>Potato Macaroni Salad</li>
            <li>Haupia</li>
          </ul>
        </div>
        <div>
          <h4>Ali'i Menu:</h4>
          <ul>
            <li>Poi</li>
            <li>Rice</li>
            <li>Imu Kalua Pig</li>
            <li>Haupia</li>
            <li>Poke Fish</li>
            <li>Chicken Long Rice</li>
            <li>Squid Luau</li>
            <li>Lomi Salmon</li>
            <li>Sweet Potato</li>
            <li>Pineapple</li>
          </ul>
        </div>
      </div>
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  .box {
    width: 45%;
  }
  h4 {
    margin-top: 1rem;
    color: var(--mainColor);
  }
  ul {
    list-style-type: none;
    li {
      font-size: 0.8rem;
      margin-right: 0.5rem;
      display: inline;
      color: var(--darkGray);
    }
  }
  @media (max-width: 768px) {
    .box {
      width: 100%;
    }
  }
`

export default Menu

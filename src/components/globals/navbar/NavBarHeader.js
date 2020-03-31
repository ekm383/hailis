import React from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import styled from "styled-components"

const NavBarHeader = ({ handleNavBar }) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <p className="logo">
          <strong>Haili's </strong>Hawaiian Food
        </p>
      </Link>
      <FaBars
        className="toggle-icon"
        onClick={() => {
          handleNavBar()
        }}
      />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 1rem 0rem 0.9rem 0.5rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.5rem;
    color: var(--white);
    cursor: pointer;
  }
  .logo {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: light;
    margin-left: 10px;
    color: var(--white);
  }
  a {
    text-decoration: none;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
    padding: 0.4rem 1rem;
  }
`

export default NavBarHeader

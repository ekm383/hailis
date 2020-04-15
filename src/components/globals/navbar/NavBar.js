import React, { Component } from "react"
import NavBarHeader from "./NavBarHeader"
import NavBarLinks from "./NavBarLinks"
import styled from "styled-components"

export default class NavBar extends Component {
  state = {
    navBarOpen: false,
  }

  handleNavBar = () => {
    this.setState(() => {
      return { navBarOpen: !this.state.navBarOpen }
    })
  }

  render() {
    return (
      <NavWrapper>
        <NavBarHeader handleNavBar={this.handleNavBar} />
        <NavBarLinks navBarOpen={this.state.navBarOpen} />
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  width: 100%;
  background: var(--mainColor);
  z-index: 999;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

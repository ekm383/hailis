import React, { Component } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class NavBarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        text: "home",
      },
      {
        id: 1,
        path: "/menu",
        text: "menu",
      },
      {
        id: 2,
        path: "/catering",
        text: "catering",
      },
      {
        id: 3,
        path: "/about",
        text: "about",
      },
      {
        id: 4,
        path: "/contact",
        text: "contact",
      },
      {
        id: 5,
        path: "/reviews",
        text: "reviews",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navBarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <AniLink fade to={item.path} className="nav-link">
                {item.text}
              </AniLink>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.8rem 1.2rem;
    color: var(--white);
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.5s linear;
    &:hover {
      background: var(--darkGray);
      color: var(--white);
      padding: 0.8rem 1.5rem;
    }
  }
  height: ${props => (props.open ? "292px" : "0px")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    .nav-link {
      padding: 1rem 1.2rem;
      font-size: 0.8rem;
      letter-spacing: 1px;
    }
    .nav-link:hover {
      background: var(--white);
      color: var(--mainColor);
      padding: 1rem 1.2rem;
    }
    li:nth-child(7) > a:hover {
      color: var(--mainColor);
    }
  }
`

export default NavBarLinks

import React, { Component } from "react"
import styled from "styled-components"
import Map from "../../Map"
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa"

class Footer extends Component {
  state = {
    icons: [
      {
        id: 2,
        icon: <FaInstagram className="icon facebook-instagram" />,
        path: "https://www.instagram.com/restaurantmarketinghawaii",
      },
      {
        id: 3,
        icon: <FaGoogle className="icon google-icon" />,
        path: "https://www.google.com/restaurantmarketinghawaii",
      },
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com/restaurantmarketinghawaii",
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="box contact">
          <h4>Contact Information</h4>
          <p>760 Palani Ave. Honolulu, HI 96816</p>
          <p className="phone">(808) 735-8019</p>
          <p>Tue - Sun 10:00am - 2:00pm</p>
          <p>Mon Closed</p>
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="box">
          <Map location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.738476357816!2d-157.81658154893424!3d21.281817285792453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006d8130acbb87%3A0x97e04e3277f8bc8a!2sHaili&#39;s%20Hawaiian%20Foods!5e0!3m2!1sen!2sus!4v1585691228717!5m2!1sen!2sus" />
        </div>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: var(--darkGray);
  color: var(--white);
  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  p,
  .phone {
    font-size: 0.8rem;
    color: var(--white);
  }
  .box {
    flex-basis: 50%;
    text-align: center;
  }
  a {
    color: var(--white);
    font-size: 2rem;
    margin-right: 5px;
  }
  a svg {
    margin-top: 1.2rem;
  }
  @media (max-width: 768px) {
    .contact {
      padding: 2rem 0rem;
    }
    .box {
      flex-basis: 100%;
    }
    .phone {
      font-size: 0.8rem;
    }
  }
`

export default Footer

import React from "react"
import styled from "styled-components"

const ContactForm = () => {
  return (
    <FormWrapper>
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <ul class="form-list">
          <li id="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </li>
          <li class="form-list__row">
            <label htmlFor="name">
              Name:
              <input id="name" type="text" name="name" required="true" />
            </label>
          </li>
          <li class="form-list__row">
            <label htmlFor="email">
              Email
              <input id="email" type="text" name="email" required="true" />
            </label>
          </li>
          <li class="form-list__row">
            <label htmlFor="message">
              Message
              <textarea
                id="message"
                type="textarea"
                name="message"
                required=""
              />
            </label>
          </li>
          <li>
            <button type="submit" class="button">
              let's talk
            </button>
          </li>
        </ul>
      </form>
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
  width: 100%;
  padding-bottom: 4rem;
  margin: 0px auto;
  #hidden {
    display: none;
  }
  .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .button {
    color: var(--white);
    background-color: var(--mainColor);
    padding: 12px 25px;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: 0;
    border-radius: 2px;
    outline: 0;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.2s;
  }
  .button:hover,
  .button:active,
  .button:focus {
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    cursor: pointer;
  }

  .button--transparent {
    background: transparent;
    border: 0;
    outline: 0;
  }

  .button--close {
    position: absolute;
    top: 10px;
    left: 10px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: #ffffff;
    border-radius: 50%;
    transition: all 0.25s;
    z-index: 10;
  }
  .button--close svg {
    width: 20px;
    height: 20px;
  }
  .button--close svg * {
    fill: currentColor;
  }
  .button--close:hover,
  .button--close:active,
  .button--close:focus {
    color: #fbcf34;
    background-color: var(--mainColor);
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.1);
  }

  .button--info {
    position: absolute;
    top: 0;
    right: 0;
  }

  input {
    width: calc(100% - 10px);
    min-height: 30px;
    padding-left: 5px;
    padding-right: 5px;
    letter-spacing: 0.5px;
    border: 0;
    border-bottom: 1px solid #f0f0f0;
  }
  input:valid {
    border-color: lightgreen;
  }
  input:focus {
    outline: none;
    border-color: lightgreen;
  }

  .form-list {
    padding-left: 0;
    list-style: none;
  }
  .form-list__row {
    margin-bottom: 25px;
  }
  .form-list__row label {
    position: relative;
    display: block;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 11px;
    color: var(--gray);
  }
  .form-list__row--inline {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .form-list__row--inline > :first-child {
    -ms-flex: 2;
    flex: 2;
    padding-right: 20px;
  }
  .form-list__row--inline > :nth-child(2n) {
    -ms-flex: 1;
    flex: 1;
  }
  .form-list__input-inline {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .form-list__input-inline > * {
    width: calc(50% - 10px - 10px);
  }
  .form-list__row--agree {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 12px;
  }
  .form-list__row--agree label {
    font-weight: 400;
    text-transform: none;
    color: #676767;
  }
  .form-list__row--agree input {
    width: auto;
    margin-right: 5px;
  }
  textarea {
    width: 100%;
    height: 200px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
  }
`

export default ContactForm

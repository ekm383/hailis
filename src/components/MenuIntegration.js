import React, { Component } from "react"

export default class MenuIntegration extends Component {
  componentDidMount() {
    function addScript(src) {
      var s = document.createElement("script")
      s.setAttribute("src", src)
      document.body.appendChild(s)
    }
    addScript("//web5.zuppler.com/common.js")
    addScript("//web5.zuppler.com/order.js")
  }
  render() {
    return (
      <div
        id="zuppler-menu"
        data-channel-url="http://api.zuppler.com/v3/channels/hailishawaiianfoods.json"
        data-integration="hailishawaiianfoods"
        data-restaurant-id="7943"
        data-locale="en"
        data-item="plus"
        data-cart="simple"
        data-colors-background="#ffffff"
        data-colors-highContrast="#171717"
        data-colors-midContrast="#333333"
        data-colors-lowContrast="#999999"
        data-colors-brand="#176328"
        data-colors-heroBackground="#9e5375"
        data-colors-heroContrast="#FFFFFF"
        data-fonts-heading="Poppins"
        data-fonts-body="Open Sans"
        data-fonts-deco="Open Sans"
      >
        <div id="zloading">Please wait. Loading menu...</div>
      </div>
    )
  }
}

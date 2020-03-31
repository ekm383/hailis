import React from "react"
import styled from "styled-components"

const Map = ({ location }) => {
  return (
    <MapWrapper>
      <iframe
        title="map"
        src={location}
        width="100%"
        height="300"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
      ></iframe>
    </MapWrapper>
  )
}

const MapWrapper = styled.div`
  width: 100%;
`

export default Map

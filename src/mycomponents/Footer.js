import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: red;
`
  
const Footer = () => {
  return (
    <FooterContainer>
        <h1>Footer</h1>
        <h1>asdfdasf</h1>
    </FooterContainer>
  )
}

export default Footer
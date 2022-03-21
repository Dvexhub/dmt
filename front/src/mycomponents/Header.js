import React from 'react'
import {
    Link
  } from "react-router-dom";
// import styled from 'styled-components'
import {HeaderContainer,LeftContainer} from '../css/Common'

const Header = () => {
  return (
  <>
  <LeftContainer/>
    <HeaderContainer>
      <h1>This is the header</h1>
      <Link to="superadmin">Superadmin page</Link>
      <Link to="contact">contact page</Link>
    </HeaderContainer>
  </>
  )
}

export default Header
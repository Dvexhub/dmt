import React from 'react'
import {
    Link
  } from "react-router-dom";
// import styled from 'styled-components'
import {HeaderContainer,LeftContainer,OptionText} from '../css/Common'
import { BiHome,BiKey,BiPhone } from "react-icons/bi";

const Header = () => {
  const routes= [
   { 
      path:"/",
      name:"Home",
      icon:<BiHome/>
    },
   { 
      path:"/superadmin",
      name:"SuperAdmin",
      icon:<BiKey/>
    },
   { 
      path:"/contact",
      name:"Contact",
      icon:<BiPhone/>
    }
  ]
  return (
  <>
    <LeftContainer>
      {routes.map((route)=>{
        return (
          <button>
            <Link to={route.path} key={route.name}>
              <div className="icon">{route.icon}</div>  
              <div className="link_text">{route.name}</div>  
            </Link>
          </button>
        
        )})}
    </LeftContainer>
    <HeaderContainer>
      <h1>This is the header</h1>
      <button><Link to="/">Home page</Link></button>
      <button><Link to="/superadmin">Superadmin page</Link></button>
      <button><Link to="/contact">contact page</Link></button>
    </HeaderContainer>
  </>
  )
}

export default Header
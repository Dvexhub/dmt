import styled from 'styled-components';
import {motion} from 'framer-motion';

export const HeaderContainer = styled.div`
  width: 100%;
  text-align: center;
  background-color: antiquewhite;
`

export const LeftContainer = styled(motion.nav)`
  float: left;
  height: 100vh;
  width: 65px;
  z-index: 99;
  position: relative;
  background-color: rgb(30,30,45);
  transition: width ease-in-out 0.2s;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  &:hover{
    width: 250px;
    transition: width ease-in-out 0.2s;
  }
  &:hover + ${HeaderContainer}{
    /* right: -200px; */
    right: 0;
    transition: 1s;
    position: relative;
  }
`

export const OptionText = styled.h1`
  font-size:20px;
  font-weight:600;
  color:white;
`
// export const FooterContainer = styled.div`
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   text-align: center;
//   background-color: red;
// `

// export default HeaderContainer;
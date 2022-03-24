import React from 'react'
import styled from 'styled-components'
import {useSelector,useDispatch} from 'react-redux'
const SuperadminContainer = styled.div`
  height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;
`; 
const Superadmin = () => {
  const state = useSelector((state)=>state.changeNumber)
  const dispatch = useDispatch();
  return (
    <SuperadminContainer>
      <button onClick={()=>{dispatch({type: 'INCREMENT'})}}>inc</button>
      <h1>count is : {state.count}</h1>
      <button onClick={()=>{dispatch({type: 'DECREMENT'})}}>dec</button>
    </SuperadminContainer>
  )
}

export default Superadmin
import React from 'react';
import Header from './mycomponents/Header'
import Superadmin from './mycomponents/Superadmin';
import {
  Route,
  Routes
} from "react-router-dom";
import Contact from './mycomponents/Contact';
import Home from './mycomponents/Home';

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={
            <Home/>
          }/>
          <Route path='/Superadmin' element={
            <Superadmin/>
          }/>
          <Route path='/Contact' element={
            <Contact/>
          }/>
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;

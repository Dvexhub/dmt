import React from 'react';
import Header from './mycomponents/Header'
import Superadmin from './mycomponents/Superadmin';
import {
  Route,
  Routes
} from "react-router-dom";
import Contact from './mycomponents/Contact';
import Footer from './mycomponents/Footer';

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path='/Superadmin' element={
            <Superadmin/>
          }/>
          <Route path='/Contact' element={
            <Contact/>
          }/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

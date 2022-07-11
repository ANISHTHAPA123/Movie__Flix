import React from 'react';

import {Routes,Route} from "react-router-dom";
import Aboutme from './components/Aboutme';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Movielist from "./components/Movielist";
import { UserAuthContextProvider } from './context/UserAuthContext';

// import Card from './components/Playlist';
import { CartProvider } from 'react-use-cart';
// import Playlist from './components/Playlist';
function App() {

  return (
   
    <>
      
      <Navbar/> 
      {/* <UserAuthContextProvider> */}
      <UserAuthContextProvider>
      <Routes>
       <Route 
       path="/movielist" 
       element={
       <ProtectedRoute>
            
            <Movielist /> 
            
            
       </ProtectedRoute>}/>
      {/* <Movielist/>       */}
       <Route path="/"  element={<Login/>}/>
       <Route path="/signup"  element={<Signup/>}/>
       <Route path="/aboutme"  element={<Aboutme/>}/>
       
      </Routes>
      {/* </UserAuthContextProvider> */}
      </UserAuthContextProvider>
  


    </>
  );
}

export default App;

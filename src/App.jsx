import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {  Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import Signup from './pages/Signup';
import Nav from './units/Nav';

import Cart from './pages/Cart';
import Men from './pages/Men';
import Women from './pages/Women';
import New from './pages/New';



function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
   
   <div>
       <Nav/>
        <Routes>    <Route path="/" element={<Home />} />
        <Route exact 
            path="/sign-in"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
    

          <Route path="/Signup" element={<Signup />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/New" element={<New />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
   
        </Routes>
     
        </div>
  );
}

export default App;
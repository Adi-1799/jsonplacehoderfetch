import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from "./component/Users"
import Albums from "./component/Albums.js";
import Photos from "./component/Photos.js";
import Login from "./component/Login.js";

export default function App() {

  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<Users />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/albums" element={<Albums />}/>
          <Route path="/photos" element={<Photos />}/>
        </Routes>
      </Router>
    </>
  )
}

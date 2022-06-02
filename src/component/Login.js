import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
  }

  const useremail = localStorage.getItem('useremail');
  const userpass = localStorage.getItem('username');
    

let navigate = useNavigate();


const Demo=()=>{return ((useremail === email) && (userpass === password)) ? alert("Wrong credentials") : navigate('/Albums') ;}        

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </Form.Group>
        
        
        <Button block="true" size="lg" type="submit" onClick ={Demo} >
          Login
        </Button>
      </Form>
    </div>
  );
  }
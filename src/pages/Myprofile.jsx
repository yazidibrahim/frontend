import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Link } from 'react-router-dom';

export default function AddItem() {
  
  const inlineStyles = {
    fontFamily: 'serif',
    fontSize: '25px',
  };


        const handleClick = () => {
          alert('Logged In');
        };
    
    return (
    <div>
      <Container className="">
        <h1 className="mx-3"style={{ textAlign: 'center' }}> <span style={inlineStyles}>BOOTCART Login</span></h1><br></br>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="title"  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" name="desc" />
          </Form.Group>
          <Link to='/'>
          <Button variant="primary" onClick={handleClick} type="submit">
            Login
          </Button></Link>
          <div><br></br>OR <br></br><br></br>
          <Link to='/Signup'>
          <Button variant="primary"  >
            SIGNUP
          </Button></Link>
          </div>
        </Form>
      </Container>
    </div>
  );

}
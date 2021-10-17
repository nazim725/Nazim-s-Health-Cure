import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <>
        <Navbar bg="dark" variant="dark" sticky="top"  collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand href="#home">Nazim's Health Cure</Navbar.Brand>
          <Navbar.Toggle className="toggle"/>
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/services#services">Services</Nav.Link>
            <Nav.Link as={Link} to="/doctors#doctors">Doctors</Nav.Link>
            <Nav.Link as={Link} to="/ambulance#ambulance">Ambulance</Nav.Link>
            <Nav.Link as={Link} to="/about#about">About Us</Nav.Link>
            <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            </Navbar.Collapse>
          <Nav className="me-auto">
            
          </Nav>
            
           
          </Container>
        </Navbar>
        

     
      </>
           
            
        </div>
    );
};

export default Header;
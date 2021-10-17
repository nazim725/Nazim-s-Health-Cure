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
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/services#services">Services</Nav.Link>
            <Nav.Link as={Link} to="/doctors#doctors">Doctors</Nav.Link>
            <Nav.Link as={Link} to="/ambulance#ambulance">Ambulance</Nav.Link>
          </Nav>
             <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        

     
      </>
           
            
        </div>
    );
};

export default Header;
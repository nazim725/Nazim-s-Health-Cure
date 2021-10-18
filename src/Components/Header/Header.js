import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user,logout}=useAuth()
    return (
        <div>
             <>
        <Navbar bg="dark" variant="dark" sticky="top"  collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand href="#home">Nazim's Health Cure</Navbar.Brand>
          <Navbar.Toggle className="toggle"/>
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/services#services">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/doctors#doctors">Doctors</Nav.Link>
            <Nav.Link as={HashLink} to="/ambulance#ambulance">Ambulance</Nav.Link>
            <Nav.Link as={HashLink} to="/about#about">About Us</Nav.Link>
            {
              user?.email?
              <button onClick={logout} className="btn btn-secondary me-2">Logout</button>
              :
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            }
            
            <Navbar.Text>
                Signed in as:{user.email &&  <a className='ms-3' href="">{user?.displayName}</a>}
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
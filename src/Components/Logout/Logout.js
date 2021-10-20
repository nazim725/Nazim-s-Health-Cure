
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Redirect } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Home from './../Home/Home';

const Logout=()=> {
    const {logout,user}=useAuth()
    const [show, setShow] = useState(true);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  
  
    return (
       
       <div>

         <Home></Home>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Nazim's Health Cure</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are You want to logout?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                No
              </Button>
              {
                  user.email?
                  <Button  variant="primary" onClick={() => { logout(); handleShow();}}>
                Logout
              </Button>
              :
              <Redirect to='/home'></Redirect>
              }
            </Modal.Footer>
          </Modal>

       </div>
          
      
    );

    
  }
  
  export default Logout
 
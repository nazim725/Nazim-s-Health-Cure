
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Redirect } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Logout=()=> {
    const {logout,user}=useAuth()
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(false);
  
    return (
      
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
      
    );

    
  }
  
  export default Logout
 
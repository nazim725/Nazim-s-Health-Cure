import React from 'react';
import './Doctor.css'
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
    const {id,name,img,Designation,fee}=props.doctor
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                    <Card className="doctor-card">
                        <Card.Img className="doctor-img" variant="top" src={img} />
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                         <h4>{Designation}</h4> 
                         <p className="text-warning fw-bold"> ${fee}</p>
                         <Link to={`doctorDetails/${id}`}><button className="btn btn-warning fw-bold">See More <i class="fas fa-long-arrow-alt-right"></i></button></Link>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
                </Row>
        </div>
    );
};

export default Doctor;
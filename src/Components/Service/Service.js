import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const{id,name,description,img,price,subtitle}=props.service
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                    <Card className="service-card border-0">
                        <Card.Img className="service-img" variant="top" src={img} />
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                         <h4>{subtitle}</h4> 
                         <p> ${price}</p>
                         <Link to={`serviceDetails/${id}`}><button className="btn btn-warning">See More <i class="fas fa-long-arrow-alt-right"></i></button></Link>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
                </Row>
            
            
        </div>
    );
};

export default Service;
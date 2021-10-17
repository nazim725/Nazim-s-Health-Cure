import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ServiceDetails.css'

const Servicedetails = () => {
    const {serviceId}=useParams()
    const [service,setService]=useState({})
    console.log(serviceId)
    const url=`https://my-json-server.typicode.com/nazim725/Services/posts/${serviceId}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[serviceId])
    return (
        <div className="mx-auto">
            
            <Card className="w-50 mx-auto">
            <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{service.subtitle}</Card.Subtitle>
                <Card.Text>
                <p>{service.price}</p>
                <p>{
                   service.description
               }</p>
                </Card.Text>
              <button className="btn btn-primary">Place Order</button>
            </Card.Body>
            </Card>
            
        </div>
    );
};

export default Servicedetails;
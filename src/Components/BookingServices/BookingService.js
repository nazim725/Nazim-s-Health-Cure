import React, { useEffect, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const BookingService = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({})
    console.log(serviceId)
    const url = `https://my-json-server.typicode.com/nazim725/Services/posts/${serviceId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])
    return (
        <Form className='booking-form'>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control value={service.name} />
                </Form.Group>
            </Row>
            <Row>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Doctor's Designation</Form.Label>
                    <Form.Control value={service.subtitle} />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control value={service.price} />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Patient's Name</Form.Label>
                    <Form.Control placeholder="Patient's Name" />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Patien's Address </Form.Label>
                    <Form.Control placeholder="Patient's Address" />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Patien's Phone No </Form.Label>
                    <Form.Control placeholder="Patient Phone No" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Dhaka</option>
                        <option>Chittagong</option>
                        <option>Borishal</option>
                        <option>Sylhet</option>
                        <option>Rajshahi</option>
                        <option>Rongpur</option>
                        <option>Khulna</option>
                        <option>MymenSingh</option>

                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="success" type="submit">
                Booking Confirm
            </Button>
        </Form>

    );
};

export default BookingService;
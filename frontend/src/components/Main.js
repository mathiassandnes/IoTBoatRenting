import React, {useEffect, useState} from "react";
import {Button, Form, ListGroup} from "react-bootstrap";

export const Main = () => {

    const axios = require('axios');

    const [doorOpenings, setDoorOpenings] = useState([]);
    const [threshold, setThreshold] = useState(10);

    useEffect(() => {
        axios.get('http://localhost:5000/door')
            .then(res =>
                setDoorOpenings(res.data[0].doorOpenings)
            ).catch(error => console.log(error))
    }, []);

    const total = doorOpenings.length

    const handleClick = () => {
        axios.post('http://localhost:5000/setLimit', {limit: threshold})
            .catch(error => console.log(error))
    }

    return (
        <>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label># of openings for notification</Form.Label>
                    <Form.Control onChange={e => setThreshold(e.target.value)} placeholder={threshold} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Submit
                </Button>
            </Form>

            <h6>Total door openings: {total}</h6>
            <ListGroup>{doorOpenings.map(timestamp => {
                const ts = new Date(timestamp * 1000)
                return <ListGroup.Item>{ts.toUTCString()}</ListGroup.Item>
            })}</ListGroup>
        </>
    )
}

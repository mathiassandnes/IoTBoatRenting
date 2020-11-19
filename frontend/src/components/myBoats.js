import Card from "react-bootstrap/Card";
import React from "react";
import Button from "react-bootstrap/Button";



export const MyBoats = (props) => {
    const axios = require('axios');

    const boat = props.boats[0]
    return (<>
        <Card>
            <Card.Img variant="top" src={boat.image}/>
            <Card.Body className={"rounded"}>
                <Card.Title className={"text-left"}> {boat.name}</Card.Title>
                <Card.Text className={"text-left"}>Modell: {boat.model}</Card.Text>
            </Card.Body>
        </Card>
        <Button variant="primary"
                onClick={() => axios.post('http://localhost:5000/status', {open: true}).catch(error => console.log(error))}> open
            lock </Button>
        <Button variant="primary"
                onClick={() => axios.post('http://localhost:5000/status', {open: false}).catch(error => console.log(error))}> close
            lock </Button>

    </>)
}

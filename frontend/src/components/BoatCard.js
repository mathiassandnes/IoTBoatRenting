import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import React from "react";

export const BoatCard = (props) => {

    return (
        <Col sm={12} md={6} lg={4} xl={3}>
            <Card onClick={() => props.handleShow(props.boat, props.index)}>
                <Card.Img variant="top" src={props.boat.image}/>
                <Card.Body className={"rounded"}>
                    <Card.Title className={"text-left"}> {props.boat.name}</Card.Title>
                    <Card.Text className={"text-left"}>Modell: {props.boat.model}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

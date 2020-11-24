import React, {useEffect, useState} from 'react'
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import {MyMapComponent} from "./Map";
import {BoatCard} from "./BoatCard";
import { useHistory } from "react-router-dom";

export const Boat = (props) => {
    const axios = require('axios');


    const [show, setShow] = useState(false)
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [model, setModel] = useState("")
    const [lng, setLng] = useState("")
    const [lat, setLat] = useState("")
    const [index, setIndex] = useState(0)

    useEffect(() => {
        axios.get('http://localhost:5000/boat')
            .then(res => {
                    setLat(res.data[0].latitude)
                    setLng(res.data[0].longitude)
                }
            ).catch(error => console.log(error))

    }, []);

    const handleClose = () => setShow(false)
    const handleShow = (boat, index) => {
        setShow(true)
        setDescription(boat.description)
        setName(boat.name)
        setModel(boat.model)
        setIndex(index)
    }

    const history = useHistory();

    const handleClick = () => {
        history.push({pathname: "/myboats", data: [index]})
    }

    return (
        <Container align={"center"}>
            <Row>
                {
                    props.boats.map((boat, index) => <BoatCard boat={boat} handleShow={handleShow} index={index}/>
                    )
                }

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5> Beskrivelse: </h5>
                        <p> {description} </p>
                        <h5> Modell: </h5>
                        <p> {model} </p>

                        <MyMapComponent isMarkerShown={true} lat={lat} lng={lng} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Lukk
                        </Button>
                        <Button variant="primary" onClick={handleClick}>
                            Lei båt
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        </Container>)
}

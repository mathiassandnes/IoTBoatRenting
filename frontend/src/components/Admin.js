import React, {useState} from "react";
import {Form, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


export const Admin = (props) => {
    const axios = require('axios')
    const [show, setShow] = useState(false)
    const [GPSFrequency, setGPSFrequency] = useState(60)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleClick = () => {
        axios.post('http://localhost:5000/gpsFrequency', {gpsFrequency: GPSFrequency}).catch(error => console.log(error))
    }

    return (<>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Båt ID</th>
                <th>Navn</th>
                <th>Beskrivelse</th>
                <th>Model</th>
                <th>Lengedegrad</th>
                <th>Breddegrad</th>
                <th>Bilde</th>
                <th>Instillinger</th>

            </tr>
            </thead>
            <tbody>

            {props.boats.map(boat =>
                <tr>
                    <td>{boat.id.toString()}</td>
                    <td>{boat.name}</td>
                    <td>{boat.description}</td>
                    <td>{boat.model}</td>
                    <td>{boat.latitude}</td>
                    <td>{boat.longitude}</td>
                    <td>{boat.image}</td>
                    <td>
                        <Button variant="primary" onClick={handleShow}>
                            GPS Frekvens
                        </Button>
                    </td>
                </tr>
            )}

            </tbody>
        </Table>


        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>GPS Frekvens</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Sekunder mellom oppdateringer</Form.Label>
                        <Form.Control onChange={e => setGPSFrequency(e.target.value)}
                                      placeholder="60"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Lukk
                </Button>
                <Button variant="primary" onClick={handleClick}>
                    Lagre
                </Button>
            </Modal.Footer>
        </Modal>

    </>)
}

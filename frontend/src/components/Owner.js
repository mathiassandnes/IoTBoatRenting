import React, {useState} from 'react'
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import {Boat} from "./Boat";

export const Owner = (props) => {

    const boats = props.boats

    const [show, setShow] = useState(false)
    const [name, setName] = useState("")
    const [index, setIndex] = useState(0)
    const [description, setDescription] = useState("")
    const [imagePath, setImagePath] = useState("")
    const [model, setModel] = useState("")


    const handleClose = () => setShow(false)
    const handleShow = (boat, index) => {
        setShow(true)
    }

    const handleForm = () => {

        boats.push({name, description, image: imagePath, model})

        handleClose()
    }
    return (
        <>
            <Boat boats={props.boats}/>

            <Button variant="primary" onClick={() => handleShow()}> Legg til båt </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add boat</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Navn</Form.Label>
                            <Form.Control value={name} onChange={e => setName(e.target.value)}/>

                            <Form.Label>Beskrivelse</Form.Label>
                            <Form.Control value={description} onChange={e => setDescription(e.target.value)}/>

                            <Form.Label>Bilde</Form.Label>
                            <Form.Control value={imagePath} onChange={e => setImagePath(e.target.value)}/>

                            <Form.Label>Modell</Form.Label>
                            <Form.Control value={model} onChange={e => setModel(e.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Lukk
                    </Button>
                    <Button variant="primary" onClick={handleForm}>
                        Legg til båt
                    </Button>
                </Modal.Footer>
            </Modal>
        </>)
}

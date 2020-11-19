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

            <Button variant="primary" onClick={() => handleShow()}> Add boat </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add boat</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control value={name} onChange={e => setName(e.target.value)}
                                          placeholder="Enter Name"/>
                            <Form.Control value={description} onChange={e => setDescription(e.target.value)}
                                          placeholder="Enter Description"/>
                            <Form.Control value={imagePath} onChange={e => setImagePath(e.target.value)}
                                          placeholder="Enter path to image"/>
                            <Form.Control value={model} onChange={e => setModel(e.target.value)}
                                          placeholder="Enter boat model"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleForm}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>)
}

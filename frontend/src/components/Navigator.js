import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link, Route, Switch} from "react-router-dom";
import {Main} from "./Main";

export const Navigator = () => {
    return (
        <>
            <Navbar bg="dark">
                <Navbar.Brand className="text-light" >Door Monitor</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="text-light" as={Link} to="/">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container>
                <Switch>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                </Switch>
            </Container>
        </>
    )
}

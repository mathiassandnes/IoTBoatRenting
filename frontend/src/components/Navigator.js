import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link, Route, Switch} from "react-router-dom";

import {Boat} from "./Boat";
import {Owner} from "./Owner";
import {Admin} from "./Admin";
import {MyBoats} from "./myBoats";

export const Navigator = (props) => {
    return (
        <>
            <Navbar bg="dark">
                <Navbar.Brand className="text-light" >Nabobåt</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="text-light" as={Link} to="/">Hjem</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/admin">Admin</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/owner">For Eiere</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container>
                <Switch>
                    <Route exact path="/">
                        <Boat boats={props.boats}/>
                    </Route>
                    <Route path="/boats">
                        <Boat boats={props.boats}/>
                    </Route>
                    <Route path="/owner">
                        <Owner boats={props.boats}/>
                    </Route>
                    <Route path="/admin">
                        <Admin boats={props.boats}/>
                    </Route>
                    <Route path="/myboats">
                        <MyBoats boats={props.boats}/>
                    </Route>
                </Switch>
            </Container>
        </>
    )
}

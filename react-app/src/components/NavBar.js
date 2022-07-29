import React from "react";
// import Def from "../default";
import {Navbar, Nav, Container} from "react-bootstrap";

function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="./home.js">Home</Nav.Link>
                    <Nav.Link href="./donate.js">Donate</Nav.Link>
                    <Nav.Link href="./about.js">About</Nav.Link>
                    <Nav.Link href="/LoginForm.js">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>


    )
}

export default NavBar;
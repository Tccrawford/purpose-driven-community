import React from "react";
// import Def from "../default";
import {Navbar, Nav, Container} from "react-bootstrap";


function NavBar(){
    return(
        <Navbar>
            <Container>
                <Nav>
                    <Nav className="custom-navbar-brand">Purpose Driven Community</Nav>
                    <Nav.Link className="custom-navbar-elements" href="./">Home </Nav.Link>
                    <Nav.Link className="custom-navbar-elements" href="./donate">Donate </Nav.Link>
                    <Nav.Link className="custom-navbar-elements" href="./about">About </Nav.Link>
                    <Nav.Link className="custom-navbar-elements" href="/register">Register </Nav.Link>
                    <Nav.Link className="custom-navbar-elements" href="/login">Login </Nav.Link>
                    
                </Nav>
            </Container>
        </Navbar>


    )
}

export default NavBar;
import React from 'react';
import { Navbar, Nav, Form, FormControl, Button,NavDropdown } from 'react-bootstrap';
import "./NavBar.css";

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "./NavBar.css";

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Resume Bilder</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Create</Nav.Link>
                    <Nav.Link href="#link">Edit</Nav.Link>
                    <Nav.Link href="#link">View</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
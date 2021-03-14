import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "./NavBar.css";
import { Link } from 'react-router-dom';


function NavBar(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Resume Builder</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {props.id === "home" &&
                    <Link to="/create-resume">Create New Resume</Link>}
                    {props.id === "view-resume" &&
                    <Link to ="/create-resume">Edit</Link>}
                    {props.id === "resume-form" && 
                    <Link  to="/view-resume" >View</Link>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
export default function NavBar()
{
    return(
        <div>
           <Navbar collapseOnSelect expand="lg" className="frosted" fixed="top" variant="light">
            <Navbar.Brand href="/">CGPA Calculator</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Features</Nav.Link>
                <Nav.Link href="/">Support</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">Contribute</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Compare CGPA
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}
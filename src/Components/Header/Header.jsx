import React from 'react';
import {Nav,Navbar} from 'react-bootstrap'

function Header(){
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Shop.kj</Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
            <br />
        </div>
    )
}

export default Header;
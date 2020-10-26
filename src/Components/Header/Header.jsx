import React from 'react';
import {Nav,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom';

function Header({cart}){
    return(
        <div >
            <Navbar  bg="dark" variant="dark">
                <Link to="/products"><h2 style={{color:"white"}}>Shop.kj</h2></Link>
                <Nav className="ml-auto">
                <Link className="m-2" to="/products"><h5 style={{color:"white"}}>Products</h5></Link>
    <Link className="m-2" to="/cart"><h5 style={{color:"white"}}>Cart-({cart.length})</h5></Link>
                </Nav>
            </Navbar>
            <br />
        </div>
    )
}

export default Header;
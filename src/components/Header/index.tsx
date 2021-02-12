import {Navbar,Nav} from 'react-bootstrap';
import './style.css'
import {Link} from 'react-router-dom';
import React from 'react';


export const Header =()=>{
    return(
        <div className="bg-dark">
            <Navbar className="nav-head" collapseOnSelect expand="lg">
            <Navbar.Brand ><img src='https://www.spacex.com/static/images/share.jpg' width="250px" height="100px" alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="nav-side" id="responsive-navbar-nav">
                <Nav>
                <Nav.Link><Link className="nav-linkl" to="/">Home</Link></Nav.Link>
                <Nav.Link eventKey={2}>
                    <Link className="nav-linkl" to="/launch">Launches</Link>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            </div>
    )
}
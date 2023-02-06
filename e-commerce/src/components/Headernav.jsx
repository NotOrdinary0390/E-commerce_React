import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BoxArrowInRight, PersonFillAdd } from 'react-bootstrap-icons';
import logo from '../img/logo.svg'


export default function Headernav() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='sticky-lg-top'>
                <Container>
                    <Navbar.Brand href="#" className='textN'>
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="imgNav d-inline-block align-top" />
                        e-commerce REACT
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/admin" className="nav-link">Admin</NavLink>
                            <NavLink to="/users" className="nav-link">Users</NavLink>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <NavLink to="/login" className="nav-link">
                                <BoxArrowInRight className="display-" />
                            </NavLink>
                            <NavLink to="/signup" className="nav-link">
                                <PersonFillAdd className="" />
                            </NavLink>
                            <NavLink to="/Logout" className="nav-link">
                                Logout
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

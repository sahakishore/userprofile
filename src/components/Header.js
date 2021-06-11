import React from 'react'

import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

function Header() {
  

  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
          <Container>
        <Navbar.Brand href="/">User Profile</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Link</Nav.Link>
            
           {/* DropDown List */}
           <Nav className="ml-auto">
                <NavDropdown title="Sort By" id="basic-nav-dropdown">
                  <i className="far fa-sort-size-down"></i>
                    <NavDropdown.Item href="#action/3.1">None</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">First Name</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">Last Name</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            
            </Nav>
           
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  )
}

export default Header

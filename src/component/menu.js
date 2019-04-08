import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

const menu = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Comic Products</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Promoções</Nav.Link>
        <Nav.Link href="#link">Favoritos</Nav.Link>
        <Nav.Link href="#link">Comprados</Nav.Link>
        <Nav.Link href="#link">Cadastro</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default menu;
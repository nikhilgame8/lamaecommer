import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FiSearch } from 'react-icons/fi';
import { SlUser } from 'react-icons/sl';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cart from './Cart';
import styled from 'styled-components';
import { FetchedData } from '../pages/Home';
import LoginPage from "./LoginPage";

const UserContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 30px;

@media (max-width: 600px) {
  position: absolute;
  right: 6rem;
}
@media (min-width: 601px)and (max-width: 900px) {
  position: absolute;
  right: 10rem;
}
`

const NavbarMain = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = (event) => setShow(false);
  const handleShow = () => setShow(true);
  const cartItems = useSelector((state) => state.changeTheNumber);
  const numOfItems = cartItems.length;
  const {pages, setPages} = useContext(FetchedData);

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link className="navbar-brand" to="/" style={{ fontSize: "30px" }} >LAMA</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/newLaunches" >NEW LAUNCHES</Link>
            <Link className="nav-link" to="/topwear" >TOP WEAR</Link>
            <Link className="nav-link" to="/bottomwear" >BOTTOM WEAR</Link>
            <NavDropdown title="FASHION" id="collasible-nav-dropdown">
              <Link className="dropdown-item" to="/winterwear">WINTER WEAR</Link>
              <NavDropdown.Item href="#action/3.2">
                COSMETICS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FOOTWEAR</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                PLUS SIZE
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light"><FiSearch /></Button>
          </Form>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Dank mode"
                /></Form>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <UserContainer>
        <LoginPage/>
        <button type="button" className="btn btn-light position-relative" onClick={handleShow}><RiShoppingCartLine />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{numOfItems}
          </span>
        </button>
        <Cart show={show} handleClose={handleClose} />
      </UserContainer>
    </Navbar>
  )
}

export default NavbarMain

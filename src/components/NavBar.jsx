import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const NavBar = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container className="container-navBar">
					<Navbar.Brand as={Link} to="/">
						<h1>Pretti Commerce</h1>
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/login">
							Login
						</Nav.Link>
						<Nav.Link as={Link} to="/purchases">
							Purchases
						</Nav.Link>
						<Nav.Link onClick={handleShow}>Cart</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<Cart show={show} handleClose={handleClose} />
		</>
	);
};

export default NavBar;

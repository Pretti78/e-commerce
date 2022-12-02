import React, { useEffect, useState } from 'react';
import { Button, Card, ListGroup, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { confirmBuyThunk, getCartThunk } from '../store/slices/cart.slice';

const Cart = ({ show, handleClose }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCartThunk());
	}, []);

	const cartProducts = useSelector((state) => state.cart);

	return (
		<Offcanvas show={show} onHide={handleClose}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title style={{ fontSize: '2rem' }}>Cart</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body style={{ margin: 'auto' }}>
				{cartProducts.map((product) => (
					<Card style={{ width: '18rem', margin: '1rem' }}>
						<Card.Body>
							<Card.Title>{product.title}</Card.Title>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroup.Item>{product.brand}</ListGroup.Item>
							<ListGroup.Item>{product.price}</ListGroup.Item>
						</ListGroup>
					</Card>
				))}
				<Button
					onClick={() => dispatch(confirmBuyThunk())}
					className="position-absolute bottom-10 start-50 translate-middle-x"
				>
					Confirm Buy
				</Button>
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default Cart;

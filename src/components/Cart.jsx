import React, { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk } from '../store/slices/cart.slice';

const Cart = ({ show, handleClose }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCartThunk());
	}, []);

	const cartProducts = useSelector((state) => state.cart);

	return (
		<Offcanvas show={show} onHide={handleClose}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Cart</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				{cartProducts.map((product) => (
					<div>{product.title}</div>
				))}
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default Cart;

import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPurchasesThunk());
	}, []);

	const purchasesList = useSelector((state) => state.purchases);

	return (
		<div>
			<h1>soy purchases</h1>
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>date</th>
						<th>Name Product</th>
						<th>Price</th>
						<th>Brand</th>
					</tr>
				</thead>
				<tbody>
					{purchasesList.map((purchases) => (
						<>
							{purchases.cart.products.map((product) => (
								<tr key={product.id}>
									<td>{product.createdAt}</td>
									<td>{product.title}</td>
									<td>{product.price}</td>
									<td>{product.brand}</td>
								</tr>
							))}
						</>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default Purchases;

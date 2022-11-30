import React, { useEffect } from 'react';
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
		</div>
	);
};

export default Purchases;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPurchasesThunk());
	}, []);

	return (
		<div>
			<h1>soy purchases</h1>
		</div>
	);
};

export default Purchases;

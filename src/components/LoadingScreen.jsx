import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../styles/isLoading.css';

const LoadingScreen = () => {
	return (
		<div className="spinner">
			<div className="lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			{/* <Spinner animation="border" variant="dark" /> */}
		</div>
	);
};

export default LoadingScreen;

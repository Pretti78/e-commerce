import React from 'react';
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
		</div>
	);
};

export default LoadingScreen;

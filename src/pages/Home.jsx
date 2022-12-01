import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
	Button,
	Card,
	Col,
	Form,
	InputGroup,
	ListGroup,
	Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	filterProducts,
	getNewProduct,
	productsCategory,
} from '../store/slices/products.slice';
import '../styles/home.css';

const Home = () => {
	const [categoriesList, setCategoriesList] = useState([]);

	const [inputValue, setInputValue] = useState('');

	const dispatch = useDispatch();

	const products = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(getNewProduct());
		axios
			.get('https://e-commerce-api.academlo.tech/api/v1/products/categories')
			.then((res) => setCategoriesList(res.data.data.categories));
	}, []);

	return (
		<div>
			<Row>
				<Col lg={3}>
					<ListGroup>
						{categoriesList.map((categories) => (
							<ListGroup.Item
								onClick={() => dispatch(productsCategory(categories.id))}
								key={categories.id}
								style={{ cursor: 'pointer', fontSize: '1.5rem' }}
							>
								{categories.name}
							</ListGroup.Item>
						))}
					</ListGroup>
				</Col>
				<Col lg={9}>
					<div className="buttons-and-inputs-home-container">
						<InputGroup className="mb-3">
							<Form.Control
								placeholder="Search Product"
								aria-label="Search Product"
								aria-describedby="basic-addon2"
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
							/>
							<Button
								variant="outline-secondary"
								id="button-addon2"
								onClick={() => dispatch(filterProducts(inputValue))}
							>
								Button
							</Button>
						</InputGroup>
					</div>
					<Row xs={1} md={2} lg={3}>
						{products.map((product) => (
							<Col key={product.id}>
								<Link
									to={`/products/${product.id}`}
									style={{ textDecoration: 'none' }}
								>
									<Card
										style={{ width: '25rem', height: '32rem', margin: '1rem' }}
									>
										<Card.Img
											variant="top"
											src={product.productImgs?.[0]}
											style={{ height: 200, objectFit: 'contain' }}
										/>
										<Card.Body>
											<Card.Title className="fs-3">{product.title}</Card.Title>
											<Card.Text
												className="fs-3 position-absolute bottom-0 start-0"
												style={{ marginBottom: 0 }}
											>
												${product.price}
											</Card.Text>
											<Button
												variant="primary"
												className="position-absolute bottom-0 end-0"
											>
												product detail
												{/* <i
													className="fa-solid fa-cart-shopping"
													style={{ fontSize: '1.3rem', width: '2.5rem' }}
												></i> */}
											</Button>
										</Card.Body>
									</Card>
								</Link>
							</Col>
						))}
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default Home;

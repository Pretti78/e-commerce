import React, { useEffect } from 'react';
import { Button, Card, Carousel, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getNewProduct } from '../store/slices/products.slice';

const ProductDetail = () => {
	const { id } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getNewProduct());
	}, []);

	const productList = useSelector((state) => state.products);

	const product = productList?.find(
		(productItem) => productItem.id === Number(id)
	);

	const relatedProducts = productList.filter(
		(productItem) =>
			productItem.category?.id === product.category?.id &&
			productItem.id !== product.id
	);
	console.log(product);

	return (
		<div>
			<Row xs={1} md={2} lg={2}>
				<Col lg={6}>
					<Carousel variant="dark" className="bg-light">
						<Carousel.Item>
							<img
								src={product?.productImgs?.[0]}
								alt=""
								className="img-product-list img-fluid d-block w-100"
								style={{ height: 350, objectFit: 'contain' }}
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src={product?.productImgs?.[1]}
								alt=""
								className="img-product-list img-fluid d-block w-100"
								// style={{ height: '35rem', width: '20rem' }}
								style={{ height: 350, objectFit: 'contain' }}
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src={product?.productImgs?.[2]}
								alt=""
								className="img-product-list img-fluid d-block w-100"
								// style={{ height: '35rem', width: '20rem' }}
								style={{ height: 350, objectFit: 'contain' }}
							/>
						</Carousel.Item>
					</Carousel>
				</Col>
				<Col lg={6}>
					<h1>{product?.title}</h1>
					<br />
					<br />
					<br />
					<h4>{product?.description}</h4>

					<Button
						className="btn btn-primary"
						style={{ width: '8rem', marginTop: '1rem' }}
					>
						buy
					</Button>
				</Col>
			</Row>

			<ListGroup horizontal>
				{relatedProducts.map((product) => (
					// {['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint) => (
					// <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
					<ListGroup.Item key={product.id}>
						<Link
							to={`/products/${product.id}`}
							style={{ textDecoration: 'none' }}
						>
							<Card style={{ width: '25rem', height: '32rem', margin: '1rem' }}>
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
										<p style={{ marginBottom: 0 }}>${product?.price}</p>
									</Card.Text>
									<Button
										variant="primary"
										className="position-absolute bottom-0 end-0"
									>
										View Details
									</Button>
								</Card.Body>
							</Card>
						</Link>
					</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	);
};

export default ProductDetail;

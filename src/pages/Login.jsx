import axios from 'axios';
import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const { register, handleSubmit } = useForm();

	const navigate = useNavigate();

	const submit = (data) => {
		axios
			.post('https://e-commerce-api.academlo.tech/api/v1/users/login', data)
			.then((res) => {
				navigate('/');
				localStorage.setItem('token', res.data.data.token);
			})
			.catch((error) => {
				if (error.response.status === 404) {
					alert('el mail o la contraseña son incorrectas');
				} else console.log(error.response?.data);
			});
	};

	return (
		<Form onSubmit={handleSubmit(submit)}>
			<Card
				style={{ width: '40rem', height: '20rem' }}
				className="mx-auto shadow p-3 mb-5 bg-body rounded"
			>
				<Card.Body>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							{...register('email')}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							{...register('password')}
						/>
					</Form.Group>
				</Card.Body>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Card>
		</Form>
	);
};

export default Login;

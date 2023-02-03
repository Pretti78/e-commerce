import './styles/App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Purchases from './pages/Purchases';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import LoadingScreen from './components/LoadingScreen';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
	const isLoading = useSelector((state) => state.isLoading);

	return (
		<HashRouter>
			<NavBar />
			{isLoading && <LoadingScreen />}
			<Container className="my-5">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products/:id" element={<ProductDetail />} />
					<Route path="/login" element={<Login />} />
					<Route element={<ProtectedRoutes />}>
						<Route path="/purchases" element={<Purchases />} />
					</Route>
				</Routes>
				<footer style={{ textAlign: 'center', fontSize: '1.5rem' }}>
					<p>page desarrolada al 100% por Pretti Omar</p>

					<a href="https://www.linkedin.com/in/pretti-omar/">Linkedin</a>
					<br />
					<a href="https://github.com/Pretti78">Git Hub</a>
				</footer>
			</Container>
		</HashRouter>
	);
}

export default App;

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
			</Container>
		</HashRouter>
	);
}

export default App;

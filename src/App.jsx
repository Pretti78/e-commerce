import './style/App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Inicio';
import ListaProductos from './pages/ListaProductos';
import ProductoDetallado from './pages/ProductoDetallado';
import Compras from './pages/Compras';
import Devolucion from './pages/Devolucion';
import { useSelector } from 'react-redux';
import LoadingScreen from './components/LoadingScreen';

function App() {
	const isLoading = useSelector((state) => state.isLoading);

	return (
		<HashRouter>
			<NavBar />
			{isLoading && <LoadingScreen />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/productos" element={<ListaProductos />} />
				<Route path="/productos/:id" element={<ProductoDetallado />} />
				<Route path="/compras" element={<Compras />} />
				<Route path="/devolucion" element={<Devolucion />} />
			</Routes>
		</HashRouter>
	);
}

export default App;

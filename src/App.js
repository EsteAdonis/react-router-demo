import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
import { NoMatch } from './components/NoMatch';
import { FeatureProduct } from './components/FeatureProduct';
import { NewProduct } from './components/NewProduct';

function App() {
  return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path='about' element={<About />}></Route>			
				<Route path='order-summary' element={<OrderSummary />} />
				<Route path='products' element={<Products />}>
					<Route path='featured' element={<FeatureProduct />} />
					<Route path='new' element={<NewProduct />} />
				</Route>
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</>		
  );
}

export default App;

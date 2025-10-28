import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { AuthProvider } from './components/auth';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
import { NoMatch } from './components/NoMatch';
import { FeatureProduct } from './components/FeatureProduct';
import { NewProduct } from './components/NewProduct';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import { Profile } from './components/Profile';
import { Login } from './components/Login';
import { RequiredAuth } from './components/RequiredAuth';

// import { About } from './components/About';
const LazyAbout = React.lazy(() => import('./components/About'));

function App() {
  return (
		<AuthProvider >
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>

				<Route 
					path='about' 
					element={
							<React.Suspense fallback='Loading...'>
								<LazyAbout />
							</React.Suspense>}>
				</Route>			

				<Route path='order-summary' element={<OrderSummary />} />

				<Route path='products' element={<Products />}>
					<Route index element={<FeatureProduct />} />
					<Route path='featured' element={<FeatureProduct />} />
					<Route path='new' element={<NewProduct />} />
				</Route>

				<Route path='users' element={<Users />}>
					<Route path=':userId' element={<UserDetails />}/>
					<Route path='admin' element={<Admin />}/>
				</Route>

				<Route 
					path='profile' 
					element={
						<RequiredAuth >
							<Profile />
						</RequiredAuth>							
					} 
				/>

				<Route path='login' element={<Login />} />				

				<Route path="*" element={<NoMatch />} />
			</Routes>
		</AuthProvider>	
  );
}

export default App;

import {NavLink} from 'react-router-dom';
import { useAuth } from './auth';

export const Navbar = () => {
	const navLinkStyle = ({ isActive }) => {
		return {
			fontWeight: isActive ? 'bold' : 'normal',
			TextDecoration: isActive ? 'none': 'underline'
		}
	}

	const auth = useAuth();

	return (
		<nav className='primary-nav'>
			<NavLink to="/" style={navLinkStyle}>Home</NavLink>
			<NavLink to="/about" style={navLinkStyle}>About</NavLink>
			<NavLink to="/products" style={navLinkStyle}>products</NavLink>			
			<NavLink to="/profile" style={navLinkStyle}>profile</NavLink>			
			{
				!auth.user && 
				<NavLink to="/login" style={navLinkStyle}>Login</NavLink>
			}
		</nav>
	)
}

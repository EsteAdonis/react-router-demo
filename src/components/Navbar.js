import {NavLink} from 'react-router-dom';

export const Navbar = () => {
	const navLinkStyle = ({ isActive }) => {
		return {
			fontWeight: isActive ? 'bold' : 'normal',
			TextDecoration: isActive ? 'none': 'underline'
		}
	}
	return (
		<nav className='primary-nav'>
			<NavLink to="/" style={navLinkStyle}>Home</NavLink>
			<NavLink to="/about" style={navLinkStyle}>About</NavLink>
			<NavLink to="/products" style={navLinkStyle}>products</NavLink>			
		</nav>
	)
}

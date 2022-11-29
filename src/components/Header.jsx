import React from 'react'; 
import logo from '../assets/images/logo.png';
import '../styles/header.css';

const Header = () => {
	return(
			<div className="navbar">
				<div className="nav__links me-auto">
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Search</a></li>
					</ul>
				</div>
				<div className="nav__img me-auto ms-auto"><img src={logo} widht={60} height={60} alt="This is our clothing store logo" /></div>
				<div className="nav__links ms-auto">
					<ul>
						<li><a href="#">Login</a></li>
						<li><a href="#">Sign Up</a></li>
					</ul>
				</div>
			</div>

		)
}

export default Header;
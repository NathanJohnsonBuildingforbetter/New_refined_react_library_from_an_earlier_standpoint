import React from 'react';
import Logo from '../assets/Library.svg';
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure>
                            <img src={Logo} alt="Library Logo" className="footer__logo--img"/>
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className='footer__link'>Home</Link>
                        <span className='footer__link no-cursor'>About</span>
                        <Link to="/books" className='footer__link'>Books</Link>
                        <Link to="/cart" className='footer__link'>Cart</Link    >
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; {new Date().getFullYear()} Library. All rights reserved.
                    </div>
                </div>
            </div>
		
		</footer>
	);
}

export default Footer;

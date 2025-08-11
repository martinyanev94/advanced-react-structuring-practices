import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // This should be placed under styles/

const Header = () => {
    return (
        <header className="app-header">
            <h1>Social Media App</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </nav>
        </header>
    );
};

export default Header;

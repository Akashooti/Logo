import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/" className="text-gray-600">Home</Link></li>
          <li><Link to="/features" className="text-gray-600">Features</Link></li>
          <li><Link to="/pricing" className="text-gray-600">Pricing</Link></li>
          <li><Link to="/contact" className="text-gray-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to have react-router-dom installed

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold animate-bounce">
          <Link to="/" className="hover:text-gray-300 ">Logo</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 ">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/features" className="hover:text-gray-300">Tools</Link>
          <Link to="/pricing" className="hover:text-gray-300">Pricing</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          {/* <Link to="/wheather" className="hover:text-gray-300">wheather</Link> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button id="menu-toggle" className="text-white focus:outline-none">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="md:hidden hidden bg-blue-700">
        <div className="px-6 py-4">
          <Link to="/" className="block py-2 text-white hover:bg-blue-600">Home</Link>
          <Link to="/features" className="block py-2 text-white hover:bg-blue-600">Features</Link>
          <Link to="/pricing" className="block py-2 text-white hover:bg-blue-600">Pricing</Link>
          <Link to="/contact" className="block py-2 text-white hover:bg-blue-600">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu Toggle Script */}
      {/* <script>
        document.getElementById('menu-toggle').addEventListener('click', function() {
          const mobileMenu = document.getElementById('mobile-menu');
          mobileMenu.classList.toggle('hidden');
        });
      </script> */}
    </nav>
  );
}

export default Navbar;

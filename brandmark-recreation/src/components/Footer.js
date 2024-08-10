import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to have react-router-dom installed

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between mb-6">
          {/* Links Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul>
              <li>
                <Link to="/" className="block py-1 hover:text-gray-400">Home</Link>
              </li>
              <li>
                <Link to="/features" className="block py-1 hover:text-gray-400">Features</Link>
              </li>
              <li>
                <Link to="/pricing" className="block py-1 hover:text-gray-400">Pricing</Link>
              </li>
              <li>
                <Link to="/contact" className="block py-1 hover:text-gray-400">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="mb-2">123 Main Street, City, Country</p>
            <p className="mb-2">Email: <a href="mailto:info@mybrand.com" className="hover:text-gray-400">info@mybrand.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-gray-400">+123 456 7890</a></p>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-gray-200" aria-label="Facebook">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.1c0 5.5-4.5 10-10 10-5.5 0-10-4.5-10-10S6.5 2.1 12 2.1c5.5 0 10 4.5 10 10zM12 4.4c-3.9 0-7 3.2-7 7s3.1 7 7 7c1.7 0 3.2-0.7 4.4-1.8l-2.5-2.5c-0.8 0.5-1.7 0.8-2.7 0.8-2.2 0-4-1.8-4-4s1.8-4 4-4c2.2 0 4 1.8 4 4 0 0.8-0.1 1.6-0.4 2.3l2.6 2.6c1-1.2 1.7-2.7 1.7-4.4 0-3.9-3.1-7-7-7z"/></svg>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-gray-200" aria-label="Twitter">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3c-0.8 0.4-1.7 0.7-2.7 0.8 1-0.6 1.8-1.6 2.1-2.8-1 0.6-2.1 1.1-3.3 1.4-1-1-2.4-1.7-3.9-1.7-3 0-5.4 2.5-5.4 5.4 0 0.4 0 0.8 0.1 1.1-4.5-0.2-8.5-2.4-11.2-5.6-0.5 0.9-0.8 1.9-0.8 3 0 2.1 1.1 3.9 2.7 5-1 0-1.9-0.3-2.7-0.8 0 0 0 0 0 0.1 0 2.9 2.1 5.4 4.8 6-0.5 0.1-1 0.2-1.5 0.2-0.4 0-0.8 0-1.2-0.1 0.8 2.5 3.1 4.3 5.9 4.3-2.1 1.6-4.7 2.5-7.6 2.5-0.5 0-1 0-1.5-0.1 2.8 1.8 6.1 2.8 9.6 2.8 11.5 0 17.8-9.5 17.8-17.8 0-0.3 0-0.7 0-1.1 1.2-0.9 2.3-2.1 3.2-3.4z"/></svg>
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-200" aria-label="LinkedIn">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M4.1 3C4.1 1.3 5.4 0 7.1 0s3 1.3 3 3-1.3 3-3 3c-1.7 0-3-1.3-3-3zM6 5.3c-1.1 0-2-0.9-2-2 0-1.1 0.9-2 2-2s2 0.9 2 2-0.9 2-2 2zM6.1 8.7h-0.1v14h0.1v-14zM21 8.7h-0.1v-0.2c0-2.7-2.2-4.9-4.9-4.9-2.8 0-4.9 2.2-4.9 4.9v0.2h-0.1v-0.2h-4.5v14h4.5v-9.5c0-2.2 1.8-4 4-4 2.2 0 4 1.8 4 4v9.5h4.5v-14z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-4">
          <p className="text-sm align-middle flex justify-center">company</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

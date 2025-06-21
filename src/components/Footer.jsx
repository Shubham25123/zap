import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold text-blue-700 mb-2">ZAPZUP</h2>
          <p className="text-sm">
            Your one-stop shop for quality products. We bring the best deals just for you!
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/cart" className="hover:underline">Cart</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul className="space-y-1 text-sm">
            <li><span className="cursor-default">Electronics</span></li>
            <li><span className="cursor-default">Fashion</span></li>
            <li><span className="cursor-default">Home</span></li>
            <li><span className="cursor-default">Beauty</span></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <ul className="space-y-1 text-sm">
            <li>Email: support@zapzup.com</li>
            <li>Phone: +91 random</li>
            <li>Location: India</li>
          </ul>
        </div>
      </div>

      <div className="text-center py-4 text-sm border-t border-gray-300 dark:border-gray-600">
        © {new Date().getFullYear()} ZAPZUP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

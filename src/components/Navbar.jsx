import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const { cart } = useCart();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?search=${search}`);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-md text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight hover:opacity-90">
          🛒 ZapZup
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center gap-2 mt-2 sm:mt-0">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="px-3 py-1.5 rounded-md text-black"
          />
          <button
            type="submit"
            className="bg-white text-indigo-600 px-3 py-1.5 rounded-md font-semibold hover:bg-indigo-100">
            Go
          </button>
        </form>

        {/* Right Section */}
        <div className="flex items-center gap-4 mt-2 sm:mt-0 text-xl">
          {/* Cart Icon */}
          <Link to="/cart" className="relative hover:text-yellow-300 transition-all">
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white px-1.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="text-sm font-medium border px-3 py-1 rounded-md hover:bg-white hover:text-indigo-600 transition-all">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

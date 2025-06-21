import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product }) => {
  const { cart, addToCart } = useCart();
  const [clicked, setClicked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleAddToCart = () => {
    if (disabled) return;

    addToCart(product);
    setClicked(true);
    setDisabled(true);

    toast.success(`${product.title} added to cart`, {
      position: 'bottom-right',
      autoClose: 1500,
    });

    setTimeout(() => {
      setClicked(false);
      setDisabled(false);
    }, 1500);
  };

  return (
    <div
      className="border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col justify-between bg-white group cursor-pointer hover:-translate-y-1"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="font-semibold text-md text-gray-800 mb-1 line-clamp-2 group-hover:text-blue-600">
        {product.title}
      </h2>
      <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>

      <div className="mt-auto flex justify-between items-center">
        <Link
          to={`/product/${product.id}`}
          className="text-sm text-blue-600 hover:underline"
        >
          View
        </Link>
        <button
          onClick={handleAddToCart}
          disabled={disabled}
          className={`transition text-white px-3 py-1.5 rounded text-sm cursor-pointer ${
            clicked
              ? 'bg-green-700'
              : 'bg-green-500 hover:bg-green-600'
          } ${disabled && 'opacity-60 cursor-not-allowed'}`}
        >
          {clicked ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

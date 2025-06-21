import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div className="text-center py-20 text-gray-500">Loading...</div>;

  return (
    <div className="pt-24 px-4"> 
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-56 h-56 object-contain border rounded"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-3">{product.title}</h1>
            <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
            <p className="text-xl font-semibold text-green-600 mb-5">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

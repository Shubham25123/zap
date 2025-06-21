import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get('search');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
        setFiltered(res.data);
      });

    axios.get('https://fakestoreapi.com/products/categories')
      .then(res => setCategories(res.data));
  }, []);

  useEffect(() => {
    let result = [...products];

    if (search) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    setFiltered(result);
  }, [search, selectedCategory, products]);

  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-10 lg:px-20 py-8">
      
      {/* Quote Section */}
      <div className="bg-blue-100 text-center p-6 rounded shadow mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 italic">
          “Your satisfaction is our priority. Shop smart, live better.”
        </h2>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-5 py-2 rounded-full border transition ${
            selectedCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50'
          }`}>
          All
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`capitalize px-5 py-2 rounded-full border transition ${
              selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filtered.length > 0 ? (
          filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;

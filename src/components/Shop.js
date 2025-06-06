import React from 'react';
import { useCart } from './CartContext';

const shopData = {
  fish: [
    { id: 1, name: 'Blue Acara', price: 9.99 },
    { id: 2, name: 'Redtail Shark', price: 7.49 },
    { id: 3, name: 'Blue Acara', price: 9.99 },
    { id: 4, name: 'Redtail Shark', price: 7.49 },
  ],
  plants: [
    { id: 5, name: 'Anubias Barteri', price: 5.99 },
    { id: 6, name: 'Java Fern', price: 4.99 },
  ],
  carbon: [
    { id: 7, name: 'iAqua Carbon - 16oz', price: 14.99 },
  ],
  misc: [
    { id: 8, name: 'Plant Tweezers', price: 12.49 },
    { id: 9, name: 'Fish Food Pack', price: 9.99 },
  ]
};

const Shop = () => {
  const { dispatch } = useCart();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const renderSection = (title, items) => (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold text-primary mb-6 text-center uppercase tracking-wide">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-100 hover:shadow-xl transition"
          >
            <h4 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h4>
            <p className="text-gray-600 font-medium mb-4 text-lg">${item.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(item)}
              className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-purple-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 ">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-6 tracking-tight">Discover Premium Aquatic Essentials</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-14">
          From vibrant freshwater fish to hardy aquatic plants and specialized supplies, find everything you need to elevate your aquarium. Each product is hand-picked for quality and care.
        </p>
        {renderSection('Fish', shopData.fish)}
        {renderSection('Plants', shopData.plants)}
        {renderSection('Carbon', shopData.carbon)}
        {renderSection('Miscellaneous', shopData.misc)}
      </div>
    </section>
  );
};

export default Shop;

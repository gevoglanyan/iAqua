import React, { useState } from 'react';
import { useCart } from './CartContext';

const inventory = {
  fish: {
    African: [{ id: 1, name: 'African Butterfly Fish', price: 14.99 }],
    Betta: [{ id: 2, name: 'Betta Koi Galaxy', price: 12.99 }],
    Tetra: [{ id: 3, name: 'Tetra Congo XL', price: 7.99 }],
  },
  plants: {
    'Sword Plants': [{ id: 4, name: 'Amazon Sword', price: 5.99 }],
    Anubias: [{ id: 5, name: 'Anubias Nana', price: 6.49 }],
  },
  misc: {
    'Fish Items': [{ id: 6, name: 'Breeder Net', price: 3.49 }],
    'Plant Items': [{ id: 7, name: 'Plant Fertilizer', price: 7.99 }],
    Carbon: [{ id: 8, name: 'Activated Carbon 16oz', price: 14.99 }],
    'Fish Food': [{ id: 9, name: 'Premium Flake Food', price: 4.99 }],
  },
};

const Shop = () => {
  const { dispatch } = useCart();

  const [selectedFish, setSelectedFish] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [selectedMisc, setSelectedMisc] = useState([]);

  const toggleSelection = (current, setCurrent, name) => {
    setCurrent(prev =>
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  const addToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const renderItems = (items) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
      {items.map(item => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-100 hover:shadow-xl transition w-full max-w-sm"
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
  );

  const renderFilterButtons = (category, selected, setSelected) => (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {Object.keys(category).map((key) => (
        <button
          key={key}
          onClick={() => toggleSelection(selected, setSelected, key)}
          className={`px-5 py-2 rounded-full font-semibold shadow transition ${
            selected.includes(key)
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-primary hover:bg-purple-100'
          }`}
        >
          {key}
        </button>
      ))}
    </div>
  );

  const combineSelected = (data, selected) =>
    selected.flatMap(key => data[key] || []);

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-6 tracking-tight">
          Discover Premium Aquatic Essentials
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          From vibrant freshwater fish to hardy aquatic plants and specialized supplies, find everything you need to elevate your aquarium.
        </p>

        <br />

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-4 text-center uppercase tracking-wide">Fishs</h3>
          <br />
          {renderFilterButtons(inventory.fish, selectedFish, setSelectedFish)}
          {selectedFish.length > 0
            ? renderItems(combineSelected(inventory.fish, selectedFish))
            : <p className="text-center text-gray-500">Select a fish category to view products.</p>
          }
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-4 text-center uppercase tracking-wide">Plants</h3>
          <br />
          {renderFilterButtons(inventory.plants, selectedPlants, setSelectedPlants)}
          {selectedPlants.length > 0
            ? renderItems(combineSelected(inventory.plants, selectedPlants))
            : <p className="text-center text-gray-500">Select a plant category to view products.</p>
          }
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-4 text-center uppercase tracking-wide">Miscellaneous</h3>
          <br />
          {renderFilterButtons(inventory.misc, selectedMisc, setSelectedMisc)}
          {selectedMisc.length > 0
            ? renderItems(combineSelected(inventory.misc, selectedMisc))
            : <p className="text-center text-gray-500">Select a miscellaneous category to view products.</p>
          }
        </div>
      </div>
    </section>
  );
};

export default Shop;

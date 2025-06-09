import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const inventory = {
  fish: {
    African: [{ id: 1, name: 'African Butterfly Fish', price: 11.99 }, { id: 2, name: 'Bichir (Armored) 3"', price: 11.99 }, 
      { id: 3, name: 'Bichir (Semegalus) 4"', price: 7.99 }, { id: 4, name: 'Bichir (Ornate)', price: 24.99 }, 
      { id: 5, name: 'Elephant Nose', price: 19.99 }, { id: 6, name: 'Rope Fish', price: 14.99 }, { id: 7, name: 'Shrimp (Vampire)', price: 11.99 }, 
      { id: 8, name: 'Tetra (Congo) XL', price: 6.99 }],
    Betta: [{ id: 9, name: 'Butterfly Male Halfmoon Show (Large)', price: 11.99 }, { id: 10, name: 'Mustard Gas Halfmoon Male (Large)', price: 6.99 }, 
      { id: 11, name: 'Rosepetal Male Halfmoon', price: 11.99 }, { id: 12, name: 'Koi Betta (Male)', price: 11.99 }],
    Tetra: [{ id: 13, name: 'Tetra (Diamond) Large', price: 1.99 }, { id: 14, name: 'Tetra (Green Neon) Wild', price: 1.19 }],
  },
  plants: {
    'Sword Plants': [{ id: 100, name: 'Amazon Sword', price: 5.99 }],
    Anubias: [{ id: 101, name: 'Anubias Nana', price: 6.49 }],
  },
  misc: {
    'Fish Items': [{ id: 200, name: 'Breeder Net', price: 3.49 }],
    'Plant Items': [{ id: 300, name: 'Plant Fertilizer', price: 7.99 }],
    'Fish Food': [
      { id: 400, name: 'Premium Community Flake Food (0.8 oz)', price: 2.60 },
      { id: 401, name: 'Premium Community Flake Food (2.1 oz)', price: 4.89 },
      { id: 402, name: 'Premium Community Flake Food (7.4 oz)', price: 11.09 },
      { id: 403, name: 'Color Enhancing Community Flake Food (0.8 oz)', price: 3.89 },
      { id: 404, name: 'Color Enhancing Community Flake Food (2.1 oz)', price: 6.99 },
      { id: 405, name: 'Color Enhancing Community Flake Food (7.4 oz)', price: 19.99 },
      { id: 406, name: 'Insect Meal Granules (1.3 oz)', price: 3.32 },
      { id: 407, name: 'Betta Food Small Granules (0.3 oz)', price: 1.99 },
      { id: 408, name: 'Veggie Flake Food for Vegans (2.1 oz)', price: 6.29 },
      { id: 409, name: 'Veggie Based with a Little Protein (1.5 oz)', price: 4.89 },
      { id: 410, name: 'Sinking Chips for Plecos and Similar (1.3 oz)', price: 3.91 },
      { id: 411, name: 'Sinking Chips for Plecos and Similar (3.3 oz)', price: 7.92 },
      { id: 412, name: 'Cichlid Granules w/ Color Enhancement (4.7 oz)', price: 6.95 },
      { id: 413, name: "Krill-Based 'Stick on Glass' Treats (0.5 oz)", price: 2.63 },
      { id: 414, name: 'Powder Food for Fry w/ Krill and Spirulina (0.8 oz)', price: 3.51 },
      { id: 415, name: 'Fancy Shrimp Sinking Granules (1.9 oz)', price: 4.35 },
      { id: 416, name: 'Crab and Lobster w/ Loop Shape Pellets (1.0 oz)', price: 4.35 },
      { id: 417, name: 'Goldfish Flake Food w/ Insect Meal (2.1 oz)', price: 4.05 },
      { id: 418, name: 'Slow Sinking Pellets for Saltwater Fish (1.5 oz)', price: 4.89 },
      { id: 419, name: "Marine Fish Treat Tabs 'Stick on Glass' (2.1 oz)", price: 8.61 },
      { id: 420, name: 'Discus Granules with Probiotics (3.9 oz)', price: 8.68 }
    ],
    Carbon: [{ id: 400, name: 'iAqua Carbon (8 oz)', price: 6.99 }, { id: 401, name: 'iAqua Carbon (12 oz)', price: 8.99 }, 
      { id: 402, name: 'iAqua Carbon (16 oz)', price: 12.99 }, { id: 403, name: 'iAqua Carbon (24 oz)', price: 18.99 }],
    Driftwood: [
      { id: 500, name: 'Small Decorative Driftwood', price: 11.99 }, { id: 501, name: 'Medium Decorative Driftwood', price: 16.99 }, 
      { id: 502, name: 'Large Decorative Driftwood', price: 21.99 },],
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

        <br /> <br />

        <div className="flex flex-col items-center gap-8 mb-12 px-4">
          <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/iAqua Carbon.jpg"
              alt="iAqua Carbon Product"
              className="w-full h-auto object-cover"
            />
          </div>

          <br /> <br />

          <div className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              controls
              muted
              playsInline
            >
              <source src="/videos/iAquaMovie2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
 
        <br /> <br /> <br />
        
        <h3 className="text-2xl font-semibold text-black mb-4 text-center">
          Please view our{' '}
          <Link to="/shipping-policy" className="hover:text-purple-700">
            Shipping Policy
          </Link>{' '}
          and{' '}
          <Link to="/disclaimer" className="hover:text-purple-700">
            Disclaimers
          </Link>{' '}
          before Purchases
        </h3>
      </div>
    </section>
  );
};

export default Shop;

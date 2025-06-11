import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const inventory = {
  fish: {
    African: [
    { id: 1, name: 'African Butterfly Fish', price: 11.99 },
    { id: 2, name: 'Bichir (Armored) 3"', price: 11.99 },
    { id: 3, name: 'Bichir (Semegalus) 4"', price: 7.99 },
    { id: 4, name: 'Bichir (Ornate)', price: 24.99 },
    { id: 5, name: 'Elephant Nose', price: 19.99 },
    { id: 6, name: 'Rope Fish', price: 14.99 },
    { id: 7, name: 'Shrimp (Vampire)', price: 11.99 },
    {
      id: 5000,
      name: 'Tetra (Congo) Medium',
      price: 2.99,
      pricingTiers: [
        { min: 10, max: 30, price: 2.79 }
      ]
    },
    { id: 8, name: 'Tetra (Congo) XL', price: 6.99 },
    {
      id: 5001,
      name: 'Blond Dwarf Frog (Male)',
      price: 1.99,
      pricingTiers: [
        { min: 15, max: 50, price: 1.79 }
      ]
    },
    {
      id: 5002,
      name: 'African Dwarf Frog (Male)',
      price: 1.89,
      pricingTiers: [
        { min: 12, max: 50, price: 1.69 }
      ]
    },
    {
      id: 5003,
      name: 'Leaf Fish (Leopard)',
      price: 5.99,
      pricingTiers: [
        { min: 4, max: 10, price: 5.49 }
      ]
    },
    {
      id: 5004,
      name: 'Puffer (Fahaka)',
      price: 11.99,
      pricingTiers: [
        { min: 4, max: 10, price: 10.99 }
      ]
    }
  ],
    Betta: [
      { id: 9, name: 'Butterfly Male Halfmoon Show (Large)', price: 11.99 }, 
      { id: 10, name: 'Mustard Gas Halfmoon Male (Large)', price: 6.99 }, 
      { id: 11, name: 'Rosepetal Male Halfmoon', price: 11.99 }, 
      { id: 12, name: 'Koi Betta (Male)', price: 11.99 },
      {
        id: 5005,
        name: 'Crowntail Betta (Male)',
        price: 3.49,
        pricingTiers: [
          { min: 10, max: 24, price: 2.99 }
        ]
      },
      {
        id: 5006,
        name: 'Halfmoon Fancy Betta (Male)',
        price: 5.99,
        pricingTiers: [
          { min: 6, max: 20, price: 5.49 }
        ]
      },
      {
        id: 5007,
        name: 'Dumbo Ear Halfmoon Betta (Male)',
        price: 8.99,
        pricingTiers: [
          { min: 4, max: 15, price: 8.29 }
        ]
      },
      {
        id: 5008,
        name: 'Koi Plakat Betta (Female)',
        price: 4.99,
        pricingTiers: [
          { min: 6, max: 15, price: 4.49 }
        ]
      },
      {
        id: 5009,
        name: 'Show Betta (Female)',
        price: 1.99,
        pricingTiers: [
          { min: 10, max: 50, price: 1.79 }
        ]
      },
      {
        id: 5010,
        name: 'Halfmoon Betta (Female) Large',
        price: 3.99,
        pricingTiers: [
          { min: 6, max: 15, price: 3.49 }
        ]
      },
      {
        id: 5011,
        name: 'Show Betta (Male)',
        price: 2.29,
        pricingTiers: [
         { min: 30, price: 1.99 }
        ]
      }
    ],

    Angels: [
      { id: 15, name: 'Angel (Assort) Medium', price: 2.99 }, 
      { id: 16, name: 'Angel (Assort Veil) XL', price: 8.99 },
      {
        id: 5031,
        name: 'Angel (Full Black) Medium',
        price: 5.49,
        pricingTiers: [
         { min: 6, max: 15, price: 5.49 }
        ]
      },
      { id: 17, name: 'Angel (Black Veil)', price: 7.99 }, 
      { id: 18, name: 'Angel (Blue Pinoy) Large', price: 12.99 },
      {
        id: 5032,
        name: 'Angel (Blue Zebra) Medium',
        price: 8.99,
        pricingTiers: [
         { min: 5, max: 15, price: 8.29 }
        ]
      },
      {
        id: 5033,
        name: 'Angel (Gold Marble) Medium',
        price: 5.99,
        pricingTiers: [
         { min: 6, max: 15, price: 5.49 }
        ]
      }, 
      {
        id: 5034,
        name: 'Angel (Marble) Medium',
        price: 4.99,
        pricingTiers: [
         { min: 6, max: 15, price: 4.49 }
        ]
      }, 
      {
        id: 5035,
        name: 'Angel (Half Black Veil) Medium',
        price: 5.99,
        pricingTiers: [
         { min: 6, max: 15, price: 5.49 }
        ]
      }, 
      {
        id: 5036,
        name: 'Angel (Koi) Medium',
        price: 5.99,
        pricingTiers: [
         { min: 6, max: 15, price: 5.49 }
        ]
      },
      {
        id: 5037,
        name: 'Angel (Leopard) Large',
        price: 5.99,
        pricingTiers: [
         { min: 6, max: 15, price: 5.49 }
        ]
      },
      {
        id: 5038,
        name: 'Angel (Platinum) Large',
        price: 5.99,
        pricingTiers: [
         { min: 6, max: 15, price: 5.49 }
        ]
      },
      { id: 19, name: 'Angel (Manacapuru)', price: 14.99 },
      {
        id: 5039,
        name: 'Angel (Wild Silver) Large',
        price: 7.99,
        pricingTiers: [
         { min: 6, max: 12, price: 7.29 }
        ]
      },

    ],
    Discus: [
      { id: 20, name: 'Discus (Blue Turquoise) 3"', price: 34.99 },
      { id: 21, name: 'Discus (Red Turquoise) 3"', price: 34.99 }
    ],
      
    Tetra: [
      { id: 13, name: 'Tetra (Diamond) Large', price: 1.99 }, 
      { id: 14, name: 'Tetra (Green Neon) Wild', price: 1.19 },
      {
        id: 5012,
        name: 'Tetra (Amandae) Ember',
        price: 1.19,
        pricingTiers: [
         { min: 25, max: 50, price: 1.09 }
        ]
      },
      {
        id: 5013,
        name: 'Tetra (Black Neon)',
        price: 1.19,
        pricingTiers: [
         { min: 20, max: 40, price: 1.09 }
        ]
      },
      {
        id: 5014,
        name: 'Tetra (Black Phantom)',
        price: 1.29,
        pricingTiers: [
         { min: 20, max: 50, price: 1.19 }
        ]
      },
      {
        id: 5015,
        name: 'Tetra (Cardinal)',
        price: 1.89,
        pricingTiers: [
         { min: 20, max: 50, price: 1.69 }
        ]
      },
      {
        id: 5016,
        name: 'Tetra (Congo) Medium',
        price: 2.99,
        pricingTiers: [
         { min: 8, max: 40, price: 2.79 }
        ]
      },
      {
        id: 5017,
        name: 'Tetra (Congo) Large',
        price: 6.99,
        pricingTiers: [
         { min: 8, max: 40, price: 6.49 }
        ]
      },
      {
        id: 5018,
        name: 'Tetra (Emperor)',
        price: 1.49,
        pricingTiers: [
         { min: 20, max: 50, price: 1.29 }
        ]
      },
      {
        id: 5019,
        name: 'Tetra (Emperor Blue)',
        price: 1.89,
        pricingTiers: [
         { min: 20, max: 50, price: 1.69 }
        ]
      },
      {
        id: 5020,
        name: 'Tetra (Emperor Purple)',
        price: 1.69,
        pricingTiers: [
         { min: 20, max: 50, price: 1.49 }
        ]
      },
      {
        id: 5021,
        name: 'Tetra (Glass Bloodfin)',
        price: 1.29,
        pricingTiers: [
         { min: 20, max: 50, price: 1.19 }
        ]
      },
      {
        id: 5022,
        name: 'Tetra (Glowlite)',
        price: 0.99,
        pricingTiers: [
         { min: 20, max: 50, price: 0.89 }
        ]
      },
      {
        id: 5023,
        name: 'Tetra (Gold)',
        price: 1.29,
        pricingTiers: [
         { min: 20, max: 50, price: 1.19 }
        ]
      },
      {
        id: 5024,
        name: 'Tetra (Green Neon) Tank Raised',
        price: 1.99,
        pricingTiers: [
         { min: 25, max: 100, price: 1.79 }
        ]
      },
      {
        id: 5025,
        name: 'Tetra (Lemon) Medium',
        price: 1.19,
        pricingTiers: [
         { min: 20, max: 100, price: 1.09 }
        ]
      },
      {
        id: 5026,
        name: 'Tetra (Neon) Medium',
        price: 0.99,
        pricingTiers: [
         { min: 40, max: 100, price: 0.89 }
        ]
      },
      {
        id: 5027,
        name: 'Tetra (Neon) Large',
        price: 1.29,
        pricingTiers: [
         { min: 25, max: 50, price: 1.19 }
        ]
      },
      {
        id: 5028,
        name: 'Tetra (Red Phantom)',
        price: 1.49,
        pricingTiers: [
         { min: 20, max: 50, price: 1.29 }
        ]
      },
      {
        id: 5029,
        name: 'Tetra (Rummynose)',
        price: 1.69,
        pricingTiers: [
         { min: 20, max: 50, price: 1.49 }
        ]
      },
      {
        id: 5029,
        name: 'Tetra (Serpae) Red Minor',
        price: 1.09,
        pricingTiers: [
         { min: 20, max: 50, price: 0.99 }
        ]
      },
      {
        id: 5030,
        name: 'Tetra (Silvertip)',
        price: 1.09,
        pricingTiers: [
         { min: 20, max: 50, price: 0.99 }
        ]
      }
    ],
  },
  plants: {
    'Sword Plants': [
      { id: 100, name: 'Amazon Sword', price: 5.99 }
    ],
    Anubias: [
      { id: 101, name: 'Anubias Nana', price: 6.49 }
    ],
  },
  misc: {
    'Fish Items': [
      { id: 200, name: 'Breeder Net', price: 3.49 }
    ],
    'Plant Items': [
      { id: 300, name: 'Plant Fertilizer', price: 7.99 }
    ],
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
    Carbon: [
      { id: 400, name: 'iAqua Carbon (8 oz)', price: 6.99 }, 
      { id: 401, name: 'iAqua Carbon (12 oz)', price: 8.99 }, 
      { id: 402, name: 'iAqua Carbon (16 oz)', price: 12.99 }, 
      { id: 403, name: 'iAqua Carbon (24 oz)', price: 18.99 }
    ],
    Driftwood: [
      { id: 500, name: 'Small Decorative Driftwood', price: 11.99 }, 
      { id: 501, name: 'Medium Decorative Driftwood', price: 16.99 }, 
      { id: 502, name: 'Large Decorative Driftwood', price: 21.99 },
    ],
  },
};

const ItemCard = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState("1"); 

  const handleInputChange = (e) => {
    const val = e.target.value;
    if (val === "" || (/^\d+$/.test(val) && Number(val) > 0)) {
      setQuantity(val);
    }
  };

  const handleAddToCart = () => {
    const qty = parseInt(quantity) || 1;
    const finalPrice = getTieredPrice(item, qty);
    addToCart({ ...item, price: finalPrice }, qty);
  };

  const getTieredPrice = (item, quantity) => {
    if (!item.pricingTiers) return item.price;

    const tier = item.pricingTiers.find(
      t => quantity >= t.min && quantity <= (t.max ?? Infinity)
    );

    return tier ? tier.price : item.price;
  };


  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-100 hover:shadow-xl transition w-full max-w-sm">
      <h4 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h4>
      <p className="text-gray-600 font-medium mb-4 text-lg">
        ${getTieredPrice(item, parseInt(quantity) || 1).toFixed(2)}
      </p>

      {item.pricingTiers && (
        <div className="text-sm text-gray-500">
          {item.pricingTiers.map((tier, idx) => (
            <p key={idx}>
              {tier.min}–{tier.max || '∞'}: ${tier.price.toFixed(2)}
            </p>
          ))}
          <p>
            Other: ${item.price.toFixed(2)}
          </p>

          <br />
        </div>
      )}

      <div className="flex items-center justify-center space-x-4">
        <div className="flex items-center space-x-2">
          <label htmlFor={`quantity-${item.id}`} className="text-sm font-medium text-gray-700">
            Qty:
          </label>
          <input
            id={`quantity-${item.id}`}
            type="text"
            inputMode="numeric"
            value={quantity}
            onChange={handleInputChange}
            className="w-16 px-2 py-1 border rounded text-center"
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition whitespace-nowrap"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};


const Shop = () => {
  const { dispatch } = useCart();

  const [selectedFish, setSelectedFish] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [selectedMisc, setSelectedMisc] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSelection = (current, setCurrent, name) => {
    setCurrent(prev =>
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  const addToCart = (item, quantity) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...item, quantity } });
  };

  const renderItems = (categoryData, selectedCategories) => {
    return (
      <div className="space-y-12">
        {selectedCategories.map((categoryName) => {
          const items = categoryData[categoryName].filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (items.length === 0) return null;

          return (
            <div key={categoryName}>
              <h4 className="text-xl font-bold text-primary mb-4 text-center uppercase tracking-wide">
                {categoryName}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                {items.map(item => (
                  <ItemCard key={item.id} item={item} addToCart={addToCart} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

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

        <div className="mb-10 text-center">
          <input
            type="text"
            placeholder="Start by selecting a category, then search for specific items"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <br />

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-4 text-center uppercase tracking-wide">Fishs</h3>
          <br />
          {renderFilterButtons(inventory.fish, selectedFish, setSelectedFish)}
          {selectedFish.length > 0
            ? renderItems(inventory.fish, selectedFish)
            : <p className="text-center text-gray-500">Select a fish category to view products.</p>
          }

        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-4 text-center uppercase tracking-wide">Plants</h3>
          <br />
          {renderFilterButtons(inventory.plants, selectedPlants, setSelectedPlants)}
          {selectedPlants.length > 0
            ? renderItems(inventory.plants, selectedPlants)
            : <p className="text-center text-gray-500">Select a plant category to view products.</p>
          }

        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-4 text-center uppercase tracking-wide">Miscellaneous</h3>
          <br />
          {renderFilterButtons(inventory.misc, selectedMisc, setSelectedMisc)}
          {selectedMisc.length > 0
            ? renderItems(inventory.misc, selectedMisc)
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
          <Link to="/shipping-policy" className="text-purple-600 hover:text-purple-700 font-medium">
            Shipping Policy
          </Link>{' '}
          and{' '}
          <Link to="/disclaimer" className="text-purple-600 hover:text-purple-700 font-medium">
            Disclaimers
          </Link>{' '}
          before Purchases
        </h3>
      </div>
    </section>
  );
};

export default Shop;

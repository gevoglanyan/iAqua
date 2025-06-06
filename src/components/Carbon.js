import React from 'react';

const CarbonCard = ({ name, price, description, image }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 text-center hover:shadow-lg transition">
    {image && (
      <img src={image} alt={name} className="w-full h-48 object-contain mb-4" />
    )}
    <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
    <p className="text-primary font-bold mb-2">{price}</p>
    <p className="text-gray-600 mb-4">{description}</p>
    <div>
      <a href="#how-to-order" className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-purple-700 transition">
        Contact to Purchase
      </a>
    </div>
  </div>
);

const Carbon = () => {
  const fishList = [
    { id: 1, name: "iAqua Carbon - Small", price: "$6.99 per bag", image: "/images/small.jpg" },
    { id: 2, name: "iAqua Carbon - Medium", price: "$8.99 per bag", image: "/images/medium.jpg" },
    { id: 3, name: "iAqua Carbon - Large", price: "$12.99 per bag", image: "/images/large.jpg" },
    { id: 4, name: "iAqua Carbon - XL", price: "$24.99 per bag", image: "/images/xlarge.jpg" },
  ];

  return (
    <section id="carbon" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Carbon Collection</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {fishList.map((fish) => (
            <CarbonCard
              key={fish.id}
              id={fish.id}
              name={fish.name}
              price={fish.price}
              image={fish.image}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <img
            src="/images/iAqua Carbon.jpg"
            alt="iAqua Carbon"
            className="mx-auto max-w-xs rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Carbon;
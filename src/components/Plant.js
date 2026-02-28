import React, { useEffect } from 'react';

const Plant = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="plant" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-6 tracking-tight">
          Our Aquatic Plant Selection
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Enhance your aquarium's ecosystem with our lush, hardy aquatic plants. Each one is selected to promote balance, beauty, and long-term vitality in planted tanks.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">Lush, Hardy & Vibrant Plants</h3>
          <p className="text-gray-700 mb-4">
            Every plant is hand-picked for health, quality, and growth potential. We focus on hardy root and stem plants that adapt well to a wide range of water conditions and lighting setups.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you're building a lush aquascape, adding hiding spots for your fish, or enhancing biological filtration, we offer plants that do it all—from low-tech to high-tech tanks.
          </p>
          <p className="text-gray-700 mb-4">
            Our inventory is updated regularly to include Java Fern, Anubias, Amazon Swords, Vallisneria, and more—all inspected before shipping to ensure quality and cleanliness.
          </p>
          <p className="text-gray-700">
            Click below to view our full aquatic plant list and pricing. For bulk inquiries or custom packages, feel free to reach out directly.
          </p>
        </div>

        <br />

        <div className="mt-10 flex justify-center">
          <button
            className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition font-semibold"
            onClick={() => window.open("documents/iAqua Aquatics Plants.xlsx", "_blank")}
          >
            View Full Plant List
          </button>
        </div>
      </div>
    </section>
  );
};

export default Plant;
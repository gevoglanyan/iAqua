import React, { useEffect } from 'react';

const Transship = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="transship" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-6 tracking-tight">
          Our Transship Fish Preorder List
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Discover our curated transship fish list available for preorder. These freshwater species are hand-selected from trusted breeders, carefully monitored for health, and prepared to ensure a smooth transition to your aquarium.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">Preorder-Ready & Healthy Fish</h3>
          <p className="text-gray-700 mb-4">
            Each fish on our transship list is quarantined and monitored to ensure it's healthy, eating, and thriving. We only offer fish we would confidently place in our own tanks. Your satisfaction and the long-term well-being of each fish is our top priority.
          </p>
          <p className="text-gray-700 mb-4">
            Our preorder list includes community-friendly species, semi-aggressive fish, nano tank picks, and stunning centerpiece fish. Whether you're building a biotope, designing a planted aquascape, or adding to your home tank, you'll find a wide variety to suit your vision.
          </p>
          <p className="text-gray-700 mb-4">
            All livestock is sourced from reputable breeders and importers. We keep our transship availability updated so you only receive fish that are eating, well-colored, and conditioned for a successful arrival in your aquarium.
          </p>
          <p className="text-gray-700 mb-4">
            We're available to provide guidance on tank compatibility, aggression levels, dietary needs, and setup tips to ensure your preordered fish thrive in their new home.
          </p>
          <p className="text-gray-700">
            Click below to view the current transship list and pricing. For bulk orders or custom requests, feel free to contact us directly.
          </p>
        </div>

        <br />

        <div className="mt-10 flex justify-center">
          <button
            className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition font-semibold"
            onClick={() => window.open("documents/iAqua Aquatics Transship List.xlsx", "_blank")}
          >
            View Transship Fish List
          </button>
        </div>
      </div>
    </section>
  );
};

export default Transship;
import React from 'react';

const Fish = () => (
  <section id="fish" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center text-primary mb-6 tracking-tight">
        Our Freshwater Fish Selection
      </h2>
      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Explore our curated collection of vibrant, healthy freshwater fish. Every specimen is hand-selected, quarantined, and prepared with care to ensure you receive only the best for your aquarium.
      </p>

      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-primary mb-4">Hand-Selected & Healthy Fish</h3>
        <p className="text-gray-700 mb-4">
          Every fish is quarantined, monitored for health, and only released for pickup or delivery when it's eating and thriving. We do not sell anything we wouldn’t place in our own tanks. Our priority is the long-term health and happiness of each fish—not just the sale.
        </p>
        <p className="text-gray-700 mb-4">
          Our inventory includes community-friendly species, semi-aggressive fish, nano tank picks, and large show-stopping centerpieces. Whether you’re building out a natural biotope, designing a planted aquascape, or simply adding to your home tank, we have a diverse range to match your vision.
        </p>
        <p className="text-gray-700 mb-4">
          All livestock are sourced from trusted breeders and importers, and we constantly update our availability to reflect what’s thriving and ready to go—not what’s just arrived. You’ll always receive fish that are eating, well-colored, and conditioned to succeed.
        </p>
        <p className="text-gray-700 mb-4">
          We’re always available to discuss tank compatibility, aggression levels, dietary needs, and even aquascaping tips to create the ideal environment for your fish.
        </p>
        <p className="text-gray-700">
          Click below to view our current availability and pricing sheet. For bulk orders or custom stock lists, don’t hesitate to contact us directly.
        </p>
      </div>

      <br />

      <div className="mt-10 flex justify-center">
        <button
          className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition font-semibold"
          onClick={() => window.open("documents/iAqua Aquatics Fish.xlsx", "_blank")}
        >
          View Full Fish List
        </button>
      </div>
    </div>
  </section>
);

export default Fish;

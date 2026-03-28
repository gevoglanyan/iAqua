import React, { useEffect } from 'react';

const Saltwater = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <section id="saltwater" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center text-primary mb-6 tracking-tight">
        Our Saltwater Fish Selection
      </h2>
      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Explore our curated collection of vibrant, healthy saltwater fish. Every specimen is carefully acclimated, quarantined, and prepared to thrive in reef and marine aquarium systems.
      </p>

      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-primary mb-4">Healthy Marine Livestock</h3>
        <p className="text-gray-700 mb-4">
          Every fish is properly acclimated and monitored for health before becoming available. We only release fish for pickup or delivery once they are eating well and adapting successfully to captive conditions. Our goal is to ensure long-term success for both the fish and your aquarium.
        </p>
        <p className="text-gray-700 mb-4">
          Our saltwater inventory includes reef-safe species, peaceful community fish, semi-aggressive marine fish, and stunning centerpiece species. Whether you're building a reef tank, fish-only system, or a large marine display, we offer a variety of options to match your setup.
        </p>
        <p className="text-gray-700 mb-4">
          All livestock is sourced from trusted collectors, breeders, and importers. We regularly update our availability based on what is stable, healthy, and ready for its new home—not simply what has just arrived.
        </p>
        <p className="text-gray-700 mb-4">
          We’re always happy to help with compatibility questions, reef safety, feeding habits, and stocking recommendations to help you build a balanced and thriving marine aquarium.
        </p>
        <p className="text-gray-700">
          Click below to view our current saltwater availability and pricing sheet. For bulk orders or custom requests, feel free to contact us directly.
        </p>
      </div>

      <br />

      <div className="mt-10 flex justify-center">
        <button
          className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition font-semibold"
          onClick={() => window.open("documents/iAqua Aquatics Saltwater.xlsx", "_blank")}
        >
          View Full Saltwater Fish List
        </button>
      </div>
    </div>
  </section>
  );
};

export default Saltwater;
import React from 'react';

const Fish = () => (
  <section id="fish" className="fish">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Fish Collection</h2>
      </div>
      <div className="fish-grid centered-grid">
        <div className="fish-card">
          <div className="fish-info">
            <p className="fish-price">View Our Fish</p>
            <p className="fish-desc">
              Explore our full selection of aquatic fish available at iAqua Aquatics.
            </p>
            <div className="button-container">
              <button 
                className="btn"
                onClick={() => window.open("documents/iAqua Aquatics Fish.xlsx", "_blank")}
              >
                View Fish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Fish;

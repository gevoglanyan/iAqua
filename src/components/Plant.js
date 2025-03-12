import React from 'react';

const Plant = () => (
  <section id="plant" className="plant">

    <br />
    <br />

    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Aquatic Plant Collection</h2>
      </div>
      <div className="plant-grid centered-grid">
        <div className="fish-card">
          <div className="fish-info">
            <h3 className="fish-name">Aquatic Plant Collection</h3>
            <p className="fish-price">View Our Plants</p>
            <p className="fish-desc">
              Explore our full selection of aquatic plants available at iAqua Aquatics.
            </p>
            <div className="button-container">
              <button 
                className="btn"
                onClick={() => window.open("/iAqua Aquatics Plants.xlsx", "_blank")}
              >
                View Plants
              </button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="media-container">
        <div className="video-section">
          <video controls width="400">
            <source src="/iAquaMovie2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </section>
);

export default Plant;


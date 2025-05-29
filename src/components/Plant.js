import React from 'react';

const Plant = () => (
  <section id="plant" className="plant">

    <br />
    <br />
    <br />
    <br />
    <br />

    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Aquatic Plant Collection</h2>
      </div>
      <div className="plant-grid centered-grid">
        <div className="fish-card">
          <div className="fish-info">
            <p className="fish-price">View Our Plants</p>
            <p className="fish-desc">
              Explore our full selection of aquatic plants available at iAqua Aquatics.
            </p>
            <div className="button-container">
              <button 
                className="btn"
                onClick={() => window.open("documents/iAqua Aquatics Plants.xlsx", "_blank")}
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
          <video 
            playsInline 
            muted 
            controls  
            preload="metadata" 
            width="100%" 
            style={{ maxWidth: "415px" }}>
            <source src="/videos/iAquaMovie2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </section>
);

export default Plant;


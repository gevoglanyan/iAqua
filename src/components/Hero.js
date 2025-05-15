import React from 'react';

const Hero = () => (
  <section className="hero">
    <br />
    <div className="image1">
      <img src="images/iAqua Aquatics.png" alt="iAqua Aquatics" />
    </div>
    <br /> <br />
    <h1>iAqua Aquatics</h1>
    <h2>Premium Fish for Your Aquarium</h2>
    <br />
    <p>Discover a vibrant underwater world with our hand-selected aquatic life.</p>
    <br />
    <a href="#fish" className="btn">
      Explore Our Fish Collection
    </a>
    <br /> <br />
    <a href="#plant" className="btn">
      Explore Our Plant Collection
    </a>
    <br /> <br />
    <a href="#carbon" className="btn">
      Explore Our Carbon Collection
    </a>

    <br /> <br /> <br />
    
    <div className="media-container">
      <div className="video-section">
        <video 
          playsInline 
          muted 
          controls  
          preload="metadata" 
          width="100%" 
          style={{ maxWidth: "410px" }}>
          <source src="/videos/iAquaMovie1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
);

export default Hero;

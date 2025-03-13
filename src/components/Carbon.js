import React from 'react';

const CarbonCard = ({ name, price, description, image }) => (
  <div className="fish-card">
    <div className="fish-info">
      {image && (
        <img src={image} alt={name} className="carbon-image" />
      )}

      <br />

      <h3 className="fish-name">{name}</h3>
      <p className="fish-price">{price}</p>

      <br />

      <p className="fish-desc">{description}</p>
      <div className="button-container">
        <a href="#how-to-order" className="btn">
          Contact to Purchase
        </a>
      </div>
    </div>
  </div>
);

const Carbon = () => {
  const fishList = [
    { 
      id: 1, 
      name: "iAqua Carbon - Small", 
      price: "$6.99", 
      description: "Small Size of iAqua Carbon", 
      image: "small.jpg" 
    },
    { 
      id: 2, 
      name: "iAqua Carbon - Medium", 
      price: "$8.99", 
      description: "Medium Size of iAqua Carbon", 
      image: "medium.jpg" 
    },
    { 
      id: 3, 
      name: "iAqua Carbon - Large", 
      price: "$12.99", 
      description: "Large Size of iAqua Carbon", 
      image: "large.jpg" 
    },
    { 
      id: 4, 
      name: "iAqua Carbon - XL", 
      price: "$24.99", 
      description: "XL size of iAqua Carbon", 
      image: "xlarge.jpg" 
    },
  ];

  return (
    <section id="carbon" className="carbon">
      <br />
      <br />
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Carbon Collection</h2>
        </div>
        <div className="fish-grid centered-grid">
          {fishList.map((fish) => (
            <CarbonCard
              key={fish.id} 
              id={fish.id} 
              name={fish.name} 
              price={fish.price} 
              description={fish.description}
              image={fish.image}
            />
          ))}
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="image3">
        <img src="iAqua Carbon.jpg" alt="iAqua Carbon" />
    </div>
    </section>
  );
};

export default Carbon;

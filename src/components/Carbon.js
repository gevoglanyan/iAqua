import React from 'react';

const CarbonCard = ({ id, name, price, description, image }) => (
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
      name: "iAqua Caron - Small", 
      price: "$9.99", 
      description: "Small Size of iAqua Carbon", 
      image: "small.jpg" 
    },
    { 
      id: 2, 
      name: "iAqua Caron - Medium", 
      price: "$19.99", 
      description: "Medium Size of iAqua Carbon", 
      image: "medium.jpg" 
    },
    { 
      id: 3, 
      name: "iAqua Caron - Large", 
      price: "$29.99", 
      description: "Large Size of iAqua Carbon", 
      image: "large.jpg" 
    },
    { 
      id: 4, 
      name: "iAqua Caron - X-Large", 
      price: "$39.99", 
      description: "X-Large size of iAqua Carbon", 
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

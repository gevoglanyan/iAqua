import React, { useState } from 'react';
import './App.css';

const Header = ({ isAdmin, onOpenLoginModal, onAdminLogout }) => (
  <header>
    <div className="container">
      <div className="header-content">
        <div className="logo">
          i<span>Aqua</span> Aquatics
        </div>
        <nav>
          <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#featured">Fish Collection</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#how-to-order">How to Order</a></li>
            <li><a href="#disclaimer">Disclaimer</a></li>
            <li><a href="#shipping-policy">Shipping Policy</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li>
              {isAdmin ? (
                <button className="admin-btn" onClick={onAdminLogout}>
                  Logout
                </button>
              ) : (
                <button className="admin-btn" onClick={onOpenLoginModal}>
                  Login
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="hero">
    <h1>iAqua Aquatics</h1>
    <h2>Premium Fish for Your Aquarium</h2>

    <br />

    <p>Placeholder</p>

    <br />

    <a href="#featured" className="btn">
      Explore Our Collection
    </a>
  </section>
);

const FishCard = ({ id, name, price, description, onDelete }) => {
  return (
    <div className="fish-card">
      <div className="fish-info">
        <h3 className="fish-name">{name}</h3>
        <p className="fish-price">{price}</p>
        <p className="fish-desc">{description}</p>
        <div className="button-container">
          <a href="#how-to-order" className="btn">
            Contact to Purchase
          </a>
          {onDelete && (
            <button className="btn delete-btn" onClick={() => onDelete(id)}>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const FeaturedFish = ({ isAdmin }) => {
  const initialFish = [
    { id: 1, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 2, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 3, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 4, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 5, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 6, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 7, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 8, name: "Placeholder", price: "$49.99", description: "Placholder" },
  ];

  const [fishList, setFishList] = useState(initialFish);
  const [showForm, setShowForm] = useState(false);
  const [newFish, setNewFish] = useState({ name: '', price: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFish({ ...newFish, [name]: value });
  };

  const handleAddFish = (e) => {
    e.preventDefault();
    const fishToAdd = { ...newFish, id: Date.now() };
    setFishList([...fishList, fishToAdd]);
    setNewFish({ name: '', price: '', description: '' });
    setShowForm(false);
  };

  const handleDeleteFish = (fishId) => {
    if (window.confirm('Are you sure you want to delete this fish?')) {
      setFishList(fishList.filter(fish => fish.id !== fishId));
    }
  };

  return (
    <section id="featured" className="featured">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Fish Collection</h2>
          {isAdmin && (
            <button onClick={() => setShowForm(!showForm)} className="btn add-fish-btn" title="Add New Fish">
              +
            </button>
          )}
        </div>
        {isAdmin && showForm && (
          <form className="fish-form" onSubmit={handleAddFish}>
            <input type="text" name="name" value={newFish.name} onChange={handleInputChange} placeholder="Fish Name" required />
            <input type="text" name="price" value={newFish.price} onChange={handleInputChange} placeholder="Fish Price" required />
            <textarea name="description" value={newFish.description} onChange={handleInputChange} placeholder="Fish Description" required></textarea>
            <button type="submit" className="btn">Add Fish</button>
          </form>
        )}
        <div className="featured-grid">
          {fishList.map((fish) => (
            <FishCard key={fish.id} id={fish.id} name={fish.name} price={fish.price} description={fish.description} onDelete={isAdmin ? handleDeleteFish : undefined} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PreorderFishCard = ({ id, name, price, description, onDelete }) => {
  return (
    <div className="fish-card">
      <div className="fish-info">
        <h3 className="fish-name">{name}</h3>
        <p className="fish-price">{price}</p>
        <p className="fish-desc">{description}</p>
        <div className="button-container">
          <a href="#how-to-order" className="btn">
            Contact to Purchase
          </a>
          {onDelete && (
            <button className="btn delete-btn" onClick={() => onDelete(id)}>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const PreorderFish = ({ isAdmin }) => {
  const initialFish = [
    { id: 1, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 2, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 3, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 4, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 5, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 6, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 7, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 8, name: "Placeholder", price: "$49.99", description: "Placholder" },
  ];

  const [fishList, setFishList] = useState(initialFish);
  const [showForm, setShowForm] = useState(false);
  const [newFish, setNewFish] = useState({ name: '', price: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFish({ ...newFish, [name]: value });
  };

  const handleAddFish = (e) => {
    e.preventDefault();
    const fishToAdd = { ...newFish, id: Date.now() };
    setFishList([...fishList, fishToAdd]);
    setNewFish({ name: '', price: '', description: '' });
    setShowForm(false);
  };

  const handleDeleteFish = (fishId) => {
    if (window.confirm('Are you sure you want to delete this fish?')) {
      setFishList(fishList.filter(fish => fish.id !== fishId));
    }
  };

  return (
    <section id="pre-order" className="pre-order">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Preorder Fish Collection</h2>
          {isAdmin && (
            <button onClick={() => setShowForm(!showForm)} className="btn add-fish-btn" title="Add New Fish">
              +
            </button>
          )}
        </div>
        {isAdmin && showForm && (
          <form className="fish-form" onSubmit={handleAddFish}>
            <input type="text" name="name" value={newFish.name} onChange={handleInputChange} placeholder="Fish Name" required />
            <input type="text" name="price" value={newFish.price} onChange={handleInputChange} placeholder="Fish Price" required />
            <textarea name="description" value={newFish.description} onChange={handleInputChange} placeholder="Fish Description" required></textarea>
            <button type="submit" className="btn">Add Fish</button>
          </form>
        )}
        <div className="featured-grid">
          {fishList.map((fish) => (
            <PreorderFishCard key={fish.id} id={fish.id} name={fish.name} price={fish.price} description={fish.description} onDelete={isAdmin ? handleDeleteFish : undefined} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PlantCard = ({ id, name, price, description, onDelete }) => {
  return (
    <div className="fish-card">
      <div className="fish-info">
        <h3 className="fish-name">{name}</h3>
        <p className="fish-price">{price}</p>
        <p className="fish-desc">{description}</p>
        <div className="button-container">
          <a href="#how-to-order" className="btn">
            Contact to Purchase
          </a>
          {onDelete && (
            <button className="btn delete-btn" onClick={() => onDelete(id)}>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Plant = ({ isAdmin }) => {
  const initialFish = [
    { id: 1, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 2, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 3, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 4, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 5, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 6, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 7, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 8, name: "Placeholder", price: "$49.99", description: "Placholder" },
  ];

  const [fishList, setFishList] = useState(initialFish);
  const [showForm, setShowForm] = useState(false);
  const [newFish, setNewFish] = useState({ name: '', price: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFish({ ...newFish, [name]: value });
  };

  const handleAddFish = (e) => {
    e.preventDefault();
    const fishToAdd = { ...newFish, id: Date.now() };
    setFishList([...fishList, fishToAdd]);
    setNewFish({ name: '', price: '', description: '' });
    setShowForm(false);
  };

  const handleDeleteFish = (fishId) => {
    if (window.confirm('Are you sure you want to delete this fish?')) {
      setFishList(fishList.filter(fish => fish.id !== fishId));
    }
  };

  return (
    <section id="plant" className="plant">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Aquatic Plant Collection</h2>
          {isAdmin && (
            <button onClick={() => setShowForm(!showForm)} className="btn add-fish-btn" title="Add New Fish">
              +
            </button>
          )}
        </div>
        {isAdmin && showForm && (
          <form className="fish-form" onSubmit={handleAddFish}>
            <input type="text" name="name" value={newFish.name} onChange={handleInputChange} placeholder="Plant Name" required />
            <input type="text" name="price" value={newFish.price} onChange={handleInputChange} placeholder="Plant Price" required />
            <textarea name="description" value={newFish.description} onChange={handleInputChange} placeholder="Plant Description" required></textarea>
            <button type="submit" className="btn">Plant Fish</button>
          </form>
        )}
        <div className="featured-grid">
          {fishList.map((fish) => (
            <PlantCard key={fish.id} id={fish.id} name={fish.name} price={fish.price} description={fish.description} onDelete={isAdmin ? handleDeleteFish : undefined} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MiscCard = ({ id, name, price, description, onDelete }) => {
  return (
    <div className="fish-card">
      <div className="fish-info">
        <h3 className="fish-name">{name}</h3>
        <p className="fish-price">{price}</p>
        <p className="fish-desc">{description}</p>
        <div className="button-container">
          <a href="#how-to-order" className="btn">
            Contact to Purchase
          </a>
          {onDelete && (
            <button className="btn delete-btn" onClick={() => onDelete(id)}>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Misc = ({ isAdmin }) => {
  const initialFish = [
    { id: 1, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 2, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 3, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 4, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 5, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 6, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 7, name: "Placeholder", price: "$49.99", description: "Placholder" },
    { id: 8, name: "Placeholder", price: "$49.99", description: "Placholder" },
  ];

  const [fishList, setFishList] = useState(initialFish);
  const [showForm, setShowForm] = useState(false);
  const [newFish, setNewFish] = useState({ name: '', price: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFish({ ...newFish, [name]: value });
  };

  const handleAddFish = (e) => {
    e.preventDefault();
    const fishToAdd = { ...newFish, id: Date.now() };
    setFishList([...fishList, fishToAdd]);
    setNewFish({ name: '', price: '', description: '' });
    setShowForm(false);
  };

  const handleDeleteFish = (fishId) => {
    if (window.confirm('Are you sure you want to delete this fish?')) {
      setFishList(fishList.filter(fish => fish.id !== fishId));
    }
  };

  return (
    <section id="misc" className="misc">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Miscellaneous</h2>
          {isAdmin && (
            <button onClick={() => setShowForm(!showForm)} className="btn add-fish-btn" title="Add New Fish">
              +
            </button>
          )}
        </div>
        {isAdmin && showForm && (
          <form className="fish-form" onSubmit={handleAddFish}>
            <input type="text" name="name" value={newFish.name} onChange={handleInputChange} placeholder="Miscellaneous Name" required />
            <input type="text" name="price" value={newFish.price} onChange={handleInputChange} placeholder="Miscellaneous Price" required />
            <textarea name="description" value={newFish.description} onChange={handleInputChange} placeholder="Miscellaneous Description" required></textarea>
            <button type="submit" className="btn">Add Miscellaneous</button>
          </form>
        )}
        <div className="featured-grid">
          {fishList.map((fish) => (
            <MiscCard key={fish.id} id={fish.id} name={fish.name} price={fish.price} description={fish.description} onDelete={isAdmin ? handleDeleteFish : undefined} />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="about">
    <div className="container">
      <div className="about-content side-by-side">
        <div className="about-text">
          <h2>About iAqua Aquatics</h2>
          <br />
          <br />
          <p>
            Welcome to <strong>iAqua Aquatics</strong>, your premier source for high-quality freshwater fish.
          </p>
          <br />
          <p>
            With over <strong>20 years</strong> of experience in the aquatics hobby, our team is passionate about providing healthy, vibrant fish.
          </p>
          <p>
            We maintain strict quarantine protocols and only ship fish that we would be proud to keep in our own tanks.
          </p>
          <br />
          <p>
            Unlike big box stores, we hand-select our fish from trusted breeders and importers, ensuring you receive the healthiest specimens possible.
          </p>
          <br />
          <p>
            At <strong>iAqua Aquatics</strong>, we believe in building relationships with our customers. We're always available to provide advice on care, compatibility, and setup.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const HowToOrder = () => (
  <section id="how-to-order" className="how-to-order">
    <div className="container">
      <h2 className="section-title">How to Order</h2>
      <div className="steps-container">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Browse Our Collection</h3>
            <p>Explore our featured fish collection and note the species you're interested in.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Contact Us</h3>
            <p>Reach out via email, text, or our contact form to inquire about availability and pricing.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Confirm Your Order</h3>
            <p>We'll confirm availability and provide you with a total price including shipping.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Secure Payment</h3>
            <p>We only accept Zelle due to ongoing scams. All payments must be received before shipping.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>Receive Your Fish</h3>
            <p>We ship every Monday and Tuesday (weather permitting) to ensure your fish arrive safely.</p>
          </div>
        </div>
      </div>
      <br />
      <div className="text-center">
        <a href="mailto:iaquaaquatics@gmail.com?subject=Order Inquiry&body=Hi, I would like to start an order. Please provide me with the available options and pricing." className="btn">
          Contact Us to Start Your Order
        </a>
      </div>

      <br />

      <div className="text-center">
        <br />
          <h2>Zelle @ IAQUA</h2>
      </div>

      <br />

      <div className="about-image">
          <img src="ZelleQR.png" alt="Zelle QR" />
      </div>
      <div className="text-center">
        <p>
          <strong>Please make sure to include</strong>
        </p>
        <p>
          <strong>item information in Zelle payment.</strong>
        </p>
      </div>
    </div>
  </section>
);

const Disclaimer = () => (
  <section id="disclaimer" className="disclaimer">
    <div className="container">
      <div className="about-content side-by-side">
        <div className="about-text">
          <h2>Disclaimer</h2>

          <br />

          <h3>
            By placing an order with <strong>iAqua Aquatics</strong>, the customer acknowledges and agrees to the following terms:
          </h3>

          <br />

          <ul className="disclaimer-list">
            <li><strong>Risk of Live Animal Shipping:</strong> While we take every precaution to ensure the safe arrival of your livestock, shipping live animals inherently carries risks.</li>
            <li><strong>No Guarantee on Survival After Delivery:</strong> Once the fish is placed in your tank, we cannot be responsible for their survival due to differences in customer tank conditions, water quality, diet, or acclimation process.</li>
            <li><strong>No Refunds for Shipping Delays:</strong> Shipping delays caused by the courier are beyond our control. We do not issue refunds for shipping costs under any circumstances.</li>
            <li><strong>No Responsibility for Incorrect Addresses:</strong> Customers are fully responsible for ensuring that the shipping address provided is accurate. Incorrect addresses or failed delivery attempts will void any guarantees.</li>
            <li><strong>Final Sales on All Livestock:</strong> All sales are final once the fish has been shipped. We do not accept returns or exchanges on live animals.</li>
            <li><strong>Customer Responsibility for Acclimation:</strong> Customers must follow proper acclimation procedures upon receiving their fish. Failure to follow these steps may lead to stress or loss of livestock.</li>
          </ul>

          <br />
          <br />

          <h3>
            For any questions or concerns, feel free to contact the <strong>iAqua Aquatics</strong> team. We are happy to assist you with any inquiries!
          </h3>
        </div>
      </div>
    </div> 
  </section>
);

const ShippingPolicy = () => (
  <section id="shipping-policy" className="shipping-policy">
    <div className="container">
      <div className="about-content side-by-side">
        <div className="about-text">
          <h2>Shipping Policy</h2>

          <h3>
            At <strong>iAqua Aquatics</strong>, we are committed to providing the healthiest livestock and ensuring the best shipping experience. 
            Please review our policies carefully.
          </h3>

          <br />

          <h3>Important Notes:</h3>

          <br />
          
          <ul className="policy-list">
            <li>The fish shown in photos are for representation only and are <strong>not to scale</strong>. The fish you receive may vary slightly in size and appearance.</li>
            <li>We <strong>do not ship livestock to Canada</strong>.</li>
            <li>Shipping days are <strong>Monday, Tuesday, and Wednesday</strong> following the day you place your order.</li>
            <li>Estimated delivery dates displayed in listings are only <strong>estimates</strong>; please refer to the tracking information provided for accurate delivery updates.</li>
          </ul>

          <br />
          <br />

          <h3>Shipping Risks & DOA (Dead on Arrival) Policy</h3>

          <br />

          <h3>
            While we take every precaution to ensure safe delivery, shipping live fish always carries some risk. Please review our <strong>DOA guarantee conditions</strong> carefully:
          </h3>

          <br />

          <ul className="policy-list">
            <li><strong>DOA Policy Applies to U.S. Orders Only.</strong> International DOA policies are handled on a case-by-case basis.</li>
            <li><strong>DOA is still guaranteed</strong> even in cases of shipping delays caused by severe weather or courier-related issues.</li>
          </ul>

          <br />
          <br />

          <h3>DOA Credit Conditions:</h3>

          <br />

          <ul className="policy-list">
            <li>If a fish arrives DOA, a <strong>credit will be issued</strong> toward a future order.</li>
            <li><strong>Shipping costs are non-refundable.</strong></li>
            <li>If your package is delayed by the courier, you <strong>may be eligible for free shipping credit</strong> toward a future order, but you must contact us to confirm eligibility.</li>
            <li>Clear <strong>photos of the DOA in its original packaging</strong> must be emailed to <strong>iaquaaquatics@gmail.com</strong> within <strong>3 hours of delivery</strong>.</li>
            <li>The easiest way to take a DOA photo is to <strong>float the bag in your tank</strong> and take a clear picture.</li>
          </ul>

          <br />
          <br />

          <h3>Situations Where the DOA Guarantee is Void:</h3>

          <br />

          <ul className="policy-list">
            <li>Delivery is <strong>missed, rescheduled, or left outdoors</strong> for an extended period.</li>
            <li>Incorrect or changed shipping address after the order has been packed and shipped.</li>
            <li>Special livestock requests made <strong>outside of regular shipping days</strong> (Monday-Wednesday).</li>
            <li>Failure to provide <strong>clear DOA photos</strong> within 3 hours of delivery.</li>
            <li>If a package is <strong>returned</strong> due to refusal, missed delivery, or an incorrect address, no refunds or exchanges will be provided for the livestock or shipping costs.</li>
          </ul>

          <br />
          <br />

          <h3><strong>Reminder:</strong> It is your responsibility to track your package and be available at the time of delivery. 
            We strongly recommend signing up for <strong>email notifications</strong> from the courier.
          </h3>

          <br />
          <br />

          <h3>Receiving & Acclimating Your Fish</h3>

          <br />

          <h3>Follow these steps to ensure a smooth transition for your new fish:</h3>

          <br />
          

          <h3>Temperature Acclimation:</h3>

          <br />

          <ul className="policy-list">
            <li>Float the <strong>sealed bag</strong> on the surface of your tank for <strong>15-20 minutes</strong> with the lights turned off to allow the temperature to adjust.</li>
            <li><strong>Do not open the bag yet.</strong></li>
          </ul>

          <br />
          <br />

          <h3>Water Removal & Transfer:</h3>

          <br />

          <ul className="policy-list">
            <li>After acclimating, open the bag and <strong>carefully drain the water</strong> into a bucket while keeping the fish inside the bag.</li>
            <li>Once most of the water is drained, <strong>gently place the fish into your aquarium</strong>.</li>
            <li>A small amount of bag water in the tank is <strong>not harmful</strong>.</li>
          </ul>

          <br />
          <br />

          <h3>Post-Transfer Care:</h3>

          <ul className="policy-list">
            <li>Keep your <strong>aquarium lights off</strong> for the rest of the day to reduce stress.</li>
            <li>Wait <strong>until the next day</strong> before feeding your new fish.</li>
          </ul>

          <br />
          <br />

          <h3>General Terms & Conditions</h3>

          <br />

          <h3>Fish Health & Coloration:</h3>

          <br />

          <ul className="policy-list">
            <li>All our fish are <strong>not artificially colored</strong>. We provide high-quality food and replicate natural lake conditions to promote vibrant, healthy fish.</li>
            <li>Once the fish is placed in your aquarium, we <strong>cannot guarantee color retention or health</strong>, as water quality and diet vary per customer.</li>
          </ul>

          <br />
          <br />

          <h3>Refunds & Credits:</h3>

          <br />

          <ul className="policy-list">
            <li>We <strong>do not offer refunds</strong> or credits if the customer changes their mind or for any reason beyond our control.</li>
            <li>We <strong>do not refund shipping costs under any circumstances.</strong></li>
          </ul>

          <br />
          <br />

          <h3>Courier Selection & Shipping Rates:</h3>

          <br />

          <ul className="policy-list">
            <li>We will choose the <strong>best courier</strong> based on your selected shipping rate.</li>
            <li>If you have a preferred courier, please indicate this in the <strong>order notes, email, or phone call</strong> when placing your order.</li>
            <li>Shipping rates may vary based on your location. We will notify you of any necessary rate adjustments.</li>
          </ul>

          <br />
          <br />
          <br />

          <h3>
            For any questions or concerns, feel free to contact the <strong>iAqua Aquatics</strong> team.
          </h3>

          <br />

          <h3>
            We are happy to assist you with any inquiries!
          </h3>

          <br />
          <br />

          <div className="about-image">
            <img src="iAqua Aquatics.png" alt="iAqua Aquatics" />
          </div>

          <br />
          <br />
        
        </div>
      </div>
    </div>  
  </section>
);

const Footer = () => (
  <footer>
    <div id="contact" className="container">
      <div className="footer-content">
        <div className="footer-column">
          <h3>iAqua Aquatics</h3>
          <p>Providing premium fish to hobbyists nationwide. </p>
          <p>Our focus is on quality, health, and exceptional service.</p>
          
          <br />

          <p>Feel free to reach out to us if you have any questions.</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#featured">Fish Collection</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#how-to-order">How to Order</a></li>
            <li><a href="#disclaimer">Disclaimer</a></li>
            <li><a href="#shipping-policy">Shipping Policy</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Information</h3>
          <ul>
            <li>Thomas @ iAqua Aquatics</li>

            <br />

            <li>Email: <a href="mailto:iaquaaquatics@gmail.com">iaquaaquatics@gmail.com</a></li>
            <li>Phone: (661) 666 - 2514</li>
            <li>Hours: Everyday from 9:00 AM - 5:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 iAqua Aquatics. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

const AdminLoginModal = ({ onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      onLoginSuccess();
      onClose();
    } else {
      alert('Incorrect Credentials!');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <div className="modal-buttons">
            <button type="submit" className="btn">Login</button>
            <button type="button" className="btn cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
  };

  return (
    <>
      <div id="top"></div>
      <Header
        isAdmin={isAdmin}
        onOpenLoginModal={handleOpenLoginModal}
        onAdminLogout={handleAdminLogout}
      />
      <Hero />
      <main>
        <FeaturedFish isAdmin={isAdmin} />
        <PreorderFish isAdmin={isAdmin} />
        <Plant isAdmin={isAdmin} />
        <Misc isAdmin={isAdmin} />
        <About />
        <HowToOrder />
        <Disclaimer />
        <ShippingPolicy />
      </main>
      <Footer />
      {showLoginModal && (
        <AdminLoginModal
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={() => setIsAdmin(true)}
        />
      )}
    </>
  );
}

export default App;
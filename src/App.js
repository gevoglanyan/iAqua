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
            {/*<li><a href="#pre-order">Preorder</a></li> */}
            {/*<li><a href="#plant">Plants</a></li> */}
            <li><a href="#about">About Us</a></li>
            <li><a href="#how-to-order">How to Order</a></li>
            <li><a href="#disclaimer">Disclaimer</a></li>
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
    {/*
    <div className="about-image">
      <img src="iAqua Aquatics.png" alt="iAqua Aquatics" />
    </div>
    */}
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
      <h2 className="section-title">Disclaimer</h2>
      {/*
      <div className="steps-container">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Browse Our Collection</h3>
            <p>Float the bags before opening them on the surface for 15-20 minutes with your lights off to let them temperature acclimate. Do not open them at this time.</p>
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
      */}
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
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Information</h3>
          <ul>
            <li>Thomas @ iAqua Aquatics</li>

            <br />

            <li>Email: iaquaaquatics@gmail.com</li>
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
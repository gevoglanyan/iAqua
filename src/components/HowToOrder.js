import React from 'react';

const HowToOrder = () => (
  <section id="how-to-order" className="how-to-order">
    <div className="container">
      <br /><br />
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
        <a
          href="mailto:iaquaaquatics@gmail.com?subject=Order Inquiry&body=Hi, I would like to start an order. Please provide me with the available options and pricing."
          className="btn"
        >
          Contact Us to Start Your Order
        </a>
      </div>
      <br />
      <div className="text-center">
        <br />
        <h2>Zelle @ IAQUA</h2>
      </div>
      <br />
      <div className="image2">
        <img src="images/ZelleQR.png" alt="Zelle QR" />
      </div>
      <div className="text-center">
        <p><strong>Please ensure that you include</strong></p>
        <p><strong>the item details in the Zelle payment.</strong></p>
        <br />
        <p><strong>Additionally, provide your contact</strong></p>
        <p><strong>information and shipping details as well.</strong></p>
      </div>
    </div>
  </section>
);

export default HowToOrder;

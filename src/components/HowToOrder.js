import React from 'react';

const HowToOrder = () => (
  <section id="how-to-order" className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-extrabold text-primary mb-10 tracking-tight">How to Order</h2>

      <div className="space-y-10">
        {[
          {
            step: 1,
            title: "Browse & Add to Cart",
            desc: "Explore our shop and add fish, plants, or supplies to your cart."
          },
          {
            step: 2,
            title: "Secure Checkout",
            desc: "You'll receive an email confirmation once your order is placed."
          },
          {
            step: 3,
            title: "Order Confirmation",
            desc: "After payment, we'll confirm your order and shipping schedule."
          },
          {
            step: 4,
            title: "Receive Your Items",
            desc: "We ship Mondays and Tuesdays (weather permitting)."
          },
          {
            step: 5,
            title: "Bulk Orders & Special Requests",
            desc: "For bulk or custom orders, please contact us directly."
          },
        ].map(({ step, title, desc }) => (
          <div key={step} className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary w-10 text-center mb-2">{step}</div>
            <div className="max-w-xl">
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <p className="text-gray-700 text-base">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <br />

      <div className="text-center mt-14">
        <a
          href="mailto:iaquaaquatics@gmail.com?subject=Bulk Order Inquiry&body=Hi, I'm interested in placing a bulk or special order. Please provide more information."
          className="inline-block bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-purple-700 transition font-semibold"
        >
          Contact Us for Bulk Orders
        </a>
      </div>
    </div>
  </section>
);

export default HowToOrder;

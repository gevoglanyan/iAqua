import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

const Hero = () => {
  const [state, handleSubmit] = useForm("xeokqyoq");

  return (
    <section className="min-h-screen bg-white  mb-[-1px] flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center">
        <img
          src="images/iAqua Aquatics.png"
          alt="iAqua Aquatics"
          className="mx-auto max-w-xs mb-6 drop-shadow"
        />

        <br />

        <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight">iAqua Aquatics</h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">Premium Fish for Your Aquarium</h2>

        <p className="max-w-2xl text-gray-600 text-lg mb-10 mx-auto">
          Discover a vibrant underwater world with our hand-selected aquatic life. From stunning centerpiece fish to lush aquatic plants, we bring the best of the aquatics hobby to your home.
        </p>

        <br /> 

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 mb-16">
          <Link to="/shop" className="bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-purple-700 transition font-medium">Explore Our Shop</Link>
          <Link to="/fish" className="bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-purple-700 transition font-medium">Fish Collection</Link>
          <Link to="/plant" className="bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-purple-700 transition font-medium">Plant Collection</Link>
        </div>
      </div>

      <br />

      <h2 className="text-4xl font-bold text-primary text-center mb-10">Contact Us</h2>
      <p className="text-gray-600 text-center text-base mb-14">
        Have a question about an order, a product, or a bulk request? 
        <br />
        Send us a message below and we’ll respond as soon as possible.
      </p>

      {state.succeeded ? (
        <p className="text-green-600 text-center font-medium">
          ✅ Thanks for your message! We’ll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-5">
          <div>
            <label htmlFor="name" className="block font-semibold text-gray-700 mb-1">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="iAqua Aquatics"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="iaquaaquatics@gmail.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Tell us what’s swimming through your mind..."
              className="w-full p-3 border border-gray-300 rounded-lg min-h-[140px] focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-purple-700 transition font-semibold"
            >
              Submit Form
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default Hero;

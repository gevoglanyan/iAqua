import React from 'react';

const About = () => (
  <section id="about" className="py-20 bg-white text-center">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-primary mb-8 tracking-tight">About iAqua Aquatics</h2>
      <div className="space-y-6 text-lg text-gray-700">
        <p>
          Welcome to <strong className="text-primary">iAqua Aquatics</strong>, your premier source for high-quality freshwater fish.
        </p>
        <p>
          With over <strong className="text-primary">20 years of experience</strong> in the aquatics hobby, our team is passionate about providing healthy, vibrant fish to enthusiasts and hobbyists alike.
        </p>
        <p>
          We uphold strict quarantine protocols and only ship fish that are thriving—just as we would expect for our own tanks.
        </p>
        <p>
          Unlike big box stores, we work closely with trusted breeders and importers to ensure you receive the healthiest, most vibrant specimens possible.
        </p>
        <p>
          At <strong className="text-primary">iAqua Aquatics</strong>, we’re more than a supplier—we’re your partners in aquatic care, always here to offer guidance on compatibility, tank setup, and long-term health.
        </p>
        <p>
          iAqua Aquatics is proudly founded and operated by <strong className="text-primary">Tom</strong>, a lifelong aquarist with a sharp eye for quality and a passion for helping others build thriving aquatic environments. Whether you're new to the hobby or a seasoned fishkeeper, Tom personally ensures every order meets our highest standards.
        </p>
        <p>
          We’re based in <strong className="text-primary">Santa Clarita, California</strong>, and serve aquarists nationwide with professionalism and care. Local or across the country, every interaction reflects our dedication to excellence.
        </p>
        <p>
          Our team is available <strong className="text-primary">Monday through Sunday, 9:00 AM to 5:00 PM PST</strong>. Have questions about your tank, our livestock, or a custom order? Don’t hesitate to reach out—we’re here to help you create your perfect aquatic ecosystem.
        </p>
      </div>
    </div>

    <br /> <br /> <br />

    <div className="mb-10 px-4 flex justify-center">
      <div className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg">
        <video
          className="w-full h-full object-cover"
          controls
          muted
          playsInline
        >
          <source src="/videos/iAquaMovie1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
);

export default About;

import React from 'react';

const Disclaimer = () => (
  <section id="disclaimer" className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center text-primary mb-8 tracking-tight">Disclaimer</h2>

      <p className="text-lg text-gray-700 mb-12">
        By placing an order with <strong className="text-primary">iAqua Aquatics</strong>, you acknowledge and agree to the following terms:
      </p>

      <div className="text-left">
        <ul className="list-disc list-inside space-y-5 text-gray-700 text-base">
          <li><strong className="text-primary">Risk of Live Animal Shipping:</strong> While we take every precaution to ensure safe arrival, shipping live animals inherently carries risks.</li>
          <li><strong className="text-primary">No Guarantee on Survival After Delivery:</strong> We cannot be responsible for survival once fish are placed in your tank due to differing conditions.</li>
          <li><strong className="text-primary">No Refunds for Shipping Delays:</strong> We are not responsible for delays caused by couriers and do not issue shipping refunds.</li>
          <li><strong className="text-primary">Incorrect Addresses:</strong> You are responsible for providing accurate shipping information. Errors may void guarantees.</li>
          <li><strong className="text-primary">Final Sale on Livestock:</strong> All fish sales are final once shipped. No returns or exchanges.</li>
          <li><strong className="text-primary">Proper Acclimation Required:</strong> Customers must follow acclimation procedures. Failure to do so may result in stress or loss of livestock.</li>
        </ul>
      </div>

      <br />

      <p className="text-lg text-gray-700 mt-10 text-center">
        Questions or concerns? Contact the <strong className="text-primary">iAqua Aquatics</strong> team — we’re here to help!
      </p>
    </div>
  </section>
);

export default Disclaimer;

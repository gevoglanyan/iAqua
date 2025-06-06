import React from 'react';

const ShippingPolicy = () => (
  <section id="shipping-policy" className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center text-primary mb-10 tracking-tight">Shipping Policy</h2>

      <p className="text-lg text-gray-700 mb-6 text-center">
        At <strong className="text-primary">iAqua Aquatics</strong>, we are committed to providing the healthiest livestock and ensuring the best shipping experience. 
        <br />
        Please review our policies carefully.
      </p>

      <h3 className="text-xl font-semibold text-primary mt-10 mb-3">Important Notes</h3>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>The fish shown in photos are for representation only and are <strong>not to scale</strong>.</li>
        <li>We <strong>do not ship livestock to Canada</strong>.</li>
        <li>Shipping days are <strong>Monday, Tuesday, and Wednesday</strong> after your order is placed.</li>
        <li>Delivery estimates are approximate; always refer to your tracking number for details.</li>
      </ul>

      <h3 className="text-xl font-semibold text-primary mt-10 mb-3">Shipping Risks & DOA Policy</h3>
      <p className="text-gray-700 mb-4">Shipping live animals carries risk. Please review our <strong>DOA (Dead on Arrival)</strong> policy:</p>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li><strong>Applies to U.S. Orders Only.</strong></li>
        <li><strong>Still valid during weather or courier delays.</strong></li>
      </ul>

      <h3 className="text-xl font-semibold text-primary mt-10 mb-3">DOA Credit Conditions</h3>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>Store credit will be issued for any DOA cases.</li>
        <li><strong>Shipping charges are non-refundable.</strong></li>
        <li>Shipping delays may qualify for credit—contact us to verify.</li>
        <li>Email <strong>clear photos</strong> of the DOA item in original packaging within <strong>3 hours</strong> of delivery.</li>
        <li>Float the sealed bag in your tank and take a clear photo.</li>
      </ul>

      <h3 className="text-xl font-semibold text-primary mt-10 mb-3">When the DOA Guarantee is Void</h3>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>Missed delivery or package left outside too long.</li>
        <li>Wrong or updated address after shipping.</li>
        <li>Orders shipped outside of standard days by request.</li>
        <li>No DOA photos submitted within the required timeframe.</li>
        <li>Returned, refused, or unclaimed packages.</li>
      </ul>

      <h3 className="text-xl font-semibold text-primary mt-10 mb-3">Receiving & Acclimating Your Fish</h3>
      <p className="text-gray-700 mb-4">Follow these steps for a successful transition:</p>

      <p className="text-lg font-medium text-gray-800 mt-4">Temperature Acclimation</p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Float the <strong>sealed bag</strong> for <strong>15-20 minutes</strong> with lights off.</li>
        <li>Do not open the bag during this stage.</li>
      </ul>

      <p className="text-lg font-medium text-gray-800 mt-6">Water Removal & Transfer</p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Open and carefully drain water into a bucket.</li>
        <li>Gently place the fish into your tank. A small amount of bag water is okay.</li>
      </ul>

      <p className="text-lg font-medium text-gray-800 mt-6">Post-Transfer Care</p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Keep aquarium lights off for the rest of the day.</li>
        <li>Wait until the next day before feeding your new fish.</li>
      </ul>

      <h3 className="text-xl font-semibold text-primary mt-10 mb-3">General Terms & Conditions</h3>

      <p className="text-gray-700 font-medium mb-2">Fish Health & Coloration</p>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>We <strong>do not artificially color</strong> our fish. Their colors are achieved through nutrition and optimal habitat conditions.</li>
        <li>We cannot guarantee color or health once fish are in your system due to variable environments.</li>
      </ul>

      <p className="text-gray-700 font-medium mt-6">Refunds & Credits</p>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>Refunds are not available for order changes or issues outside our control.</li>
        <li><strong>Shipping fees are non-refundable</strong> in all cases.</li>
      </ul>

      <p className="text-gray-700 font-medium mt-6">Courier Selection & Shipping Rates</p>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>We will select the most suitable courier based on your selected rate.</li>
        <li>Preferred couriers can be noted in your order or discussed directly.</li>
        <li>Rates may vary by location. We’ll notify you of any updates.</li>
      </ul>

      <br />

      <p className="text-lg text-gray-700 mt-10 text-center">
        Still have questions? Contact the <strong className="text-primary">iAqua Aquatics</strong> team—we’re happy to assist!
      </p>
    </div>
  </section>
);

export default ShippingPolicy;

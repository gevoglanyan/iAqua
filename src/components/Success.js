import React from 'react';
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const { state } = useLocation();

  return (
    <section className="py-20 bg-white text-center">

      <br /> <br /> 

      <h2 className="text-4xl font-bold text-primary mb-4">
        Thank You{state?.payerName ? `, ${state.payerName}` : ''}!
      </h2>

      <br /> 

      <p className="text-lg text-gray-700 mb-4">
        Your payment was successful, and your order has been received.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        You’ll receive an email confirmation shortly with your order details and shipping information.
      </p>

      <br /> <br />
      
      <p className="text-lg text-gray-700">
        If you have any questions or special requests, feel free to reach out at <a href="mailto:iaquaaquatics@gmail.com" className="text-primary font-medium hover:underline">iaquaaquatics@gmail.com</a>.
      </p>
    </section>
  );
};

export default SuccessPage;

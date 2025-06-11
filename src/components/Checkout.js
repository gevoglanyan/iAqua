import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const total = parseFloat(
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
  );

  const checkoutEnabled = total >= 175;

  const paypalOptions = {
    'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID,
    currency: 'USD',
    'enable-funding': 'venmo,card',
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-10 tracking-tight">
          Checkout
        </h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-200 pb-4"
                >
                  <div className="text-lg text-gray-800 font-medium">{item.name}</div>
                  <div className="flex items-center gap-3">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: item.id })}
                    >
                      −
                    </button>
                    <span className="min-w-[24px] text-center">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: item.id })}
                    >
                      +
                    </button>
                    <span className="ml-4 text-gray-700 font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      className="ml-4 text-red-500 text-sm font-semibold hover:underline"
                      onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <div className="text-right text-xl font-bold text-gray-800 pt-2">
                Total: ${total.toFixed(2)}
              </div>
            </div>

            <br /> <br /> <br />
        
            <h3 className="text-2xl font-semibold text-black mb-4 text-center">
              Please view our{' '}
              <Link to="/shipping-policy" className="text-purple-600 hover:text-purple-700 font-medium">
                Shipping Policy
              </Link>{' '}
              and{' '}
              <Link to="/disclaimer" className="text-purple-600 hover:text-purple-700 font-medium">
                Disclaimers
              </Link>{' '}
              before Purchases
            </h3>

            <br />

            <div className="mt-12 relative z-0">
              {!checkoutEnabled && (
                <div className="text-center text-purple-500 font-medium mb-4">
                  A minimum purchase of $175 is required to proceed to checkout.
                  <br /> <br />
                </div>
              )}

              <PayPalScriptProvider options={paypalOptions}>
                {loading && (
                  <div className="text-center text-gray-600 mb-4">
                    Processing your payment.
                    <br /> <br/>
                  </div>
                )}

                <PayPalButtons
                  style={{ layout: 'vertical' }}
                  forceReRender={[total, checkoutEnabled]}
                  disabled={!checkoutEnabled}
                  createOrder={(data, actions) => {
                    if (!checkoutEnabled) {
                      alert('A minimum purchase of $175 is required to checkout.');
                      return Promise.reject();
                    }

                    setLoading(true);

                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: { value: total.toFixed(2) },
                          shipping: {
                            options: [
                              {
                                id: 'STANDARD_SHIPPING',
                                label: 'Standard Shipping',
                                type: 'SHIPPING',
                                selected: true,
                                amount: { value: '0.00', currency_code: 'USD' },
                              },
                            ],
                          },
                        },
                      ],
                      application_context: {
                        shipping_preference: 'GET_FROM_FILE',
                      },
                    });
                  }}
                  onApprove={(data, actions) => {
                    if (!checkoutEnabled) return Promise.resolve();

                    return actions.order.capture().then((details) => {
                      dispatch({ type: 'CLEAR_CART' });
                      setLoading(false);
                      navigate('/success', {
                        state: { payerName: details.payer.name.given_name },
                      });
                    });
                  }}
                  onCancel={() => setLoading(false)}
                  onError={(err) => {
                    console.error('PayPal error:', err);
                    setLoading(false);
                    alert('There was an issue processing your payment.');
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Checkout;

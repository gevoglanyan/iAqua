import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is currently empty.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map(item => (
                <li
                  key={item.id}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded shadow-sm"
                >
                  <span className="font-medium text-gray-800">
                    {item.name} x {item.quantity}
                  </span>
                  <span className="text-gray-700 font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                    className="text-red-500 font-semibold hover:underline ml-4"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="text-right mt-8 text-xl font-bold text-gray-800">
              Total: ${total.toFixed(2)}
            </div>

            <div className="text-center mt-6">
              <button
                className="bg-primary text-white px-6 py-2 rounded hover:bg-purple-700 transition"
                onClick={goToCheckout}
              >
                Checkout with PayPal
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
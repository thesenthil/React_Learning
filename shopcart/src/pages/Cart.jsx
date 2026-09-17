import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, handleRemoveFromCart }) {
  return (
    <div className="min-h-screen bg-[#faf9f6] px-6 md:px-10 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#a47b3c]">
            YOUR SHOPPING BAG
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Shopping Cart
          </h1>

          <p className="mt-2 text-gray-500">
            {cart.length} item(s) in your cart
          </p>
        </div>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-100 p-16 text-center">
            <div className="text-5xl">🛒</div>

            <h2 className="mt-5 text-2xl font-bold">
              Your cart is empty
            </h2>

            <p className="mt-3 text-gray-500">
              You haven't added anything to your cart yet.
            </p>

            <Link
              to="/categories"
              className="inline-block mt-7 px-7 py-3 bg-[#171717] text-white rounded-full hover:bg-[#333] transition"
            >
              Start Shopping
            </Link>
          </div>
        ) : (

          /* Cart Items */
          <div className="grid lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2 space-y-4">

              {cart.map((product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-6"
                >

                  {/* Product Image */}
                  <div className="w-28 h-28 bg-[#f7f6f2] rounded-xl flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-24 h-24 object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">

                    <h2 className="font-semibold text-lg">
                      {product.title}
                    </h2>

                    <p className="mt-2 text-[#a47b3c] font-bold text-lg">
                      ${product.price}
                    </p>

                    {/* REMOVE BUTTON */}
                    <button
                      onClick={() => handleRemoveFromCart(index)}
                      className="mt-4 px-4 py-2 text-sm text-red-600 border border-red-200 rounded-full hover:bg-red-50 transition"
                    >
                      Remove
                    </button>

                  </div>

                </div>
              ))}

            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl border border-gray-100 p-7 h-fit">

              <h2 className="text-xl font-bold">
                Order Summary
              </h2>

              <div className="flex justify-between mt-6 text-gray-600">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="border-t border-gray-200 my-5"></div>

              <div className="flex justify-between">
                <span className="font-semibold">
                  Total
                </span>

                <span className="font-bold text-xl text-[#a47b3c]">
                  $
                  {cart
                    .reduce(
                      (total, product) =>
                        total + product.price,
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>

              <button
                className="w-full mt-7 py-3 bg-[#171717] text-white rounded-full font-medium hover:bg-[#333] transition"
              >
                Checkout
              </button>

            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
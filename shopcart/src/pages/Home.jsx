import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import SpecialOffer from "../sections/SpecialOffer";
import TrustSection from "../sections/TrustSection";
import Reviews from "../sections/Reviews";
import Newsletter from "../sections/Newsletter";

function Home({ handleAddToCart }) {
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 10)));
  }, []);

  // function handleAddToCart(product) {
  //   setCart([...cart, product]);
  // }

  return (
    <div className="bg-[#faf9f6] text-[#171717]">

      {/* ================= HERO SECTION ================= */}

      <section className="px-6 md:px-10 lg:px-20 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE */}

            <div>

              <span className="inline-block px-4 py-2 bg-[#eee9df] text-[#8a6a35] text-sm font-medium rounded-full">
                New Collection 2026
              </span>

              <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                SHOP SMARTER,
                <br />
                <span className="text-[#a47b3c]">
                  LIVE BETTER.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-gray-600 leading-8">
                Discover carefully selected products for your everyday life.
                Simple shopping, great quality and better prices.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  to="/categories"
                  className="px-7 py-4 bg-[#171717] text-white rounded-full font-medium hover:bg-[#333] transition"
                >
                  Shop Collection
                </Link>

                <Link
                  to="/categories"
                  className="px-7 py-4 border border-gray-300 rounded-full font-medium hover:bg-white transition"
                >
                  Explore Products
                </Link>

              </div>

              {/* SMALL STATS */}

              <div className="flex gap-8 mt-10">

                <div>
                  <h3 className="text-2xl font-bold">
                    10K+
                  </h3>
                  <p className="text-sm text-gray-500">
                    Happy Customers
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    500+
                  </h3>
                  <p className="text-sm text-gray-500">
                    Products
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    4.8/5
                  </h3>
                  <p className="text-sm text-gray-500">
                    Customer Rating
                  </p>
                </div>

              </div>

            </div>


            {/* RIGHT SIDE */}

            <div className="relative">

              <div className="bg-[#eee9df] rounded-[40px] p-8 md:p-12">

                {products.length > 0 && (
                  <img
                    src={products[0].image}
                    alt={products[0].title}
                    className="w-full h-[420px] object-contain"
                  />
                )}

              </div>

              {/* SALE CARD */}

              <div className="absolute bottom-6 left-6 bg-white shadow-xl rounded-2xl px-6 py-4">

                <p className="text-xs text-gray-500">
                  SPECIAL OFFER
                </p>

                <h3 className="text-xl font-bold mt-1">
                  Up to 40% OFF
                </h3>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= SPECIAL OFFER ================= */}

      <SpecialOffer />


      {/* ================= FEATURED PRODUCTS ================= */}

      <section className="px-6 md:px-10 lg:px-20 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-end mb-10">

            <div>

              <p className="text-sm font-semibold tracking-[0.2em] text-[#a47b3c]">
                OUR PICKS
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                Featured Products
              </h2>

              <p className="mt-3 text-gray-500">
                Popular products selected for you.
              </p>

            </div>

            <Link
              to="/categories"
              className="hidden sm:block text-sm font-semibold hover:text-[#a47b3c] transition"
            >
              View All →
            </Link>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {products.map((product) => (
              <Card
                key={product.id}
                name={product.title}
                image={product.image}
                price={product.price}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}

          </div>

        </div>

      </section>


      {/* ================= TRUST SECTION ================= */}

      <TrustSection />


      {/* ================= CATEGORIES ================= */}

      <section className="px-6 md:px-10 lg:px-20 py-20 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p className="text-sm font-semibold tracking-[0.2em] text-[#a47b3c]">
              SHOP BY CATEGORY
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Find What You Love
            </h2>

            <p className="mt-3 text-gray-500">
              Explore our collections and discover your next favorite product.
            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-6 mt-12">

            {/* MEN */}

            <Link
              to="/categories"
              className="group relative h-80 bg-[#eee9df] rounded-3xl overflow-hidden p-10 flex items-end"
            >

              <div>

                <p className="text-sm text-gray-500">
                  COLLECTION
                </p>

                <h3 className="mt-2 text-4xl font-bold">
                  Men
                </h3>

                <p className="mt-2 text-gray-600">
                  Explore men's collection
                </p>

                <span className="inline-block mt-5 font-semibold group-hover:text-[#a47b3c] transition">
                  Shop Now →
                </span>

              </div>

            </Link>


            {/* WOMEN */}

            <Link
              to="/categories"
              className="group relative h-80 bg-[#f1eee9] rounded-3xl overflow-hidden p-10 flex items-end"
            >

              <div>

                <p className="text-sm text-gray-500">
                  COLLECTION
                </p>

                <h3 className="mt-2 text-4xl font-bold">
                  Women
                </h3>

                <p className="mt-2 text-gray-600">
                  Explore women's collection
                </p>

                <span className="inline-block mt-5 font-semibold group-hover:text-[#a47b3c] transition">
                  Shop Now →
                </span>

              </div>

            </Link>

          </div>

        </div>

      </section>


      {/* ================= WHY SHOP WITH US ================= */}

      <section className="px-6 md:px-10 lg:px-20 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p className="text-sm font-semibold tracking-[0.2em] text-[#a47b3c]">
              WHY SHOP WITH US
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Shopping Made Simple
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-6 mt-12">

            {/* FEATURE 1 */}

            <div className="bg-white rounded-3xl p-8 border border-gray-100">

              <div className="w-12 h-12 rounded-full bg-[#eee9df] flex items-center justify-center text-xl">
                🚚
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Fast Delivery
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Get your favorite products delivered quickly and safely.
              </p>

            </div>


            {/* FEATURE 2 */}

            <div className="bg-white rounded-3xl p-8 border border-gray-100">

              <div className="w-12 h-12 rounded-full bg-[#eee9df] flex items-center justify-center text-xl">
                🔒
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Secure Payment
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Your payment information is protected with secure checkout.
              </p>

            </div>


            {/* FEATURE 3 */}

            <div className="bg-white rounded-3xl p-8 border border-gray-100">

              <div className="w-12 h-12 rounded-full bg-[#eee9df] flex items-center justify-center text-xl">
                ↩️
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Easy Returns
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Simple returns make your shopping experience stress-free.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= REVIEWS ================= */}

      <Reviews />


      {/* ================= NEWSLETTER ================= */}

      <Newsletter />

    </div>
  );
}

export default Home;
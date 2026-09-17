import React from "react";
import { Link } from "react-router-dom";

function SpecialOffer() {
  return (
    <section className="bg-[#151515] px-10 py-16">
      <div className="max-w-7xl mx-auto border border-[#2a2a2a] px-8 py-12 text-center">

        <p className="text-[#c9a86a] tracking-[0.3em] text-sm">
          LIMITED TIME OFFER
        </p>

        <h2 className="mt-4 text-4xl font-bold text-[#f5f1e8]">
          UP TO 40% OFF
        </h2>

        <p className="mt-4 text-[#a8a39a]">
          Premium products. Better prices. Shop your favorites today.
        </p>

        <Link
          to="/categories"
          className="inline-block mt-8 px-8 py-3 bg-[#c9a86a] text-[#0f0f0f] font-semibold hover:bg-[#dfc18b] transition"
        >
          SHOP NOW
        </Link>

      </div>
    </section>
  );
}

export default SpecialOffer;
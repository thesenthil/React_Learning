import React from "react";

function Services() {
  return (
    <section className="min-h-screen px-10 lg:px-24 py-24 bg-[#e8ead5]">
      <div className="text-center">
        <p className="text-sm tracking-[0.25em] font-semibold text-[#707b45]">
          OUR SERVICES
        </p>

        <h1 className="mt-4 text-5xl font-medium">
          Why Shop With Us?
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="p-8 bg-[#f7f8f0]">
          <h2 className="text-2xl font-medium">Fast Delivery</h2>
          <p className="mt-4 text-[#666b58] leading-7">
            Get your orders delivered quickly and safely.
          </p>
        </div>

        <div className="p-8 bg-[#f7f8f0]">
          <h2 className="text-2xl font-medium">Easy Returns</h2>
          <p className="mt-4 text-[#666b58] leading-7">
            Simple and hassle-free returns whenever you need them.
          </p>
        </div>

        <div className="p-8 bg-[#f7f8f0]">
          <h2 className="text-2xl font-medium">Secure Payment</h2>
          <p className="mt-4 text-[#666b58] leading-7">
            Enjoy a safe and secure payment experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
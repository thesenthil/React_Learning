import React from "react";

function TrustSection() {
  return (
    <section className="bg-[#0f0f0f] px-10 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="border border-[#2a2a2a] p-6 text-center">
          <div className="text-3xl">🚚</div>
          <h3 className="mt-4 text-lg font-semibold text-[#f5f1e8]">
            Fast Delivery
          </h3>
          <p className="mt-2 text-sm text-[#8f8a82]">
            Quick and reliable delivery to your doorstep.
          </p>
        </div>

        <div className="border border-[#2a2a2a] p-6 text-center">
          <div className="text-3xl">🔒</div>
          <h3 className="mt-4 text-lg font-semibold text-[#f5f1e8]">
            Secure Payment
          </h3>
          <p className="mt-2 text-sm text-[#8f8a82]">
            Your payments are safe and secure with us.
          </p>
        </div>

        <div className="border border-[#2a2a2a] p-6 text-center">
          <div className="text-3xl">↩️</div>
          <h3 className="mt-4 text-lg font-semibold text-[#f5f1e8]">
            Easy Returns
          </h3>
          <p className="mt-2 text-sm text-[#8f8a82]">
            Simple and hassle-free return experience.
          </p>
        </div>

        <div className="border border-[#2a2a2a] p-6 text-center">
          <div className="text-3xl">💬</div>
          <h3 className="mt-4 text-lg font-semibold text-[#f5f1e8]">
            Customer Support
          </h3>
          <p className="mt-2 text-sm text-[#8f8a82]">
            We are here to help whenever you need us.
          </p>
        </div>

      </div>
    </section>
  );
}

export default TrustSection;
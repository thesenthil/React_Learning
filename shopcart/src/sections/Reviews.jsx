import React from "react";

function Reviews() {
  return (
    <section className="bg-[#151515] px-10 py-16">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <p className="text-[#c9a86a] tracking-[0.3em] text-sm">
            CUSTOMER REVIEWS
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#f5f1e8]">
            What Our Customers Say
          </h2>

          <p className="mt-3 text-[#8f8a82]">
            Real experiences from people who shop with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div className="border border-[#2a2a2a] p-7">
            <div className="text-[#c9a86a]">
              ★★★★★
            </div>

            <p className="mt-4 text-[#b8b3aa] leading-7">
              "Amazing quality and a very smooth shopping experience.
              I really loved the products."
            </p>

            <h4 className="mt-5 font-semibold text-[#f5f1e8]">
              saurabh
            </h4>
          </div>

          <div className="border border-[#2a2a2a] p-7">
            <div className="text-[#c9a86a]">
              ★★★★★
            </div>

            <p className="mt-4 text-[#b8b3aa] leading-7">
              "The products arrived quickly and the quality was
              better than I expected."
            </p>

            <h4 className="mt-5 font-semibold text-[#f5f1e8]">
              sanju
            </h4>
          </div>

          <div className="border border-[#2a2a2a] p-7">
            <div className="text-[#c9a86a]">
              ★★★★★
            </div>

            <p className="mt-4 text-[#b8b3aa] leading-7">
              "Simple website, great products and an excellent
              shopping experience."
            </p>

            <h4 className="mt-5 font-semibold text-[#f5f1e8]">
              senthil
            </h4>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Reviews;
import React, { useState } from "react";

function Newsletter() {

  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    alert("Thank you for subscribing!");
    setEmail("");
  }

  return (
    <section className="bg-[#0f0f0f] px-10 py-16">

      <div className="max-w-4xl mx-auto text-center">

        <p className="text-[#c9a86a] tracking-[0.3em] text-sm">
          JOIN THE SHOP COMMUNITY
        </p>

        <h2 className="mt-4 text-3xl font-bold text-[#f5f1e8]">
          Get Exclusive Offers
        </h2>

        <p className="mt-4 text-[#8f8a82]">
          Subscribe to receive exclusive deals, new arrivals,
          news and special offers.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >

          <input
            type="email"
            id="newsletter-email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 bg-[#151515] border border-[#2a2a2a] text-[#f5f1e8] outline-none focus:border-[#c9a86a]"
          />

          <button
            type="submit"
            className="px-7 py-3 bg-[#c9a86a] text-[#0f0f0f] font-semibold hover:bg-[#dfc18b] transition"
          >
            SUBSCRIBE
          </button>

        </form>

      </div>

    </section>
  );
}

export default Newsletter;
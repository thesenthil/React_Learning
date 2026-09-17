import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-[#f5f1e8] px-10 py-12 border-t border-[#2a2a2a]">

      {/* Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-widest text-[#c9a86a]">
            SHOP
          </h2>

          <p className="mt-3 text-[#a8a39a]">
            Simple shopping. Better choices.
          </p>

          <p className="mt-6 text-sm text-[#8f8a82] leading-6">
            Discover quality products, better choices,
            and a simple shopping experience.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest text-[#c9a86a]">
            CUSTOMER SERVICE
          </h3>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="https://www.mydesignation.com/pages/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b8b3aa] hover:text-[#c9a86a] transition"
            >
              Contact us
            </a>

            <a
              href="https://www.mydesignation.com/pages/faq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b8b3aa] hover:text-[#c9a86a] transition"
            >
              FAQs
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest text-[#c9a86a]">
            COMPANY
          </h3>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="https://www.mydesignation.com/pages/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b8b3aa] hover:text-[#c9a86a] transition"
            >
              About us
            </a>

            <a
              href="https://www.mydesignation.com/pages/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b8b3aa] hover:text-[#c9a86a] transition"
            >
              Privacy Policy
            </a>

            <a
              href="https://www.mydesignation.com/pages/shipping-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b8b3aa] hover:text-[#c9a86a] transition"
            >
              Shipping Policy
            </a>

            <a
              href="https://www.mydesignation.com/pages/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b8b3aa] hover:text-[#c9a86a] transition"
            >
              Terms and Conditions
            </a>

            <a
              href="https://www.mydesignation.com/pages/investor-relations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b8b3aa] hover:text-[#c9a86a] transition"
            >
              Investor Relations
            </a>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest text-[#c9a86a]">
            FOLLOW US
          </h3>

          <p className="mt-5 text-[#b8b3aa]">
            Email Us
          </p>

          <p className="mt-3 text-sm text-[#8f8a82] leading-6">
            Apply for our free membership to receive exclusive
            deals, news, and events.
          </p>

          <div className="mt-5 flex gap-5">
            <a
              href="https://www.facebook.com/mydesignationofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b8b3aa] hover:text-[#c9a86a] transition"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/mydesignationofficial/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b8b3aa] hover:text-[#c9a86a] transition"
            >
              Instagram
            </a>
          </div>

          <div className="mt-3 flex gap-5">
            <a
              href="https://www.linkedin.com/company/mydesignation/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b8b3aa] hover:text-[#c9a86a] transition"
            >
              LinkedIn
            </a>

            <a
              href="https://www.youtube.com/channel/UCtb2ioX_CyGNtwHBTUNVVRA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b8b3aa] hover:text-[#c9a86a] transition"
            >
              YouTube
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="mt-12 pt-6 border-t border-[#2a2a2a] flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-sm text-[#8f8a82]">
          © 2026 SHOP. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
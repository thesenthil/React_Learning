import React from "react";

function Form() {
  return (
    <div className="min-h-screen bg-sky-100 flex justify-center items-center">

      <form className="bg-white w-96 p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center text-sky-600 mb-6">
          Contact Form
        </h1>

        {/* Name */}
        <label
          htmlFor="name"
          className="block font-semibold text-gray-700 mb-2"
        >
          Name:
        </label>

        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 outline-none focus:border-sky-500"
        />

        {/* Email */}
        <label
          htmlFor="email"
          className="block font-semibold text-gray-700 mb-2"
        >
          Email:
        </label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 outline-none focus:border-sky-500"
        />

        {/* Message */}
        <label
          htmlFor="message"
          className="block font-semibold text-gray-700 mb-2"
        >
          Message:
        </label>

        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          rows="4"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-5 outline-none focus:border-sky-500 resize-none"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-sky-500 text-white font-semibold py-2 rounded-lg hover:bg-sky-600 transition"
        >
          Submit
        </button>

      </form>

    </div>
  );
}

export default Form;
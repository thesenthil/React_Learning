import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-100">

      <section className="text-center py-24 px-5">

        <h1 className="text-5xl font-bold text-sky-600">
          Welcome to Student Portal 🎓
        </h1>

        <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
          A simple student management system built using
          React, React Router and Tailwind CSS.
        </p>

        <Link
          to="/students"
          className="inline-block mt-8 bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700"
        >
          View Students
        </Link>

      </section>

    </div>
  );
}

export default Home;
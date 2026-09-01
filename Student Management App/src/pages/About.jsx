import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-slate-100 py-16 px-5">

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-4xl font-bold text-sky-600 text-center">
          About Student Portal
        </h1>

        <p className="text-gray-600 text-lg leading-8 mt-8">
          Student Portal is a beginner-friendly React project designed
          to manage and display student information.
        </p>

        <p className="text-gray-600 text-lg leading-8 mt-5">
          This project demonstrates important React concepts such as
          components, props and React Router.
        </p>

        <div className="mt-8">

          <h2 className="text-2xl font-bold text-gray-800">
            Technologies Used
          </h2>

          <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
            <li>React</li>
            <li>React Router</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
          </ul>

        </div>

      </div>

    </div>
  );
}

export default About;
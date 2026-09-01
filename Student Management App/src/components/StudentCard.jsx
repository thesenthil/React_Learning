import React from "react";
import { Link } from "react-router-dom";

function StudentCard(props) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-72">

      <img
        src={props.image}
        alt={props.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold text-gray-800">
          {props.name}
        </h2>

        <p className="text-gray-600 mt-2">
          Roll No: {props.rollNo}
        </p>

        <p className="text-gray-600">
          Section: {props.section}
        </p>

        <Link
          to={`/students/${props.id}`}
          className="inline-block mt-4 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default StudentCard;
import React from "react";
import { useParams, Link } from "react-router-dom";
import image1 from "../images/image1.png";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.png";

function StudentDetails() {

  const { id } = useParams();

  const students = {
    1: {
      name: "Senthil",
      rollNo: "101",
      section: "CSE-A",
      course: "B.Tech Computer Science",
      email: "senthil@example.com",
      image:image1
    },

    2: {
      name: "Saurabh",
      rollNo: "102",
      section: "CSE-B",
      course: "B.Tech Computer Science",
      email: "saurabh@example.com",
      image: image2
    },

    3: {
      name: "Sagar",
      rollNo: "103",
      section: "CSE-A",
      course: "B.Tech Computer Science",
      email: "sagar@example.com",
      image: image3
    },

    4: {
      name: "Shashank",
      rollNo: "104",
      section: "CSE-C",
      course: "B.Tech Computer Science",
      email: "shashank@example.com",
      image: image4
    }
  };

  const student = students[id];

  if (!student) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">

        <h1 className="text-4xl font-bold text-red-500">
          Student Not Found
        </h1>

        <Link
          to="/students"
          className="mt-5 bg-sky-500 text-white px-5 py-2 rounded"
        >
          Back to Students
        </Link>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-5">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md text-center">

        <img
          src={student.image}
          alt={student.name}
          className="w-36 h-36 rounded-full object-cover mx-auto border-4 border-sky-500"
        />

        <h1 className="text-3xl font-bold mt-5">
          {student.name}
        </h1>

        <div className="text-gray-600 mt-5 space-y-2">

          <p>
            <strong>Roll No:</strong> {student.rollNo}
          </p>

          <p>
            <strong>Section:</strong> {student.section}
          </p>

          <p>
            <strong>Course:</strong> {student.course}
          </p>

          <p>
            <strong>Email:</strong> {student.email}
          </p>

        </div>

        <Link
          to="/students"
          className="inline-block mt-6 bg-sky-600 text-white px-5 py-2 rounded-lg hover:bg-sky-700"
        >
          ← Back to Students
        </Link>

      </div>

    </div>
  );
}

export default StudentDetails;
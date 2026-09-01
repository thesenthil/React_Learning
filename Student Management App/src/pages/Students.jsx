import React from "react";
import StudentCard from "../components/StudentCard";

import image1 from "../images/image1.png";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.png";

function Students() {

  const students = [
    {
      id: 1,
      name: "Senthil",
      rollNo: "101",
      section: "CSE-A",
      image: image1
    },

    {
      id: 2,
      name: "Saurabh",
      rollNo: "102",
      section: "CSE-B",
      image: image2
    },

    {
      id: 3,
      name: "Sagar",
      rollNo: "103",
      section: "CSE-C",
      image: image3
    },

    {
      id: 4,
      name: "Shashank",
      rollNo: "104",
      section: "CSE-D",
      image: image4
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-6">

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Students 👨‍🎓
      </h1>

      <div className="flex flex-wrap justify-center gap-8">

        {students.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            rollNo={student.rollNo}
            section={student.section}
            image={student.image}
          />
        ))}

      </div>

    </div>
  );
}

export default Students;
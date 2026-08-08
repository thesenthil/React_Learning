// import React from "react";

// function Cart() {
//   return (
//     <div
//       style={{
//         width: "280px",
//         border: "1px solid #ddd",
//         borderRadius: "10px",
//         overflow: "hidden",
//         boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
//         margin: "30px auto",
//         backgroundColor: "#fff",
//       }}
//     >
//       {/* Product Image */}
//       <img
//         src="image1.png"
//         alt="Shoes"
//         style={{
//           width: "100%",
//           height: "220px",
//           objectFit: "cover",
//         }}
//       />
//       {/* Product Details */}
//       <div style={{ padding: "15px" }}>
//         <h2 style={{ margin: "0", fontSize: "22px" }}>Name: Senthil </h2>
//         <p style={{ color: "#666", margin: "8px 0" }}>  </p>
//         <h3 style={{ color: "green", margin: "10px 0" }}> </h3>
//        <p> Roll no :111</p>
//         <p>Section:cse 1</p> 
//       </div>
//     </div>
//   );
// }

// export default Cart;
// Cart.jsx

import React from "react";

const Cart = ({ image, name, rollNo, section }) => {
  return (
    <div className="w-72 bg-white rounded-xl shadow-md p-5 text-center hover:shadow-xl transition duration-300">

      <img
        src={image}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full border-2 border-blue-500 object-cover"
      />

      <h2 className="mt-4 text-xl font-bold text-gray-800">
        {name}
      </h2>

      <p className="text-gray-600 mt-2">
        <span className="font-semibold">Roll No:</span> {rollNo}
      </p>

      <p className="text-gray-600 mt-2">
        <span className="font-semibold">Section:</span> {section}
      </p>

    </div>
  );
};

export default Cart;
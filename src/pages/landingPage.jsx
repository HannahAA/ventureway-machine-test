import React from "react";
// import "../App.css";

// // export const LandingPage = () => {
// //   return (
// //     <div>
// //       <h1 color="#FFFFFF">Welcome to the Landing Page</h1>
// //       <p className="read-the-docs">This is a simple landing page component.</p>
// //     </div>
// //   );
// // }

// export default function LandingPage() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
//       <p className="text-lg text-gray-600 mb-6">
//         This is the landing page. Start building your content here!
//       </p>
//       <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
//         Get Started
//       </button>
//     </div>
//   );
// }

import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
      <p className="text-lg text-gray-600 mb-6">
        This is the landing page. Start building your content here!
      </p>
      <div className="flex gap-4">
        <Link
          to="/about"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

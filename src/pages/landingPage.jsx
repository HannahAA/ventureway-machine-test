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

// import { Link } from "react-router-dom";

// export default function LandingPage() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
//       <p className="text-lg text-gray-600 mb-6">
//         This is the landing page. Start building your content here!
//       </p>
//       <div className="flex gap-4">
//         <Link
//           to="/about"
//           className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
//         >
//           About
//         </Link>
//         <Link
//           to="/contact"
//           className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
//         >
//           Contact
//         </Link>
//       </div>
//     </div>
//   );
// }

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="grid grid-cols-1 md:grid-cols-2 flex-grow">
        {/* Left side (text) */}
        <div className="flex flex-col justify-center p-8 md:p-16 bg-gray-100">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build Faster with React + Tailwind
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            A modern responsive landing page layout that works beautifully on
            mobile and desktop.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right side (image/illustration) */}
        <div className="flex items-center justify-center bg-white p-8">
          <img
            src="https://via.placeholder.com/500"
            alt="Hero Illustration"
            className="max-w-full h-auto rounded-lg shadow"
          />
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-16 bg-white grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">🚀 Fast Setup</h3>
          <p className="text-gray-600">
            Get your app running in minutes with Vite + Tailwind.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">📱 Fully Responsive</h3>
          <p className="text-gray-600">
            Works seamlessly on mobile, tablet, and desktop.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">🎨 Customizable</h3>
          <p className="text-gray-600">
            Extend Tailwind to match your brand easily.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    </div>
  );

  // return (
  //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
  //     <div className="bg-blue-300 p-8">Left</div>
  //     <div className="bg-green-300 p-8">Right</div>
  //   </div>
  // );

}

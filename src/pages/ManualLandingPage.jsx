import React from "react";
import Lottie from "react-lottie";
import clockData from "../lottieAssets/clock.json";
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

export default function ManualLandingPage() {

    const defaultOptions = {
    loop: true, // Set to true for continuous looping
    autoplay: true, // Set to true to automatically play the animation
    animationData: clockData, // The imported JSON animation data
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice' // Adjust aspect ratio as needed
    }
    };

    const boxes = [
    { color: "#3b82f6", width: "75%" },
    { color: "#10b981", width: "65%" },
    { color: "#8b5cf6", width: "55%" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
            <div className="flex flex-col items-center gap-y-[24px]">
                {/* Hero Section */}
                <h1 className="text-white font-bold text-6xl md:text-8xl">InnoHour</h1>
                <div className="flex flex-col md:flex-row font-bold text-3xl md:text-5xl gap-2">
                    <h2 className="text-[#137FD8]">One Hour.</h2>
                    <h2 className="text-white">Fresh Ideas.</h2>
                    <h2 className="text-white">Real Impact.</h2>
                </div>
                <p className="text-white font-bold text-xl">Not sure how AI fits into your business? We understand.</p>
                <p className="text-white font-medium text-base max-w-[527px]">In just 60 minutes, we’ll help you uncover simple, practical ways to innovate your business without the complexity.</p>
                <div className="flex flex-col md:flex-row gap-[24px] md:mt-[53px]">
                    <a href="#" className="px-[79px] py-[12px] bg-[#1381D9] text-white font-medium text-base rounded-lg shadow hover:bg-blue-700 transition">Learn More</a>
                    <a href="#" className="px-[85px] py-[12px] bg-[#ECE9E9] text-[#191919] font-medium text-base rounded-lg shadow hover:bg-gray-300 transition">Chat Now</a>
                </div>
            </div>

            <div className="flex flex-col mt-[392px] bg-[#232728] py-6 px-[78px]">
                {/* Supporting Sections */}
                <div className="flex flex-col items-center">
                    <div className="flex flex-col md:flex-row font-bold text-3xl md:text-5xl gap-2">
                        <h2 className="text-[#00E5FC]">How</h2>
                        <h2 className="text-white">InnoHour</h2>
                        <h2 className="text-[#137FD8]">Works</h2>
                    </div>
                    <div className="bg-[#4A4A4A7A] h-[3px] w-xs mt-[21px]"></div>
                </div>

                {/* <section className="relative bg-blue-500 h-[587px] w-full overflow-hidden">
                    <div
                        className="absolute top-0 right-0 h-full w-full bg-white"
                        style={{ clipPath: "circle(294px at right 50%)" }}
                    />
                    <div className="bg-[#1B1C1E] rounded-2xl h-32 p-8 text-white">
                        <p className="text-white text-xs">Your content here</p>
                    </div>
                    <div className="bg-[#1B1C1E] rounded-2xl h-32 p-8 text-white mt-[26px]">
                        <p className="text-white text-xs">Your second content here</p>
                    </div>
                    <div className="bg-[#1B1C1E] rounded-2xl h-36 p-8 text-white mt-[23px]">
                        <p className="text-white text-xs">Your third content here</p>
                    </div>
                    <div className="bg-[#1B1C1E] rounded-2xl h-32 p-8 text-white mt-[16px]">
                        <p className="text-white text-xs">Your fourth content here</p>
                    </div>
                </section> */}

                {/* we'll make 9 grid columns
                of that the first 1 will be a col of small width
                rest will be divided equally */}

                {/* <section className="relative grid grid-cols-9 grid-rows-4 h-[587px] gap-y-[23px]">
                    <div className="col-start-1 col-end-2 row-span-2">
                        <h3 className="font-extrabold text-6xl text-[#FFFFFF12] rotate-270">Call 01</h3>
                    </div>
                    <div className="col-start-1 col-end-2 row-span-2">
                        <h3 className="font-extrabold text-6xl text-[#FFFFFF12] rotate-270">Call 02</h3>
                    </div>
                    <div
                        className="absolute top-0 right-0 h-full w-full bg-white"
                        style={{ clipPath: "circle(280px at right 50%)" }}
                    />
                    <div className="col-start-2 col-end-8 row-start-1 row-end-2 bg-[#1B1C1E] rounded-2xl h-32 p-8 text-white">
                        <p className="text-white text-xs">Your first content here</p>
                    </div>
                    <div className="col-start-2 col-end-8 row-start-2 row-end-3 bg-[#1B1C1E] rounded-2xl h-32 p-8 text-white">
                        <p className="text-white text-xs">Your second content here</p>
                    </div>
                    <div className="col-start-2 col-end-8 row-start-3 row-end-4 bg-[#1B1C1E] rounded-2xl h-36 p-8 text-white">
                        <p className="text-white text-xs">Your third content here</p>
                    </div>
                    <div className="col-start-2 col-end-8 row-start-4 row-end-5 bg-[#1B1C1E] rounded-2xl h-32 p-8 text-white">
                        <p className="text-white text-xs">Your fourth content here</p>
                    </div>
                    <div
                        className="col-start-5 col-end-10 row-start-1 row-end-5 bg-white"
                        style={{ clipPath: "circle(280px at right 50%)" }}
                    />
                    <div className="col-start-5 col-end-10 row-start-1 row-end-5">
                        <Lottie options={defaultOptions}
                            height={587}
                            width={587}
                        />
                    </div>
                </section> */}

                {/* we'll create a grid with only 7 columns
                of that the first 1 will be a col of small width
                rest will be divided equally */}

                <section className="relative grid grid-cols-7 grid-rows-4 h-[587px] gap-y-[23px] mt-[52px] text-left max-w-[757px]"> 
                    <div className="col-start-1 col-end-2 row-span-2">
                        <h3 className="font-extrabold text-6xl text-[#FFFFFF12] rotate-270">Call 01</h3>
                    </div>
                    <div className="col-start-1 col-end-2 row-span-2">
                        <h3 className="font-extrabold text-6xl text-[#FFFFFF12] rotate-270">Call 02</h3>
                    </div>
                    <div
                        className="absolute top-0 right-0 h-full w-full bg-white"
                        style={{ clipPath: "circle(285px at right 50%)" }}
                    />
                    {/* <div className="absolute top-[59px] right-[-208px]">
                        <Lottie options={defaultOptions}
                            height={416}
                            width={416}
                        />
                    </div> */}
                    <div className="absolute right-[-293.5px]">
                        <Lottie options={defaultOptions}
                            height={587}
                            width={587}
                        />
                    </div>
                    <div className="col-start-2 col-end-8 row-start-1 row-end-2 bg-[#1B1C1E] rounded-2xl h-32 p-8 text-white">
                        <p className="text-white text-xs">Your first content here</p>
                    </div>
                    <div className="col-start-2 col-end-8 row-start-2 row-end-3 bg-[#1B1C1E] rounded-2xl h-32 p-8 text-white">
                        <p className="text-white text-xs">Your second content here</p>
                    </div>
                    <div className="col-start-2 col-end-8 row-start-3 row-end-4 bg-[#1B1C1E] rounded-2xl h-36 p-8 text-white">
                        <p className="text-white text-xs">Your third content here</p>
                    </div>
                    <div className="col-start-2 col-end-8 row-start-4 row-end-5 bg-[#1B1C1E] rounded-2xl h-32 p-8 text-white">
                        <p className="text-white text-xs">Your fourth content here</p>
                    </div>
                </section>

                <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
        </main>
        <footer></footer>
    </div>
  );
}

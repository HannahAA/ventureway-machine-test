import React from "react";
// import Lottie from "react-lottie";
// import clockData from "../lottieAssets/clock.json";
// import DocumentIcon from "../images/doc-icon.png";
// import PhoneIcon from "../images/phone-icon.png";
// import MotionSensorIcon from "../images/motion-sensor-icon.png";
// import RoadmapIcon from "../images/roadmap-icon.png";
import HeroSection from "../components/LandingPageSections/HeroSection";
import HowItWorksSection from "../components/LandingPageSections/HowItWorksSection";
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

    // const defaultOptions = {
    // loop: true, // Set to true for continuous looping
    // autoplay: true, // Set to true to automatically play the animation
    // animationData: clockData, // The imported JSON animation data
    // rendererSettings: {
    //     preserveAspectRatio: 'xMidYMid slice' // Adjust aspect ratio as needed
    // }
    // };

  return (
    <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
            {/* Hero Section */}
            
            {/* <div className="flex flex-col items-center gap-y-[24px] mt-[50px] md:mt-[267px]">
                <div className="flex font-bold text-6xl md:text-8xl">
                    <h1 className="text-white">Inno</h1>
                    <h1 className="text-[#00E5FC]">Hour</h1>
                </div>
                <div className="flex flex-col md:flex-row font-bold text-3xl md:text-5xl gap-2">
                    <h2 className="text-[#00E5FC]">One Hour.</h2>
                    <h2 className="text-white">Fresh Ideas.</h2>
                    <h2 className="text-white">Real Impact.</h2>
                </div>
                <p className="text-white font-bold text-xl">Not sure how AI fits into your business? We understand.</p>
                <p className="text-white font-medium text-base max-w-[527px]">In just 60 minutes, we’ll help you uncover simple, practical ways to innovate your business without the complexity.</p>
                <div className="flex flex-col md:flex-row gap-[24px] md:mt-[53px]">
                    <a href="#" className="px-[79px] py-[12px] bg-[#1381D9] text-white font-medium text-base rounded-lg shadow hover:bg-blue-700 transition">Learn More</a>
                    <a href="#" className="px-[85px] py-[12px] bg-[#ECE9E9] text-[#191919] font-medium text-base rounded-lg shadow hover:bg-gray-300 transition">Chat Now</a>
                </div>
            </div> */}

            <HeroSection />

            {/* we'll create a grid with only 7 columns
                of that the first 1 will be a col of small width
                rest will be divided equally */}

            {/* <div className="flex flex-col mt-[392px] bg-[#232728] py-6 px-[78px] rounded-2xl">
                <div className="flex flex-col items-center">
                    <div className="flex flex-row font-bold text-2xl md:text-5xl gap-2">
                        <h2 className="text-[#00E5FC]">How</h2>
                        <h2 className="text-white">InnoHour</h2>
                        <h2 className="text-[#137FD8]">Works</h2>
                    </div>
                    <div className="bg-[#4A4A4A7A] h-[3px] w-[40%] md:w-[22.5%] mt-[21px]"></div>
                </div>

                <section className="relative grid grid-cols-3 md:grid-cols-7 grid-rows-4 h-[587px] gap-y-[23px] mt-[52px] text-left max-w-[757px]"> 
                    <div className="col-start-1 col-end-2 row-start-2 row-end-3 w-max">
                        <h3 className="font-extrabold text-6xl text-[#FFFFFF12] rotate-270">Call 01</h3>
                    </div>
                    <div className="col-start-1 col-end-2 row-start-4 row-end-5 w-max">
                        <h3 className="font-extrabold text-6xl text-[#FFFFFF12] rotate-270">Call 02</h3>
                    </div>
                    <div
                        className="absolute hidden md:block top-0 right-0 h-full w-full bg-[#232728]"
                        style={{ clipPath: "circle(285px at right 50%)" }}
                    />
                    <div className="absolute hidden md:block right-[-293.5px]">
                        <Lottie options={defaultOptions}
                            height={587}
                            width={587}
                        />
                    </div>
                    <div className="col-start-2 col-end-4 md:col-end-8 row-start-1 row-end-2 bg-[#1B1C1E] rounded-2xl h-32 pl-10 py-8 text-white">
                        <div className="flex gap-5">
                            <img src={DocumentIcon} alt="doc-icon" className="w-[40px] h-[40px]" />
                            <div className="max-w-[327px]">
                                <p className="text-white font-bold text-lg">Book Your Spot</p>
                                <p className="text-white font-medium text-xs">Pick a time that fits your schedule. Booking takes less than a minute.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-2 col-end-4 md:col-end-8 row-start-2 row-end-3 bg-[#1B1C1E] rounded-2xl h-32 pl-10 py-8 text-white">
                        <div className="flex gap-5">
                            <img src={PhoneIcon} alt="doc-icon" className="w-[40px] h-[40px]" />
                            <div className="max-w-[299px]">
                                <p className="text-white font-bold text-lg">Tell Us Your Story</p>
                                <p className="text-white font-medium text-xs">In the first 30-minute call, we’ll listen to your goals, challenges, and how your business operates.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-2 col-end-4 md:col-end-8 row-start-3 row-end-4 bg-[#000000] rounded-2xl h-36 pl-10 py-8 text-white">
                        <div className="flex gap-5">
                            <img src={MotionSensorIcon} alt="doc-icon" className="w-[40px] h-[40px]" />
                            <div className="max-w-[310px]">
                                <p className="text-white font-bold text-lg">Get Practical Insights</p>
                                <p className="text-white font-medium text-xs">In the second 30-minute call, we’ll share practical, easy-to-understand ideas that can help you save time and work smarter</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-2 col-end-4 md:col-end-8 row-start-4 row-end-5 bg-[#000000] rounded-2xl h-32 pl-10 py-8 text-white">
                        <div className="flex gap-5">
                            <img src={RoadmapIcon} alt="doc-icon" className="w-[40px] h-[40px]" />
                            <div className="max-w-[374px]">
                                <p className="text-white font-bold text-lg">Your Innovation Roadmap</p>
                                <p className="text-white font-medium text-xs">Within 48 hours, you’ll get a personalized roadmap with clear next steps tailored to your business.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div> */}

            <HowItWorksSection />

            <div className="flex flex-row place-self-center font-bold text-2xl md:text-5xl gap-2 mt-[170px]">
                <h2 className="bg-linear-to-r from-[#00E5FC] to-[#137FD8] bg-clip-text text-transparent">Ask me anything about</h2>
                <h2 className="bg-linear-to-r from-[#CACACA] to-[#878787] bg-clip-text text-transparent">InnoHour!</h2>
            </div>
        </main>
        <footer></footer>
    </div>
  );
}

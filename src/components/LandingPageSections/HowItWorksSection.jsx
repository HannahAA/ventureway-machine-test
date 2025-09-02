import DocumentIcon from "../../images/doc-icon.png";
import PhoneIcon from "../../images/phone-icon.png";
import MotionSensorIcon from "../../images/motion-sensor-icon.png";
import RoadmapIcon from "../../images/roadmap-icon.png";
import Lottie from "react-lottie";
import clockData from "../../lottieAssets/clock.json";

const HowItWorksSection = () => {

    const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: clockData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice' // Adjust aspect ratio as needed
    }
    };

    return (
        <div id="how-it-works" className="flex flex-col w-[80.83vw] max-w-[1164px] mt-[100px] lg:mt-[392px] bg-[#232728] py-6 px-5 how-it-works-section-padding rounded-2xl">
            <div className="flex flex-col items-center">
                <div className="flex flex-row font-bold text-2xl lg:text-5xl gap-2">
                    <h2 className="text-[#00E5FC]">How</h2>
                    <h2 className="bg-linear-to-r from-[#CACACA] to-[#878787] bg-clip-text text-transparent">InnoHour</h2>
                    <h2 className="bg-linear-to-r from-[#00E5FC] to-[#137FD8] bg-clip-text text-transparent">Works</h2>
                </div>
                <div className="bg-[#4A4A4A7A] h-[3px] w-[40%] lg:w-[22.5%] mt-[21px]"></div>
            </div>

            {/* we'll create a grid with only 7 columns
            of that the first 1 will be a col of small width
            rest will be divided equally */}

            {/* <div className="absolute top-[59px] right-[-208px]">
            <Lottie options={defaultOptions}
                height={416}
                width={416}
            />
            </div> */}

            {/* <section className="relative grid grid-cols-3 lg:grid-cols-7 grid-rows-4 h-[587px] gap-y-[23px] mt-[52px] text-left max-w-[757px]"> 
                <div className="hidden lg:block col-start-1 col-end-2 row-start-2 row-end-3 w-max">
                    <h3 className="font-extrabold text-3xl lg:text-6xl text-[#FFFFFF12] rotate-270">Call 01</h3>
                </div>
                <div className="hidden lg:block col-start-1 col-end-2 row-start-4 row-end-5 w-max">
                    <h3 className="font-extrabold text-3xl lg:text-6xl text-[#FFFFFF12] rotate-270">Call 02</h3>
                </div>
                <div
                    className="absolute hidden lg:block top-0 right-0 h-full w-full bg-[#232728]"
                    style={{ clipPath: "circle(285px at right 50%)" }}
                />
                <div className="absolute hidden lg:block right-[-293.5px]">
                    <Lottie options={defaultOptions}
                        height={587}
                        width={587}
                    />
                </div>
                <div className="col-start-1 lg:col-start-2 col-end-4 lg:col-end-8 row-start-1 row-end-2 bg-[#1B1C1E] rounded-2xl h-32 p-5 lg:pl-10 lg:py-8 text-white">
                    <div className="flex gap-5">
                        <img src={DocumentIcon} alt="doc-icon" className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px]" />
                        <div className="max-w-[327px]">
                            <p className="text-white font-bold text-sm lg:text-lg">Book Your Spot</p>
                            <p className="text-white font-medium text-xs">Pick a time that fits your schedule. Booking takes less than a minute.</p>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 lg:col-start-2 col-end-4 lg:col-end-8 row-start-2 row-end-3 bg-[#1B1C1E] rounded-2xl h-32 p-5 lg:pl-10 lg:py-8 text-white">
                    <div className="flex gap-5">
                        <img src={PhoneIcon} alt="doc-icon" className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px]" />
                        <div className="max-w-[299px]">
                            <p className="text-white font-bold text-sm lg:text-lg">Tell Us Your Story</p>
                            <p className="text-white font-medium text-xs">In the first 30-minute call, we’ll listen to your goals, challenges, and how your business operates.</p>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 lg:col-start-2 col-end-4 lg:col-end-8 row-start-3 row-end-4 bg-[#000000] rounded-2xl h-32 lg:h-36 p-5 lg:pl-10 lg:py-8 text-white">
                    <div className="flex gap-5">
                        <img src={MotionSensorIcon} alt="doc-icon" className="w-[40px] h-[40px]" />
                        <div className="max-w-[310px]">
                            <p className="text-white font-bold text-sm lg:text-lg">Get Practical Insights</p>
                            <p className="text-white font-medium text-xs">In the second 30-minute call, we’ll share practical, easy-to-understand ideas that can help you save time and work smarter</p>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 lg:col-start-2 col-end-4 lg:col-end-8 row-start-4 row-end-5 bg-[#000000] rounded-2xl min-h-32 h-fit lg:h-32 p-5 lg:pl-10 lg:py-8 text-white">
                    <div className="flex gap-5">
                        <img src={RoadmapIcon} alt="doc-icon" className="w-[40px] h-[40px]" />
                        <div className="max-w-[374px]">
                            <p className="text-white font-bold text-sm lg:text-lg">Your Innovation Roadmap</p>
                            <p className="text-white font-medium text-xs">Within 48 hours, you’ll get a personalized roadmap with clear next steps tailored to your business.</p>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="relative grid grid-cols-3 lg:grid-cols-6 grid-rows-4 h-[587px] gap-y-[23px] mt-[21px] lg:mt-[52px] text-left max-w-[757px]"> 
                {/* <div className="hidden lg:block col-start-1 col-end-2 row-start-2 row-end-3 w-max">
                    <h3 className="font-extrabold text-3xl lg:text-6xl text-[#FFFFFF12] rotate-270">Call 01</h3>
                </div>
                <div className="hidden lg:block col-start-1 col-end-2 row-start-4 row-end-5 w-max">
                    <h3 className="font-extrabold text-3xl lg:text-6xl text-[#FFFFFF12] rotate-270">Call 02</h3>
                </div> */}
                <div
                    className="absolute hidden show-lottie top-0 right-0 h-full w-full bg-[#232728]"
                    style={{ clipPath: "circle(285px at right 50%)" }}
                />
                <div className="absolute hidden show-lottie right-[-293.5px]">
                    <Lottie options={defaultOptions}
                        height={587}
                        width={587}
                    />
                </div>
                <div className="col-start-1 col-end-4 lg:col-end-8 row-start-1 row-end-2 bg-[#1B1C1E] rounded-2xl h-32 p-5 lg:pl-10 lg:py-8 text-white">
                    <div className="flex gap-5">
                        <img src={DocumentIcon} alt="doc-icon" className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] self-end" />
                        <div className="max-w-[327px]">
                            <p className="text-white font-bold text-sm lg:text-lg">Book Your Spot</p>
                            <p className="text-white font-medium text-xs">Pick a time that fits your schedule. Booking takes less than a minute.</p>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 col-end-4 lg:col-end-8 row-start-2 row-end-3 bg-[#1B1C1E] rounded-2xl h-32 p-5 lg:pl-10 lg:py-8 text-white">
                    <div className="flex gap-5">
                        <img src={PhoneIcon} alt="doc-icon" className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] self-end" />
                        <div className="max-w-[299px]">
                            <p className="text-white font-bold text-sm lg:text-lg">Tell Us Your Story</p>
                            <p className="text-white font-medium text-xs">In the first 30-minute call, we’ll listen to your goals, challenges, and how your business operates.</p>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 col-end-4 lg:col-end-8 row-start-3 row-end-4 bg-[#000000] rounded-2xl h-32 lg:h-36 p-5 lg:pl-10 lg:py-8 text-white">
                    <div className="flex gap-5">
                        <img src={MotionSensorIcon} alt="doc-icon" className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] self-center" />
                        <div className="max-w-[310px]">
                            <p className="text-white font-bold text-sm lg:text-lg">Get Practical Insights</p>
                            <p className="text-white font-medium text-xs">In the second 30-minute call, we’ll share practical, easy-to-understand ideas that can help you save time and work smarter</p>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 col-end-4 lg:col-end-8 row-start-4 row-end-5 bg-[#000000] rounded-2xl min-h-32 h-fit lg:h-32 p-5 lg:pl-10 lg:py-8 text-white">
                    <div className="flex gap-5">
                        <img src={RoadmapIcon} alt="doc-icon" className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] self-center" />
                        <div className="max-w-[374px]">
                            <p className="text-white font-bold text-sm lg:text-lg">Your Innovation Roadmap</p>
                            <p className="text-white font-medium text-xs">Within 48 hours, you’ll get a personalized roadmap with clear next steps tailored to your business.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorksSection;
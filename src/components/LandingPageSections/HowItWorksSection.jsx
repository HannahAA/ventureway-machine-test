import DocumentIcon from "../../images/doc-icon.png";
import PhoneIcon from "../../images/phone-icon.png";
import MotionSensorIcon from "../../images/motion-sensor-icon.png";
import RoadmapIcon from "../../images/roadmap-icon.png";
import InfoCard from "./InfoCard";
import Lottie from "react-lottie";
import clockData from "../../lottieAssets/clock.json";
import { motion } from "motion/react";

// This is the mid section of Landing Page.
// It consists of some info about the site and a Lottie animation.
// Due to responsive and space issues, the Lottie animation is only present in resolutions >= 1440

const HowItWorksSection = () => {

    const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: clockData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice' // Adjust aspect ratio as needed
    }
    };

    const dataSectionDetails = [
        {
            title: "Book Your Spot",
            description: "Pick a time that fits your schedule. Booking takes less than a minute.",
            icon: DocumentIcon,
            altText: "doc-icon",
            customClasses: "row-start-1 row-end-2 bg-[#1B1C1E]",
            textWidth: "max-w-[327px]",
        },
        {
            title: "Tell Us Your Story",
            description: "In the first 30-minute call, we’ll listen to your goals, challenges, and how your business operates.",
            icon: PhoneIcon,
            altText: "phone-icon",
            customClasses: "row-start-2 row-end-3 bg-[#1B1C1E]",
            textWidth: "max-w-[299px]",
        },
        {
            title: "Get Practical Insights",
            description: "In the second 30-minute call, we’ll share practical, easy-to-understand ideas that can help you save time and work smarter",
            icon: MotionSensorIcon,
            altText: "sensor-icon",
            customClasses: "row-start-3 row-end-4 bg-[#000000]",
            textWidth: "max-w-[310px]",
        },
        {
            title: "Your Innovation Roadmap",
            description: "Within 48 hours, you’ll get a personalized roadmap with clear next steps tailored to your business.",
            icon: RoadmapIcon,
            altText: "roadmap-icon",
            customClasses: "row-start-4 row-end-5 bg-[#000000]",
            textWidth: "max-w-[374px]",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.3 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -50},
        show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    return (
        <div id="how-it-works" className="flex flex-col w-[80.83vw] max-w-[1164px] mt-[100px] lg:mt-[392px] bg-[#232728] py-6 px-5 how-it-works-section-padding rounded-2xl items-center stretch-in-2xl">

            {/* Headline */}

            <motion.div className="flex flex-col items-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
                <div className="flex flex-row font-bold text-2xl lg:text-5xl gap-2">
                    <h2 className="text-[#00E5FC]">How</h2>
                    <h2 className="bg-linear-to-r from-[#CACACA] to-[#878787] bg-clip-text text-transparent">InnoHour</h2>
                    <h2 className="bg-linear-to-r from-[#00E5FC] to-[#137FD8] bg-clip-text text-transparent">Works</h2>
                </div>
                <motion.div className="bg-[#4A4A4A7A] h-[3px] w-[40%] lg:w-[22.5%] mt-[21px]" initial={{ width: 0 }} whileInView={{ width: 100 }} transition={{ duration: 0.5, delay: 0.2 }} />
            </motion.div>

            {/* Main section */}

            <motion.section 
            className="relative grid grid-cols-3 lg:grid-cols-6 grid-rows-4 h-[587px] gap-y-[23px] mt-[21px] lg:mt-[52px] text-left max-w-[757px]" 
            initial="hidden" whileInView="show" viewport={{ once: false }} variants={containerVariants} >

                {/* Curved bg for Lottie Animation */}

                <div
                    className="absolute hidden show-lottie z-10 top-0 right-0 h-full w-full bg-[#232728]"
                    style={{ clipPath: "circle(285px at right 50%)" }}
                />

                {/* Lottie Animation */}

                <div className="absolute hidden show-lottie z-10 right-[-293.5px]">
                    <Lottie options={defaultOptions}
                        height={587}
                        width={587}
                    />
                </div>

                {/* Text content for mobile screens */}

                {dataSectionDetails.map((detail, index) => (
                    <InfoCard key={index} detail={detail} isMobile={true} cardVariants={cardVariants} />
                ))}

                {/* Text content for larger screens */}

                {dataSectionDetails.map((detail, index) => (
                    <InfoCard key={index} detail={detail} isMobile={false} />
                ))}
            </motion.section>
        </div>
    );
};

export default HowItWorksSection;
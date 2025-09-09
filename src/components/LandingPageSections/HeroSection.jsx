import { motion } from "motion/react";
import { text } from "motion/react-client";

// This is the hero section in Landing page.
// It consist of some text and buttons.
// When clicking on the buttons, user is navigated to the corresponding sections on the same page.

const LandingPageHeroSection = () => {

    const taglineTexts = [
        {
            text: "One Hour.",
            customClass: "bg-linear-to-r from-[#00E5FC] to-[#137FD8] bg-clip-text text-transparent",
            delayVal: 1.0,
        }, 
        {
            text: "Fresh Ideas.",
            customClass: "text-white",
            delayVal: 1.4,
        }, 
        {
            text: "Real Impact.",
            customClass: "text-white",
            delayVal: 1.8,
        }, 
    ];

    const subTexts = [
        {
            text: "Not sure how AI fits into your business? We understand.",
            customClass: "text-white font-bold text-xl",
        }, 
        {
            text: "In just 60 minutes, we’ll help you uncover simple, practical ways to innovate your business without the complexity.",
            customClass: "text-white font-medium text-base max-w-[527px]",
        }, 
    ];

    return (
        <div className="flex flex-col items-center gap-y-[24px] mt-[50px] lg:mt-[180px] text-white">
            
            {/* Headline */}
            
            <motion.div className="flex font-bold text-6xl lg:text-8xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}  >
                <h1>Inno</h1>
                <h1 className="text-[#00E5FC]">Hour</h1>
            </motion.div>

            {/* Tagline texts */}

            <motion.div 
            className="flex flex-col lg:flex-row font-bold text-3xl lg:text-4xl hero-subtitle-section-fontsize gap-2" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} >
                {taglineTexts.map((tagline, index) => (
                    <motion.h2 
                    key={index}
                    className={tagline.customClass} 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: tagline.delayVal }} >
                        {tagline.text}
                    </motion.h2>
                ))}
            </motion.div>

            {/* Sub texts */}

            {subTexts.map((subtext, index) => (
                <motion.p key={index} className={subtext.customClass} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { duration: 1.0, delay: 2.2 } }} whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300 } }} >
                    {subtext.text}
                </motion.p>
            ))}

            {/* Buttons */}

            <motion.div 
            className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:mt-[53px]" 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 2.2 }} >
                <motion.a href="#how-it-works" 
                className="px-[79px] py-[12px] bg-[#1381D9] font-medium text-base rounded-lg shadow transition" whileHover={{ boxShadow: "0px 0px 8px rgba(19, 129, 217, 1)", scale: 1.05 }} >
                    Learn More
                </motion.a>
                <motion.a href="#chatbox-section" 
                className="lg:hidden px-[85px] py-[12px] bg-[#ECE9E9] text-[#191919] font-medium text-base rounded-lg shadow hover:bg-gray-300 transition" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    Chat Now
                </motion.a>
                {/* <motion.a href="#chatbox-section" 
                className="hidden lg:block px-[85px] py-[12px] bg-[#ECE9E9] text-[#191919] font-medium text-base rounded-lg shadow hover:bg-gray-300 transition" whileHover={{ scale: 1.05 }}> */}
                <motion.a href="#chatbox-section" 
                className="hidden lg:block px-[85px] py-[12px] bg-[#ECE9E9] text-[#191919] font-medium text-base rounded-lg shadow hover:bg-gray-300 transition" whileHover={{ boxShadow: "0px 0px 8px rgba(19, 129, 217, 1)", scale: 1.05 }} >
                    Chat Now
                </motion.a>
            </motion.div>
        </div>
    )
}

export default LandingPageHeroSection;
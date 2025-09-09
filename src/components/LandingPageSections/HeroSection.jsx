import { motion } from "motion/react";

// This is the hero section in Landing page.
// It consist of some text and buttons.
// When clicking on the buttons, user is navigated to the corresponding sections on the same page.

const LandingPageHeroSection = () => {
    return (
        <div className="flex flex-col items-center gap-y-[24px] mt-[50px] lg:mt-[180px]">
            <motion.div className="flex font-bold text-6xl lg:text-8xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}  >
                <h1 className="text-white">Inno</h1>
                <h1 className="text-[#00E5FC]">Hour</h1>
            </motion.div>
            <motion.div 
            className="flex flex-col lg:flex-row font-bold text-3xl lg:text-4xl hero-subtitle-section-fontsize gap-2" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} >
                <motion.h2 
                className="bg-linear-to-r from-[#00E5FC] to-[#137FD8] bg-clip-text text-transparent" 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 1.0 }} >
                    One Hour.
                </motion.h2>
                <motion.h2 
                className="text-white" 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 1.4 }} >
                    Fresh Ideas.
                </motion.h2>
                <motion.h2 
                className="text-white" 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 1.8 }} >
                    Real Impact.
                </motion.h2>
            </motion.div>
            <motion.p className="text-white font-bold text-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { duration: 1.0, delay: 2.2 } }} whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300 } }} >
                Not sure how AI fits into your business? We understand.
            </motion.p>
            <motion.p className="text-white font-medium text-base max-w-[527px]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { duration: 1.0, delay: 2.2 } }} whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300 } }} >
                In just 60 minutes, we’ll help you uncover simple, practical ways to innovate your business without the complexity.
            </motion.p>
            <motion.div 
            className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:mt-[53px]" 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 2.2 }} >
                <motion.a href="#how-it-works" 
                className="px-[79px] py-[12px] bg-[#1381D9] text-white font-medium text-base rounded-lg shadow transition" whileHover={{ boxShadow: "0px 0px 8px rgba(19, 129, 217, 1)", scale: 1.05 }} >
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
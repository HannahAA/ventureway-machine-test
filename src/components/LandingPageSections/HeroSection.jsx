const LandingPageHeroSection = () => {
    return (
        <div className="flex flex-col items-center gap-y-[24px] mt-[50px] md:mt-[267px]">
                {/* Hero Section */}
                <div className="flex font-bold text-6xl md:text-8xl">
                    <h1 className="text-white">Inno</h1>
                    <h1 className="text-[#00E5FC]">Hour</h1>
                </div>
                {/* <h1 className="text-white font-bold text-6xl md:text-8xl">InnoHour</h1> */}
                <div className="flex flex-col md:flex-row font-bold text-3xl md:text-5xl gap-2">
                    <h2 className="bg-linear-to-r from-[#00E5FC] to-[#137FD8] bg-clip-text text-transparent">One Hour.</h2>
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
    )
}

export default LandingPageHeroSection;
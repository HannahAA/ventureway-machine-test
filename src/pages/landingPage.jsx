import HeroSection from "../components/LandingPageSections/HeroSection";
import HowItWorksSection from "../components/LandingPageSections/HowItWorksSection";
import Chatbox from "../components/Chatbox";
import Container from "../components/Container";

export default function LandingPage() {

  return (
    <div className="flex flex-col min-h-screen gap-[100px] lg:gap-[245px]">
        <main className="flex-grow">

            <Container>
                <HeroSection />
            </Container>

            <Container className="flex justify-center">
                <HowItWorksSection />
            </Container>

            <Container>
                <div id="chatbox-section" className="flex flex-col lg:flex-row place-self-center font-bold text-2xl lg:text-5xl gap-2 mt-[100px] lg:mt-[170px]">
                    <h2 className="bg-linear-to-r from-[#00E5FC] to-[#137FD8] bg-clip-text text-transparent">Ask me anything about</h2>
                    <h2 className="bg-linear-to-r from-[#CACACA] to-[#878787] bg-clip-text text-transparent">InnoHour!</h2>
                </div>
            </Container>

            <Container className="flex justify-center">
                <Chatbox />
            </Container>
        </main>
        <footer className="w-full h-[135px] lg:h-[169px] mb-[24px] bg-[#0E0E0E] flex flex-col self-center justify-center">
            <div className="flex font-bold text-2xl lg:text-5xl justify-center">
                <h3 className="text-white">Inno</h3>
                <h3 className="text-[#00E5FC]">Hour</h3>
            </div>
            <p className="font-normal text-xs lg:text-lg text-white">Crafted for testing you!</p>
        </footer>
    </div>
  );
}

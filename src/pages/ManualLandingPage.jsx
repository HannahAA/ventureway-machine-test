import HeroSection from "../components/LandingPageSections/HeroSection";
import HowItWorksSection from "../components/LandingPageSections/HowItWorksSection";
import Chatbox from "../components/Chatbox";
import Container from "../components/Container";

export default function ManualLandingPage() {

    const messages = [
        {sender: "user", text: "Hi"},
        {sender: "ai", text: "Hi there! How are you doing today?"},
        {sender: "user", text: "I'm good. What's the weather like in Manama today?"},
        {sender: "ai", text: "Manama will be a balmy 35 degrees today. You better lather on that sunscreen!"},
        {sender: "user", text: "Will do thx"},
        {sender: "ai", text: "Anytime! I'm here if you need help with anythign else."},
        {sender: "user", text: "Oh yea, how far is it to Washington from here?"},
        {sender: "ai", text: "Washington DC?"},
    ];

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
                <div id="chatbox-section-heading" className="flex flex-col lg:flex-row place-self-center font-bold text-2xl lg:text-5xl gap-2 mt-[100px] lg:mt-[170px]">
                    <h2 className="bg-linear-to-r from-[#00E5FC] to-[#137FD8] bg-clip-text text-transparent">Ask me anything about</h2>
                    <h2 className="bg-linear-to-r from-[#CACACA] to-[#878787] bg-clip-text text-transparent">InnoHour!</h2>
                </div>
            </Container>

            <Container className="flex justify-center">
                <Chatbox messages={messages} />
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

import { useState, useRef } from "react";
import ChatMessageBubble from "./ChatMessageBubble";

const Chatbox = ({messages}) => {

    const inputRef = useRef();
    const [messageState, setMessageState] = useState(messages || []);
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        console.log("input val being typed = ", e.target.value);
        setInput(e.target.value);
    };

    const handleSubmit = () => {
        console.log("input that is submitted = ", input);
        let currentMessages = messageState;
        currentMessages.push({ sender: "user", text: input }, { sender: "ai", text: "typing...", status: "typing" });
        setMessageState(currentMessages);
        setInput("");
        // const enterButton = document.getElementById("chatbox-enter-btn");
        // enterButton.disabled = true;
        setTimeout(replyAsAI, 3000);
    };

    const replyAsAI = () => {
        let currentMessages = messageState;
        let filteredMessages = currentMessages.filter(message => message?.status !== "typing");
        // filteredMessages.push({ sender: "ai", text: "Thank you for you question. Let me think about that." });
        filteredMessages.push({ sender: "ai", text: "Okay.", isAnimated: true });
        // const enterButton = document.getElementById("chatbox-enter-btn");
        // enterButton.disabled = false;
        setMessageState(filteredMessages);
        const targetedDiv = document.getElementById("chatbox-mssg-field");
        targetedDiv.scrollTop = targetedDiv.scrollHeight;
    };

    return (
        <div id="chatbox" className="flex flex-col bg-[#222627] w-[80.83vw] max-w-[1164px] h-[455px] lg:h-[722px] mt-[28px] rounded-[20px] p-4 lg:p-8 gap-[25px]">
            <div id="chatbox-mssg-field" className="bg-[#222627] w-full h-[300px] lg:h-[567px] overflow-y-auto no-scrollbar flex flex-col gap-[34px]">
                {messageState.map((message, index) => <ChatMessageBubble key={index} message={message} messageIndex={index} allMessages={messageState} updateMessagesState={setMessageState} sender={message?.sender} text={message?.text} status={message?.status} isAnimated={message?.isAnimated} />)}
            </div>
            <div id="chatbox-input-section" className="bg-[#222627] w-full h-[50px] lg:h-[66px] flex gap-[15px]">
                <input 
                id="chatbox-input" 
                type="text" 
                value={input} 
                ref={inputRef} 
                onChange={handleInput} 
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Ask anything!" 
                className="h-full flex-grow bg-[#191919] rounded-lg lg:rounded-[20px] text-white font-normal text-sm lg:text-xl p-3 lg:p-5" 
                />
                <button id="chatbox-enter-btn" onClick={handleSubmit} className="hidden lg:block w-[8.54vw] h-full bg-[#1381D9] hover:bg-blue-500 text-white font-normal text-sm lg:text-xl leading-[66px] rounded-[20px] cursor-pointer">Submit</button>
            </div>
        </div>
    );
};

export default Chatbox;
import { useState } from "react";
import ChatMessageBubble from "./ChatMessageBubble";

// This is the Chatbox component.
// It has a field for displaying messages, and an input section and submit button.
// The user's messages always appear on the right. The AI's messages appear on the left.
// Whenever user submits a message, a 'typing...' text is displayed for 3 secs, and then replaced by the AI text.
// All messages are svaed and stored to localstorage.

const Chatbox = () => {

    const [messageState, setMessageState] = useState(JSON.parse(localStorage.getItem("chatHistory")) || []);
    const [input, setInput] = useState("");

    // hardcoded AI message set
    const aiMessageLibrary = ["Okay.", "Thank you for your question. Let me think about that.", "I'll have an answer for you shortly."];

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const saveToLS = (idVal, senderVal, textVal) => {
        let recentChatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
        recentChatHistory.push({id: idVal, sender: senderVal, text: textVal});
        localStorage.setItem("chatHistory", JSON.stringify(recentChatHistory));
    };

    const handleSubmit = () => {
        let currentMessages = messageState;
        let currentMssgCount = currentMessages?.length || 1;
        let userMssgId = "u" + currentMssgCount
        saveToLS(userMssgId, "user", input);
        currentMessages.push({ id: userMssgId, sender: "user", text: input }, { id: 'ai' + currentMssgCount, sender: "ai", text: "typing...", status: "typing" });
        setMessageState(currentMessages);
        setInput("");
        setTimeout(replyAsAI, 3000);
    };

    const replyAsAI = () => {
        let currentMessages = messageState;
        let currentMssgCount = currentMessages?.length || 1;
        let filteredMessages = currentMessages.filter(message => message?.status !== "typing");

        const rqrdIndex = Math.floor(Math.random() * aiMessageLibrary.length);
        const rqrdAIMessage = aiMessageLibrary[rqrdIndex]; 
        const aiMessgId = "ai" + currentMssgCount;
        saveToLS(aiMessgId, "ai", rqrdAIMessage);

        filteredMessages.push({ id: aiMessgId, sender: "ai", text: rqrdAIMessage });
        setMessageState(filteredMessages);
        const targetedDiv = document.getElementById("chatbox-mssg-field");
        targetedDiv.scrollTop = targetedDiv.scrollHeight;
    };

    return (
        <div id="chatbox" className="flex flex-col justify-between bg-[#222627] w-[80.83vw] max-w-[1164px] h-[407px] lg:h-[722px] mt-[28px] rounded-[20px] p-4 lg:p-8">
            <div id="chatbox-mssg-field" className="bg-[#222627] w-full h-[300px] lg:h-[567px] overflow-y-auto no-scrollbar flex flex-col gap-[34px]">
                {messageState.map((message, index) => <ChatMessageBubble key={index} message={message} />)}
            </div>
            <div id="chatbox-input-section" className="bg-[#222627] w-full h-[50px] lg:h-[66px] flex gap-[15px] relative">
                <input 
                id="chatbox-input" 
                type="text" 
                value={input} 
                onChange={handleInput} 
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Ask anything!" 
                className="h-full flex-grow bg-[#191919] rounded-lg lg:rounded-[20px] text-white font-normal text-sm lg:text-xl p-3 pr-[76px] lg:p-5" 
                />
                <button id="chatbox-mob-submit-btn" onClick={handleSubmit} className='lg:hidden absolute right-2 bottom-3 w-fit h-fit p-1 rounded-sm bg-[#1381D9] text-sm'>Submit</button>
                <button id="chatbox-submit-btn" onClick={handleSubmit} className="hidden lg:block w-[8.54vw] h-full bg-[#1381D9] hover:bg-blue-500 text-white font-normal text-sm lg:text-xl leading-[66px] rounded-[20px] cursor-pointer">Submit</button>
            </div>
        </div>
    );
};

export default Chatbox;
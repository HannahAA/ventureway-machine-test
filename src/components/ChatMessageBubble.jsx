// This is the component for individual chat messages.
// It will receive 1 input: the message object.
// The component has 2 main parts: the avatar circle, and the message bubble. 
// The message bubble itself has 2 parts: the text and a star button.
// When a message is starred, it is added to a list in local storage.

import { useState } from "react";

const ChatMessageBubble = ({message = {}}) => {
    
    const {id = "", sender = "ai", text = "", status = "", saved = false} = message;

    const [isSaved, setIsSaved] = useState(saved || false);

    const saveToLS = () => {
        let starredChatHistory = JSON.parse(localStorage.getItem("starredChats")) || [];
        starredChatHistory.push({id: id, sender: sender, text: text, saved: saved});
        localStorage.setItem("starredChats", JSON.stringify(starredChatHistory));

        let recentChatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
        const updatedRecentChatHistory = recentChatHistory.map(msg =>
            msg.id === id ? { ...msg, saved: !msg.saved } : msg
        );
        localStorage.setItem("chatHistory", JSON.stringify(updatedRecentChatHistory));
    };

    const handleSave = () => {
        saveToLS();
        setIsSaved(prev => !prev)
    };

    if (!text) return;
    return (
        <div className={`flex gap-2 md:gap-4 ${sender === "user" && 'flex-row-reverse'}`}>
            <div className="w-[25px] md:w-[45px] h-[27px] md:h-[47px] rounded-[50%] bg-[#191919]"></div>
            <div className="flex flex-col px-2 md:px-6 py-1 md:py-5 rounded-lg md:rounded-[20px] bg-[#191919] max-w-[28vw] text-left">
                <div className=" text-white font-normal text-sm lg:text-xl text-left">{text}</div>
                {status !== "typing" && 
                    <button className="w-[15px] h-[15px] self-right cursor-pointer" onClick={handleSave}>
                        {isSaved === false ? 
                        <svg className="w-[10px] lg:w-[15px] h-[10px] lg:h-[15px]" fill="none" viewBox="0 0 48 45" xmlns="http://www.w3.org/2000/svg">
                            <path
                                clipRule="evenodd"
                                d="M31.5251 14.8244L23.9974 0.666992L16.4697 14.8244L0.664062 17.6008L11.8174 29.127L9.5766 45.0003L23.9974 37.9664L38.4182 45.0003L36.1774 29.127L47.3307 17.6008L31.5251 14.8244ZM36.7671 21.0399L28.1443 19.5252L23.9974 11.7261L19.8505 19.5252L11.2277 21.0399L17.3091 27.3244L16.0799 36.0318L23.9974 32.1699L31.9149 36.0318L30.6857 27.3244L36.7671 21.0399Z"
                                fill="#717171"
                                fillRule="evenodd"
                            />
                        </svg> :
                        <svg className="w-[10px] lg:w-[15px] h-[10px] lg:h-[15px]" fill="none" viewBox="0 0 28 26" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14 0.666504L18.3015 8.75647L27.3333 10.343L20.96 16.9294L22.2404 25.9998L14 21.9805L5.75951 25.9998L7.03996 16.9294L0.666626 10.343L9.69844 8.75647L14 0.666504Z"
                                fill="#FFCC4E"
                            />
                        </svg>
                        }
                    </button>
                }
            </div>
        </div>
    );
};

export default ChatMessageBubble;
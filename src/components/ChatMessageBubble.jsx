
// this will receive an input with sender value and text value.
// The component has 2 parts: the avatar circle and the message bubble.
// if the sender is 'user', the component should be positioned as messgae bubble first and avater circle second.
// if the sender is 'ai', order should be the opposite.
// The message bubble should have a max width but no minimum width. 
// Until it reaches the max width, the width should be calculated by using the width of the text.
// The message bubble will have no fixed height.
// The avatar circle is always of one size - except when being responsive.

import { useEffect, useState } from "react";

// const ChatMessageBubble = ({sender = "ai", text = "", status = "", isAnimated = false}) => {
//     // console.log("sender = ", sender);
//     // console.log("text = ", text);
//     if (!text) return;
//     if (sender === "ai" && status !== "typing" && isAnimated) return <TypewriteMessage text={text} />
//     return (
//         <div className={`flex gap-2 md:gap-4 ${sender === "user" && 'flex-row-reverse'}`}>
//             <div className="w-[25px] md:w-[45px] h-[27px] md:h-[47px] rounded-[50%] bg-[#191919]"></div>
//             <div className="px-2 md:px-6 py-1 md:py-5 rounded-lg md:rounded-[20px] bg-[#191919] max-w-[28vw] text-white font-normal text-sm md:text-xl text-left">{text}</div>
//         </div>
//     );
// };

const ChatMessageBubble = ({message = {}, messageIndex, allMessages, updateMessagesState}) => {
    // console.log("sender = ", sender);
    // console.log("text = ", text);
    
    const {id = "", sender = "ai", text = "", status = "", isAnimated = false, saved = false} = message;

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
    // if (sender === "ai" && status !== "typing" && isAnimated) return <TypewriteMessage text={text} messageIndex={messageIndex} fullData={allMessages} updateFn={updateMessagesState} />
    return (
        <div className={`flex gap-2 md:gap-4 ${sender === "user" && 'flex-row-reverse'}`}>
            <div className="w-[25px] md:w-[45px] h-[27px] md:h-[47px] rounded-[50%] bg-[#191919]"></div>
            <div className="flex flex-col px-2 md:px-6 py-1 md:py-5 rounded-lg md:rounded-[20px] bg-[#191919] max-w-[28vw] text-left">
                <div className=" text-white font-normal text-sm lg:text-xl text-left">{text}</div>
                {status !== "typing" && 
                    <button className="w-[15px] h-[15px] self-right cursor-pointer" onClick={handleSave}>
                        {isSaved === false ? 
                        <svg width={15} height={15} fill="none" viewBox="0 0 48 45" xmlns="http://www.w3.org/2000/svg">
                            <path
                                clipRule="evenodd"
                                d="M31.5251 14.8244L23.9974 0.666992L16.4697 14.8244L0.664062 17.6008L11.8174 29.127L9.5766 45.0003L23.9974 37.9664L38.4182 45.0003L36.1774 29.127L47.3307 17.6008L31.5251 14.8244ZM36.7671 21.0399L28.1443 19.5252L23.9974 11.7261L19.8505 19.5252L11.2277 21.0399L17.3091 27.3244L16.0799 36.0318L23.9974 32.1699L31.9149 36.0318L30.6857 27.3244L36.7671 21.0399Z"
                                fill="#717171"
                                fillRule="evenodd"
                            />
                        </svg> :
                        <svg width={15} height={15} fill="none" viewBox="0 0 28 26" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14 0.666504L18.3015 8.75647L27.3333 10.343L20.96 16.9294L22.2404 25.9998L14 21.9805L5.75951 25.9998L7.03996 16.9294L0.666626 10.343L9.69844 8.75647L14 0.666504Z"
                                fill="#FFCC4E"
                            />
                        </svg>
                        }
                    </button>
                }
            </div>
            {/* <div className="px-2 md:px-6 py-1 md:py-5 rounded-lg md:rounded-[20px] bg-[#191919] max-w-[28vw] text-white font-normal text-sm lg:text-xl text-left">{text}</div> */}
        </div>
    );
};

export default ChatMessageBubble;

const TypewriteMessage = ({ text, messageIndex, fullData, updateFn }) => {
    const [AIText, setAIText] = useState("");

    useEffect(() => {
        let i = 0;
        // text = "okay"
        const interval = setInterval(() => {
            // let currentText = AIText;
            // currentText = currentText + text[i];
            // setAIText(currentText);
            setAIText(prev => prev + text[i]);
            i++;
            if (i >= text.length) {
                let allMessages = fullData;
                allMessages[messageIndex] = { ...allMessages[messageIndex], isAnimated: false};
                updateFn(allMessages);
                clearInterval(interval);
            };
        }, 1000);
    }, [text]);

    console.log("The typed out AIText = ", AIText);

    return (
        <div className="flex gap-2 md:gap-4">
            <div className="w-[25px] md:w-[45px] h-[27px] md:h-[47px] rounded-[50%] bg-[#191919]"></div>
            <div className="px-2 md:px-6 py-1 md:py-5 rounded-lg md:rounded-[20px] bg-[#191919] max-w-[28vw] text-white font-normal text-sm md:text-xl text-left">{AIText}</div>
        </div>
    );
};

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
    
    const {sender = "ai", text = "", status = "", isAnimated = false} = message;

    if (!text) return;
    // if (sender === "ai" && status !== "typing" && isAnimated) return <TypewriteMessage text={text} messageIndex={messageIndex} fullData={allMessages} updateFn={updateMessagesState} />
    return (
        <div className={`flex gap-2 md:gap-4 ${sender === "user" && 'flex-row-reverse'}`}>
            <div className="w-[25px] md:w-[45px] h-[27px] md:h-[47px] rounded-[50%] bg-[#191919]"></div>
            <div className="px-2 md:px-6 py-1 md:py-5 rounded-lg md:rounded-[20px] bg-[#191919] max-w-[28vw] text-white font-normal text-sm lg:text-xl text-left">{text}</div>
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
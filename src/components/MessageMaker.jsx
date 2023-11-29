import useSendMessage from "../hooks/use-send-message";
import { useContext, useEffect, useState } from "react";
import { URLContext, ContactContext } from "./MessengerContext";
import uEmojiParser from "universal-emoji-parser";
import EmojiDataList from "./EmojiDataList";

const MessageMaker = ({ windowRef }) => {
    const target = useContext(ContactContext);
    const url = useContext(URLContext);
    const [message, setMessage] = useState("");
    const { sendMessage } = useSendMessage(url);

    const handleMessageParsing = (e) => {
        const rawString = e.target.value;
        const emojiParsed = uEmojiParser.parseToUnicode(rawString);
        setMessage(emojiParsed);
    };

    const handleSend = () => {
        sendMessage(
            JSON.stringify({
                phoneNumber: target["number"],
                messageVal: `${message}`,
            })
        );
        windowRef.current.scrollTop = windowRef.current.scrollHeight;
        setMessage("");
    };

    return (
        <div className="messageCompose">
            <div className="messageBox">
                <i id="orient" className="fa-solid fa-circle-chevron-right"></i>
                <input
                    list="EmojiList"
                    type="text"
                    value={message}
                    onChange={(e) => handleMessageParsing(e)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <EmojiDataList appendEmoji={(value) => setMessage(value)} />
                <button type="button" onClick={() => handleSend()}>
                    <i id="submit" className="fa-solid fa-check"></i>
                </button>
            </div>
        </div>
    );
};
export default MessageMaker;

import useSendMessage from "../hooks/use-send-message";
import { useContext, useEffect, useState } from "react";
import { URLContext } from "./URLContext";
const MessageMaker = () => {
    const url = useContext(URLContext);
    const [message, setMessage] = useState("");
    const { sendMessage, hasSentMessage } = useSendMessage(url);
    useEffect(() => {
        hasSentMessage && console.log("Successfully Sent the Message");
    }, [hasSentMessage]);

    return (
        <div className="messageCompose">
            <div className="messageBox">
                <input
                    type="text"
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) =>
                        e.key === "Enter" &&
                        sendMessage(
                            JSON.stringify({
                                phoneNumber: "",
                                messageVal: `${message}`,
                            })
                        )
                    }
                ></input>
            </div>
        </div>
    );
};
export default MessageMaker;

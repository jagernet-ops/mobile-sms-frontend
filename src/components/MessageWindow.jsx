import { useContext } from "react";
import { URLContext, ContactContext } from "./MessengerContext";
import useGetMessages from "../hooks/use-get-messages";
import MessageHeader from "./MessageHeader";
import Message from "./Message";

const MessageWindow = ({ windowRef }) => {
    const url = useContext(URLContext);
    const contact = useContext(ContactContext);
    const { messages, isLoading } = useGetMessages(url, contact["number"]);

    return (
        <div ref={windowRef} className="messageHistory">
            <MessageHeader contact={contact} />
            {isLoading ||
                messages.data.reverse().map((message) => {
                    return (
                        <Message
                            outgoing={message.sender === "You"}
                            key={message._id}
                            messageContents={message.body}
                        />
                    );
                })}
        </div>
    );
};

export default MessageWindow;

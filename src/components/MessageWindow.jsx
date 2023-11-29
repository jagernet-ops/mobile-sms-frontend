import { useContext } from "react";
import { URLContext, ContactContext } from "./MessengerContext";
import useGetMessages from "../hooks/use-get-messages";
import MessageHeader from "./MessageHeader";
import Message from "./Message";

const MessageWindow = () => {
    const url = useContext(URLContext);
    const contact = useContext(ContactContext);
    const { messages, isLoading } = useGetMessages(url, contact);
    return (
        <div className="messageHistory">
            <MessageHeader />
            <Message messageContents="Yo" />
        </div>
    );
};

export default MessageWindow;

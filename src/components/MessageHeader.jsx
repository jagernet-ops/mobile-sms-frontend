import { useContext, useEffect } from "react";
import { URLContext } from "./MessengerContext";
import NewMessageIcon from "../assets/images/newMessage.png";
const MessageHeader = ({ contact }) => {
    const url = useContext(URLContext);
    useEffect(() => {
        const socket = new WebSocket(`ws:${url.split(":")[1]}:8080`);
        socket.onmessage = ({ data }) => {
            const dataObj = JSON.parse(data);
            Notification.permission === "granted" &&
                dataObj &&
                new Notification(`New Message! From: ${dataObj.contact}`, {
                    body: dataObj.message,
                    icon: NewMessageIcon,
                });
        };
    }, [url, contact]);
    return (
        <header>
            <button onClick={() => Notification.requestPermission()}>
                <i className="fa-solid fa-bell"></i>
            </button>
            <h2>{contact["name"]}</h2>
        </header>
    );
};

export default MessageHeader;

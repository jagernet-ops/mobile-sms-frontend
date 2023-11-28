import ContactsDivider from "./ContactsDivider";
import MessageMaker from "./MessageMaker";
import { useState } from "react";
import { URLContext, ContactContext } from "./MessengerContext";
import MessageWindow from "./MessageWindow";

const Messenger = ({ url }) => {
    const [selectedContact, setSelectedContact] = useState("");
    return (
        <div className="homepage">
            <URLContext.Provider value={url}>
                <ContactContext.Provider value={selectedContact}>
                    <ContactsDivider setSelectedContact={setSelectedContact} />
                    <MessageMaker />
                    <MessageWindow />
                </ContactContext.Provider>
            </URLContext.Provider>
        </div>
    );
};
export default Messenger;

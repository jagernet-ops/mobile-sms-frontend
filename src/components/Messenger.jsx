import ContactsDivider from "./ContactsDivider";
import MessageMaker from "./MessageMaker";
import { useState } from "react";
import { URLContext, ContactContext } from "./MessengerContext";
import MessageWindow from "./MessageWindow";
import { useRef } from "react";

const Messenger = ({ url }) => {
    const windowRef = useRef();
    const [selectedContact, setSelectedContact] = useState("");
    return (
        <div className="homepage">
            <URLContext.Provider value={url}>
                <ContactContext.Provider value={selectedContact}>
                    <ContactsDivider
                        windowRef={windowRef}
                        setSelectedContact={setSelectedContact}
                    />
                    <MessageMaker windowRef={windowRef} />
                    <MessageWindow windowRef={windowRef} />
                </ContactContext.Provider>
            </URLContext.Provider>
        </div>
    );
};
export default Messenger;

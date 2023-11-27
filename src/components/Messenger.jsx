import ContactsDivider from "./ContactsDivider";
import MessageMaker from "./MessageMaker";
import { URLContext } from "./URLContext";

const Messenger = ({ url }) => {
    return (
        <div className="homepage">
            <URLContext.Provider value={url}>
                <ContactsDivider />
                <MessageMaker />
                <div className="messageHistory">a</div>
            </URLContext.Provider>
        </div>
    );
};
export default Messenger;

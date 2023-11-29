import Contact from "./Contact";
import useGetContacts from "../hooks/use-get-contacts";
import Loading from "./Loading";
import { useContext } from "react";
import { URLContext } from "./MessengerContext";

const ContactsDivider = ({ setSelectedContact, windowRef }) => {
    const numberFormat = new RegExp("\\d", "gm");
    const url = useContext(URLContext);
    const { retrievedContacts, isLoading } = useGetContacts(url);
    return (
        <div className="contactSelect">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <Contact
                        key={"home"}
                        name="Home"
                        selectAsContact={() => {
                            setSelectedContact({ number: "", name: "Home" });
                            windowRef.current.scrollTop =
                                windowRef.current.scrollHeight;
                        }}
                    />
                    <hr />
                    {retrievedContacts.map((contact, index) => {
                        return (
                            <Contact
                                key={index}
                                name={contact.name}
                                number={contact.number
                                    .match(numberFormat)
                                    .join("")}
                                selectAsContact={() => {
                                    setSelectedContact({
                                        number: contact.number
                                            .match(numberFormat)
                                            .join(""),
                                        name: contact.name,
                                    });
                                    windowRef.current.scrollTop =
                                        windowRef.current.scrollHeight;
                                }}
                            />
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default ContactsDivider;

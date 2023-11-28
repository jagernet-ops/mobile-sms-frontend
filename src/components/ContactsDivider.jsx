import Contact from "./Contact";
import useGetContacts from "../hooks/use-get-contacts";
import Loading from "./Loading";
import { useContext } from "react";
import { URLContext } from "./MessengerContext";

const ContactsDivider = ({ setSelectedContact }) => {
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
                        selectAsContact={() => setSelectedContact("")}
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
                                selectAsContact={() =>
                                    setSelectedContact(
                                        contact.number
                                            .match(numberFormat)
                                            .join("")
                                    )
                                }
                            />
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default ContactsDivider;

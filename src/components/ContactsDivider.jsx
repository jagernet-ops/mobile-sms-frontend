import Contact from "./Contact";
import useGetContacts from "../hooks/use-get-contacts";
import Loading from "./Loading";
import { useContext } from "react";
import { URLContext } from "./URLContext";

const ContactsDivider = () => {
    const url = useContext(URLContext);
    const { retrievedContacts, isLoading } = useGetContacts(url);
    return (
        <div className="contactSelect">
            {isLoading ? (
                <Loading />
            ) : (
                retrievedContacts.map((contact, index) => {
                    return (
                        <Contact
                            key={index}
                            name={contact.name}
                            number={contact.number}
                        />
                    );
                })
            )}
        </div>
    );
};

export default ContactsDivider;

import axios from "axios";
import { useQuery } from "react-query";

const useGetMessages = (url = "", phoneNumber = "") => {
    let contact = phoneNumber;
    if (phoneNumber.length > 10 && phoneNumber.charAt(0) === "1") {
        contact = phoneNumber.replace("1", "");
    }
    const { data, isLoading } = useQuery(
        ["getMessage", phoneNumber],
        async () => await axios.get(`${url}/get-messages?contact=${contact}`),
        {
            refetchInterval: 30000,
            refetchIntervalInBackground: true,
            refetchOnWindowFocus: false,
        }
    );
    return {
        isLoading,
        messages: data,
    };
};
export default useGetMessages;

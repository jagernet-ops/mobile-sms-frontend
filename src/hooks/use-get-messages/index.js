import axios from "axios";
import { useQuery } from "react-query";

const useGetMessages = (url = "", phoneNumber = "") => {
    const { data, isLoading } = useQuery(
        ["getMessage", phoneNumber],
        async () =>
            await axios.get(`${url}/get-messages?contact=${phoneNumber}`)
    );
    return {
        isLoading,
        messages: data,
    };
};
export default useGetMessages;

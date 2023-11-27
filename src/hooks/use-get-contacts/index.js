import axios from "axios";
import { useQuery } from "react-query";

function useGetContacts(url) {
    const { data, isLoading } = useQuery(
        ["getContacts"],
        async () => await axios.get(`${url}/get-contacts`)
    );

    return {
        retrievedContacts: data?.data || [],
        isLoading,
    };
}

export default useGetContacts;

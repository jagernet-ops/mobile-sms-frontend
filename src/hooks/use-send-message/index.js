import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
const useSendMessage = (url) => {
    const queryClient = useQueryClient();
    const { isSuccess, mutate } = useMutation(
        async (data) => {
            await axios.post(`${url}/send-single-message`, data, {
                headers: { "Content-Type": "application/json" },
            });
        },
        {
            onSuccess: () => queryClient.invalidateQueries("getMessage"),
        }
    );
    return {
        sendMessage: mutate,
        hasSentMessage: isSuccess,
    };
};
export default useSendMessage;

import { useMutation } from "react-query";
import axios from "axios";
const useSendMessage = (url) => {
    const { isSuccess, mutate } = useMutation(async (data) => {
        await axios.post(`${url}/send-single-message`, data, {
            headers: { "Content-Type": "application/json" },
        });
    });
    return {
        sendMessage: mutate,
        hasSentMessage: isSuccess,
    };
};
export default useSendMessage;

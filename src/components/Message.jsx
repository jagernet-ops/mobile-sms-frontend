const Message = ({ messageContents, outgoing }) => {
    return (
        <div className="messageBlock">
            <div
                className={`sentMessage ${outgoing ? "outgoing" : "incoming"}`}
                style={
                    outgoing
                        ? { alignSelf: "flex-end" }
                        : { alignSelf: "flex-start" }
                }
            >
                <p>{messageContents}</p>
            </div>
            <br />
        </div>
    );
};
export default Message;

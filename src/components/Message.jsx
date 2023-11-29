const Message = ({ messageContents }) => {
    return (
        <div className="sentMessage client">
            <p>{messageContents}</p>
        </div>
    );
};
export default Message;

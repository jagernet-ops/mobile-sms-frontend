const MessageHeader = ({ contact }) => {
    return (
        <header>
            <button onClick={() => console.log()}>
                <i className="fa-solid fa-bell"></i>
            </button>
            <h2>{contact["name"]}</h2>
        </header>
    );
};

export default MessageHeader;

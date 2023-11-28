function Contact({ name, number, selectAsContact }) {
    return (
        <div className="contactCard" onClick={() => selectAsContact()}>
            <span className="contactBubble">{`${name.charAt(0)}`}</span>
            <div className="contactInfo">
                <aside>{name}</aside>
                <aside>#{number}</aside>
            </div>
        </div>
    );
}

export default Contact;

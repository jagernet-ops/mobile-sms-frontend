function Contact({ name, number }) {
    return (
        <div className="contactCard">
            <span className="contactBubble">{`${name.charAt(0)}`}</span>
            <div className="contactInfo">
                <aside>{name}</aside>
                <aside>#{number}</aside>
            </div>
        </div>
    );
}

export default Contact;

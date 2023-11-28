const Error = () => {
    return (
        <div className="errorBackground">
            <div className="errorScreen">
                <div className="message">
                    <h3>Please point towards a valid instance!</h3>
                    <i className="fa-solid fa-circle-question"></i>
                </div>
                <code>
                    {document.location.origin}/?instance=[YOUR_INSTANCE_HERE]
                </code>
            </div>
        </div>
    );
};
export default Error;

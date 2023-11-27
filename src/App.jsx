import { useContext } from "react";
import { URLContext } from "./components/URLContext";
import Messenger from "./components/Messenger";
import "./App.css";

function App() {
    const url = useContext(URLContext);
    console.log(url);
    if (!url) {
        return (
            <>
                <h1>Please point to a valid instance</h1>
            </>
        );
    }
    return <Messenger url={url} />;
}

export default App;

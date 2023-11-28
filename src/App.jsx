import { useContext } from "react";
import { URLContext } from "./components/MessengerContext";
import Messenger from "./components/Messenger";
import "./App.css";
import Error from "./components/Error";

function App() {
    const url = useContext(URLContext);
    if (!url) {
        return <Error />;
    }
    return <Messenger url={url} />;
}

export default App;

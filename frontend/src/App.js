import {BrowserRouter} from "react-router-dom";
import React from "react";
import {Navigator} from "./components/Navigator";

function App() {

    return (
        <>
            <BrowserRouter>
                <Navigator/>
            </BrowserRouter>
        </>
    )
}

export default App;

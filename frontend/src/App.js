import {BrowserRouter} from "react-router-dom";
import React from "react";
import {Navigator} from "./components/Navigator";

function App() {
    const boats = [
        {
            'name': 'Fin liten daycruiser',
            'description': 'Dette er en spretten daycruiser på 23 fot, veldig lett opplegg med vannski samt muligheter for soling',
            'image': 'https://seacastle.se/wp-content/uploads/2016/12/DSC_0142.jpg',
            'model': 'Bella 21 b-6',
            'id': 0,
            'latitude': 59.9079,
            'longitude': 10.7255,
        },
        {
            'name': 'Rib',
            'description': 'Lorem Lorem Lorem',
            'image': 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.santorini-yachts.com%2Fwp-content%2Fuploads%2F2018%2F01%2Fscorpion-speedboat-cruise.jpg&f=1&nofb=1',
            'model': 'Super 55 RIB',
            'id': 1,
            'latitude': 59.8745,
            'longitude': 10.7706,
        },

    ]

    return (
        <>
            <BrowserRouter>
                <Navigator boats={boats}/>
            </BrowserRouter>
        </>
    )
}

export default App;

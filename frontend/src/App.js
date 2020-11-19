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
            'latitude': 0,
            'longitude': 0,
        },
        {
            'name': 'Rib',
            'description': 'Lorem Lorem Lorem',
            'image': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F7%2F71%2FZodiac_on_the_beach.jpg%2F1200px-Zodiac_on_the_beach.jpg&f=1&nofb=1',
            'model': 'Super 55 RIB',
            'id': 1,
            'latitude': 1,
            'longitude': 1,
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

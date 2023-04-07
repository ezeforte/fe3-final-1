
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Routes/Detail";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import ThemeContext from "./Components/utils/Context";
import React, { useState } from 'react'

export const themes = {
    light: {
        font: "black",
        background: "white",

    },
    dark: {
        font: "white",
        background: "black",
    },

};



function App() {
    const [theme, setTheme] = useState(themes.dark);

    const handleChangeTheme = () => {
        theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);

    };

    return (

        <ThemeContext.Provider value={{theme,handleChangeTheme}} >
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="/favs" element={<Favs />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ThemeContext.Provider>
    );

}
export default App;

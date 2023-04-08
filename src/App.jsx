
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Routes/Detail";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import ThemeContext from "./Components/utils/Context";
import React, { useEffect, useState } from 'react'

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

const localValue = JSON.parse(localStorage.getItem('theme'));

function App() {
    const [theme, setTheme] = useState(localValue ?? themes.light );

    const handleChangeTheme = () => {
        theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);

    };

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
              .then(res=>res.json())
              .then(json=>setUsers(json))
  
    };
  
    
    useEffect(() => {
      getUsers();
      
    }, []);

    useEffect(() => {
        localStorage.setItem('theme',JSON.stringify(theme));

    },[theme]);
    
    return (

        <ThemeContext.Provider value={{theme,handleChangeTheme,users}} >
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

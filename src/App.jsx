
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Details from "./Routes/Detail";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";


const App = () => (

<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/details/:id" element={<Details />} />
<Route path="/contacto" element={<Contact />} />
<Route path="/favs" element={<Favs/>} />
</Routes>
<Footer />
</BrowserRouter>
);

export default App;

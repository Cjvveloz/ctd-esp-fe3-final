
import { Form, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";




function App() {
  return (
      < >
          <Navbar/>
          <Routes>
            <Route  path="/" element={<Home/>}/> Home
            <Route  path="/favs" element={<Favs/>}/> Favoritos
            <Route  path="/detail/:id" element={<Detail/>}/> Detalle
            <Route  path="/contact" element={<Contact/>}/> Contacto
            <Route  path="*" element={<h1>Page Not Found</h1>}/> PNF
          </Routes>
          <Footer/>
      </>
  );
}

export default App;

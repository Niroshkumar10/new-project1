import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/footer.jsx";
import { Routes,Route } from "react-router-dom";


export const App = () => {
  return (
    <>
    <div className="page-style">
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Service" element={<Service/>}/>
      <Route path="/Contact" element={<Contact/>}/>
     </Routes>
     <Footer/>
     </div>
    </>
  );
};

export default App;

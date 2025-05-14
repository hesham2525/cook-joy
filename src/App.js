import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header1 from "./pages/Header1";
import Footer1 from "./pages/Footer1";
function App() {
  return (
    <div>
      
      <Header1  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer1 />

    
    </div>
  );
}

export default App;

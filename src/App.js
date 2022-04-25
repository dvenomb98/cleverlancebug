import React from "react"
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import Hotovo from "./Components/Hotovo";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="text-black flex flex-col min-h-screen">
    <Routes>
    <Route exact path="/" element={[<Navbar/>,<Form/>,<Footer/>]} />
    <Route path="/hotovo" element={[<Navbar/>,<Hotovo/>,<Footer/>]} />
     
     </Routes>
    </div>
  );
}

export default App;

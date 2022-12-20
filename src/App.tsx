import React from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar"
import "./App.css";
import "./fonts/PressStart2P-Regular.ttf";
import sigle from "./assets/fut.png"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from "./pages/Accueil";
import FaisTaTeam from "./pages/FaisTaTeam";
import JoueursDeLaSemaine from "./pages/JoueursDeLaSemaine";
import JoueursParStats from "./pages/JoueursParStats";





const App = () => {


  
return (
  <div>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/faistateam" element={<FaisTaTeam />} />
        <Route path="/joueursdelasemaine" element={<JoueursDeLaSemaine />} />
        <Route path="/joueursparstats" element={<JoueursParStats />} />
      </Routes>
    </BrowserRouter>
  </div>
);
};

export default App;

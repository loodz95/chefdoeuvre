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
import RechercheDeJoueurs from "./pages/RechercheDeJoueurs";
import Footer from "./components/Footer";
import ActusFifa from "./pages/ActusFifa";
import Header from "./components/Header";
import ActuSelection from "./pages/ActuSelection";


export interface PayloadToken{
    exp: number;
  iat: number;
  id: string;
  role: string;
  username: string;
}

const App = () => {

  
  
return (
  <div >

    <BrowserRouter>
    <Header/>
    <NavBar/>
      <Routes>  
        <Route path="/" element={<Accueil />} />
        <Route path="/faistateam" element={<FaisTaTeam />} />
        <Route path="/joueursdelasemaine" element={<JoueursDeLaSemaine />} />
        <Route path="/joueursparstats" element={<RechercheDeJoueurs />} />
        <Route path="/actusfifa" element={<ActusFifa />} />
        <Route path="/items/:id" element={<ActuSelection />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </div>
);
};

export default App;

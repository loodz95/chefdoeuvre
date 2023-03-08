import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar"
import "./App.css";
import "./fonts/PressStart2P-Regular.ttf";
import sigle from "./assets/fut.png"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from "./pages/Accueil";
import FaisTaTeam from "./pages/FaisTaTeam";
import JoueursDeLaSemaine from "./pages/JoueursDeLaSemaine";
import RechercheDeJoueurs, { Players } from "./pages/RechercheDeJoueurs";
import Footer from "./components/Footer";
import ActusFifa from "./pages/ActusFifa";
import Header from "./components/Header";
import ActuSelection from "./pages/ActuSelection";
import CarteParId from "./pages/CarteParId";
import ListeJoueurs from "./pages/ListeJoueurs";
import Informations from "./pages/Informations";
import GestionDesCartes from "./pages/GestionDesCartes";
import NouveauJoueur from "./pages/NouveauJoueur";
import ActuAdmin from "./pages/ActuAdmin";
import NouvelArticle from "./pages/NouvelArticle";
import GestionUtilisateurs from "./pages/GestionUtilisateurs";
import ConnexionPage from "./pages/ConnexionPage";
import { AuthContext } from "./context/AuthContext";


export interface PayloadToken{
    exp: number;
  iat: number;
  id: string;
  role: string;
  userName: string;
  email:string
}

export interface User{
  id:string
  userName:string;
  email:string;
  role:string;
}

export interface SavedPlayers {
  player_id:Players
  user_id:User
  players:Players
}
const App = () => {
  const {UpdateToken}= useContext(AuthContext)
const token = localStorage.getItem("accesstoken")
UpdateToken(token)
console.log("le token est update",token)

  
  
return (
  <div >

    <BrowserRouter>
    <Header/>
    <NavBar/>
      <Routes>  
        <Route path="/" element={<Accueil />} />

        <Route path= "/faistateam" element={ token?<FaisTaTeam />:<ConnexionPage/>} />
        <Route path="/joueursdelasemaine" element={<JoueursDeLaSemaine />} />
        <Route path="/joueursparstats" element={<RechercheDeJoueurs />} />
        <Route path="/actusfifa"element={ token?<ActusFifa />:<ConnexionPage/>}  />
        <Route path="/items/:id" element={<ActuSelection />} />
        <Route path="/players/:id" element={<CarteParId />} />
        <Route path="/liste-joueurs" element={<ListeJoueurs />} />
        <Route path="/mes-informations" element={<Informations />} />
        <Route path="/gestion-des-cartes" element={<GestionDesCartes />} />
        <Route path="/nouveau-joueur" element={<NouveauJoueur />} />
        <Route path="/actu-admin" element={<ActuAdmin />} />
        <Route path="/nouvel-article" element={<NouvelArticle />} />
        <Route path="/gestion-utilisateurs" element={<GestionUtilisateurs />} />
        <Route path="/connexion" element={<ConnexionPage />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </div>
);
};

export default App;

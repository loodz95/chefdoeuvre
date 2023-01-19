import SearchBar from "../components/SearchBar";

import React, {useState} from "react"
import "./Accueil.css"
import Header from "../components/Header";
import Bann from "../components/Bann";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

export interface Joueurs {
  name: string;
  nickname: string;
  age: number;
}

const Accueil = () =>{

    return (
      <div className="accueil">
        <Header/>
         <NavBar />
        <Bann/>
        <div className="container1">
            <div className="textImage1">
         <p className ="title">Recherche tes cartes FUT <br /> Favorites et les meilleurs joueurs</p>
          <p className="explanation">Tu cherches des casseurs de reins ? Les meilleurs passeurs ? Sers-toi <br /> de notre outil de recherche pour bâtir une team 
          imbattable en fonction <br /> de tes critères.</p>
         </div>
        <div className="premiereImage">
        </div>
         </div>
          <div className="container2">
            <div className="deuxiemeImage"></div>
            <p className = "title"></p>
            <p className="explanation"></p>
          </div>
          <div className="container2">
             <div className="deuxiemeImage">
        </div>
<div className="textImage2">
<p className="title">Sauvegarde toi une team avec les joueurs que tu as sélectionné</p>
<p className="explanation">Inscris-toi sur le site et sauvegarde ta wish list de players</p>
</div>
          </div>
      </div>
    );
}
export default Accueil
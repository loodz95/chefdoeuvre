import SearchBar from "../components/SearchBar";
import MediaQuery from  "react-responsive";
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
              <MediaQuery maxWidth={1224}> <p className ="title">Recherche tes cartes FUT  Favorites et les meilleurs joueurs</p></MediaQuery>
              <MediaQuery minWidth={1224}> <p className ="title">Recherche tes cartes FUT <br />  Favorites et les meilleurs joueurs</p></MediaQuery>
        
          <p className="explanation">Tu cherches des casseurs de reins ? Les meilleurs passeurs ? Sers-toi <br /> de notre outil de recherche pour bâtir une team 
          imbattable en fonction <br /> de tes critères.</p>
         </div>
        <div className="premiereImage">
        </div>
         </div>

          <div className="container2">
<div className="textImage2">
<p className="title2">Sauvegarde toi une team <br /> avec les  joueurs que tu as sélectionné</p>
<p className="explanation2">Inscris-toi sur le site et sauvegarde ta wish list de players grâce 
<br /> à l'outil Fais ta Team.</p>
</div>
 <div className="deuxiemeImage">
        </div>
</div>

      <div className="container3">
        <div className="textImage3">
        <p className="title3">Consulte les joueurs de la semaine</p>
        <p className="explanation3">Qui sont les joueurs qui ont performé cette semaine ? On te liste tout ça !
</p>
</div>
             <div className="troisiemeImage">
        </div>
</div>
<div className="textImage4">
<p className="title3">... Et suis l'actu Fifa et toutes les mises à jours</p>
<p className="explanation3">On te permet de te tenir au jus en te proposant des articles traitant de l'actualité et toutes
les mises à jours récentes de Fifa</p>
</div>
</div>
    );
}
export default Accueil
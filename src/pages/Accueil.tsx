import SearchBar from "../components/SearchBar";
import MediaQuery from  "react-responsive";
import React, {useContext, useEffect, useState} from "react"
import "./Accueil.css"
import Header from "../components/Header";
import Bann from "../components/Bann";
import NavBar from "../components/NavBar";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import image1 from "../assets/cards.jpg"
import image2 from "../assets/fifaSquad.png"
import image3 from "../assets/fifaTotw.jpg"


export interface Joueurs {
  name: string;
  nickname: string;
  age: number;
}

const Accueil = () =>{
const valeur = "Bienvenue sur FUT Starz, le site sur les cartes FUT par excellence !"

return (
      <div className="accueil">
        <Bann banValue= {valeur}/>
        <div className="container1">
            <div className="textImage1">
              <NavLink className="navlinkk" to ="joueursparstats">
              <MediaQuery maxWidth={1224}> <p className ="title">Recherche tes cartes FUT  Favorites et les meilleurs joueurs</p></MediaQuery>
                </NavLink>
                <NavLink className="navlinkk" to ="joueursparstats">
              <MediaQuery minWidth={1225}> <p className ="title">Recherche tes cartes FUT <br />  Favorites et les meilleurs joueurs</p></MediaQuery>
        </NavLink>
          <p className="explanation">Tu cherches des casseurs de reins ? Les meilleurs passeurs ? Sers-toi <br /> de notre outil de recherche pour bâtir une team 
          imbattable en fonction <br /> de tes critères.</p>
         </div>
         <Link to="joueursparstats">
        
       <img src={image1} className="premiereImage" alt=" photo carte FUT" />
        </Link>
        
         </div>

          <div className="container2">
<div className="textImage2">
  <NavLink className="navlinkk" to ="faistateam">
<p className="title2">Sauvegarde toi une team <br /> avec les  joueurs que tu as sélectionné</p>
</NavLink>
<p className="explanation">Inscris-toi sur le site et sauvegarde ta wish list de players grâce 
<br /> à l'outil Fais ta Team.</p>
</div>
<NavLink className="navlinkk" to ="faistateam">
 <img src={image2} className="deuxiemeImage" alt="photo équipe FUT" />
       </NavLink>     
</div>

      <div className="container3">
        <div className="textImage3">
       <NavLink className="navlinkk" to ="joueurs de la semaine">
        <p className="title3">Consulte les joueurs de la semaine</p>
        </NavLink>
        <p className="explanation3">Qui sont les joueurs qui ont performé cette semaine ? On te liste tout ça !
</p>
</div>
<NavLink className="navlinkk" to ="joueursdelasemaine">
          <img src={image3} className="troisiemeImage" alt="photo joueurs de la semaine" />
        </NavLink>
</div>

<div className="textImage4">
  <NavLink className="navlinkk" to ="actusfifa">
<p className="title3">... Et suis l'actu Fifa et toutes les mises à jours</p>
</NavLink>
<p className="explanation">On te permet de te tenir au jus en te proposant des articles traitant de l'actualité et toutes
les mises à jours récentes de Fifa</p>

</div>

</div>
    );
}
export default Accueil
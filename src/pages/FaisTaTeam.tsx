import "./FaisTaTeam.css"
import React, {useState} from "react"
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./Accueil";
import JoueursDeLaSemaine from "./JoueursDeLaSemaine";
import JoueursParStats from "./RechercheDeJoueurs";
import ActusFifa from "./ActusFifa";
import Bann from "../components/Bann";
import MediaQuery from  "react-responsive";
export interface Joueurs {
  name: string;
  nickname: string;
  age: number;
}

const FaisTaTeam = () => {
const message= "Tu peux visualiser la team que tu as sauvegardé et les tester dans plusieurs compositions "

return( 
  <div className="team">
   <Bann banValue={message}/>

   {/* Affichage pour ordi */}
    <MediaQuery minWidth={1225}>
    <div className="h1Titre">
         <h1 className="titre" >Ta compo</h1>
         <h1 className="titre2">Check ta liste de joueurs</h1>
         </div>
         </MediaQuery>

{/* Affichage pour mobile */}
    <MediaQuery maxWidth={1224}>
    <div>
         <h1 className="titre2Mobile">Check ta liste de joueurs</h1>
         <h1 className="titreMobile" >Ta compo</h1>
         </div>
         </MediaQuery>
         
{/* <div className="options">
<p>Check ta liste de joueurs</p>
<p>Ta compo</p>
         </div> */}
         <div className="terrainGlobal">
          <h1 className="rpc">Remplaçants :</h1>
          {/* <div className="defense">  
          <p  className="defdroit">2</p>
           <p  className="central1">4</p>
          <p  className="central2">5</p>
          <p className="defgauche">3</p>
           </div>
          <div className="milieu">
              <p  className="md">7</p>
           <p  className="mc1">6</p>
          <p  className="mc2">8</p>
          <p className="mg">11</p>
          </div>
        <div className="attaque">
 <p  className="att1">9</p>
          <p className="att2">10</p>
        </div>
      </div>
     <div className="rpc">
        <li className="rpcposition">12</li>
        <li className="rpcposition">13</li>
        <li className="rpcposition">14</li>
        <li className="rpcposition">15</li>
        <li className="rpcposition">16</li>
        <li className="rpcposition">17</li> */}
        </div>
      
  </div>
  )
};
export default FaisTaTeam;
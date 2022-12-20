import "./FaisTaTeam.css"
import list_players from "../data/data";
import React, {useState} from "react"
export interface Joueurs {
  name: string;
  nickname: string;
  age: number;
}

const FaisTaTeam = () => {

  let listeJoueurs: Joueurs[] = list_players;
const [tri,setTri] =useState<string>("")
let tabVide : Joueurs[] = [];
  
return( 
  <div>
    
 
  {list_players.map((joueur)=>(
  <ul className = "carteFUT">
  <li className= "age">{joueur.name}</li>
  <li>{joueur.nickname}</li>
 </ul>) )}
  </div>)
};
export default FaisTaTeam;
import SearchBar from "../components/SearchBar";
import list_players from "../data/data";
import React, {useState} from "react"
import "./Accueil.css"

export interface Joueurs {
  name: string;
  nickname: string;
  age: number;
}

const Accueil = () =>{
let listeJoueurs: Joueurs[] = list_players;
const [tri,setTri] =useState<string>("")
let tabVide : Joueurs[] = [];



const tamponFunction =(e : string)=>{

console.log(e)
setTri(e)
console.log("fuck it", tri)
    }
    return (
      <div className="accueil">
        <ul className="ok">
          {listeJoueurs.filter((joueur)=>joueur.name.includes(tri)).map((joueur) => (
            <li className="nom"> {joueur.name}</li>
          ))}
          <SearchBar searchProps={tamponFunction} />
        </ul>
      </div>
    );
}
export default Accueil
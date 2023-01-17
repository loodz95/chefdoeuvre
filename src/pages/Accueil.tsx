import SearchBar from "../components/SearchBar";

import React, {useState} from "react"
import "./Accueil.css"
import Header from "../components/Header";

export interface Joueurs {
  name: string;
  nickname: string;
  age: number;
}

const Accueil = () =>{

    return (
      <div className="accueil">
        <Header/>
      </div>
    );
}
export default Accueil
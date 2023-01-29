import { assertExpressionStatement } from "@babel/types";
import axios from "axios";
import { useEffect,useContext, useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import MediaQuery from "react-responsive";
import Bann from "../components/Bann";
import { AuthContext } from "../context/AuthContext";
import "./RechercheDeJoueurs.css";

export interface Players{
   
        
        lastName: string,
        firstName: string,
        age: number,
        country: string,
        position: string,
        rate: number,
        speed: number,
        shots: number,
        pass: number,
        dribbles: number,
        defence: number,
        power: number,
        typeplayer: number
        
}

const RechercheDeJoueurs = () => {
const {tokenExpired, TokenExpirationFunction, UpdateToken,savedToken} =useContext(AuthContext)
const message = "Trouve ta pépite ici en définissant tes critères de recherche ! Les joueurs sont classés dans l'ordre décroissant."
const [playersTab,setPlayersTab] =useState<Players[]>()

      useEffect(()=>{
        TokenExpirationFunction(savedToken)


  axios.get(`http://localhost:8080/api/players`)
  .then((res)=>{
    console.log("la réponse des joueurs",res.data)
    setPlayersTab(res.data)
  }).catch((err)=>{
    console.log("something wrent wrong", err)
  })
},[]) 

  return (
  <div className="stat">
    <div className="bannière">
    <Bann banValue={message}></Bann>
    </div>
  <div className=" background2">
  
  <MediaQuery minWidth={1225}>
      <div >   
  <Sidebar className="fontsidebar">
  <Menu className="sidebar">
    <SubMenu  label="Vivacité" >
      <MenuItem className= "label">
           
              <input name="origin" type="checkbox" value="dribbleur" />
              <label htmlFor="dribbleur">Dribbleurs</label>
            
            </MenuItem>
      <MenuItem className= "label">
        <input name="origin" type="checkbox" value="flèches" />
              <label htmlFor="flèches">Flèches</label>
      </MenuItem>
    </SubMenu>
    <MenuItem className= "vivacite">
      <input name="origin" type="checkbox" value="force" />
              <label htmlFor="force">Force de la nature </label>   
    </MenuItem>
    <MenuItem> 
    <input name="origin" type="checkbox" value="note" />
              <label htmlFor="note"> Note générale</label>
     </MenuItem>
    <MenuItem>
    <input name="origin" type="checkbox" value="roc" />
              <label htmlFor="roc">Rocs défensifs</label>
    </MenuItem>
  </Menu>
</Sidebar>
</div>
<div>
  
  <h1 className="joueurs">Liste des joueurs :</h1>
    </div>
</MediaQuery>

<MediaQuery maxWidth={1224}>
  <div className="mobileMenu">
  <input name="origin" type="checkbox" value="dribbleur" />
              <label htmlFor="dribbleur">Dribbleurs</label>
             
            
   <input name="origin" type="checkbox" value="flèches" />
              <label htmlFor="flèches">Flèches</label>            
               <input name="origin" type="checkbox" value="force" />
              <label htmlFor="force">Force de la nature </label>              
               <input name="origin" type="checkbox" value="note" />
              <label htmlFor="note"> Note générale</label>            
                <input name="origin" type="checkbox" value="roc" />
              <label htmlFor="roc">Rocs défensifs</label>  
  <div>
  <h1 className="joueursMobile">Liste des joueurs :</h1>
    </div>
    </div>
</MediaQuery>
  </div>
  <div className="backgroundCarte">
  {playersTab?.map((player)=>(
<div>
  <li className="carteFut">
    <p className="lastname">{player.lastName}</p>
    <p className="position">{player.position}</p>
    <p className="pass">{player.pass}</p>
    <p className="passName">{player.pass}</p>
    <p className="shots">{player.shots}</p>
    <p className="shotsName">{player.shots}</p>
    <p className="dribbles">{player.dribbles}</p>
    <p className="dribblesName">{player.dribbles}</p>
    <p className="defence">{player.defence}</p>
    <p className="defenceName">{player.defence}</p>
    <p className="power">{player.power}</p>
    <p className="powerName">{player.power}</p>
    <p className="country">{player.country}</p>
    <p className="rate">{player.rate}</p>
    </li>
  </div>
))}
</div>
  </div>
  )
};

export default RechercheDeJoueurs;
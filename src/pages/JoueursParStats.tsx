import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import Bann from "../components/Bann";
import "./JoueursParStats.css";

const JoueursParStats = () => {

const message = "Bienvenue sur FUT Starz, le site sur les cartes FUT par excellence"
  return (
  <div className="stat">
    <Bann banValue={message}></Bann>
  <div className=" background2">
    <div>
      <Bann banValue={message}></Bann>
    </div>
      <div >   
  <Sidebar className="fontsidebar">
  <Menu className="sidebar">
    <SubMenu  label="Vivacité" >
      <MenuItem className= "label">
           
              <input name="origin" type="checkbox" value="dribbleur" />
              <label htmlFor="dribbleur">Dribbleurs</label>
            
            </MenuItem>
      <MenuItem className= "label">
        <input name="origin" type="checkbox" value="dribbleur" />
              <label htmlFor="dribbleur">Flèches</label>
      </MenuItem>
    </SubMenu>
    <MenuItem className= "vivacite"> <p className= "vivacite" >Force de la nature</p>   </MenuItem>
    <MenuItem> Note générale </MenuItem>
    <MenuItem> Rocs défensifs </MenuItem>
  </Menu>
</Sidebar>
</div>
 <div>
  <h1 className="joueurs">Liste des joueurs</h1>
 <p className="playerexplanation">Cet outil te permet de classer dans l'ordre décroissant les joueurs en fonction de la spécialité choisie</p>
    </div>

  </div>
  </div>
  )
};

export default JoueursParStats;
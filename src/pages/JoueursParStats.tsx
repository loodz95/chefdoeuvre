import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import Bann from "../components/Bann";
import "./JoueursParStats.css";

const JoueursParStats = () => {

const message = "Trouve ta pépite ici en définissant tes critères de recherche ! Les joueurs sont classés dans l'ordre décroissant."
  return (
  <div className="stat">
    <div className="bannière">
    <Bann banValue={message}></Bann>
    </div>
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
  <h1 className="joueurs">Liste des joueurs</h1>
    </div>

  </div>
  </div>
  )
};

export default JoueursParStats;
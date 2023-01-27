import "./Header.css"
import ConnexionButton from "./ConnexionButton";
import SuscribeButton from "./SuscribeButton";
import { VscAccount} from "react-icons/vsc";
import MediaQuery from "react-responsive";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";







const Header =()=>{
    const isConnected = true;

const {UpdateToken, savedToken}=useContext(AuthContext)
 
useEffect(()=>{
  UpdateToken(savedToken)
})





return(
<div className="header">
    {(!savedToken &&(
<div className="buttonGroup">
    <div className="suscribeButton">      
<SuscribeButton/>
</div>
<div >
<ConnexionButton />
</div>
</div>
 ))||(

<div className="profil"> 
<MediaQuery maxWidth={1224}> <VscAccount className="mobile" style={{marginLeft:"50%", marginTop:5,  fontSize:30}}/></MediaQuery>
 <MediaQuery minWidth={1224}>
    <div>
     <VscAccount  style={{ fontSize:40, color:'white', marginTop:5}}/>
     </div>
         
      
      
 <div className="dropdown">
              <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="mon compte"
              menuVariant="dark"
              className="moncompte"
            >
              <NavDropdown.Item href="#action/3.1"> Mes informations</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Mes joueurs
              </NavDropdown.Item>
             
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Se déconnecter
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
     </div>
      
    

    
   
    </MediaQuery>
</div>
 )}
     
</div>
    )
}

export default Header;
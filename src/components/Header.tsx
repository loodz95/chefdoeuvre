import "./Header.css"
import ConnexionButton from "./ConnexionButton";
import SuscribeButton from "./SuscribeButton";
import { VscAccount} from "react-icons/vsc";
import MediaQuery from "react-responsive";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";







const Header =()=>{
    const isConnected = true;
const navigate =useNavigate()
const {UpdateToken, savedToken, tokenExpired, TokenExpirationFunction}=useContext(AuthContext)
 

useEffect(()=>{
  UpdateToken(localStorage.getItem("accesstoken"))
  TokenExpirationFunction(localStorage.getItem("accesstoken"))
  console.log("header token",savedToken)
})

const deconnectFunction=(e:React.MouseEvent)=>{
  localStorage.removeItem("accesstoken")
  UpdateToken(localStorage.getItem("accesstoken"))
  navigate("/")
}




return(
<div className="header">
    {((!savedToken || tokenExpired === "token expiré" )  &&(
<div className="buttonGroup">
    <div className="suscribeButton">      
<SuscribeButton/>
</div>
<div >
<ConnexionButton />
</div>
</div>
 ))}

{((savedToken && tokenExpired === "token non expiré")  &&  (
<div className="profil"> 
<MediaQuery maxWidth={1224}>
  <div> 
    <VscAccount className="mobile" style={{marginLeft:"50%", marginTop:5,  fontSize:30}}/>
    </div>
    <div className="dropdown">
              <Nav className="moncompte" >
            <NavDropdown
              id="nav-dropdown-dark-example"
              title=""
              menuVariant="dark"
              className="moncompte"
            >
              
              <NavDropdown.Item href="#action/3.1">
                   <NavLink className="dropdown" to="/mes-informations">
                Mes informations
                </NavLink>
             
                 </NavDropdown.Item>
             
              <NavDropdown.Item >
                 <NavLink className="dropdown" to="/liste-joueurs">
                Mes joueurs
                </NavLink>
              </NavDropdown.Item>
              
             
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={deconnectFunction} href="#deconnexion">
                Se déconnecter
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
     </div>
    </MediaQuery>


 <MediaQuery minWidth={1224}>
    <div>
     <VscAccount  style={{ fontSize:40, color:'white', marginTop:0}}/>
     </div>
         
      
      
 <div className="dropdown">
              <Nav className="moncompte " >
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="mon compte"
              menuVariant="dark"
              className="moncompte "
            >
              
              <NavDropdown.Item href="#action/3.1">
                   <NavLink className="dropdown" to="/mes-informations">
                Mes informations
                </NavLink>
             
                 </NavDropdown.Item>
             
              <NavDropdown.Item >
                 <NavLink className="dropdown" to="/liste-joueurs">
                Mes joueurs
                </NavLink>
              </NavDropdown.Item>
              
             
              <NavDropdown.Divider />
              <NavDropdown.Item className="dropdown" onClick={deconnectFunction} href="#deconnexion">
                Se déconnecter
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
     </div>
    </MediaQuery>
</div>
))}

     
</div>
    )
}

export default Header;
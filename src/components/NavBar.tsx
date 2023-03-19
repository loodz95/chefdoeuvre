import sigle from "../assets/fut.png";
import {NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css"
import { AuthContext } from "../context/AuthContext";
import {useContext, useEffect, useState} from "react"
import jwtDecode from "jwt-decode";
import { PayloadToken } from "../interfaces/tokenPayload";

const NavBar = () => {
const {savedToken, UpdateToken, TokenExpirationFunction, tokenExpired} = useContext(AuthContext)
const [tokenRole, setTokenRole]=useState<string|undefined>("")

const navigate = useNavigate()

useEffect(()=>{
  UpdateToken(localStorage.getItem("accesstoken"))
  TokenExpirationFunction(localStorage.getItem("accesstoken"))

  if (savedToken){
    const token :PayloadToken = jwtDecode(savedToken);
    setTokenRole(token.role)
    console.log("le role de l'utilisateur",tokenRole)
  }else{
    setTokenRole(undefined)
  }
  console.log("le role de l'utilisateur",tokenRole)
  console.log("token navbar useeffect",savedToken)
  console.log("expirationToken",tokenExpired)
}
)

  const tokenVerify= async (e:React.MouseEvent)=>{
    UpdateToken(localStorage.getItem("accesstoken"))
   if(savedToken === null || tokenExpired === "token expiré"){
localStorage.removeItem("accesstoken")
   }

}


  return (
  
   
 
    <div className="navBar">
      <nav className="navbar navbar-expand-lg  bg-body-tertiary  " >
        <div className="container-fluid">
          <img className="logo" src={sigle} alt="" />
          <a className="navbar-brand myFont" href="#">
            <h1 className="fut">FUT STARZ</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active myFont " >
                  Accueil
                </NavLink>
              </li>
             
              <li className="nav-item">
                <NavLink to="faistateam" className="nav-link active myFont" onClick={tokenVerify}>
                  Fais ta team
                </NavLink>
              </li>
          
              <li className="nav-item">
                <NavLink to="/joueursparstats" className="nav-link myFont">
                  Recherche de joueurs
                </NavLink>
              </li>
          
              <li className="nav-item">
                <NavLink to="actusfifa" className="nav-link myFont">
                  Actus Fifa
                </NavLink>
              </li>
              {tokenRole === "admin" && tokenExpired === "token non expiré" &&(
            <li className="nav-item dropdown">
                        <NavLink
                          to="/"
                          className="nav-link buttonStyle myFont  dropdown-toggle"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onClick={tokenVerify}
                        >

                            Admin
                   
                        </NavLink>
                        <ul className="dropdown-menu">
                          <li>
                        
                            <NavLink
                              to="/gestion-des-cartes"
                              className="admin myFont nav-link"
                              onClick={tokenVerify}
                            >
                            Gestion des cartes 
                            </NavLink>
                          </li>
                      
                          <li>
                            <NavLink
                              to="/gestion-utilisateurs"
                              className="admin myFont nav-link"
                              onClick={tokenVerify}
                            >
                              Gestion des utilisateurs
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/adminMessages"
                              className="admin myFont nav-link "
                              onClick={tokenVerify}
                            >
                               Gestion des messages 
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/actu-admin"
                              className="nav-link myFont admin "
                              onClick={tokenVerify}
                            >
                              Gestion des actus 
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      )}
            </ul>
           
          </div>
        </div>
      </nav>
      
    </div>

  );

  }
export default NavBar;

import sigle from "../assets/fut.png";
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import "./NavBar.css"
import Accueil from "../pages/Accueil";
import FaisTaTeam from "../pages/FaisTaTeam";
import JoueursDeLaSemaine from "../pages/JoueursDeLaSemaine";
import JoueursParStats from "../pages/JoueursParStats";
import ActusFifa from "../pages/ActusFifa";
import { AuthContext } from "../context/AuthContext";
import {useContext, useEffect} from "react"

const NavBar = () => {
const {savedToken, UpdateToken, TokenExpirationFunction, tokenExpired} = useContext(AuthContext)

const navigate = useNavigate()

useEffect(()=>{
  UpdateToken(localStorage.getItem("accesstoken"))
  TokenExpirationFunction(localStorage.getItem("accesstoken"))
  
  console.log("token navbar useeffect",savedToken)
  console.log("expirationToken",tokenExpired)
})

  const tokenVerify= async (e:React.MouseEvent)=>{
    UpdateToken(localStorage.getItem("accesstoken"))
   if(savedToken === null)
  try{
 await
 
   console.log("token navbar",localStorage.getItem("accesstoken"))
console.log("navigate try")
navigate("/")
  }catch(error){
console.log("navigate error")
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
              {((savedToken && tokenExpired === "token non expiré") && (
              <li className="nav-item">
                <NavLink to="faistateam" className="nav-link active myFont" onClick={tokenVerify}>
                  Fais ta team
                </NavLink>
              </li>
              ))}
              <li className="nav-item">
                <NavLink to="/joueursparstats" className="nav-link myFont">
                  Joueurs par stats
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/joueursdelasemaine" className="nav-link myFont">
                  Joueurs de la semaine
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="actusfifa" className="nav-link myFont">
                  Actus Fifa
                </NavLink>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </div>

  );

  }
export default NavBar;

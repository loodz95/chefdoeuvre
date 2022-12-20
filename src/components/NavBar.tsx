import sigle from "../assets/fut.png";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top ">
        <div className="container-fluid slide">
          <img className="logo" src={sigle} alt="" />
          <a className="navbar-brand myFont" href="#">
            <h1 className="fut">FUT STARZ</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="accueil" className=" myFont">
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="faistateam" className="nav-link myFont">
                  Fais ta team
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink to="joueursparstats" className="nav-link myFont">
                  Joueurs par stats
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item myFont" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item myFont" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item myFont" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="joueursdelasemaine" className="nav-link myFont">
                  Joueurs de la semaine
                </NavLink>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

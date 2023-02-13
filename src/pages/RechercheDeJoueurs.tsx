import { assertExpressionStatement } from "@babel/types";
import { tab } from "@testing-library/user-event/dist/tab";
import axios from "axios";
import React, { useEffect,useContext, useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import MediaQuery from "react-responsive";
import Bann from "../components/Bann";
import { AuthContext } from "../context/AuthContext";
import "./RechercheDeJoueurs.css";
import _ from 'lodash';
import { Link } from "react-router-dom";
import usePagination from "../hooks/usePagination";
import { TiTickOutline } from "react-icons/ti"
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { Button, Modal } from "react-bootstrap";
import { TiThLargeOutline } from "react-icons/ti";
import { TiThListOutline } from "react-icons/ti";
import SearchBar from "../components/SearchBar";


export interface Players{
   
        id:number
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
const [playersTab,setPlayersTab] =useState<Players[]>();
  let [tabDisplayed, setTabDisplayed] = useState<Players[]>();
   const [test,setTest]=useState<string>()
   const [cartIsClicked,setCartIsClicked] =useState<boolean>(true)
  let tab : Players[]|undefined;
  const [cardOrList,setCardOrList]= useState<string>("Cartes")
  const [tabTampon,setTabTampon]=useState<Players[]>()
let valueChange:string;
let valueSearch: string;
let myPlayers :Players[];
const[search,setSearch]=useState<string>()
const [tabDef,setTabDef] =useState<Players[]>()
const [tous,setTous] = useState<string>()
  // ---------------------pagination------------------------------
  const [people, setPeople] = useState<Players[]>();
  

  

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 5,
    count: tabDisplayed?.length,
  });
   
 


   useEffect(()=>{
  

        TokenExpirationFunction(savedToken)
        
  axios.get(`http://localhost:8080/api/players`)
  .then((res)=>{
    console.log("la réponse des joueurs",res.data)
    myPlayers = res.data
    tab = res.data
    setPlayersTab(res.data)
   setTabDisplayed([...myPlayers])
 
   console.log("players tab dans use effect",tabDisplayed)
   setPeople(myPlayers)

   console.log("tableau défenseurs", tabDef)


   console.log("tab dans use effect",tabDisplayed)
  }).catch((err)=>{
    console.log("something wrent wrong", err)
  })
},[]) 

  const handlePremierChange =(e:React.SyntheticEvent<HTMLInputElement>)=>{
console.log("état dans handlePqremirCa=hange",e.currentTarget.value)
setTous(e.currentTarget.value)

  }


      const handleChange =(e:React.SyntheticEvent<HTMLInputElement>)=>{
        valueChange = e.currentTarget.value
        setTest(e.currentTarget.value)
console.log("value dans handle change",valueChange)
}
     
 
  const cartClicked=()=>{
    setCartIsClicked(!cartIsClicked)
    if(cartIsClicked){
      setCardOrList("Liste")
    }
    if(!cartIsClicked){
      setCardOrList("Cartes")
    }
  }


  const filterFunction=()=>{
    {setPage(1)}
    let tab =playersTab

    if( tous === "tous" && test === "sans"){
      console.log("playerstab condition",playersTab)
      setTabDisplayed(playersTab)
    }
    if(tous === "tous"){
     
tab = tab?.filter((player)=>player.position.includes("Dc") || player.position.includes("Dd") ||player.position.includes("Dg")
||player.position.includes("Mc")
||player.position.includes("Moc")||player.position.includes("Mdc")||player.position.includes("Ad")||player.position.includes("Bu")
||player.position.includes("Ag")||player.position.includes("At")||player.position.includes("Mg")||player.position.includes("Md"))  
setTabDisplayed(tab)
}
    if(tous === "défenseurs"){
tab = tab?.filter((player)=>player.position.includes("Dc") || player.position.includes("Dd") ||player.position.includes("Dg")  )

}
    if(tous === "milieux"){
tab = tab?.filter((player)=>player.position.includes("Mc") || player.position.includes("Mdc") ||player.position.includes("Moc")  )

}
    if(tous === "attaquants"){
tab = tab?.filter((player)=>player.position.includes("Ad") || player.position.includes("Ag") ||player.position.includes("Bu")  )

}
    if(test === "sans"){
  
}
    if(test === "dribbleurs"){
  const sortDrib = (a : Players, b:Players) => b.dribbles - a.dribbles;
          tab = tab?.sort(sortDrib)

}
    if(test === "note"){
  const sortDrib = (a : Players, b:Players) => b.rate - a.rate;
          tab = tab?.sort(sortDrib)

}
    if(test === "flèches"){
  const sortDrib = (a : Players, b:Players) => b.speed - a.speed;
          tab = tab?.sort(sortDrib)
          console.log("apres fleches", tab)

}
    if(test === "force"){
  const sortDrib = (a : Players, b:Players) => b.power - a.power;
          tab = tab?.sort(sortDrib)

}
    if(test === "roc"){
  const sortDrib = (a : Players, b:Players) => b.defence - a.defence;
          tab = tab?.sort(sortDrib)

}

setTabDisplayed(tab)

  }

const searchProps =(e:string)=>{ 
  
  valueSearch = e
  setSearch(e)
  console.log("searchbar danq parent", search)
  if(valueSearch){

    console.log("aaaaaaaaaaah")
    let tableau = playersTab?.filter((player)=>player.firstName.toLocaleLowerCase().includes(valueSearch) || player.lastName.toLocaleLowerCase().includes(valueSearch ))
    let tableau2 = tableau?.slice(0, 4)
    setTabTampon(tableau2)
  }

  
 
}



  return (
  <><div className="stat">


      <div className="bannière">
        <Bann banValue={message}></Bann>
      </div>

      

      <div className="searchbar">
     <SearchBar searchProps={searchProps}/>
    
    
     { tabTampon?.map((player,i)=> search&&(
      <div className="backrecherche">
      
      <Link className="listerecherche" key={i} to ={`/players/${player.id}`}>
     <div className="recherche">
   
      <div className="listerecherche">{player.firstName}</div>
      <div className="listerecherche">{player.lastName}</div>
      <div className="listerecherche">{player.position}</div>
      <div className="listerecherche">{player.rate}</div>
    
      
     </div> 
     </Link> 
     </div>
     ))}
     </div>

 {/* <MediaQuery minWidth={1225}>
      <div className="searchbar">
     <SearchBar searchProps={searchProps}/>
    
    
     { tabTampon?.map((player,i)=> search&&(
      <div className="backrecherche">
      
      <Link className="listerecherche" key={i} to ={`/players/${player.id}`}>
     <div className="recherche">
   
      <div className="listerecherche">{player.firstName}</div>
      <div className="listerecherche">{player.lastName}</div>
      <div className="listerecherche">{player.position}</div>
      <div className="listerecherche">{player.rate}</div>
    
      
     </div> 
     </Link> 
     </div>
     ))}
     </div>
  </MediaQuery> */}



<div className="miseenpage">
  
      <MediaQuery minWidth={1225}>
          <div className="menuJoueurs">
          <div>
            <Sidebar className="fontsidebar">
              <Menu className="sidebar">
               
                  <SubMenu  label ="Filtre">
                  <div className="fond"> 
                 <SubMenu label="Postes">
                  
                 
                  <MenuItem className="label" >
                <input onChange={handlePremierChange} name ="origin" type="radio" id="tous"   value="tous"  ></input>
                    <label htmlFor="tous">Tous</label>

                  </MenuItem>
                  <MenuItem className="label" >
                <input onChange={handlePremierChange} name ="origin" type="radio" id="défenseurs"   value="défenseurs" ></input>
                    <label htmlFor="défenseurs">Défenseurs</label>
                  
                  </MenuItem>
                  <MenuItem className="label" >
                    <input onChange={handlePremierChange} name ="origin" type="radio" id="milieux"   value="milieux" ></input>
                    <label htmlFor="milieux">Milieux</label>
                  </MenuItem>
                  <MenuItem className="label" >
                    <input onChange={handlePremierChange} name ="origin" type="radio" id="attaquants"   value="attaquants" ></input>
                    <label htmlFor="attaquants">Attaquants</label>
                  </MenuItem>
        
                </SubMenu>
                </div> 
                
                {(tous && (
                   <div className="fond"> 
                <SubMenu label="Caractéristiques">
                  <MenuItem className="label">

                    <input onChange={handleChange} name ="caracteristiques" type="radio" id="sans"   value="sans" ></input>
                    <label htmlFor="sans">Sans</label>
                    </MenuItem>
                        <MenuItem className="label">
                   <input onChange={handleChange} name ="caracteristiques" type="radio" id="dribbleurs"   value="dribbleurs" ></input>
                    <label htmlFor="dribbleurs">Dribbleurs</label>

                  </MenuItem>
                  <MenuItem className="label">
                    <input onChange={handleChange} name ="caracteristiques" type="radio"  id="flèches" value="flèches"></input>
                    <label htmlFor="flèches">Rapides</label>
                  </MenuItem>
                  <MenuItem className="label">
                    <input onChange={handleChange} name ="caracteristiques" type="radio" id="force"  value="force"></input>
                    <label htmlFor="force">Costauds</label>
                  </MenuItem>
                  <MenuItem className="label">

                    <input onChange={handleChange} name ="caracteristiques" type ="radio" id ="note" value="note"></input>
                    <label htmlFor="note">Note</label>
                  </MenuItem>
                  <MenuItem className="label">
                    <input onChange={handleChange} name ="caracteristiques" type="radio" value="roc"></input>
                    <label htmlFor="roc">Impassables</label>
                  </MenuItem>
                </SubMenu>
                 <button className = "boutonresultat" onClick ={filterFunction}>Voir résultats</button>
                 </div>
             
               ))}
                
                 
                
               
                </SubMenu>
               
              </Menu>
             
              
            </Sidebar>
            
          </div>
        
          </div>
        </MediaQuery>

       
     
    


   
           
          
             
          <div className="good">
          {/* ------------------------------------------------Disposition des éléments----------------------------------------- */}

  
  <MediaQuery minWidth={1225}>
      <div className="titre">  
      {(cartIsClicked &&(
            <h1 className="affichage">Affichage :  <button className="fond" onClick={cartClicked}><TiThLargeOutline/> </button></h1>
            ))}
      {(!cartIsClicked &&(
            <h1 className="affichage">Affichage :  <button className="fond" onClick={cartClicked}><TiThListOutline/> </button> </h1>
            ))}
             </div>
</MediaQuery>


  <MediaQuery maxWidth={1224}>
      <div className="titre">  
      {(cartIsClicked &&(
            <h1 className="affichage">Affichage :  <button className="fond" onClick={cartClicked}><TiThLargeOutline/> </button> <button>Filtre</button></h1>
            ))}
      {(!cartIsClicked &&(
            <h1 className="affichage">Affichage :  <button className="fond" onClick={cartClicked}><TiThListOutline/> </button><button>Filtre</button> </h1>
            ))}
             </div>
</MediaQuery>







          {tabDisplayed?.slice(firstContentIndex, lastContentIndex)
            .map((player: any, i) => !cartIsClicked&& (
              <div className="dispo"  key={i}>
         <div className="items">
             <div className="fut-player-card">
                <Link className="link" to={`/players/${player.id}`}>
                <div className="player-card-top">
                  <div className="player-master-info">
                    <div className="player-rating">
                      <span>{player.rate}</span>
                    </div>
                    <div className="player-position">
                      <span>{player.position}</span>
                    </div>
                    <div className="player-nation">
                      {/* image du drapeau du pays du joueur à mettre ici */}
                    </div>
                    <div className="player-club">
                      {/* image drapeau club */}
                    </div>
                  </div>
                  <div className="player-picture">
                    {/* image photo du joueur */}

                  </div>
                </div>
                <div className="player-card-bottom">
                  <div className="player-info">

                    <div className="player-name">
                      <span>{player.lastName}</span>
                    </div>

                    <div className="player-features">
                      <div className="player-features-col">
                        <span>
                          <div className="player-feature-value">{player.speed}</div>
                          <div className="player-feature-title">VIT</div>
                        </span>
                        <span>
                          <div className="player-feature-value">{player.shots}</div>
                          <div className="player-feature-title">TIR</div>
                        </span>
                        <span>
                          <div className="player-feature-value">{player.pass}</div>
                          <div className="player-feature-title">PAS</div>
                        </span>
                      </div>
                      <div className="player-features-col">
                        <span>
                          <div className="player-feature-value">{player.dribbles}</div>
                          <div className="player-feature-title">DRI</div>
                        </span>
                        <span>
                          <div className="player-feature-value">{player.defence}</div>
                          <div className="player-feature-title">DEF</div>
                        </span>
                        <span>
                          <div className="player-feature-value">{player.power}</div>
                          <div className="player-feature-title">PHY</div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
               </Link>
               </div>
 </div>
 </div>
  ))}

  <MediaQuery minWidth={1225}>
  {(cartIsClicked&&(
 <div className="attributsfiltre">
            <p className="att">Prénom</p>
            <p className="att">Nom</p>
            <p className="att">Note</p>
            <p className="att">Poste</p>
            <p className="att">Pays</p>
            <p className="att">Dribbles</p><p className="att">Vitesse</p>
            <p className="att">Force</p>
            <p className="att">Défense</p>
            <p className="att">Passes</p>
            </div>
              ))}
              </MediaQuery>



  <MediaQuery minWidth={1225}>
          {tabDisplayed?.slice(firstContentIndex, lastContentIndex)
            .map((player: any, i) => cartIsClicked&& (
         <Link key={i} className="link" to={`/players/${player.id}`}>
              <div className="listPlayers">
             
                  <div className="styleListe">
    <div className="colomne-regle">
                    <p className="colomnejoueur ">{player.firstName}</p>
            </div>        
                    <p className="colomnenomjoueur ">{player.lastName}</p>
                   <div className="colomne-regle">
                    <p className="colomnenotejoueur ">{player.rate} </p>
                    </div>
                    <div className="colomne-regle">
                    <p className="colomnepositionjoueur ">{player.position} </p>
                    </div>
                    <div className="colomne-regle" >
                    <p className="colomnepaysjoueur ">{player.country} </p>
                    </div>
                         <p className="colomnedribblesjoueur ">{player.dribbles} </p>
                    <p className="colomnevitessejoueur ">{player.speed} </p>
                    <p className="colomnepuissancejoueur ">{player.power} </p>
                    <p className="colomnedefensejoueur ">{player.defence} </p>
                    <div className="div-pass">
                    <p  className="colomnepassejoueur  ">{player.pass} </p>
                   </div>
             
                  </div>
                </div>
             
    
            </Link> 
               ))}
</MediaQuery>

  <MediaQuery maxWidth={1224}>
          {tabDisplayed?.slice(firstContentIndex, lastContentIndex)
            .map((player: any, i) => cartIsClicked&& (
         <Link key={i} className="link" to={`/players/${player.id}`}>
              <div className="listPlayers">
             
                  <div className="styleListe">
    <div className="colomne-regle">
                    <p className="colomnejoueur ">{player.firstName}</p>
            </div>        
                    <p className="colomnenomjoueur ">{player.lastName}</p>
                   <div className="colomne-regle">
                    <p className="colomnenotejoueur ">{player.rate} </p>
                    </div>
              
             
                  </div>
                </div>
             
    
            </Link> 
               ))}
</MediaQuery>
              
            </div> 
           </div>
            
           
            
      
           
                {/* ----------------------------Logique mise en place pagination----------------------------------------- */}
    <div className="restantpage">
        <div className="pagination">
          <p className="text">
            {page}/{totalPages}
          </p>
          <button
            onClick={prevPage}
            className={`page ${page === 1 && "disabled"}`}
          >
            &larr;
          </button>
          <button
            onClick={() => setPage(1)}
            className={`page ${page === 1 && "disabled"}`}
          >
            1
          </button>
          {gaps.before ? "..." : null}
          {/* @ts-ignore */}
          {gaps.paginationGroup.map((el) => (
            <button
              onClick={() => setPage(el)}
              key={el}
              className={`page ${page === el ? "active" : ""}`}
            >
              {el}
            </button>
          ))}
        
        
          {gaps.after ? "..." : null}
          <button
            onClick={() => setPage(totalPages)}
            className={`page ${page === totalPages && "disabled"}`}
          >
            {totalPages}
          </button>
          <button
            onClick={nextPage}
            className={`page ${page === totalPages && "disabled"}`}
          >
            &rarr;
          </button>
        </div>
        </div>
         
        </div>
      </>
      


  
  )
};

export default RechercheDeJoueurs;
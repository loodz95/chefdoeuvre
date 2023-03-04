import "./FaisTaTeam.css"
import React, {useContext, useEffect, useLayoutEffect, useState} from "react"
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./Accueil";
import JoueursDeLaSemaine from "./JoueursDeLaSemaine";
import JoueursParStats from "./RechercheDeJoueurs";
import ActusFifa from "./ActusFifa";
import Bann from "../components/Bann";
import MediaQuery from  "react-responsive";
import CarteFut  from "../components/CarteFut";
import Draggable from 'react-draggable';
import axios from "axios";
import { PayloadToken, SavedPlayers } from "../App";
import { AuthContext } from "../context/AuthContext";
import image from "../assets/newcard.jpg"
import image2 from "../assets/terrainok.png"
import CarteMystère from "../components/CarteMystère";
import { Button, Modal } from "react-bootstrap";

export interface Joueurs {
  name: string;
  nickname: string;
  age: number;
}



const FaisTaTeam = () => {
const message= "Tu peux visualiser la team que tu as sauvegardé et les tester dans plusieurs compositions "
const {TokenExpirationFunction,savedToken} =useContext( AuthContext)
const [savedPlayers,setSavedPlayers]= useState<SavedPlayers[]>()
const [ard, setArd] = useState<boolean>(false);
const [arg, setArg] = useState<boolean>(false);
const [dc1, setDc1] = useState<boolean>(false);
const [dc2, setDc2] = useState<boolean>(false);
const [mcd, setMcd] = useState<boolean>(false);
const [mcg, setMcg] = useState<boolean>(false);
const [mg, setMg] = useState<boolean>(false);
const [md, setMd] = useState<boolean>(false);
const [att1, setAtt1] = useState<boolean>(false);
const [att2, setAtt2] = useState<boolean>(false);
const [tabArd, setTabArd] = useState<SavedPlayers[]>();
const [tabArg, setTabArg] = useState<SavedPlayers[]>();
const [tabDcd, setTabDcd] = useState<SavedPlayers[]>();
const [tabDcg, setTabDcg] = useState<SavedPlayers[]>();
const [tabMdc, setTabMdc] = useState<SavedPlayers[]>();
const [tabMg, setTabMg] = useState<SavedPlayers[]>();
const [tabMd, setTabMd] = useState<SavedPlayers[]>();
const [tabMcg, setTabMcg] = useState<SavedPlayers[]>();
const [tabMcd, setTabMcd] = useState<SavedPlayers[]>();
const [tabAt1, setTabAt1] =useState<SavedPlayers[]>();
const [tabAt2, setTabAt2] =useState<SavedPlayers[]>();
 const [show, setShow] = useState(false);  //state pour ouverture modal connexion//
 const [, updateState] = React.useState({});
 const forceUpdate = React.useCallback(() => updateState({}), []);



  const handleClose = () =>{    //Fonction fermeture modal connexion au click//
    setShow(false)                          
  };

  const handleShow = () => {
    
  setShow(true); //Fonction ouverture modal connexion au click//
  };


  useEffect(()=>{
    
console.log("dans le useEffect",tabArd)
        TokenExpirationFunction(savedToken)
        
  axios.get(`http://localhost:8080/api/savedplayers`,{
    headers:{
        Authorization:`Bearer ${localStorage.getItem("accesstoken")}`,
    
    }
  })
  .then((res)=>{
 console.log(res.data)
 setSavedPlayers(res.data)

  }).catch((err)=>{
    console.log("something wrent wrong", err)
  })
},[console.log("longueur tableau",tabArd?.length)]) 

let tab: React.SetStateAction<SavedPlayers[] | undefined>;

const insertFunction=(e:React.MouseEvent<HTMLButtonElement>)=>{
console.log("consoleloginsertfunction", e.currentTarget.value)
const playerFound =  Number(e.currentTarget.value)

tab = savedPlayers?.filter((player)=>player.players.id === playerFound )
console.log(tab,"le joueur trouvé")

switch (true) {
        case ard:
       
   

setTabArd(tab)

console.log(tabArd)
setArd(false)
setShow(false)
          ;
          break;

        case arg:
            setTabArg([])
setTabArg(tab)
setArg(false)
setShow(false)
          ;
          break;

        case dc1:
                   setTabDcd([])
setTabDcd(tab)
setDc1(false)
setShow(false)
          ;
          break;

         case dc2:
                   setTabDcg([])
setTabDcg(tab)
setDc2(false)
setShow(false)
          ;
          break;

              case mcd:
                   setTabMcd([])
setTabMcd(tab)
setMcd(false)
setShow(false)
          ;
          break;

              case mcg:
                   setTabMcg([])
setTabMcg(tab)
setMcg(false)
setShow(false)
          ;
          break;

        case md:
                   setTabMd([])
setTabMd(tab)
setMd(false)
setShow(false)
          ;
          break;
                  case mg:
                   setTabMg([])
setTabMg(tab)
setMg(false)
setShow(false)
          ;
          break;
        case att1:
                   setTabAt1([])
setTabAt1(tab)
setAtt1(false)
setShow(false)

          ;
          break;
                  case att2:
                   setTabAt2([])
setTabAt2(tab)
setAtt2(false)
setShow(false)
          ;
          break;

      }



}



const selectFunctionArd=()=>{
  setArd(true)
  setArg(false)
  setDc1(false)
  setDc2(false)
  setMcd(false)
  setMcg(false)
  setMg(false)
  setMd(false)
  setAtt1(false)
  setAtt2(false)
 setShow(true)
}
const selectFunctionArg=()=>{
  setArd(false)
  setArg(true)
  setDc1(false)
  setDc2(false)
  setMcd(false)
  setMcg(false)
  setMg(false)
  setMd(false)
  setAtt1(false)
  setAtt2(false)
 setShow(true)
}
const selectFunctionDc1=()=>{
  setArd(false)
  setArg(false)
  setDc1(true)
  setDc2(false)
  setMcd(false)
  setMcg(false)
  setMg(false)
  setMd(false)
  setAtt1(false)
  setAtt2(false)
 setShow(true)
}
const selectFunctionDc2=()=>{
  setArd(false)
  setArg(false)
  setDc1(false)
  setDc2(true)
  setMcd(false)
  setMcg(false)
  setMg(false)
  setMd(false)
  setAtt1(false)
  setAtt2(false)
 setShow(true)
}
const selectFunctionMcd=()=>{
  setArd(false)
  setArg(false)
  setDc1(false)
  setDc2(false)
  setMcd(true)
  setMcg(false)
  setMg(false)
  setMd(false)
  setAtt1(false)
  setAtt2(false)
 setShow(true)
}
const selectFunctionMcg=()=>{
  setArd(false)
  setArg(false)
  setDc1(false)
  setDc2(false)
  setMcd(false)
  setMcg(true)
  setMg(false)
  setMd(false)
  setAtt1(false)
  setAtt2(false)
 setShow(true)
}
const selectFunctionMg=()=>{
  setArd(false)
  setArg(false)
  setDc1(false)
  setDc2(false)
  setMcd(false)
  setMcg(false)
  setMg(true)
  setMd(false)
  setAtt1(false)
  setAtt2(false)
 setShow(true)
}
const selectFunctionMd=()=>{
  setArd(false)
  setArg(false)
  setDc1(false)
  setDc2(false)
  setMcd(false)
  setMcg(false)
  setMg(false)
  setMd(true)
  setAtt1(false)
  setAtt2(false)
 setShow(true)
}
const selectFunctionAtt1=()=>{
  setArd(false)
  setArg(false)
  setDc1(false)
  setDc2(false)
  setMcd(false)
  setMcg(false)
  setMg(false)
  setMd(false)
  setAtt1(true)
  setAtt2(false)
 setShow(true)
}
const selectFunctionAtt2=()=>{
  setArd(false)
  setArg(false)
  setDc1(false)
  setDc2(false)
  setMcd(false)
  setMcg(false)
  setMg(false)
  setMd(false)
  setAtt1(false)
  setAtt2(true)
 setShow(true)
}



return( 
  <div className="team">
   <Bann banValue={message}/>

    <Modal show={show} onHide={handleClose} >
      <Modal.Header className="colorTitle"  closeButton>
        <Modal.Title className="colorTitle" >Tes joueurs</Modal.Title>
      </Modal.Header>
      <Modal.Body className="colorBody">
      {savedPlayers?.map((player,i)=>(
        <div key={i} className="players-modal">
        <button className="select-player" onClick={insertFunction} value={player.players.id}>
          <p className="selection">{player.players.firstName}</p>
          <p className="selection">{player.players.lastName}</p>
          <p className="selection">{player.players.position}</p>
          <p className="selection">{player.players.rate}</p>
          </button>
        </div>
      ))}
 
      </Modal.Body>
   
    </Modal>


         <div className="terrainGlobal">
       
   
 
<div className="terrain">

  <div className="goal">
    <div className="carte-mystère">
     <CarteMystère />
     </div> 
  </div>


          <div className="defense">  

          {(tabArd?.length==undefined &&(
          <div  className="defdroit">
             <div  onClick={selectFunctionArd} className="carte-mystère">
               <CarteMystère/> 
</div>

          </div>
          ))}
{(tabArd?.length === 1 && (

tabArd?.map((player, i)=>(
  <div  className="defdroit">
  <div onClick={selectFunctionArd} key={i} className="cartefut">
    <CarteFut note={player.players.rate} position={player.players.position} nom ={player.players.lastName} image={player.players.picture}/>
     <img className="testImage" src= {`http://localhost:8080/public/assets/${player.players.picture}`} alt="image-joueur"/>
  </div>
  </div>
))
))}



          {(tabDcd?.length==undefined &&(
          <div  className="central1">
             <div  onClick={selectFunctionDc1} className="carte-mystère">
               <CarteMystère/> 
</div>

          </div>
          ))}
{(tabDcd?.length === 1 && (

tabDcd?.map((player, i)=>(
  <div  className="central1">
  <div onClick={selectFunctionDc1} key={i} className="cartefut">
    <CarteFut note={player.players.rate} position={player.players.position} nom ={player.players.lastName} image={player.players.picture}/>
  </div>
  </div>
))
))}
           {(tabDcg?.length==undefined &&(
          <div  className="central2">
             <div  onClick={selectFunctionDc2} className="carte-mystère">
               <CarteMystère/> 
</div>

          </div>
          ))}
{(tabDcg?.length === 1 && (

tabDcg?.map((player, i)=>(
  <div  className="central2">
  <div onClick={selectFunctionDc2} key={i} className="cartefut">
    <CarteFut note={player.players.rate} position={player.players.position} nom ={player.players.lastName} image={player.players.picture}/>
  </div>
  </div>
))
))}
          {(tabArg?.length==undefined &&(
          <div  className="defgauche">
             <div  onClick={selectFunctionArg} className="carte-mystère">
               <CarteMystère/> 
</div>

          </div>
          ))}
{(tabArg?.length === 1 && (

tabArg?.map((player, i)=>(
  <div  className="defgauche">
  <div onClick={selectFunctionArg} key={i} className="cartefut">
    <CarteFut note={player.players.rate} position={player.players.position} nom ={player.players.lastName} image={player.players.picture}/>
  </div>
  </div>
))
))}
</div>


          <div className="milieu">
          {(tabMcd?.length==undefined &&(
          <div  className="mc1">
             <div  onClick={selectFunctionMcd} className="carte-mystère">
               <CarteMystère/> 
</div>

          </div>
          ))}
{(tabMcd?.length === 1 && (

tabMcd?.map((player, i)=>(
  <div  className="mc1">
  
  <div onClick={selectFunctionMcd} key={i} className="cartefut">
    <CarteFut note={player.players.rate} position={player.players.position} nom ={player.players.lastName} image={player.players.picture}/>
  </div>
  
  </div>
))
))}
          {(tabMcg?.length==undefined &&(
          <div  className="mc2">
             <div  onClick={selectFunctionMcg} className="carte-mystère">
               <CarteMystère/> 
</div>

          </div>
          ))}
{(tabMcg?.length === 1 && (

tabMcg?.map((player, i)=>(
  <div  className="mc2">
   
  <div onClick={selectFunctionMcg} key={i} className="cartefut">
    <CarteFut note={player.players.rate} position={player.players.position} nom ={player.players.lastName}image={player.players.picture}/>
  </div>
  
  </div>
))
))}

          {(tabMd?.length==undefined &&(
          <div  className="md">
             <div  onClick={selectFunctionMd} className="carte-mystère">
               <CarteMystère/> 
</div>

          </div>
          ))}
{(tabMd?.length === 1 && (

tabMd?.map((player, i)=>(
  <div  className="md">
  
  <div onClick={selectFunctionMd} key={i} className="cartefut">
    <CarteFut note={player.players.rate} position={player.players.position} nom ={player.players.lastName} image={player.players.picture}/>
  </div>
  
  </div>
))
))}
 
 
                   


           {(tabMg?.length==undefined &&(
          <div  className="mg">
             <div  onClick={selectFunctionMg} className="carte-mystère">
               <CarteMystère/> 
</div>

          </div>
          ))}
{(tabMg?.length === 1 && (

tabMg?.map((player, i)=>(
  <div  className="mg">
  <div onClick={selectFunctionMg} key={i} className="cartefut">
    <CarteFut note={player.players.rate} position={player.players.position} nom ={player.players.lastName} image={player.players.picture}/>
  </div>
  </div>
))
))}
          </div>
        <div className="attaque">
          {(tabAt1?.length==undefined &&(
          <div  className="att1">
             <div  onClick={selectFunctionAtt1} className="carte-mystère">
               <CarteMystère/> 
</div>

          </div>
          ))}
{(tabAt1?.length === 1 && (

tabAt1?.map((player, i)=>(
  <div  className="att1">
  
  <div onClick={selectFunctionAtt1} key={i} className="cartefut">
    <CarteFut note={player.players.rate} position={player.players.position} nom ={player.players.lastName} image={player.players.picture}/>
  </div>
 
  </div>
))
))}
          {(tabAt2?.length==undefined &&(
          <div  className="att2">
            
             <div  onClick={selectFunctionAtt2} className="carte-mystère">
               <CarteMystère/> 
</div>

          </div>
          ))}
{(tabAt2?.length === 1 && (

tabAt2?.map((player, i)=>(
  <div  className="att2">
    
  <div onClick={selectFunctionAtt2} key={i} className="cartefut">
    <CarteFut note={player.players.rate} position={player.players.position} nom ={player.players.lastName} image={player.players.picture}/>
  </div>
  
  </div>
))
))}
        </div>
      </div>
      </div>




     {/* <div className="rpc">
        <li className="rpc1">
          
        </li>
        <li className="rpc2">13</li>
        <li className="rpc3">14</li>
        <li className="rpc4">15</li>
        <li className="rpcposition5">16</li>
        <li className="rpcposition6">17</li>
        <li className="rpcposition7">18</li>
        </div> */}

  </div>
  )
};
export default FaisTaTeam;
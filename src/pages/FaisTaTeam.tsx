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
import { PayloadToken } from "../interfaces/tokenPayload";
import { SavedPlayers } from "../interfaces/savedPlayers";
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



let tableauTerrain : any=[];
tableauTerrain.length = 11



const FaisTaTeam = () => {
 const message= "Tu peux visualiser la team que tu as sauvegardé et les tester dans plusieurs compositions "
 const {TokenExpirationFunction,savedToken} =useContext( AuthContext)
 const [savedPlayers,setSavedPlayers]= useState<SavedPlayers[]>([])
 const [posteJoueur, setPostJoueur] = useState<string|undefined>(undefined);
 const [tableauJoueur, setTableauJoueur] =useState<SavedPlayers[]>();
 const [show, setShow] = useState(false);  //state pour ouverture modal connexion//



  const handleClose = () =>{    //Fonction fermeture modal connexion au click//
    setShow(false)                          
  };

  const handleShow = () => {
   setShow(true); //Fonction ouverture modal connexion au click//
  };


  useEffect(()=>{
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
},[]) 

let tab: SavedPlayers[];

const insertFunction=(e:React.MouseEvent<HTMLButtonElement>)=>{
  console.log("consoleloginsertfunction", e.currentTarget.value)
  const playerFound =  Number(e.currentTarget.value)
  tab = savedPlayers.filter((player)=>player.players.id === playerFound )
  console.log(tab,"le joueur trouvé")
  const found  = tab.find(element=>element)
  console.log("l'autrejoueur trouvé", found)

  switch (posteJoueur) {

     case "ard": 
     tableauTerrain[2]= found
     break;

     case "arg":
     tableauTerrain[3]= found
     break;

     case "dc1":
     tableauTerrain[4]= found
     break;

     case "dc2":
     tableauTerrain[5]= found
     break;

     case "mcd":
     tableauTerrain[6]= found
     break;

     case "mcg":
     tableauTerrain[7]= found
     break;

     case "md":
     tableauTerrain[8]= found
     break;
                  
     case "mg":
     tableauTerrain[9]= found
     break;
        
     case "att1":
     tableauTerrain[10]= found
     break;
                  
     case "att2":
     tableauTerrain[11]= found
     break;
 }
 setTableauJoueur(tableauTerrain)
 setShow(false)
}



const selectFunctionPlayer=(poste: string)=>{
 setPostJoueur(poste)
 setShow(true)
}






return(   
<div className="team">
	<Bann banValue={message}/>
	<Modal show={show} onHide={handleClose} >
		<Modal.Header className="colorTitle"  closeButton>
			<Modal.Title className="colorTitle" >
				Tes joueurs
			</Modal.Title>
		</Modal.Header>
		<Modal.Body className="colorBody">
			{savedPlayers?.map((player,i)=>
			(
			<div key={i} className="players-modal">
				<button className="select-player" onClick={insertFunction} value={player.players.id}>
					<p className="selection-firstname">
						{player.players.firstName}
					</p>
					<p className="selection-lastname">
						{player.players.lastName}
					</p>
					<p className="selection-position">
						{player.players.position}
					</p>
					<p className="selection-rate">
						{player.players.rate}
					</p>
					{/* 
					<img src= {`http://localhost:8080/public/${player.players.picture}`} alt="image" />
					 */}
					<p className="selection-vide"></p>
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
				{( !tableauJoueur?.[2] && (
				<div  className="defdroit">
					<div  onClick={()=>
						selectFunctionPlayer('ard')} className="carte-mystère">
						<CarteMystère/>
					</div>
				</div>
				))}{(tableauJoueur?.[2] && (
				<div  className="defdroit">
					<div onClick={() =>
						 selectFunctionPlayer('ard')}  className="cartefut">
						<CarteFut note={tableauJoueur[2].players.rate} position={tableauJoueur[2].players.position} nom ={tableauJoueur[2].players.lastName}/>
					</div>
				</div>
				))}{(!tableauJoueur?.[4] &&(
				<div  className="central1">
					<div  onClick={() =>
						 selectFunctionPlayer('dc1')}   className="carte-mystère">
						<CarteMystère/>
					</div>
				</div>
				))}{(tableauJoueur?.[4] && (
				<div  className="central1">
					<div onClick={() =>
						 selectFunctionPlayer('dc1')}className="cartefut">
						<CarteFut note={tableauJoueur[4].players.rate} position={tableauJoueur[4].players.position} nom ={tableauJoueur[4].players.lastName}/>
					</div>
				</div>
				))}{(!tableauJoueur?.[5] &&(
				<div  className="central2">
					<div  onClick={() =>
						 selectFunctionPlayer('dc2')}   className="carte-mystère">
						<CarteMystère/>
					</div>
				</div>
				))}{(tableauJoueur?.[5] && (
				<div  className="central2">
					<div onClick={() =>
						 selectFunctionPlayer('dc2')}   className="cartefut">
						<CarteFut note={tableauJoueur[5].players.rate} position={tableauJoueur[5].players.position} nom ={tableauJoueur[5].players.lastName} />
					</div>
				</div>
				))}{(!tableauJoueur?.[3] &&(
				<div  className="defgauche">
					<div  onClick={() =>
						 selectFunctionPlayer('arg')}  className="carte-mystère">
						<CarteMystère/>
					</div>
				</div>
				))}{(tableauJoueur?.[3]&& (
				<div  className="defgauche">
					<div onClick={() =>
						 selectFunctionPlayer('arg')}  className="cartefut">
						<CarteFut note={tableauJoueur[3].players.rate} position={tableauJoueur[3].players.position} nom ={tableauJoueur[3].players.lastName} />
					</div>
				</div>
				))}
				</ div>
				<div className="milieu">
					{(!tableauJoueur?.[6]&&(
					<div  className="mc1">
						<div  onClick={() =>
							 selectFunctionPlayer('mcd')}   className="carte-mystère">
							<CarteMystère/>
						</div>
					</div>
					))}{(tableauJoueur?.[6]&& (  
					<div  className="mc1">
						<div onClick={() =>
							 selectFunctionPlayer('mcd')}   className="cartefut">
							<CarteFut note={tableauJoueur[6].players.rate} position={tableauJoueur[6].players.position} nom ={tableauJoueur[6].players.lastName} />
						</div>
					</div>
					))}{(!tableauJoueur?.[7]&&(
					<div  className="mc2">
						<div  onClick={() =>
							 selectFunctionPlayer('mcg')}   className="carte-mystère">
							<CarteMystère/>
						</div>
					</div>
					))}{(tableauJoueur?.[7]&& (  
					<div  className="mc2">
						<div onClick={() =>
							 selectFunctionPlayer('mcg')}className="cartefut">
							<CarteFut note={tableauJoueur[7].players.rate} position={tableauJoueur[7].players.position} nom ={tableauJoueur[7].players.lastName}/>
						</div>
					</div>
					))}{(!tableauJoueur?.[8]&&(
					<div  className="md">
						<div  onClick={() =>
							 selectFunctionPlayer('md')}   className="carte-mystère">
							<CarteMystère/>
						</div>
					</div>
					))}{(tableauJoueur?.[8]&& (  
					<div  className="md">
						<div onClick={() =>
							 selectFunctionPlayer('md')}className="cartefut">
							<CarteFut note={tableauJoueur[8].players.rate} position={tableauJoueur[8].players.position} nom ={tableauJoueur[8].players.lastName} />
						</div>
					</div>
					))}{(!tableauJoueur?.[9]&&(
					<div  className="mg">
						<div  onClick={() =>
							 selectFunctionPlayer('mg')}  className="carte-mystère">
							<CarteMystère/>
						</div>
					</div>
					))}{(tableauJoueur?.[9]&& (  
					<div  className="mg">
						<div onClick={() =>
							 selectFunctionPlayer('mg')}className="cartefut">
							<CarteFut note={tableauJoueur[9].players.rate} position={tableauJoueur[9].players.position} nom ={tableauJoueur[9].players.lastName} />
						</div>
					</div>
					))}
				</div>
				<div className="attaque">
					{(!tableauJoueur?.[10]&& (
					<div  className="att1">
						<div  onClick={() =>
							 selectFunctionPlayer('att1')}   className="carte-mystère">
							<CarteMystère/>
						</div>
					</div>
					))}{(tableauJoueur?.[10]&&  (  
					<div  className="att1">
						<div onClick={() =>
							 selectFunctionPlayer('att1')}className="cartefut">
							<CarteFut note={tableauJoueur[10].players.rate} position={tableauJoueur[10].players.position} nom ={tableauJoueur[10].players.lastName}/>
						</div>
					</div>
					))}{(!tableauJoueur?.[11]&&(
					<div  className="att2">
						<div  onClick={() =>
							 selectFunctionPlayer('att2')}   className="carte-mystère">
							<CarteMystère/>
						</div>
					</div>
					))}{(tableauJoueur?.[11]&& (  
					<div  className="att2">
						<div onClick={() =>
							 selectFunctionPlayer('att2')}className="cartefut">
							<CarteFut note={tableauJoueur[11].players.rate} position={tableauJoueur[11].players.position} nom ={tableauJoueur[11].players.lastName} />
						</div>
					</div>
					))}
				</div>
			</div>
		</div>
	</div>
)}
export default FaisTaTeam;
import axios from "axios"
import React, {useContext, useEffect, useState } from "react"
import MediaQuery from "react-responsive"
import Bann from "../components/Bann"
import { AuthContext } from "../context/AuthContext"
import "./ListeJoueurs.css"
import jwt_Decode from "jwt-decode"
import { PayloadToken } from "../interfaces/tokenPayload"
import { SavedPlayers } from "../interfaces/savedPlayers"
import { IoTrashOutline } from "react-icons/io5"; 
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';




const ListeJoueurs=()=>{
  const message = "Ta liste de joueurs se trouve ici"
  const {TokenExpirationFunction,savedToken}=useContext(AuthContext)
  let [tabDisplayed, setTabDisplayed] = useState<SavedPlayers[]>();
  const [show, setShow] = useState(false);
  const [nomJoueur,setNomJoueur] = useState<string>()
  const [id, setId]=useState<string>();



    

  useEffect(()=>{
    const token = localStorage.getItem("accesstoken");
    if(token){
      const tokenDecoded : PayloadToken = jwt_Decode(token)
      console.log(tokenDecoded)
    }
   TokenExpirationFunction(savedToken)      
   axios.get(`http://localhost:8080/api/savedplayers`,{
     headers:{
       Authorization:`Bearer ${localStorage.getItem("accesstoken")}`,
      }
    })
    .then((res)=>{
     setTabDisplayed(res.data)
    }).catch((err)=>{
      console.log("something wrent wrong", err)
    } )
  },[]) 


  const deleteFunction = (e:React.MouseEvent<HTMLButtonElement>)=>{
    console.log(e.currentTarget.value)
    setId(e.currentTarget.value)
    console.log(e.currentTarget.name)
    setNomJoueur(e.currentTarget.name)
    setShow(true)
  }

  const noDelete=()=>{
    setShow(false)
  }

  const deletePlayer=()=>{
    axios.delete(`http://localhost:8080/api/savedplayers/${id}`,{
	    headers:{
		    Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
	    }
    }).then((res)=>{
       // --------------------------Nouvel appel API afin de mettre à jour le tableau--------------------
      axios.get(`http://localhost:8080/api/savedplayers/`,{
	      headers:{
		      Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
	      }
      }).then((res)=>{
        console.log("tableaua jour",res.data)
        setTabDisplayed(res.data); 
        console.log("joueur supprimé")
      }).catch((err)=>{
        console.log(err)
      })
   // ----------------------------------------------------------------------------------------------------
    }).catch((err)=>{
      console.log(err)
    })
    setShow(false) 
  }

  return(
    <div className="div-principale-liste-joueurs">
      <div className="ban">
        <Bann banValue={message}/>
      </div>

      <div className="good">
          {/* ------------------------------------------------Disposition des éléments----------------------------------------- */}
         <MediaQuery minWidth={760}>
            <div className="style-nom-attributs">
              <p className="joueur">Pré</p>
              <p className="nomjoueur">Nom</p>
              <p className="notejoueur ">Not</p>
              <p className="positionjoueur ">Post</p>
              <p className="paysjoueur ">Pay</p>
              <p className="dribblesjoueur ">Drib</p><p className="vitessejoueur ">Vit</p>
              <p className="puissancejoueur ">For</p>
              <p className="defensejoueur ">Déf</p>
              <p className="passejoueur">Pass</p>       
            </div>
         </MediaQuery>

        <MediaQuery minWidth={760}>
          {tabDisplayed?.map((player: SavedPlayers, i) =>  (      
            <div className="listPlayers" key={i}>
              <div className="style-attributs">
                <p className="joueur-attribut ">{player.players.firstName}</p>
                    <p className="nomjoueur-attribut ">{player.players.lastName}</p>
                    <p className="notejoueur-attribut ">{player.players.rate} </p>
                    <p className="positionjoueur-attribut ">{player.players.position} </p>
                    <p className="paysjoueur-attribut ">{player.players.country} </p>             
                    <p className="dribblesjoueur-attribut ">{player.players.dribbles} </p>
                    <p className="vitessejoueur-attribut ">{player.players.speed} </p>
                    <p className="puissancejoueur-attribut ">{player.players.power} </p>
                    <p className="defensejoueur-attribut ">{player.players.defence} </p>                   
                    <p  className="passejoueur-attribut  ">{player.players.pass} </p>
                    <button className="poubelle" value={player.players.id} name={player.players.lastName}   onClick={deleteFunction}><IoTrashOutline /></button>
              </div> 
            </div>          
          ))}
        </MediaQuery>

        <div className='toRow'>
          <Row >     
            <Toast className="to" onClose={() => setShow(false)} show={show} delay={3000}>
              <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt=""/>
                <strong className="me-auto ">1 message reçu</strong>
              </Toast.Header>
              <Toast.Body>
                <div className="toast-choix">
		              <p className="toastText">Supprimer {nomJoueur} ? 	</p>
                  <div className="toast-button">
                    <p onClick={deletePlayer} className="toastText-oui">oui</p>
                    <p onClick={noDelete} className="toastText-non">non</p>
                  </div> 
                </div>
              </Toast.Body>
            </Toast>
          </Row>
        </div>

        <MediaQuery maxWidth={759}>
          <div className="style-nom-attributs">
            <p className="joueur-nom-Mobile">Pré</p>
            <p className="joueurMobile ">Nom</p>
            <p className="joueur-note-Mobile ">Not</p>
            <p className="joueur-position-Mobile">Post</p>
            <p className="joueur-position-Mobile"></p>
          </div>
        </MediaQuery>
        
        <MediaQuery maxWidth={759}>
          {tabDisplayed?.map((player: SavedPlayers, i) => (
            <div className="listPlayers" key={i}>
              <div className="ListeMobile">
                <p className="joueur-nom-Mobile ">{player.players.firstName}</p>
                <p className="joueurMobile " >{player.players.lastName}</p>
                <p className="joueur-note-Mobile " >{player.players.rate} </p> 
                <p className="joueur-position-Mobile " >{player.players.position} </p>
                <p className=" " ></p>
                <button className="poubelle" value={player.players.id} name={player.players.lastName}   onClick={deleteFunction}><IoTrashOutline /></button>
              </div>
            </div>
          ))}
        </MediaQuery> 
       </div> 
 
      <div className="avant-footer"></div>
    </div>
  )
}

export default ListeJoueurs





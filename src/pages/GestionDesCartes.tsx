import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Row, Toast } from "react-bootstrap"
import { IoTrashOutline } from "react-icons/io5"
import MediaQuery from "react-responsive"
import { PayloadToken, SavedPlayers } from "../App"
import Bann from "../components/Bann"
import { AuthContext } from "../context/AuthContext"
import jwt_Decode from "jwt-decode"
import { Players } from "./RechercheDeJoueurs"
import "./GestionDesCartes.css"
import { Navigate, useNavigate } from "react-router-dom"

const GestionDesCartes = ()=>{

        const message = "Hey Admin, gère ta liste de joueurs ici"
const {TokenExpirationFunction,savedToken}=useContext(AuthContext)
   const [cartIsClicked,setCartIsClicked] =useState<boolean>(true)
    const [cardOrList,setCardOrList]= useState<string>("Cartes")
      let [tabDisplayed, setTabDisplayed] = useState<Players[]>();
      const [show, setShow] = useState(false);
      const [nomJoueur,setNomJoueur] = useState<string>()
      const [id, setId]=useState<string>();
      const [tabBis, setTabBis]= useState<Players[]>()
      const navigate = useNavigate()

      useEffect(()=>{
      
        const token = localStorage.getItem("accesstoken");
if(token){
      const tokenDecoded : PayloadToken = jwt_Decode(token)
      console.log(tokenDecoded)
}

        TokenExpirationFunction(savedToken)
        
  axios.get(`http://localhost:8080/api/players`,{
    headers:{
        Authorization:`Bearer ${localStorage.getItem("accesstoken")}`,
    
    }
  })
  .then((res)=>{
 setTabDisplayed(res.data)
 setTabBis(res.data)
  }).catch((err)=>{
    console.log("something wrent wrong", err)
  })
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
 
   axios.delete(`http://localhost:8080/api/players/${id}`,{
	headers:{
		Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
	}})
  .then((res)=>{
// --------------------------Nouvel appel API afin de mettre à jour le tableau--------------------
     axios.get(`http://localhost:8080/api/players/`,{
	headers:{
		Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
	}}).then((res)=>{
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

const addPlayer = ()=>{
  navigate("/nouveau-joueur")
}




    return(
        <div className="gestion-cartes">
  <div className="ban">
 <Bann banValue={message}/>
</div>
<div  className="ajouter-joueur">
  <button onClick = {addPlayer}>Ajouter un joueur</button>
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
          {tabDisplayed?.map((player: Players, i) => cartIsClicked&& (
         
              <div className="listPlayers" key={i}>
             
                  <div className="style-attributs">
   
                    <p className="joueur-attribut ">{player.firstName}</p>
         
                    <p className="nomjoueur-attribut ">{player.lastName}</p>
                
                    <p className="notejoueur-attribut ">{player.rate} </p>
                   
                    <p className="positionjoueur-attribut ">{player.position} </p>
                 
                   
                    <p className="paysjoueur-attribut ">{player.country} </p>
              
                         <p className="dribblesjoueur-attribut ">{player.dribbles} </p>
                    <p className="vitessejoueur-attribut ">{player.speed} </p>
                    <p className="puissancejoueur-attribut ">{player.power} </p>
                    <p className="defensejoueur-attribut ">{player.defence} </p>
                    
                    <p  className="passejoueur-attribut  ">{player.pass} </p>
                    <button className="poubelle" value={player.id} name={player.lastName}   onClick={deleteFunction}><IoTrashOutline /></button>
                    
                  
                  </div>
                  
                </div>
             
    
          
               ))}
</MediaQuery>
           <div className='toRow'>
   <Row >
      
        <Toast className="to" onClose={() => setShow(false)} show={show} delay={3000}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
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
       </div>
   
    
              </MediaQuery>

  <MediaQuery maxWidth={759}>
          {tabDisplayed?.map((player: Players, i) => cartIsClicked&& (
   
              <div className="listPlayers" key={i}>
             
                  <div className="ListeMobile">
                    <p className="joueur-nom-Mobile ">{player.firstName}</p>
                    <p className="joueurMobile " >{player.lastName}</p>
                    <p className="joueur-note-Mobile " >{player.rate} </p>
                       
                    <p className="joueur-position-Mobile " >{player.position} </p>
                   <button className="poubelle" value={player.id} name={player.lastName}   onClick={deleteFunction}><IoTrashOutline /></button>
                  </div>
                </div>
             
    
          
               ))}
</MediaQuery>
              
            </div> 
            <div className="avant-footer"></div>
        </div>
    )
}

export default GestionDesCartes



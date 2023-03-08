import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import "./ConnexionPage.css"

const ConnexionPage =()=>{

    const [idUser, setIdUser]= useState<string>()
const [username, setUsername]= useState<string>()
const [email, setEmail]= useState<string>()
const [message, setMessage]= useState<string>()
const [pseudoState, setPseudoState]= useState<string>()
const [passState, setPassState]= useState<string>()
const {UpdateToken} = useContext(AuthContext)

const navigate=useNavigate()

   const pseudoFunction=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPseudoState(e.currentTarget.value)
    }
    const passwordFunction=(e:React.ChangeEvent<HTMLInputElement>)=>{
setPassState(e.currentTarget.value)
    }
  

        const submitFunction=(e:React.FormEvent)=>{
            e.preventDefault();
    console.log("cliké");
              axios
      .post("http://localhost:8080/api/auth/login", {
        userName: pseudoState,
        password: passState,
        
      })
      .then((token) => {
        const tokens = token.data.accessToken;
        localStorage.setItem("accesstoken", tokens);
        
         console.log(token.data.accessToken);
         
           setTimeout(() => {
          ; UpdateToken(localStorage.getItem("accesstoken"));
        }, 1000);
        setMessage("Connexion réussie !"); 
      })
      .catch((error) => {
        console.log("connexion impossible", error);
         setMessage("Connexion impossible !")
      });
 
    }


    return(
        <div className="connexion">
            <div className="texte-h1">
<h1>Connecte-toi </h1>
<h1>ou inscris-toi en haut à droite</h1>
<h1>pour commencer l'aventure FUT STARZ !</h1>
</div>

        </div>
    )
}

export default ConnexionPage;
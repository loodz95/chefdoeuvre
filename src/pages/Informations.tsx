import axios from "axios"
import jwtDecode from "jwt-decode"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { tokenToString } from "typescript"
import { PayloadToken } from "../App"
import { AuthContext } from "../context/AuthContext"
import "./Informations.css"



const Informations=()=>{
const {savedToken,TokenExpirationFunction, UpdateToken}=useContext(AuthContext)
const [idUser, setIdUser]= useState<string>()
const [username, setUsername]= useState<string>()
const [email, setEmail]= useState<string>()
const [message, setMessage]= useState<string>()
const [emailState, setEmailState]= useState<string>()
const [pass1State, setPass1State]= useState<string>()
const [pass2State, setPass2State]= useState<string>()
const navigate=useNavigate()


    useEffect(()=>{
TokenExpirationFunction(savedToken)
UpdateToken(savedToken)

if(savedToken){
    const token : PayloadToken =  jwtDecode(savedToken)
    console.log(token)
setIdUser(token.id)
setUsername(token.userName)
setEmail(token.email)
console.log(idUser)
console.log("email",email)
console.log("le username",username)
}  
    })

    const emailFunction=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmailState(e.currentTarget.value)
    }
    const password1Function=(e:React.ChangeEvent<HTMLInputElement>)=>{
setPass1State(e.currentTarget.value)
    }
    const password2Function=(e:React.ChangeEvent<HTMLInputElement>)=>{
setPass2State(e.currentTarget.value)
    }


    const submitFunction=(e:React.FormEvent)=>{
            e.preventDefault();
    console.log("cliké");
    
    // fonction de verification du mot de passe
    if (pass1State !== pass2State) {
      setMessage("Les mots de passe ne correspondent pas !");
    }else{
       axios.patch(`http://localhost:8080/api/auth/${idUser}`,
       {
email: emailState,
password:pass1State
       },
       {
    headers:{
        Authorization:`Bearer ${localStorage.getItem("accesstoken")}`,
    
    }
  })
  .then((res)=>{
setMessage("Modifications réussies");
     setTimeout(() => {
            navigate("/");
          }, 1000);

  }).catch((err)=>{
    console.log("something wrent wrong", err)
  })
} 
    }



    return(
        <div >
<form className="formulaire">
      <div className="mb-3">
        <h1>Modifier mes informations</h1>
    <label htmlFor="exampleInputEmail1" className="form-label">Pseudo</label>
    <input type="text" value= {username} className="form-control" disabled={true}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input placeholder={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={emailFunction}/>
    <div id="emailHelp" className="form-text">Nous ne communiquerons jamais ton adresse mail</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Nouveau mot de passe</label>
    <input type="password" className="form-control" onChange={password1Function} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirme ton nouveau mot de passe</label>
    <input type="password" className="form-control" onChange={password2Function} />
  </div>
<p className ={message === "Modifications réussies"? "modif-ok":"pass-error"}>{message}</p>
  <button onClick={submitFunction} type="submit" className="btn btn-dark button-position">Valider</button>
  
</form>
        </div>
    )
}

export default Informations


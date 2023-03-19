import React, { ReactComponentElement, ReactElement, useContext, useRef, useState } from "react"
import "./ConnexionButton.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { AuthContext } from "../context/AuthContext";


const ConnexionButton =()=>{
  const navigate = useNavigate()
 const [show, setShow] = useState(false);  //state pour ouverture modal connexion//
 const [showSuscribe, setShowSuscribe] = useState(false); //state pour ouverture modal inscription//
 const [message,setMessage] =useState<string>()
 const [pseudoState, setPseudoState]=useState<string>()
 const [passState, setPassState]=useState<string>()
 const [passVerifState, setPassVerifState]=useState<string>()
 const [MailState, setMailState]=useState<string>()
 const {UpdateToken, savedToken} = useContext(AuthContext)
 const passwordRef = useRef<HTMLInputElement>(null)
 const pseudoRef = useRef<HTMLInputElement>(null)
 

  const handleClose = () =>{    //Fonction fermeture modal connexion au click//
    setShow(false)                          
  };

  const handleShow = () => {
    setMessage("")
  setShow(true); //Fonction ouverture modal connexion au click//
  };

    const handleCloseSuscribe=()=> {    //Fonction fermeture modal inscription au click//
      setShowSuscribe(false)
    };

  const notSign=()=>{   //Fonction pour ouvrir page d'inscription avec le lien pas encore inscrit//
   setShow(false)
   setShowSuscribe(true)
  }
  const alreadySign=()=>{      //Fonction pour ouvrir page de connexion avec le lien déjà inscrit//
     setMessage("")
    setShowSuscribe(false)
   setShow(true)
  }

  const handleLoginForm=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(pseudoRef.current?.value)
    console.log("token dans connection",savedToken)
    axios.post("http://localhost:8080/api/auth/login", {
      userName: pseudoRef.current?.value,
      password: passwordRef.current?.value,   
    })
    .then((token) => {
      const tokens = token.data.accessToken;
      localStorage.setItem("accesstoken", tokens);        
      console.log(token.data.accessToken);
      setTimeout(() => {
        handleClose(); UpdateToken(localStorage.getItem("accesstoken"));
      }, 1000);
      setMessage("Connexion réussie !"); 
    })
    .catch((error) => {
      console.log("connexion impossible", error);
      setMessage(error.response.data.message)
    });
  }

  const handlePseudo =(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log("changePseudo",e.currentTarget.value)
    setPseudoState(e.currentTarget.value)
  }
  const handleMail =(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log("changeMail",e.currentTarget.value)
    setMailState(e.currentTarget.value)
  }
  const handlePass =(e:React.ChangeEvent<HTMLInputElement>)=>{
 console.log("changePass",e.currentTarget.value)
  setPassState(e.currentTarget.value)
  }
  const handleVerifPass =(e:React.ChangeEvent<HTMLInputElement>)=>{
 console.log("changePass",e.currentTarget.value)
  setPassVerifState(e.currentTarget.value)
  }


    const suscribeFunction=  (e: React.MouseEvent)=>{
        if (passState !== passVerifState){
        setMessage("Les mots de passe ne correspondent pas !")
       }else{

         axios
      .post("http://localhost:8080/api/auth/signin", {
        userName: pseudoState,
        email: MailState,
        password: passState,
        
      })
      .then((res) => {
           setTimeout(() => {
          handleCloseSuscribe();
        }, 1000);
        setMessage("Inscription réussie !");
      })
      .catch((err) => {
        
        console.log("console log du err.data", err.response.data.message);
         setMessage(err.response.data.message)
      });
}
  }

    return(
        <div>
            <button className = "connexionButton" onClick={handleShow}  >connexion</button>
            <Modal show={show} onHide={handleClose} >
      <Modal.Header className="colorTitle"  closeButton>
        <Modal.Title className="colorTitle" >Connexion</Modal.Title>
      </Modal.Header>
      <Modal.Body className="colorBody">
      
  <form className="place-input" onSubmit={handleLoginForm}>
    <div className="form-group column font-modal">
      <label htmlFor="pseudo" className="col-sm-2 col-form-label ">Pseudo</label>
      <div className="col-sm-10">
        <input type="string"   className="pseudo" id="pseudo" ref={pseudoRef} />
      </div>
    </div>
    <div className="form-group column font-modal">
      <label htmlFor="inputPassword" className=" col-form-label">Mot de passe</label>
      <div className="col-sm-10">
        <input type="password" className=" motdepasse" id="inputPassword" ref={passwordRef}  />
      </div>
    </div>
    <div className="valider-connexion">
      <button className="buttonForm"> Go !</button> 
    </div>
    <p className="valid-message">{message}</p>
  </form>
      </Modal.Body>
      <Modal.Footer className="colorFooter">
        <button onClick={notSign} className="phraseModal">Pas encore inscrit ? C'est par ici !</button>
      </Modal.Footer>
    </Modal>

               <Modal show={showSuscribe} onHide={handleCloseSuscribe} >
      <Modal.Header className="colorTitle"  closeButton>
        <Modal.Title className="colorTitle" >Inscription</Modal.Title>
      </Modal.Header>
      <Modal.Body className="colorBody">
      
        <form className="place-input" onSubmit={handleLoginForm}>
  <div className="form-group column font-modal">
    <label htmlFor="email" className="l col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onChange={handleMail} type="mail"   className="pseudo" id="email"/>
    </div>
  </div>
  <div className="form-group column font-modal">
    <label htmlFor="pseudo" className="col-sm-2 col-form-label ">Pseudo</label>
    <div className="col-sm-10">
      <input onChange={handlePseudo} type="text"    className="pseudo" id="pseudo"/>
    </div>
  </div>
  <div className="form-group column font-modal">
    <label htmlFor="motdepasse" className="col-form-label ">Mot de passe</label>
    <div className="col-sm-10">
      <input type="password" onChange={handlePass}  className="pseudo" id="motdepasse "/>
    </div>
  </div>
  <div className="form-group column font-modal">
    <label htmlFor="inputPassword" className=" col-form-label ">Confirme ton mot de passe</label>
    <div className="col-sm-10">
      <input onChange={handleVerifPass} type="password" className=" motdepasse" id="inputPassword" />
    </div>
  </div>
     <Button onClick={suscribeFunction} variant="dark" className="buttonFormSuscribe">
          Go !
        </Button>
        <p className="valid-message">
        {message}
         </p>
</form>
      </Modal.Body>
      <Modal.Footer className="colorFooter">
        <button onClick={alreadySign} className="phraseModalSuscribe">Déjà inscrit ? Connecte-toi !</button>
      </Modal.Footer>
    </Modal>
           
        </div>
    )
}
export default ConnexionButton;
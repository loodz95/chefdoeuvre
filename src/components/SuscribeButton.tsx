import "./SuscribeButton.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from "react"
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const SuscribeButton =()=>{

     const [show, setShow] = useState(false);  //state pour ouverture modal connexion//
 const [showSuscribe, setShowSuscribe] = useState(false); //state pour ouverture modal inscription//
  const [pseudoState, setPseudoState]=useState<string>()
  const [emailState, setEmailState]=useState<string>()
 const [passState, setPassState]=useState<string>()
 const [passVerifState, setPassVerifState]=useState<string>()
 const [message, setMessage]=useState<string>()
 const navigate=useNavigate()

  const handleClose = () =>{    //Fonction fermeture modal connexion au click//
    setShow(false)                          
  };

 
    const handleCloseSuscribe=()=> {    //Fonction fermeture modal inscription au click//
      setShowSuscribe(false)
    };
    const handleShowSuscribe=()=> {    //Fonction ouverture modal inscription au click//
      setMessage("")
      setShowSuscribe(true)
    };

  const notSign=()=>{   //Fonction pour ouvrir page d'inscription avec le lien pas encore inscrit//
   setShow(false)
   setShowSuscribe(true)
  }
  const alreadySign=()=>{      //Fonction pour ouvrir page de connexion avec le lien déjà inscrit//
    setShowSuscribe(false)
   setShow(true)
  }



  const handleMail =(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log("Mail",e.currentTarget.value)
    setEmailState(e.currentTarget.value)
  }
  const handlePseudo =(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log("Pseudo",e.currentTarget.value)
    setPseudoState(e.currentTarget.value)
  }
  const handlePassword =(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log("password",e.currentTarget.value)
    setPassState(e.currentTarget.value)
  }
  const handlePassword2 =(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log("password 2",e.currentTarget.value)
    setPassVerifState(e.currentTarget.value)
  }

   const suscribeFunction=(e: React.MouseEvent)=>{

if(passState === passVerifState){
         axios
      .post("http://localhost:8080/api/auth/signin", {
        userName: pseudoState,
        email: emailState,
        password: passState,  
      })
      .then((res) => {
       
           setTimeout(() => {
          handleCloseSuscribe();
        }, 1000);
        setMessage("Inscription réussie !");
      })
      .catch((err) => {
        console.log("Inscription impossible", err);
         setMessage("Inscription impossible !")
      });
    }else {
      setMessage("Les mots de passe ne correspondent pas")
    }
  }

    const connectFunction2=(e: React.MouseEvent)=>{

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
        handleClose();
        }, 1000);
        setMessage("Connexion réussie !");
      })
      .catch((error) => {
        console.log("connexion impossible", error);
         setMessage("Connexion impossible !")
      });
  }



    return(
        <div className="suscribe-component">
            <button className="suscribeButton" onClick={handleShowSuscribe}> inscription</button>
             <Modal  show={show} onHide={handleClose} >
      <Modal.Header className="colorTitle"  closeButton>
        <Modal.Title className="colorTitle suscribe-component" >Connexion</Modal.Title>
      </Modal.Header>
      <Modal.Body className="colorBody">
  <div className="form-group column font-modal">
    <label htmlFor="email" className="col-sm-2 col-form-label suscribe-component">Pseudo</label>
    <div className="col-sm-10">
      <input onChange={handlePseudo} type="mail"   className="pseudo" id="email"/>
    </div>
  </div>
  <div className="form-group column">
    <label htmlFor="inputPassword" className=" col-form-label suscribe-component">Mot de passe</label>
    <div className="col-sm-10">
      <input onChange={handlePassword} type="password" className=" motdepasse" id="inputPassword" />
    </div>
  </div>
     <Button onClick={connectFunction2} variant="dark" className="buttonForm suscribe-component" >
          Go !
        </Button>
<p className= {message === "Connexion réussie !"?"suscribe-component valid-message": "suscribe-component no-valid-message"}>{message}</p>
      </Modal.Body>
      <Modal.Footer className="colorFooter">
        <button onClick={notSign} className="phraseModal suscribe-component">Pas encore inscrit ? C'est par ici !</button>
      </Modal.Footer>
    </Modal>

               <Modal show={showSuscribe} onHide={handleCloseSuscribe} >
      <Modal.Header className="colorTitle"  closeButton>
        <Modal.Title className="colorTitle suscribe-component" >Inscription</Modal.Title>
      </Modal.Header>
      <Modal.Body className="colorBody">
      
  <div className="form-group column">
    <label htmlFor="email" className="col-sm-2 col-form-label suscribe-component">Email</label>
    <div className="col-sm-10">
      <input onChange={handleMail} type="email"   className="pseudo" id="email"/>
    </div>
  </div>
  <div className="form-group column">
    <label htmlFor="pseudo" className="col-sm-2 col-form-label suscribe-component">Pseudo</label>
    <div className="col-sm-10">
      <input onChange={handlePseudo} type="text"   className="pseudo" id="pseudo"/>
    </div>
  </div>
  <div className="form-group column">
    <label htmlFor="motdepasse" className="col-form-label suscribe-component">Mot de passe</label>
    <div className="col-sm-10">
      <input onChange={handlePassword} type="password"    className="pseudo" id="motdepasse "/>
    </div>
  </div>
  <div className="form-group column">
    <label htmlFor="inputPassword" className=" col-form-label suscribe-component">Confirme ton mot de passe</label>
    <div className="col-sm-10">
      <input onChange={handlePassword2} type="password" className=" motdepasse" id="inputPassword" />
    </div>
  </div>
     <Button onClick={suscribeFunction}  variant="dark" className="buttonForm suscribe-component" >
          Go !
        </Button>
        <p className={message === "Inscription réussie !"?"suscribe-component valid-message": "suscribe-component no-valid-message"}>{message}</p>

      </Modal.Body>
      <Modal.Footer className="colorFooter">
        <button onClick={alreadySign} className="phraseModal suscribe-component">Déjà inscrit ? Connecte-toi !</button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}
export default SuscribeButton;
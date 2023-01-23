import "./SuscribeButton.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from "react"

const SuscribeButton =()=>{

     const [show, setShow] = useState(false);  //state pour ouverture modal connexion//
 const [showSuscribe, setShowSuscribe] = useState(false); //state pour ouverture modal inscription//

  const handleClose = () =>{    //Fonction fermeture modal connexion au click//
    setShow(false)                          
  };

  const handleShow = () => {
  setShow(true); //Fonction ouverture modal connexion au click//
  };

    const handleCloseSuscribe=()=> {    //Fonction fermeture modal inscription au click//
      setShowSuscribe(false)
    };
    const handleShowSuscribe=()=> {    //Fonction ouverture modal inscription au click//
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

    const handleLoginForm=()=>{
alert('ok')
  }

    return(
        <div>
            <button className="suscribeButton" onClick={handleShowSuscribe}> inscription</button>
             <Modal show={show} onHide={handleClose} >
      <Modal.Header className="colorTitle"  closeButton>
        <Modal.Title className="colorTitle" >Connexion</Modal.Title>
      </Modal.Header>
      <Modal.Body className="colorBody">
      
        <form onSubmit={handleLoginForm}>
  <div className="form-group column">
    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="mail"   className="pseudo" id="email"/>
    </div>
  </div>
  <div className="form-group column">
    <label htmlFor="inputPassword" className=" col-form-label">Mot de passe</label>
    <div className="col-sm-10">
      <input type="password" className=" motdepasse" id="inputPassword" />
    </div>
  </div>
     <Button variant="dark" className="buttonForm" >
          Go !
        </Button>
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
      
        <form onSubmit={handleLoginForm}>
  <div className="form-group column">
    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="mail"   className="pseudo" id="email"/>
    </div>
  </div>
  <div className="form-group column">
    <label htmlFor="pseudo" className="col-sm-2 col-form-label">Pseudo</label>
    <div className="col-sm-10">
      <input type="text"   className="pseudo" id="pseudo"/>
    </div>
  </div>
  <div className="form-group column">
    <label htmlFor="motdepasse" className="col-form-label">Mot de passe</label>
    <div className="col-sm-10">
      <input type="password"   className="pseudo" id="motdepasse "/>
    </div>
  </div>
  <div className="form-group column">
    <label htmlFor="inputPassword" className=" col-form-label">Confirme ton mot de passe</label>
    <div className="col-sm-10">
      <input type="password" className=" motdepasse" id="inputPassword" />
    </div>
  </div>
     <Button variant="dark" className="buttonForm" >
          Go !
        </Button>
</form>
      </Modal.Body>
      <Modal.Footer className="colorFooter">
        <button onClick={alreadySign} className="phraseModal">Déjà inscrit ? Connecte-toi !</button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}
export default SuscribeButton;
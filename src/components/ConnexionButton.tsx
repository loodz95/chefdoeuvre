import { ReactComponentElement, ReactElement, useState } from "react"
import "./ConnexionButton.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ConnexionButton =()=>{
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const handleLoginForm=()=>{

  }



    return(
        <div>
            <button className = "connexionButton" onClick={handleShow}  >connexion</button>
            <Modal show={show} onHide={handleClose} >
      <Modal.Header className="colorTitle"  closeButton>
        <Modal.Title className="colorTitle" >Connexion</Modal.Title>
      </Modal.Header>
      <Modal.Body className="colorBody">
      
        <form>
  <div className="form-group row">
    <label htmlFor="pseudo" className="col-sm-2 col-form-label">Pseudo</label>
    <div className="col-sm-10">
      <input type="text"  className="form-control" id="pseudo"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Mot de passe</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" />
    </div>
  </div>
     <Button variant="dark" className="buttonForm" onClick={handleLoginForm}>
          Go !
        </Button>
</form>
      </Modal.Body>
      <Modal.Footer className="colorFooter">
        <p className="phraseModal">Pas encore inscrit ? C'est par ici !</p>
      </Modal.Footer>
    </Modal>
           
        </div>
    )
}
export default ConnexionButton;
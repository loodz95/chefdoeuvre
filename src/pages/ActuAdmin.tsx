import React, { ReducerAction, useContext, useEffect, useState } from "react";
import Bann from "../components/Bann";
import "./ActusFifa.css"
import axios from 'axios';
import { Card, Row, Toast } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import MediaQuery from "react-responsive";
import { IoTrashOutline } from "react-icons/io5";
import "./ActuAdmin.css"




export interface Item{
  id:number
    title: string;
    contain: string;
    date : string
}

const ActuAdmin =()=>{
const {savedToken,UpdateToken, TokenExpirationFunction, tokenExpired} = useContext(AuthContext)
    const message= "";
    const [itemTab, setItemTab] = useState<Item[]>();
    const [isReadMore, setIsReadMore] =useState<boolean>(false)
    const [idItem, setIdItem]=useState<number>()
 const navigate = useNavigate()
 const [show, setShow] = useState(false);


   

      useEffect(()=>{
        TokenExpirationFunction(savedToken)
        console.log("token expiration", tokenExpired)
console.log("Mon token",savedToken)

  axios.get(`http://localhost:8080/api/items`)
  .then((res)=>{
    console.log("la réponse",res.data)
    setItemTab(res.data)
    console.log("item tab use effect", itemTab)
  }).catch((err)=>{
    console.log("something wrent wrong", err)
  })
},[])  

const deleteFunction=(e:React.MouseEvent<HTMLButtonElement>)=>{
    let number = Number(e.currentTarget.value);
setIdItem(number)
    setShow(true)
    
//     console.log("l'id de litem concerné",idItem)

}

const deleteItem=()=>{
    axios.delete(`http://localhost:8080/api/items/${idItem}`)
  .then((res)=>{
   console.log("item supp")
    axios.get(`http://localhost:8080/api/items`)
  .then((res)=>{
    console.log("la réponse",res.data)
    setItemTab(res.data)
    console.log("item tab use effect", itemTab)
  }).catch((err)=>{
    console.log("something wrent wrong", err)
  })

   setShow(false)
  }).catch((err)=>{
    console.log("something wrent wrong", err)
  })  
}
    
const noDelete=()=>{
  setShow(false)
}

const addItem = ()=>{
    navigate("/nouvel-article")

}

    return(
        <div className="actufifa">
   <Bann banValue={message}/>
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
		<p className="toastText">Supprimer cet article ? 	</p>
    <div className="toast-button">
   <p onClick={deleteItem} className="toastText-oui">oui</p>
   <p onClick={noDelete} className="toastText-non">non</p>
   </div> 
   </div>
   </Toast.Body>
        </Toast>
      
    
    </Row>
</div>
 <button className="add-item" onClick = {addItem}>Ajouter un article</button>
   <div className="items">
    
   {itemTab?.map((item, index)=>(
    
       <Card  text="white" style={{ width: "18rem" }} key={index}>
        <div className="card">
        <Card.Header >{item.title} <button className="supp-item" value={item.id}  onClick={deleteFunction}><IoTrashOutline /></button></Card.Header>
        </div>
        <div className="cardbody">
        <Card.Body >
          <Card.Text>

     <MediaQuery minWidth={1225}>      
                   <div>
{item.contain?.substring(0,200)}

<p  > ...  </p>
        </div>  
        </MediaQuery> 

     <MediaQuery maxWidth={1224.9}>      
                   <div>
{item.contain?.substring(0,100)}

<p  > ...  </p>

        </div>  
        </MediaQuery> 


          </Card.Text>
        </Card.Body>
        </div>
      </Card>
      
   ))}
   </div>

        </div>
    )
}
export default ActuAdmin;
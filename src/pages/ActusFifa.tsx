import React, { ReducerAction, useContext, useEffect, useState } from "react";
import Bann from "../components/Bann";
import "./ActusFifa.css"
import axios from 'axios';
import { Card } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

export interface Item{
    title: string;
    contain: string;
    date : string
}

const ActusFifa =()=>{
const {savedToken,UpdateToken, TokenExpirationFunction, tokenExpired} = useContext(AuthContext)
    const message= "";
    const [itemTab, setItemTab] = useState<Item[]>();
 

      useEffect(()=>{
        TokenExpirationFunction(savedToken)
        console.log("token expiration", tokenExpired)
console.log("Mon token",savedToken)

  axios.get(`http://localhost:8080/api/items`)
  .then((res)=>{
    console.log("la réponse",res.data)
    setItemTab(res.data)
  }).catch((err)=>{
    console.log("something wrent wrong", err)
  })
},[])  
    
    return(
        <div className="actufifa">
   <Bann banValue={message}/>
   <div className="items">
   {itemTab?.map((item, index)=>(
       <Card  text="white" style={{ width: "18rem" }} key={index}>
        <div className="card">
        <Card.Header >{item.title}</Card.Header>
        </div>
        <div className="cardbody">
        <Card.Body >
          <Card.Text>
      {item.contain}
          </Card.Text>
        </Card.Body>
        </div>
      </Card>
   ))}
   </div>
        </div>
    )
}
export default ActusFifa;
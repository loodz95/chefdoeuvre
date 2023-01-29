import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Item } from "./ActusFifa";
import "./ActuSelection.css"

const ActuSelection =()=>{
const {TokenExpirationFunction, tokenExpired, UpdateToken,savedToken} = useContext(AuthContext)
const [Itemtab, setItemTab] =useState<Item>()
const {id} = useParams()

   useEffect(()=>{ 
        TokenExpirationFunction(savedToken)
        console.log("token expiration", tokenExpired)
console.log("Mon token",savedToken)

  axios.get(`http://localhost:8080/api/items/${id}`)
  .then((res)=>{
    console.log("la réponse",res.data)
    setItemTab(res.data)
    console.log(Itemtab)
  }).catch((err)=>{
    console.log("something wrent wrong", err)
  })
},[]) 

    return(
        <div className="actu">
            {Itemtab?.title} <hr />
            <div className="contain">
{Itemtab?.contain}
</div>
        </div>
    )
}

export default ActuSelection;
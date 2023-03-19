import  { useContext, useEffect, useState } from "react";
import Bann from "../components/Bann";
import "./ActusFifa.css"
import axios from 'axios';
import { Card } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { Link} from "react-router-dom";
import MediaQuery from "react-responsive";




export interface Item{
  id:number
  title: string;
  contain: string;
  date : string
}

const ActusFifa =()=>{
  const {savedToken,TokenExpirationFunction, tokenExpired} = useContext(AuthContext)
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
        console.log("item tab use effect", itemTab)
      }).catch((err)=>{
        console.log("something wrent wrong", err)
      })
    },[])  
    
  return (
    <div className="actufifa">
      <Bann banValue={message} />
      <div className="items">
        {itemTab?.map((item, index) => (
          <Card text="white" style={{ width: "18rem" }} key={index}>
            <div className="card">
              <Card.Header>{item.title}</Card.Header>
            </div>
            <div className="cardbody">
              <Card.Body>
                <Card.Text>
                  <MediaQuery minWidth={1225}>               
                      {item.contain?.substring(0, 200)}
                      <Link to={`/items/${item.id}`}>
                        <button className="readmore"> ... Lire plus </button>
                      </Link>                    
                  </MediaQuery>
                  <MediaQuery maxWidth={1224.9}>                  
                      {item.contain?.substring(0, 100)}
                      <Link to={`/items/${item.id}`}>
                        <button className="readmore"> ... Lire plus </button>
                      </Link>
                  </MediaQuery>
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default ActusFifa;
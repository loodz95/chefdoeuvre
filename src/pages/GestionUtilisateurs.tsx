import axios from "axios"
import { useEffect } from "react"

const GestionUtilisateurs=()=>{

    useEffect(()=>{
         axios.get(`http://localhost:8080/api/users`,{
            	headers:{
		Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
	}
         })
  .then((res)=>{
  console.log(res.data)
 
   
  }).catch((err)=>{
    console.log("something wrent wrong", err)
  })
},[]) 
 



    return(
        <div>

        </div>
    )
}

export default GestionUtilisateurs;
import axios from "axios"
import React, { useEffect, useState } from "react"
import { User } from "../App"
import "./GestionUtilisateurs.css"
import { IoTrashOutline } from "react-icons/io5"
import { IoPencilSharp} from "react-icons/io5"

const GestionUtilisateurs=()=>{

  const [tabUsers, setTabUsers] = useState<User[]>([])
const[idUser, setIdUser]=useState<string>();
const[roleState,setRoleState]=useState<string>()
const[roleChanged, setRoleChanged]= useState<string>()


    useEffect(()=>{
         axios.get(`http://localhost:8080/api/users`,{
            	headers:{
		Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
	}
         })
  .then((res)=>{
  console.log(res.data)
  setTabUsers(res.data);
  console.log("Le tableau d'utilisateurs",tabUsers)
 
   
  }).catch((err)=>{
    console.log("something wrent wrong", err)
  })
},[]) 
 
const changeRole=(e:React.MouseEvent<HTMLButtonElement>)=>{
  let roleChanged;
  setRoleState(e.currentTarget.name)
  console.log(e.currentTarget.name)
  setIdUser(e.currentTarget.value)
 
  if(e.currentTarget.name==="admin"){
   roleChanged = "user"
  }else if (e.currentTarget.name ==="user"){
    roleChanged="admin"
  }

console.log("le role a envoyer",roleChanged)
   axios.patch(`http://localhost:8080/api/users/${e.currentTarget.value}`,
 {
	role: roleChanged

},
{
	headers:{
		Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
	}})
	.then((res)=>{  
    console.log("role updaté")
            axios.get(`http://localhost:8080/api/users`,{
            	headers:{
		Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
	}
         })
  .then((res)=>{
  console.log(res.data)
  setTabUsers(res.data);
  console.log("Le tableau d'utilisateurs",tabUsers)
 
   
  }).catch((err)=>{
    console.log("something wrent wrong", err)
  })
         
  }).catch((err)=>{
	
    console.log("something wrent wrong", err)
	console.log(err.response.data.statusCode)

  })
}


const deleteUser=(e:React.MouseEvent<HTMLButtonElement>)=>{
  let id = e.currentTarget.value
     axios.delete(`http://localhost:8080/api/users/${id}`,{
	headers:{
		Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
	}}).then((res)=>{
// --------------------------Nouvel appel API afin de mettre à jour le tableau--------------------
     axios.get(`http://localhost:8080/api/users/`,{
	headers:{
		Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
	}}).then((res)=>{
console.log("tableaua jour",res.data)
    setTabUsers(res.data);
  
console.log("joueur supprimé")


  }).catch((err)=>{
console.log(err)
  })
// ----------------------------------------------------------------------------------------------------

  }).catch((err)=>{
console.log(err)
  })
}

    return(
        <div className="gestion-utilisateurs">
          <div className="entete">
            <p className="pseudo-titre-entete">Pseudo</p>
            <p className="email-titre-entete">Email</p>
            <p className="role-titre-entete">Rôle</p>
          </div>
{tabUsers?.map((user)=>(
 <div className="infos" >

            <p className="pseudo-titre"><button className="poubelle-user" value ={user.id} onClick={deleteUser}><IoTrashOutline/></button>{user.userName}</p>
            <p className="email-titre">{user.email}</p>        
            <p className="role-titre">{user.role}  <button value={user.id} name={user.role} onClick={changeRole} className="change-role"> <IoPencilSharp/></button>         </p>
           
                  
       </div>
))}

        </div>
    )
}

export default GestionUtilisateurs;
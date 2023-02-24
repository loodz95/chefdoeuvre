import axios from "axios"
import React, { useState } from "react"
import "./NouvelArticle.css"

const NouvelArticle=()=>{
    const [message,setMessage]=useState<string>()
    const [titleState,setTitleState]=useState<string>()
    const [containState,setContainState]=useState<string>()
   
const submitFunction=(e:React.FormEvent)=>{
      e.preventDefault()
          axios
      .post("http://localhost:8080/api/items", {
         title: titleState,
         contain: containState 
      },
       {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
          },
        }
      )
      .then((res) => {
       console.log("inscription réussie")
       setMessage("Article ajouté")
      })
      .catch((err) => {
        console.log("Inscription impossible", err);
        
      });
}
const titleFunction=(e:React.ChangeEvent<HTMLInputElement>)=>{
console.log(e.currentTarget.value)
setTitleState(e.currentTarget.value)
}
const containFunction=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
console.log(e.currentTarget.value)
setContainState(e.currentTarget.value)
}

    return(
        <div>
<form onSubmit = {submitFunction}>
  <div >
    <div >
      <input onChange={titleFunction} type="text" className="form-control article-titre" placeholder="Titre"/>
    </div>
    <div className="contenu">
        <label htmlFor="contenu"></label>
     <textarea onChange={containFunction} className="area"  name="contenu" id="contenu" ></textarea>
    </div>
      <div >
      <p className="message-ajout">{message}</p>
        <button className="valider-article">Valider</button>
    </div>
  </div>
 
</form>
        </div>
    )
}

export default NouvelArticle;
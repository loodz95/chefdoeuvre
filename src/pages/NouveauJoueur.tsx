import axios from "axios"
import React, { useState } from "react"
import "./NouveauJoueur.css"

const NouveauJoueur =()=>{;
const [nameState, setNameState]=useState<string>()
const [firstNameState, setFirstNameState]=useState<string>()
const [ageState, setAgeState]=useState<number>()
const [countryState, setCountryState]=useState<string>()
const [positionState, setPositionState]=useState<string>()
const [rateState, setRateState]=useState<number>()
const [passState, setPassState]=useState<number>()
const [speedState, setSpeedState]=useState<number>()
const [shotstate, setShotsState]=useState<number>()
const [dribblesState, setDribblesState]=useState<number>()
const [defenceState, setDefenceState]=useState<number>()
const [powerState, setPowerState]=useState<number>()
const [typeState, setTypeState]=useState<number>()
const [message, setMessage] = useState<string>("")

let start = 100
let tab= []

for(let i =99 ; i>0;i--){
start -=1
tab.push(start)
console.log(tab)
}

const nameFunction=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setNameState(e.currentTarget.value)
    console.log(nameState)
}
const firstNameFunction=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setFirstNameState(e.currentTarget.value)
      console.log(firstNameState)
}
const ageFunction=(e:React.ChangeEvent<HTMLInputElement>)=>{
    let number = Number(e.currentTarget.value)
    setAgeState(number)
}
const countryFunction=(e:React.ChangeEvent<HTMLInputElement>)=>{
   
    setCountryState(e.currentTarget.value)
      console.log(countryState)
}
const positionFunction=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    setPositionState(e.currentTarget.value)
}
const rateFunction=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    let number = Number(e.currentTarget.value)
    setRateState(number)
}
const passFunction=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    let number = Number(e.currentTarget.value)
    setPassState(number)
}
const speedFunction=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    let number = Number(e.currentTarget.value)
    setSpeedState(number)
}
const shotsFunction=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    let number = Number(e.currentTarget.value)
    setShotsState(number)
}
const dribblesFunction=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    let number = Number(e.currentTarget.value)
    setDribblesState(number)
}
const defenceFunction=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    let number = Number(e.currentTarget.value)
    setDefenceState(number)
}
const powerFunction=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    let number = Number(e.currentTarget.value)
    setPowerState(number)
}
const typeFunction=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    let number = Number(e.currentTarget.value)
    setTypeState(number)
}

const submitFunction =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
          axios
      .post("http://localhost:8080/api/players", {
        firstName: firstNameState,
        lastName: nameState,
        age: ageState,
        country: countryState,
        position: positionState,
        rate: rateState,
        speed: speedState,
        shots: shotstate,
        pass:passState,
        defence: defenceState,
        dribbles:dribblesState,
        power:powerState,
        typeplayer: typeState      
      },
       {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
          },
        }
      )
      .then((res) => {
       console.log("inscription réussie")
       setMessage("Joueur ajouté")
      })
      .catch((err) => {
        console.log("Inscription impossible", err);
        
      });
 
  }
    



    return(
        <div className="nouveau-joueur">
<form onSubmit = {submitFunction}>
  <div className="row">
    <div className="col">
      <input onChange={nameFunction} type="text" className="form-control" placeholder="Nom"/>
    </div>
    <div className="col">
      <input onChange={firstNameFunction} type="text" className="form-control" placeholder="Prénom"/>
    </div>
    <div className="col">
      <input onChange={ageFunction} type="text" className="form-control" placeholder="Age"/>
    </div>
  </div>
  <div className="row">
       <div className="col">
      <input onChange={countryFunction} type="text" className="form-control" placeholder="Pays (en 3 lettres)"/>
    
    </div>
    <div className="col">
      <select onChange={positionFunction} name="position" id="position" className="form-control">
            <option value="">Position</option>
    <option value="G">G</option>
    <option value="Dc">Dc</option>
    <option value="Dd">Dd</option>
    <option value="Dg">Dg</option>
    <option value="Mdc">Mdc</option>
    <option value="Ag">Ag</option>
    <option value="Ad">Ad</option>
    <option value="Moc">Moc</option>
    <option value="Mc">Mc</option>
    <option value="Bu">Bu</option>
      </select>
    </div>
    <div className="col">
           <select onChange={rateFunction} name="note" id="note" className="form-control">
            <option value="">Note</option>
            {tab.map((note, i)=>(
    <option key={i} value={note}>{note}</option>
            ))}


      </select>
    </div>
  </div>
  <div className="row">
    <div className="col">
                <select onChange={passFunction} name="passes" id="passes" className="form-control">
            <option value="">Passes</option>
            {tab.map((passes, i)=>(
    <option key={i} value={passes}>{passes}</option>
            ))}
      </select>
    </div>
       <div className="col">
                <select onChange={speedFunction} name="vitesse" id="vitesse" className="form-control">
            <option value="">Vitesse</option>
            {tab.map((vitesse, i)=>(
    <option key={i} value={vitesse}>{vitesse}</option>
            ))}
      </select>
    </div>
       <div className="col">
                <select onChange={shotsFunction} name="tirs" id="tirs" className="form-control">
            <option value="">Tirs</option>
            {tab.map((tirs, i)=>(
    <option key={i} value={tirs}>{tirs}</option>
            ))}
      </select>
    </div>
  </div>
  <div className="row">
    <div className="col">
                <select onChange={dribblesFunction} name="dribbles" id="dribbles" className="form-control">
            <option value="">Dribbles</option>
            {tab.map((dribbles, i)=>(
    <option key={i} value={dribbles}>{dribbles}</option>
            ))}
      </select>
    </div>
       <div className="col">
                <select onChange={defenceFunction} name="défense" id="défense" className="form-control">
            <option value="">Défense</option>
            {tab.map((défense, i)=>(
    <option key={i} value={défense}>{défense}</option>
            ))}
      </select>
    </div>
       <div className="col">
                <select onChange={powerFunction} name="physique" id="physique" className="form-control">
            <option value="">Physique</option>
            {tab.map((physique, i)=>(
    <option key={i} value={physique}>{physique}</option>
            ))}
      </select>
    </div>
  </div>
   <div className="row">
    <div >
                <select onChange={typeFunction} name="type" id="type" className="form-control type">
            <option value="">Type de carte</option>
            <option value="2">Normale</option>
            <option value="1">Team of the week</option>
      </select>
    </div>
    <div >
      <p className="message-ajout">{message}</p>
        <button className="valider">Valider</button>
    </div>

  </div>
</form>
        </div>
    )
}

export default NouveauJoueur;
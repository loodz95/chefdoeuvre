import { useState } from "react"
import "./ConnexionButton.css"

export interface ButtonProps{
    buttonProps: (value:boolean)=>void
}

const ConnexionButton =(props:ButtonProps)=>{
const [isClicked, setIsClicked]= useState<boolean>(false)

const clickFunction =(e:React.MouseEvent<HTMLButtonElement>)=>{
    setIsClicked(true)
    props.buttonProps(isClicked)
}

    return(
        <div>
            <button className = "connexionButton" onClick={clickFunction}>connexion</button>
            
        </div>
    )
}
export default ConnexionButton;
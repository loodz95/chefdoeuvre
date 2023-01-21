import "./Header.css"
import ConnexionButton from "./ConnexionButton";
import SuscribeButton from "./SuscribeButton";
import { VscAccount} from "react-icons/vsc";
import MediaQuery from "react-responsive";
import { useState } from "react";

const Header =()=>{
    const isConnected = true;
    const [isClicked, setIsClicked]= useState<boolean>()

const buttonProps =(e:boolean)=>{
setIsClicked(true)
console.log(isClicked)
alert("bien cliqué")
}

return(
<div className="header">
    {(isConnected &&(
<div className="buttonGroup">
    <div className="suscribeButton">
       
<SuscribeButton/>
</div>
<div >
<ConnexionButton buttonProps ={buttonProps}/>
</div>
</div>
 ))||(

<div className="profil"> 
<MediaQuery maxWidth={1224}> <VscAccount className="mobile" style={{marginLeft:"50%", marginTop:5,  fontSize:30}}/></MediaQuery>
 <MediaQuery minWidth={1224}>
     <p className="moncompte">mon compte</p> 
    <VscAccount style={{ fontSize:40, marginTop:5}}/>
    </MediaQuery>
</div>
 )}
</div>
    )
}

export default Header;
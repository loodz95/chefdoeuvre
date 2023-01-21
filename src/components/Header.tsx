import "./Header.css"
import ConnexionButton from "./ConnexionButton";
import SuscribeButton from "./SuscribeButton";
import { VscAccount} from "react-icons/vsc";

const Header =()=>{
    const isConnected = false;

return(
<div className="header">
    {(isConnected &&(
<div className="buttonGroup">
    <div className="suscribeButton">
       
<SuscribeButton/>
</div>
<div >
<ConnexionButton/>
</div>

</div>
 ))||(

 <VscAccount style={{width:2900, height:40, marginTop:7}}    />

 )}
</div>
    )
}

export default Header;
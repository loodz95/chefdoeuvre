import "./Header.css"
import ConnexionButton from "./ConnexionButton";
import SuscribeButton from "./SuscribeButton";

const Header =()=>{

return(
<div className="header">
<div className="buttonGroup">
    <div className="suscribeButton">
<SuscribeButton/>
</div>
<div >
<ConnexionButton/>
</div>
</div>
</div>
    )
}

export default Header;
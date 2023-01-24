import Bann from "../components/Bann";
import "./ActusFifa.css"

const ActusFifa =()=>{

    const message= "Toutes les actualités et mises à jours Fifa sont centralisés ici"
        
    
    return(
        <div className="actufifa">
   <Bann banValue={message}/>
        </div>
    )
}
export default ActusFifa;
import { TiMediaPlayReverse } from "react-icons/ti";
import "./CarteFut.css";




export interface CarteProps{
 note: number;
 position: string ;
 nom: string
}




const CarteFut=( props: CarteProps)=>{
  return(
    <div className="fut-player-card-team-perso">
      <div className="player-rating-team">
        <span>{props.note}</span>
      </div>
      <div className="player-position-team">
        <span>{props.position}</span>
      </div>
      <div className="player-picture-team">
        {/* image photo du joueur */}
      </div>
      <div className="player-info-team">
        <div className="player-name-team">
          <span>{props.nom}</span>
        </div>
        <div className="player-features-team">
          <div className="player-features-col-team">
          </div>
        </div>
      </div>
    </div>   
  )
}

export default CarteFut;
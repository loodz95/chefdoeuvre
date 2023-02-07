import axios from "axios"
import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { Item } from "./ActusFifa"
import { Players } from "./RechercheDeJoueurs"
import "./CarteParId.css"

const CarteParId=()=>{

const {TokenExpirationFunction, tokenExpired, UpdateToken,savedToken} = useContext(AuthContext)
const [Itemtab, setItemTab] =useState<Players>()
const {id} = useParams()

   useEffect(()=>{ 
        TokenExpirationFunction(savedToken)
        console.log("token expiration", tokenExpired)
console.log("Mon token",savedToken)

  axios.get(`http://localhost:8080/api/players/${id}`)
  .then((res)=>{
    console.log("la réponse",res.data)
    setItemTab(res.data)
    console.log(Itemtab)
  }).catch((err)=>{
    console.log("something wrent wrong", err)
  })
},[]) 






    return(
        <div className="carteparid">
<div className="fut-player-cardId" >
  
	<div className="player-card-topId">
		<div className="player-master-infoId">
			<div className="player-ratingId">
				<span>{Itemtab?.rate}</span>
			</div>
			<div className="player-positionId">
				<span>{Itemtab?.position}</span>
			</div>
			<div className="player-nationId">
				{/* image du drapeau du pays du joueur à mettre ici */}
			</div>
			<div className="player-clubId">
				{/* image drapeau club */}
			</div>
		</div>
		<div className="player-pictureId">
		{/* image photo du joueur */}
		
		</div>
	</div>
	<div className="player-card-bottomId">
		<div className="player-infoId">
			
			<div className="player-nameId">
				<span>{Itemtab?.lastName}</span>
			</div>
			
			<div className="player-featuresId">
				<div className="player-features-colId">
					<span>
						<div className="player-feature-valueId">{Itemtab?.speed}</div>
						<div className="player-feature-titleId">VIT</div>
					</span>
					<span>
						<div className="player-feature-valueId">{Itemtab?.shots}</div>
						<div className="player-feature-titleId">TIR</div>
					</span>
					<span>
						<div className="player-feature-valueId">{Itemtab?.pass}</div>
						<div className="player-feature-titleId">PAS</div>
					</span>
				</div>
				<div className="player-features-colId">
					<span>
						<div className="player-feature-valueId">{Itemtab?.dribbles}</div>
						<div className="player-feature-titleId">DRI</div>
					</span>
					<span>
						<div className="player-feature-valueId">{Itemtab?.defence}</div>
						<div className="player-feature-titleId">DEF</div>
					</span>
					<span>
						<div className="player-feature-valueId">{Itemtab?.power}</div>
						<div className="player-feature-titleId">PHY</div>
					</span>
				</div>
			</div>
		</div>
	</div>
 
</div>
        </div>
    )
}
export default CarteParId;
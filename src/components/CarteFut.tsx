import "./CarteFut.css"

export interface CarteProps{
 note: number;
 position: string ;
 nom: string

}


const CarteFut=( props: CarteProps)=>{




    return(
        <div className="globalcard">
<div className="fut-player-card-team">
              
                <div className="player-card-top-team">
                  <div className="player-master-info-team">
                    <div className="player-rating-team">
                      <span>{props.note}</span>
                    </div>
                    <div className="player-position-team">
                      <span>{props.position}</span>
                    </div>
                    <div className="player-nation-team">
                      {/* image du drapeau du pays du joueur à mettre ici */}
                    </div>
                    <div className="player-club-team">
                      {/* image drapeau club */}
                    </div>
                  </div>
                  <div className="player-picture-team">
                    {/* image photo du joueur */}

                  </div>
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
        </div>
    )
}

export default CarteFut;
import "./Bann.css"

export interface BannièreProps{
  banValue: string
}

const Bann =(props: BannièreProps)=>{
    return(
        <div>
<div className="banner">
  <span className="fontStyle">{props.banValue} </span>
  <span className="fontStyle">{props.banValue}  </span>
</div>
        </div>
    )
}

export default Bann;
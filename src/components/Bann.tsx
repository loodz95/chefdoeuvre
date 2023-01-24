import "./Bann.css"

export interface Props{
  banValue: string
}

const Bann =(props: Props)=>{
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
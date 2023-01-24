import Bann from "../components/Bann";
import "./JoueursDeLaSemaine.css"

const JoueursDeLaSemaine = () => {
  const message = "Voici la Team Of The Week !"
  return (
  <div className="joueursemaine">
<Bann  banValue={message}/>
  </div>
  );
};
export default JoueursDeLaSemaine;
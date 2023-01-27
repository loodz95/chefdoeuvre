import { useState } from "react";
import Bann from "../components/Bann";
import "./JoueursDeLaSemaine.css"

const JoueursDeLaSemaine = () => {
    const [dropdownState, setDropdownState] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };
  const handleSetDropdownValue = (value:string) => {
    setDropdownValue(value);
    setDropdownState(!dropdownState);
  };
  const message = "Voici la Team Of The Week !"
  return (
  <div className="joueursemaine">
<Bann  banValue={message}/>

  </div>
  );
};
export default JoueursDeLaSemaine;
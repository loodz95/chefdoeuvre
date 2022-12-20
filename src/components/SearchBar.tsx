
import React, {MouseEventHandler, useState} from "react";
import "./SearchBar.css"

interface searchBarProps{
  searchProps : (value:string) =>void
}

const SearchBar =(props : searchBarProps) => {
let value : string;
const [search, setSearch] = useState<string>();


const handleChange = (e :React.ChangeEvent<HTMLInputElement>)=>{
  setSearch(e.currentTarget.value)
}
 
const handleClick = () => {
  
  if(search){
  props.searchProps(search)
  console.log(props.searchProps);
  }
  
};
    return (
      <div>
   
        <form className="myFont d-flex inputSize fixed-top" role="search">
          <input
            className="form-control me-2 myFont inputSize"
            type="search"
            placeholder="Recherche un joueur"
            onChange={handleChange}
          />
          <button className="btn btn-outline-success myFont" type="submit" onClick={handleClick}  >Go!
          </button>
        </form>
      </div>
    );
}
export default SearchBar;
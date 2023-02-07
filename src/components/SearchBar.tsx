
import React, {MouseEventHandler, useState} from "react";
import "./SearchBar.css"

interface SearchBarProps{
  searchProps : (value:string) =>void
}

const SearchBar =(props: SearchBarProps) => {
  
  const [searchState, setSearchState]= useState<string>()

  const searchChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log("value search bar",e.currentTarget.value)
props.searchProps(e.currentTarget.value)
  }



    return (
      <div>
   
        <form className="myFont " role="search">
          <input className="inputsize" onChange={searchChange}
            type="search"
            placeholder="Recherche un joueur"
      
          />
          <button className="btn btn-outline-success myFont" type="submit"   >Go!
          </button>
        </form>
      </div>
    );
}
export default SearchBar;
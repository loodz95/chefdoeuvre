
import React, {MouseEventHandler, useState} from "react";
import "./SearchBar.css"

interface searchBarProps{
  searchProps : (value:string) =>void
}

const SearchBar =() => {




    return (
      <div>
   
        <form className="myFont d-flex inputSize fixed-top" role="search">
          <input
            className="form-control me-2 myFont inputSize"
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
import "./SearchBar.css"

const SearchBar =() => {
    return (
      <div>
        <form className="myFont d-flex inputSize" role="search">
          <input
            className="form-control me-2 myFont inputSize"
            type="search"
            placeholder="Recherche un joueur"
            aria-label="Search"
          />
          <button className="btn btn-outline-success myFont" type="submit">
            Search
          </button>
        </form>
      </div>
    );
}
export default SearchBar;
import React, { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
function Header() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="headerLogo">IMDB API</div>
      </Link>
      <div className="headerSearch">
        <input
          type="text"
          onChange={handleChange}
          value={search}
          placeholder="Please Enter 3 letters"
        />

        <Link to={`/search/${search}`}>
          <button
            disabled={!(search.length > 2)}
            onClick={() => {
              setSearch("");
            }}
          >
            Search
          </button>
        </Link>
      </div>
      <div className="headerDes">MovieFindWebApp</div>
    </div>
  );
}
export default Header;

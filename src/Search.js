import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./components/MovieCard";

function Search() {
  const { search } = useParams();
  const [searchList, setSearchList] = useState([]);
  const getData = async () => {
    console.log("search", search);
    let res = await fetch(
      `http://www.omdbapi.com/?s=${search}&apikey=76feb8e9&page=1`,
      { mode: "cors" }
    );
    let result = await res.json();
    setSearchList(result.Search);
    console.log("newArray", result.Search);
  };
  useEffect(() => {
    getData();
  }, [search]);
  console.log("searchList", searchList);
  return (
    <div>
      Search Page : {search}
      {searchList ? (
        searchList.map((item) => {
          return <MovieCard movie={item} showAdd />;
        })
      ) : (
        <div>Movie not found</div>
      )}
    </div>
  );
}

export default Search;

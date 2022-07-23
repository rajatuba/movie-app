import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function MovieCard(props) {
  const [add, setAdd] = useState(false);
  const [fav, setFav] = useState();
  const { movie } = props;
  useEffect(() => {
    setFav(props.movie.fav);
  });
  const handleAddToList = () => {
    let movieListStorage = JSON.parse(localStorage.getItem("movieList"));
    let index = movieListStorage.findIndex(
      (item) => item.imdbID === movie.imdbID
    );
    console.log(index);
    if (index === -1) {
      movie.fav = false;

      console.log("movie list", movieListStorage);
      localStorage.setItem(
        "movieList",
        JSON.stringify([...movieListStorage, movie])
      );
    }
    setAdd(true);
  };
  const handleRemoveFromList = () => {
    setAdd(false);
    let movieListStorage = JSON.parse(localStorage.getItem("movieList"));
    console.log("movie list", movieListStorage);

    localStorage.setItem(
      "movieList",
      JSON.stringify([
        ...movieListStorage.filter((item) => item.imdbID !== movie.imdbID),
      ])
    );
  };
  const handleFav = () => {
    props.setFavValue(movie.imdbID);
    setFav(!fav);
  };

  return (
    <div className="movieContainer">
      <img src={movie.Poster} className="movieImage" />
      <Link to={`/detail/${movie.imdbID}`} className="movieDetail">
        <div className="movieName">{movie.Title}</div>
        <div className="movieYear">{movie.Year}</div>
      </Link>

      <div className="movieButton">
        {props.showAdd ? (
          add ? (
            <button className="addToListButton" onClick={handleRemoveFromList}>
              Remove from List
            </button>
          ) : (
            <button className="addToListButton" onClick={handleAddToList}>
              Add to list
            </button>
          )
        ) : null}
        {props.showFav ? (
          <button className="addToFavouriteButton" onClick={handleFav}>
            {fav ? "Remove From Favourites" : "Add To Favourites"}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default MovieCard;

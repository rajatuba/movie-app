import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import { Link } from "react-router-dom";

function Home() {
  const [movieList, setMovieList] = useState([]);
  const [buttonSelect, setButtonSelect] = useState(true);

  /* Local storage data */
  const getLocalStorageData = () => {
    console.log("localStorage");
    if (localStorage.getItem("movieList")) {
      setMovieList(JSON.parse(localStorage.getItem("movieList")));
    } else {
      localStorage.setItem("movieList", JSON.stringify([]));
    }
  };
  useEffect(() => {
    getLocalStorageData();
  }, []);

  /* fav movie list */
  const setFavValue = (id) => {
    console.log("index", id);
    let index = movieList.findIndex((item) => item.imdbID === id);
    console.log("id", index);
    let newMovieList = [...movieList];
    newMovieList[index].fav = !newMovieList[index].fav;
    setMovieList([...newMovieList]);
    localStorage.setItem("movieList", JSON.stringify([...newMovieList]));
  };

  /* All Fav button switch */
  const changeButtonSelectAll = () => {
    setButtonSelect(true);
  };
  const changeButtonSelectFav = () => {
    setButtonSelect(false);
  };
  const style = { backgroundColor: "orange", color: "white" };

  /* List to show on homepage */
  let finalList = buttonSelect
    ? [...movieList]
    : [...movieList.filter((movie) => movie.fav)];
  console.log("chenge list", finalList);

  return (
    <div>
      <div className="test">
        <button
          style={buttonSelect ? style : null}
          className="homeButton"
          onClick={changeButtonSelectAll}
        >
          Movie List
        </button>
        <button
          style={!buttonSelect ? style : null}
          className="homeButton"
          onClick={changeButtonSelectFav}
        >
          Favourite List
        </button>
      </div>
      <div>
        Display Container
        {finalList
          ? finalList.map((movie, index) => {
              return (
                <MovieCard
                  movie={movie}
                  showFav
                  setFavValue={setFavValue}
                  index={index}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
export default Home;

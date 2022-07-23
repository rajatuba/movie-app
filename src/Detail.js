import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movieData, setData] = useState({});
  let { id } = useParams();
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=76feb8e9&i=${id}`, { mode: "cors" })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setData(result);
      });
  }, [id]);
  console.log("movieData", movieData);
  return (
    <div>
      <img src={movieData.Poster}></img>
      <div>{movieData.Title}</div>
      <div>{movieData.Actors}</div>
      <div>{movieData.Plot}</div>
      <div>{movieData.Released}</div>
      <div>{movieData.Genre}</div>
      <div>{movieData.imdbRating}</div>
    </div>
  );
}

export default Detail;

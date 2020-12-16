import React from "react";
import "./MovieList.css";

const MovieList = ({ movies, addRemoveFavourites, favouriteMoviesComp }) => {
  const FavouriteMoviesComp = favouriteMoviesComp;
  return (
    <>
      {movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movie"></img>
          <div
            className="overlay d-flex align-items-center justify-content-center"
            onClick={() => addRemoveFavourites(movie)}
          >
            <FavouriteMoviesComp />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;

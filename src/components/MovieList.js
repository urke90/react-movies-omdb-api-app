import React from "react";

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </>
  );
};

export default MovieList;

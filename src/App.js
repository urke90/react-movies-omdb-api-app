import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import MovieList from "./components/MovieList/MovieList";
import MovieListHeading from "./components/MoviesHeader/MovieListHeading";
import Search from "./components/Search";
import AddFavourites from "./components/FavouriteMovies/addFavourite";
import RemoveFavourite from "./components/FavouriteMovies/removeFavourites";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavouriteMovies] = useState([]);

  const addFavouriteMovieHandler = (movie) => {
    setFavouriteMovies((prevState) => [...prevState, movie]);
  };

  const removeFavouriteMovieHandler = (movie) => {
    setFavouriteMovies((prevMovies) =>
      prevMovies.filter((prevMovie) => prevMovie.imdbID !== movie.imdbID)
    );
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
      const response = await axios.get(url);
      console.log(response.data);
      setMovies(response.data.Search);
    };

    fetchMovies();
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="OMBD Movies!" />
        <Search value={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        {movies && (
          <MovieList
            addRemoveFavourites={addFavouriteMovieHandler}
            favouriteMoviesComp={AddFavourites}
            movies={movies}
          />
        )}
      </div>
      <MovieListHeading heading="Favourite Movies!" />
      <div className="row">
        {favoriteMovies && (
          <MovieList
            addRemoveFavourites={removeFavouriteMovieHandler}
            favouriteMoviesComp={RemoveFavourite}
            movies={favoriteMovies}
          />
        )}
      </div>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import Search from "./components/Search";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

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
      <div className="row">{movies && <MovieList movies={movies} />}</div>
    </div>
  );
};

export default App;

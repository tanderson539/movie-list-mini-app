import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import AppNavbar from "./components/AppNavbar";
import { useState, useEffect } from "react";
import AddMoviePage from "./pages/AddMoviePage";
import MoviesToWatchPage from "./pages/MoviesToWatchPage";
import WatchedMovies from "./pages/WatchedMovies";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [moviesToWatch, setMoviesToWatch] = useState([]);
  const [searchFailed, setSearchFailed] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(()=>{
    console.log(watchedMovies, moviesToWatch)
  }, [watchedMovies, moviesToWatch])

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/search?term=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) {
          setSearchedMovies([]);
          setSearchFailed(true);
          return navigate("/search");
        } else {
          console.log("search succeeded");
          setSearchedMovies(data);
          setSearchFailed(false);
          return navigate("/search");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMovies(data));
  };

  const handleRemove = (collection) => {
    return function (id) {
      collection.filter((item) => item.id !== id);
    };
  };

  const handleListAdd = (setFunc, list) => {
    return function (movie) {
      setFunc([...list, movie])
    };
  };

  return (
    <div className="App">
      <AppNavbar searchTerm={setSearchTerm} handleSubmit={handleSubmit} />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              movies={movies}
              deleteMovie={handleDelete}
              setMoviesToWatch={handleListAdd(setMoviesToWatch, moviesToWatch)}
              setWatchedMovies={handleListAdd(setWatchedMovies, watchedMovies)}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              searchedMovies={searchedMovies}
              searchFailed={searchFailed}
              deleteMovie={handleDelete}
            />
          }
        />
        <Route path="/add" element={<AddMoviePage setMovies={setMovies} />} />
        <Route
          path="/towatch"
          element={
            <MoviesToWatchPage
              moviesToWatch={moviesToWatch}
              deleteMovie={handleRemove(moviesToWatch)}
            />
          }
        />
        <Route
          path="/watched"
          element={
            <WatchedMovies
              watchedMovies={watchedMovies}
              deleteMovie={handleRemove(watchedMovies)}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

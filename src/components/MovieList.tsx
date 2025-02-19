import MovieCard from "./MovieCard";
import { useMovieContext } from "../context/MovieContext";

const MovieList = () => {
  const { movies, selectMovie } = useMovieContext();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {movies.map((movie) => (
        <MovieCard
          movie={movie}
          key={movie.imdbID}
          onClick={() => selectMovie(movie.imdbID)}
        ></MovieCard>
      ))}
    </div>
  );
};

export default MovieList;
